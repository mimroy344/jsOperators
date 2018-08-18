/******************
Assignment Operator(=) 
************************/
var x=10;
var y=x;
console.log(y);

/*********************
 Addition Assignment(+=)
 *********************/
var a =8;
var b =2;
a =a+b;//a+=b
console.log(a);

/*************************
Subtraction Assignment(-=)
*************************/
var x =10;
var y =10;
x = x-y;//x-=y
console.log(x);

/************************* 
Multiplication Assignment(*=)
*************************/
var x=3;
var y=3;
x=x*y;//x*=y
console.log(x);

/**********************
Division Assignment(/=) 
**********************/
var a=6;
var b=2;
a = a/b;//a/=b
console.log(a);

/**********************
Reminder Assignment(%=)
**********************/
var x=4;
var y=3;
x= x%y;//x%=y
console.log(x);

/*************************
Exponentiation Assignment(**=)or[pow()]
*************************/
var a=2;
var b=3;
a=a**b;//a**=b
console.log(a);

/*************************
scientific notation(e,E)[2 x 10^2]
**************************/
var a=2E2;
console.log(a);

/*************************
Left shift assignment(<<)[bit shift]
[if positive number then fill 0 other 1]
*************************/
var x=10;
var x=x << 1;
console.log(x);

/*************************
Right shift assignment(>>)
[if positive number then fill 0 other 1]
*************************/
var a= 1;
var b=10;
var b=b>>a;//  b>>=a
console.log(b);

/*************************
Unsigned Right shift assignment(>>>)
[all number then  0 ]
*************************/
var x=6;
var y=2;
var y= x>>>y;
console.log(y);

/*************************
Bitwise AND assignment(&)[multiplication]
**************************/    
var a=1;
var b=1;
var a=a&b;//a&=b
console.log(a);

/*************************
Bitwise OR assignment(&)[addition]
**************************/ 
var a=0;
var b=1;
var a=a|b;//a|=b
console.log(a);

/*************************
Bitwise XOR assignment(&)
[0^0=0 1^1=0 other 1]
**************************/
var x=1;
var y=0;
x=x^y;//x^=y
console.log(x);
