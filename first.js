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

{
    let n = prompt("Enter the value of n: ");
    let number;
    let sum = 0;
    for(number=1; number<=n; number++){
        sum += number;
    }
    console.log("sum is: ", sum);
}