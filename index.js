let topRating = null;
let LastImages = null;
let isStarCheck = false;
const viewportWidth = window.innerWidth;
const breakPoint = 960;
const isDesktop = viewportWidth >= breakPoint;

const refs = {
  fuaturedImagesList: document.querySelector('#fuaturedImages'),
  lastImages: document.querySelector('#lastImages'),
  arrowBack: document.querySelector('.arrow__back'),
  arrowNext: document.querySelector('.arrow__next'),

}

refs.arrowBack.addEventListener("click", onClickBack);
refs.arrowNext.addEventListener("click", onClickNext);

function onClickBack() {
  alert(`back clicked;
  ...Функціонал каруселі реалізовувати не потрібно.(© -Тестове завдання Frontend-)
  `)
}

function onClickNext() {
  alert(`next clicked;
  ...Функціонал каруселі реалізовувати не потрібно.(© -Тестове завдання Frontend-)
  `)
}

function getAllStarsSelectors() {
  refs.star = document.querySelectorAll('.star');
  [...refs.star].map((el) => {
    refs.svgNode = document.getElementById(`${el.dataset.id}`);
    refs.svgNode.addEventListener("click", onClickStar)
  })
}

function onClickStar(e) {
  isStarCheck = !isStarCheck;

  if (isStarCheck) {
    let starNode = document.getElementById(e.target.dataset.id);
    if (starNode) {
      starNode.innerHTML = `<use href="./icons/sprite.svg#icon-star-regular"/>`;
    }
  }

  if (!isStarCheck) {
    let starNode = document.getElementById(e.target.dataset.id);
    if (starNode) {
      starNode.innerHTML = `<use href="./icons/sprite.svg#icon-star-solid"/>`;
    }
  }
}

function renderFuaturedImages(data) {

  if (isDesktop) {

    for (let i = 0; i < data.length; i += 1) {

      if (i % 2 === 0) {

        refs.fuaturedImagesList.insertAdjacentHTML('beforeend',
          ` <li><img src=${data[i].image} alt=${data[i].title}/>
      <div><p>${data[i].title}<br/>${data[i].tags.map((tag) => `<span> #${tag}</span>`).join("")}</p></div>
      <svg class="star" id=${data[i].id} data-id=${data[i].id}>
      <use href="./icons/sprite.svg#icon-star-regular"/>
     </svg>
     </li>`)

        getAllStarsSelectors();
      }

      else {
        refs.fuaturedImagesList.insertAdjacentHTML('beforeend',
          ` <li><img src=${data[i].image} alt=${data[i].title}/>
     <div><p>${data[i].title}<br/>${data[i].tags.map((tag) => `<span> #${tag}</span>`).join("")}</p></div>

     </li>`)
      }

    }
  }

  else {
    refs.fuaturedImagesList.insertAdjacentHTML('beforeend', data.map((image) =>
      ` <li><img src=${image.image} alt=${image.title}/>
     <div><p>${image.title}<br/>${image.tags.map((tag) => `<span> #${tag}</span>`).join("")}</p></div>
     </li>`).join(""));
  }

}

function renderLastImages(data) {

  if (isDesktop) {
    for (let i = 0; i < data.length; i += 1) {
      if (i % 2 === 0) {
        refs.lastImages.insertAdjacentHTML('beforeend',
          ` <li><img src=${data[i].image} alt=${data[i].title}/>
         <div>
         <p>${data[i].title}<br/>${data[i].tags.map((tag) => `<span> #${tag}</span>`).join("")}</p></div>
         </li>`)
      } else {
        refs.lastImages.insertAdjacentHTML('beforeend',
          ` <li><img src=${data[i].image} alt=${data[i].title}/>
       <div>
       <p>${data[i].title}<br/>${data[i].tags.map((tag) => `<span> #${tag}</span>`).join("")}</p></div>
       <svg class="star" id=${data[i].id} data-id=${data[i].id}>
       <use href="./icons/sprite.svg#icon-star-regular"/>
       </svg>
       </li>`)
      }
    }
    refs.lastImages.insertAdjacentHTML('beforeend', `<li><aside><p>Banner</p></aside></li></li>`)
    getAllStarsSelectors();

  } else {
    refs.lastImages.insertAdjacentHTML('beforeend', data.map((image) =>
      ` <li><img src=${image.image} alt=${image.title}/>
    <div>
    <p>${image.title}<br/>${image.tags.map((tag) => `<span> #${tag}</span>`).join("")}</p></div>
    </li>`).join(""));
  }

}

const fetchData = async () => {
  // const localStart = '/';
  const gitHubStart = 'https://anton-cloud.github.io/TEST_for_GRODAS_vanilla/'

  const req = await fetch(`${gitHubStart}data.json`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  });

  return req.json();
}

fetchData().then((result) => {

  if (isDesktop) {
    topRating = [...result].sort(
      (firstImage, secondImage) => firstImage.rating - secondImage.rating
    ).slice(0, 3);
  }

  if (!isDesktop) {

    topRating = [...result].sort(
      (firstImage, secondImage) => firstImage.rating - secondImage.rating
    ).slice(0, 5);
  }

  lastImages = [...result].sort(
    (firstImage, secondImage) => firstImage.age - secondImage.age
  ).slice(0, 2)

  renderFuaturedImages(topRating),
    renderLastImages(lastImages)


}).catch((err) => console.log(err));


