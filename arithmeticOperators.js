/*********************************************
           Arithmetic Operators 
      ( +   -   *   /   %   ++   -- )
*******************************************/
// increment & decrement Operator
var x= 4;
x++;// x = x + 1
x--;//x = x - 1
console.log(x);//Output 4

//increment (post and pre) 
var x;
var y=4;
x= y++;//x=y;then y= y+1;
x = ++y;//y=y+1; then x=y;
console.log(x,y);//Output x= 6 y= 6

//decrementOperator (post and pre) 
var x;
var y=4;
x= --y;//y=y-1; then x=y //Output x=3 y=3
x=y--;//x=y then y=y-1
console.log(x,y);//Output x=3 y=2

//additionOperator (Total number calculate)
var number1 = 10;
var number2=10;
var total = number1 + number2;
console.log('Total Number is =',total);

//multiplicationOperator (circle of area)
var radius = 7;
const pi = 3.14159;
var areaOfCircle = pi * (radius * radius);
console.log("Area of the Circle is",areaOfCircle,'sq inch');

//divisionOperator (usd to bdt calculator)
var usdToBdt = 83.5;
var bdt = 5000;
var usd = bdt/usdToBdt;
console.log("$",usd);

// modulasOperator
var n1= 5;
var r1=5%2;
console.log(r1);
