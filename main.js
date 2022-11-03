//---NO PUDE RESOLVERLO(ME DA 0)
//let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function addNumbersPar(arr) {

//     let suma = 1
//     for (let i = 1; i > arr.length; i++) {
//         if (arr[i] % 2) {

//             suma += arr[i]
//         }
//     }
//     return suma;
// }
// addNumbersPar(num)
// console.log(addNumbersPar(num));

//--- ejercicio 2

// let num = [1, 2, 3, 4]
// function number(arr) {
//     lastElement = arr.pop()
//     firtsElement = arr.shift()
//     secondElement = arr.slice(0, 1)
//     thirtElmenet = arr.slice(1, 2)
// }
// number(num)
// console.log(lastElement);
// console.log(firtsElement);
// console.log(secondElement);
// console.log(thirtElmenet);



//--- ejercicio 3

// array1 = [1, 0, 2, 3, 4];
// array2 = [3, 5, 6, 7, 8, 13];
// function sumPairs(firstArr, secondArr) {

//     let resultArr = []

//     let maxLength = 0

//     if (firstArr.length > secondArr.length) {
//         maxLength = firstArr.length
//     } else {
//         maxLength = secondArr.length
//     }

//     for (let i = 0; i < maxLength; i++) {

//         let num1 = 0
//         let num2 = 0

//         if (firstArr[i]) {
//             num1 = firstArr[i]
//         }

//         if (secondArr[i]) {
//             num2 = secondArr[i]
//         }

//         let pairSum = num1 + num2
//         resultArr.push(pairSum)

//     }

//     return resultArr
// }

// sumPairs(array1, array2)
// console.log(sumPairs([1, 0, 2, 3, 4], [3, 5, 6, 7, 8, 13]));

//---- ejercicio 4
//NO HE PODIDO RESOLVER MAS.. 

const array = ["apple", "orange", "banana", "mango", "watermelon", "grape", "peach"]
function wordForPosition(arr, num) {
    if (num = 1) {
        return arr
    } else if (num = 2) {
        return arr.indexof(1, 3, 5)
    } else if (num = 3) {
        return arr['banana', 'grape']
    } else if (num = 4) {
        return arr['mango']
    }

}
wordForPosition(3)
console.log(wordForPosition(array, 3));
