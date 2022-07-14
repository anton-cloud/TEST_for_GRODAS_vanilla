# Тестове завдання Frontend


**Використовуйте:** 
	надані зображення, умовну відповідь бекенду на fetch(‘__in/data.json’), макети для різних ширин вікна браузеру 280.png 680.png 960.png із https://dev.grodas.com.ua/2021-05-28/front.zip 

##	1. Підготувати адаптивну верстку сторінки для умовного сайту-каталогу зображень. 
Після завантаження сторінки в браузері js звертається до серверу, отримує відповідь бекенду на основі якої і будується все відображення.
Featured містить 5 елементів з найкращим рейтингом, 
Last містить 2 самих нових елементів.
Функціонал каруселі реалізовувати не потрібно.

## 2. Підготувати скрипт з наступним функціоналом:
1. Визначити загальну кількість елементів у DOM-дереві.
2. Згрупувати елементи за назвою тегу, визначити кількість елементів для кожного тегу.
3. Згрупувати елементи за кількістю символів у назві тегу, визначити кількість елементів.
Отримані дані вивести у консоль.

## == Щоб запустити проект локально ==
```sh
git clone https://github.com/anton-cloud/TEST_for_GRODAS_vanilla.git
```
- файлы [index.js]:
```sh
const fetchData = async () => {
  // const localStart = '/';
  const gitHubStart = 'https://anton-cloud.github.io/TEST_for_GRODAS_vanilla/'

  const req = await fetch(`${gitHubStart}data.json`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  });
```
- замінити на:
```sh
const fetchData = async () => {
  const localStart = '/';
  // const gitHubStart = 'https://anton-cloud.github.io/TEST_for_GRODAS_vanilla/'

  const req = await fetch(`${localStart}data.json`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  });
```
- запустити проект локально (для VS CODE скористатися Live Server) 

