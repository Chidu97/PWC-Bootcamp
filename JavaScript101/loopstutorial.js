// for(let i = 0; i < 5; i++){
//     console.log(i);
// }

// for(let p = 4; p <= 8; p++){
//     console.log(p);
// }


// for (let m = 12; m <= 19; m++){
//     console.log(m);
// }

// for (let i = 1; i <= 10; i++){
//     console.log(`number is ${i}`);
// }

// let i = 0

// while(i <= 20){
//     console.log(`The number is ${i}`)
//     i++
// }

// const isX10Or20 = (x) => {

// if(x===10){
//     console.log('x is 10');
// } else if(x===20){
//     console.log('x is not 10');
// } else{
//     console.log('x is not 10 or 20');
// }
// }

// console.log(isX10Or20(23))


// let grades = (x) => {

// if(x >= 70){
//     console.log("Distinction");
// } else if(x >= 60 && x <= 69){
//     console.log("Very Good");
// } else if(x >= 50 && x <= 59){
//     console.log("Good");
// } else if(x >= 40 && x <= 49){
//     console.log("Pass");
// }else if(x <= 39){
//     console.log("Fail")
// }else{
//     console.log('They did not take the exam');
// }
// }

// grades(89);
// grades(48);
// grades(58);
// grades(66);
// grades(34);

// function addNum(a, b){
//    return a + b
// }

// console.log(addNum(2, 2));


// function subNum(a, b){
//     return a - b
// }

// console.log(subNum(3, 2));

function divisionNum(a, b){
    return a / b
}

console.log(divisionNum(16, 8));

function multiNum(a , b){
    return a * b
}


// const addNum = (a, b) => {
//     return a + b
// }

// console.log(addNum(3, 6));


const squared = (n) =>{
    return n * n
}

console.log(squared(4));

const numMode = (n) =>{
    return n%2

}
console.log(numMode(16))


for(let i=2; i <= 20; i+=2){
    console.log(i);
}

let sumWord = "Adamu"

console.log(sumWord.split())


// let sumArray = ["a","b","c","d","e","f"]
// console.log(sumArray.reverse());

// let randomString = "This is my string"


// function stringToArray(s){
//     return s.split('').reverse().join()
// }

// console.log(stringToArray(randomString));



const isPalindrome = (str) => {
    const newString = str.split('').reverse().join('')
    if(newString === str){
        return console.log("It is a palidrome");
    } else{
        return console.log("It is not a palindrome");
    }
}

isPalindrome("ADA")


let newNum = "15"

// console.log(parseInt(newNum))



function intPalindrome(num){
    let numToString = num.toString()
    return isPalindrome(numToString)
    
}

intPalindrome(11)
















