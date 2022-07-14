//1. Визначити загальну кількість елементів у DOM-дереві.

const tagsArray = document.getElementsByTagName('*');
console.group("1. Визначити загальну кількість елементів у DOM-дереві.");
console.log(`Total number of tags in the DOM: ${tagsArray.length}`);
console.groupEnd()

//2. Згрупувати елементи за назвою тегу, визначити кількість елементів для кожного тегу.
const nodeNameArr = [];
const nodeNameAmountArr = []
const uniqueChars = [];
const objElements = [];

[...tagsArray].forEach((tag) => {
    nodeNameArr.push(tag.nodeName)
})

for (i of nodeNameArr) {

    if (uniqueChars.indexOf(i) == -1) {
        uniqueChars.push(i);
    }
}

for (x of uniqueChars) {
    let letterAccumulator = 0;
    for (i of nodeNameArr) {
        if (i == x) { letterAccumulator++; }
    }

    nodeNameAmountArr.push({ tag: x, amountElements: letterAccumulator, tagWordsLength: x.length })
}

console.group("2. Згрупувати елементи за назвою тегу, визначити кількість елементів для кожного тегу.");
console.table([...nodeNameAmountArr]);
console.groupEnd();

//3. Згрупувати елементи за кількістю символів у назві тегу, визначити кількість елементів.
const objAscendingOrder = [];
let total = 0;

nodeNameAmountArr.forEach((item) => total += item.amountElements)

console.group("3. Згрупувати елементи за кількістю символів у назві тегу, визначити кількість елементів.");
console.table([...nodeNameAmountArr].sort((a, b) => a.tag.length - b.tag.length));
console.log(`totalElements: ${total}`);
console.groupEnd()
