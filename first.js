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
//Array practice- find avg marks
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

//Array practice of offer-price
{
    prices = [250, 645, 300, 900, 50]

    let finalPrice ;
    for(let price of prices){
        finalPrice = price - (0.1 * price);
        console.log(finalPrice);
    }
}