// var i = 0;
// for(i=1;i<=10;i++){
//   console.log(i);
// }
//
// var b="again";
//
// function myFunc(){
//   let a = "hello";
//   console.log(i);
// }
//
// myFunc();
// let a = "hahaha";
//
// console.log(b);
// console.log(a);
// //
// var age = prompt("Please enter your age");
// if(age % Math.sqrt(age) === 0){
//    console.log("Perfect sqaure!");
// }
// else {
//   console.log("Not Perfect sqaure!");
// }

// var pass = prompt("give your pass");
// while(pass == "hahaha"){
//   prompt("give password");
// }
// alert("Login Successfull");

// var num = prompt("Please enter A number between 1 to 5");
// if(num >=1 && num <=5){
//   alert("You Entered Number " + num );
// }
// else if(num<1){
//   alert("Number is less than 1");
// }
// else if (num>5) {
//   alert("Number is greater than 5")
// }
//
// var number = prompt("Please enter a number");
// isEven(number);
// function isEven(number){
//   if(number%2==0)
//   {
//     alert("Number is Even");
//   }
//   else{
//     alert("Number is Odd");
//   }
// }
// var fact = 0;
// factorialize(number);
// function factorialize(number) {
//   fact=number * factorialize(num - 1);
//   alert("factorial of "+number+" is "+fact);
// }

//
//
// function factorialize(num) {
//   if (num < 0)
//         return -1;
//   else if (num == 0)
//       return 1;
//   else {
//       return (num * factorialize(num - 1));
//   }
// }
// alert(factorialize(number));
// console.log(factorialize(number));
// //factorialize(5);
//
var array = [];
var entry;
entrypoint();

function entrypoint(){
entry = prompt("1. Add\n2. List\n3. Delete\n4. Quit");

switch (entry) {
  case "1":
    add();
    break;
  case "2": list();
  break;
  case "3": delindex();
  break;
  default:
  break;

}
}

function add()
{
  var z = prompt("Enter the value");
    array.push(z);
    entrypoint();
}

function list(){
  console.log(array);
  entrypoint();
}

function delindex(){
  var del = prompt("Enter the index value of the item to be seleted");
  array.splice(del,1);
  entrypoint();
}
