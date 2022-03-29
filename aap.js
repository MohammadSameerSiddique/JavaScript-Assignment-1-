
           //Chapter 1
// 1. Write a script to greet your website visitor using JS alert box.
           
// alert  ("WELCOM HOMIES");

// 2. Write a script to display following message on your web page

// alert ("Error! Please enter valid password");

// 3. Write a script to display following message on your web page

// alert ("Welcom Back....\nTo our Country!");

// 4. Write a script to display following messages in sequence:

// alert ("WELCOM TO JS LAND!");
// alert ("WELCOM TO JS !");

// 5. Generate the following message through browser’s developer console

// alert ("Hello! World This is JS")

// 7. Practice placement of <script></script> element in
//  following sections of your project in exercise 6:
//  a. Head
//  b. Body (before your page’s HTML
//  c. Body (inside your page’s HTML) 
//  d. Body (after your page’s HTML)

          //Chapter 2
  

// 1. Declare a variable called username. 

// var userName;

// 2. Declare a variable called myName & assign to 
// it a string that represents your Full Name.

// var myName = M.Sameer;

// 3. Write script to 
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message 
// c) Display the message in alert box. 

// var  message;
// var message = ("Hello World!")
// alert ("HELLO WORLD!");

// 4. Write a script to save student’s bio data in JS variables and 
// show the data in alert boxes 

// alert ("M.Sameer");
// alert ("18 years old");
// alert ("Qualified The Higher Education");
// alert ("THANKS!");

// 5. Write a script to display the following alert using one JS variable:

// alert ("PIZZA\nPIZZ\nPIZ\nPI\nP");

// 6. Declare a variable called email and assign to it a 
// string that represents your Email Address(e.g. example@example.com). 
// Show the blow mentioned message in an alert box

// var email;
// alert("My Email Address example@example.com");

// 7. Declare a variable called book & give it the value 
// “A smarter way to learn JavaScript”. 
// Display the following message in an alert box.

// var book = ("A smarter way to learn JavaScript");
// alert("A smarter way to learn\nJavaScript!");

// 8. Write a script to display this in browser through JS

// document.write ("A smarter! way to learn JavaScript");

// 9. Store following string in a variable and show in 
// alert and browser through JS ▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬
  
// alert ("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");
           // Chapter6-8
/*
1. Write a program to take a number in a variable,
  do the required arithmetic to display the following result in your browser:           

console.log ("Result");
var a =+prompt ("Enter Your Number");
console.log ("The value of a is:" +" "+ a); 

++a;
console.log ("The value of ++a is :" +" "+ a);
console.log ("Now the value of a is :" +" "+ a);


console.log ("The value of a++ is :" +" "+ a++);
console.log ("Now the value of a is :" +" "+ a);


console.log ("The value of --a is :" +" "+ --a);
console.log ("Now the value of a is :" +" "+ a);


console.log ("The value of -- is :" +" "+ a--);
console.log ("Now the value of a is :" +" "+ a);
*/

/*
 2. What will be the output in variables a, b & result after 
  execution of the following script:
  var a = 2, b = 1;
  var result = --a - --b + ++b + b--;
  Explain the output at each stage:
  --a; --a - --b; --a - --b + ++b; --a - --b + ++b + b--;

var a = 2, b = 1;
var result = --a - --b + ++b + b--;
console.log (result);

--a;  (1) 
--a - --b; (0)
--a - --b + ++b; (1)
--a - --b + ++b + b--; (3)
*/

/*
3. Write a program that takes input a name from user & greet the user.
 
var one =prompt ("Wellcom");
console.log ("Wellcom :" +" "+ one);
*/

/*
5. Write a program to take input a number from user & display it’s multiplication
 table on your browser. If user does not enter a new number, 
 multiplication table of 5 should be displayed by default. 

var num =prompt ("Enter Number");
console.log ("5 * 1 = 5");
console.log ("5 * 2 = 10");
console.log ("5 * 3 = 15");
console.log ("5 * 4 = 20");
console.log ("5 * 5 = 25");
console.log ("5 * 6 = 30");
console.log ("5 * 7 = 35");
console.log ("5 * 8 = 40");
console.log ("5 * 9 = 45");
console.log ("5 * 10 = 50");
*/
           
           //  Chapter 9-10

/*
6. Write a program to take input the marks obtained in three subjects & total marks.
    Compute & show the resulting percentage on your page. 
    Take percentage & compute grade as per following table:

var sub1 =+prompt ("Enter English Marks");
var sub2 =+prompt ("Enter Urdu Marks");
var sub3 =+prompt ("Enter Math Marks");

var total =+prompt ("Enter Total Marks");
console.log("Your Total Marks is :" + " " + total);

var obt = sub1+sub2+sub3;
console.log("Your Obtained Marks is :" + " " + obt);

var per = (obt/total)*100;
console.log("Your Percentge is :" + " " + per);

if (per>=80 && per<=100){
    console.log("Your Grade is : A-One");
    console.log ("Remarks : Excellent ")
}
else if (per>=70 && per<80){
    console.log("Your Grade is : A");
    console.log("Remarks : Good");
}
else if (per>=60 && per<70){
    console.log("Your Grade is : B");
    console.log(" Remarks : You need to improve");

}
else if (per>=50 && per<60){
    console.log("Your Grade is :Fail");
    console.log("Remarks : Excellent Job");
}
else{
    console.log("Your Grade is Invalid");
}
*/

















/*
11. Write a program to create a calculator for +,-,*, / & % using if statements.
     Take the following input: a.
     First number b. Second number c.
     Operation (+, -, *, /, %) Compute & show the calculated result to user

var num1 =+prompt ("Enter First Number")
var num2 =+prompt ("Enter Second Number")
var op =prompt ("Operators")

if (op == "+"){
    console.log(num1+num2)
}
else if (op == "-"){
    console.log(num1-num2)
}
else if (op == "*"){
    console.log(num1*num2)
}
else if (op == "/"){
    console.log(num1/num2)
}
else if (op == "%"){
    console.log(num1%num2)
}
else{
    console.log("Invalid Number or Operator");
}
/*


            

            //Chapter 12-13

// 1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number,
//  uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122)


/*
2. Write a JavaScript program that accept two integers and display the larger.
   Also show if the two integers are equal.



var num1 =+prompt ("Enter Your First Number ")
var num2 =+prompt ("Enter Your Second Number ")
if (num1>num2){
    console.log(num1)
}
else if (num2>num1){
   console.log(num2)
}
else if (num2==num1){
    console.log("Your number are equal")
}
else{
    console.log("Invalid Number ")
} 
*/


/*
3. Write a program that takes input a number from user &
   state whether the number is positive, negative or zero

var num =+prompt ("Enter your number")
if (num>0){
console.log("Your number is positive:"+num)
}
else if (num<0){
    console.log("Your number is negative:"+num)
}
else if (num==0){
    console.log("Your number is zero:"+num)
}
else{
    console.log("This is not a number")
}
*/


/*
4. Write a program that takes a character
 (i.e. string of length 1) and returns true if it is a vowel, false otherwise

var alp=prompt ("Enter Your Word ")
if (alp=="a"){
    console.log("This is a vowel : "+""+alp);
}
else if (alp=="e"){
    console.log("This is a vowel : "+""+alp);
}
else if (alp=="i"){
    console.log("This is a vowel : "+""+alp);
}
else if (alp=="o"){
    console.log("This is a vowel : "+""+alp);
}
else if (alp=="u"){
    console.log("This is a vowel : "+""+alp);
}
else {
    console.log("This is not a vowel" );
}
*/


/*
5. Write a program that 
     a. Store correct password in a JS variable.
     b. Asks user to enter his/her password 
     c.  Validate the two passwords:
     i. Check if user has entered password.
       If not, then give message “ Please enter your password”
     ii. Check if both passwords are same. If they are same, show message “Correct! 
      The password you entered matches the original password”.
          Show “Incorrect password” otherwise. 

var password= "PASSWORD";
var pass=prompt("Enter Your Password");
alert("PLZ Enter your Password")
var pass=prompt("Enter Your Password");
if (pass==password){
    console.log("CORRECT")
}
else {
    console.log("INCORRECT PASSWORD" )
}
*/


// 6. This if/else statement does not work. Try to fix it: var greeting;
//  var hour = 13; 
//  if (hour < 18) { greeting = "Good day";
//  else
//  greeting = "Good evening"; }   

// var hour = 13; 
// if (hour < "18") {
//   console.log ("Good day");
// }
// else{ 
//   console.log ("Good evening");
// }   


// 7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm.
//    Implement the following case using if, else & else if statements