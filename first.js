// {
//     let a = 5;
//     console.log(a);
// }

// {
//     let a = 15;
//     console.log(a);
// }

// const student = {
// 		fullName: "ABCD",
// 		isPass: true,
// 		marks: 80,
//         age: 20
// };
// console.log(student.age);
// console.log(student["age"]);

// const profile = {
//     username : "marium",
//     followerCount : 10,
//     followingCount : 150,
//     isFollow : true
// };
// {
//     let value = 4;
//     if (value % 2 === 0){
//         console.log("even");
//     }
//     else{
//         console.log("odd");
//     }
// }

// {
//     let age = 48;
//     let result = age > 18 ? "an adult" : "not an adult";
//     console.log(result);
// }

// {
//     let number = prompt("enter a number: ");
//     if(number % 5 == 0){
//         console.log(number," is a multiple 5");
//     }
//     else{
//         console.log(number, " is not a multiple of 5");
//     }
// }

//for loop
// {
//     let n = prompt("Enter the value of n: ");
//     let number;
//     let sum = 0;
//     for(number=1; number<=n; number++){
//         sum += number;
//     }
//     console.log("sum is: ", sum);
// }

//do-while loop
// {
//     let i = 5;
//     do{
//         console.log(i);
//         i++;
//     }while(i>=9);
// }

//for-of loop
// {
//     str = "java script"
//     let size = 0;
//     for(let i of str){
//         console.log("i = ", i);
//         size++;
//     }
    
//     console.log("size of string: ", size);
// }

//for-in loop
// {
//     let student = {
//         name : "marium",
//         age : 20,
//         salary : 5000,
//         cgpa : 3.88
//     };

//     for(let key in student){
//         console.log("key: ",key, "   value: ", student[key]);
//     }
// }

//even-odd
// {
//     for(let i=0; i<=100; i++){
//         if(i%2==0){
//             console.log(i);
//         }
//     } 
// }

//guess the correct number
// {
//     let actualNumber = 40;
//     let guessNumber = Number(prompt("guess the number! "));

//     if(actualNumber == guessNumber){
//         console.log("Congrats! You have entered the CORRECT number!");
//     } 
//     else if(actualNumber>guessNumber){
//         console.log("Whoops! Here's a hint. The number's bigger..");
//         guessNumber = Number(prompt("guess the number! "));
//     }
// 

//template literals ``
// {
//     let obj = {
    //     item : "chocolate",
    //     price : 50
    // };

    // let templateLiteralOutput = `The price of a ${item} is ${price}`;
    // console.log(templateLiteralOutput);

    //use template literals instead of manual console.log. 
    //template literal considers everything, including variables inside it,
    //as part of one string.
    // console.log("The price of", obj.item, " is", obj.price);

    //string interpolation

//     let tLiteral = `the sum is given ${1+4+5}`;
//     console.log(tLiteral);

//     //escape characters
//     console.log("This\nis\nJS\npractice");
//     console.log("This\tis\tJS\tpractice");
// }

//string methods
// {
//     let str = "hello world";
//     console.log(str.slice(3, 7));

//     let str1 = "hello";
//     let str2 = " world";

//     let res = str1.concat(str2);
//     console.log(res);
// }

//practice of string methods
// {
//     let str1 = "@";
//     let fullName = prompt("Enter your name(without any space): ");
//     let fullNameLength = fullName.length;

//     let str4 = str1.concat(fullName);

//     console.log(str4.concat(fullNameLength));
// }

//Arrays
// {
//     let arr = ["kim namjoon", "kim seokjin", "min yoongi",  "jung hoseok", "park jimin", "kim taehyung", "jeon jungkook"];

//     for(let i =0; i<arr.length; i++){
//         console.log(arr[i].toUpperCase());
//     }

//     let cities = ["dhaka", "seoul", "busan", "tokyo", "beijing"];

//     for(let city of cities){
//         console.log(city);
//     }
// }
//Array practice- find avg marks : using for-of
// {
//     studentNumber = prompt("Enter how many students: ");
//     let marks = [];

//     for(let i =0; i<studentNumber; i++){
//         marks[i] = Number(prompt("Enter mark: "));
//     }
//     let sum =0;
//     let avg = 0;
//     for(let mark of marks){
//         sum += mark;
//         avg = sum/studentNumber;
//     }

//     console.log(`Average marks of the students is ${avg}`);
// }

//Array practice of offer-price : using for-of
// {
//     prices = [250, 645, 300, 900, 50]

//     let finalPrice ;
//     for(let price of prices){
//         finalPrice = price - (0.1 * price);
//         console.log(`after offer price = ${finalPrice}`);
//     }
// }

//Array methods
// {
//     let numbers = [1, 2, 3, 4, 5, 6]
//     //change value
//     numbers.splice(1, 2, 303, 403);
//     console.log(numbers);

//     //add value
//     numbers.splice(3, 0, 503);
//     console.log(numbers);

//     //delete value
//     numbers.splice(2, 3);
//     console.log(numbers);
// }

//More array practice : with methods
// {
//     companies = ["bloomberg", "microsoft", "uber", "google", "ibm", "netflix"];
    
//     companies.shift();
    // console.log(`deleted ${deleted}`);
//     console.log(companies);

//     companies.splice(1, 1, "ola");
//     console.log(companies);

//     companies.push("amazon");
//     console.log(companies);
// }

//functions
// {
//     function addNumbers(num1, num2){
//         console.log(num1+num2);
//     }

//     addNumbers(3, 5);
// }

//Arrow functions
// const arrowSum = (a,b) => {
//     console.log(a+b);
//     };

//     arrowSum(3, 4);
//function practice - number of vowels in a string
// {
//     function numberOfVowels(str){
//         let count = 0;
//         // for(let i=0; i<str.length; i++){
//         //     if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u' || str[i] == 'A' || str[i] == 'E' || str[i] == 'I' || str[i] == 'O' || str[i] == 'U'){
//         //         count++;
//         //     }
//         // }    OR
//         for(let ch of str){
//             if("aeiouAEIOU".includes(ch)){
//                 count++;
//             }

//         }
//         return count;
//     }

//     let res = numberOfVowels("Hello from the other side");
//     console.log(res);
// }
// //arrow-function : same problem
// const arrowVowelCount = (str) => {
//     let count = 0;
//     for(let ch of str){
//         if("aieouAEIOU".includes(ch)){
//             count++;
//         }
//     }
//     return count;
// }

// let arrowRes = arrowVowelCount("Hello from the other side");
// console.log(arrowRes);

//forEach Loop
// let arr = [1, 2, 3, 4, 5];

// arr.forEach((val) => {
//     console.log(val * val);
// })

//map method
// let numbers = [34, 45, 60];

// newArray = numbers.map((val) => {
//     return (val * 3);
// })

// console.log(newArray);

//filter method
// {
//     let numbers = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9];

//     newArr = numbers.filter((val) => {
//         return val % 2 == 0;
//     })

//     console.log(newArr);
// }

//reduce method
// {
//     let numbers = [3, 5, 1, 8, 10, 57, 2];

//     const newArr = numbers.reduce((prev, curr) => {
//         return prev > curr ? prev : curr;
//     })

//     console.log(newArr);
// }
//practice : methods 
{
    let marks = [80, 99, 58, 92, 89, 90, 78];

    let newArr = marks.filter((val) => {
        return val>90;
    })

    console.log(newArr);
}