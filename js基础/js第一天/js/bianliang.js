var a = 1;
console.log(a);
console.log("a");

var b; // 变量的声明
console.log(b);// undefined
b = 2017; // 变量赋值
console.log(b);// 2017


// Uncaught ReferenceError: c is not defined
// console.log(c);

var a123 = "haha";
var A123 = "haha";
var $w_e = true;

// 变量命名不可以数字开头
// var 1a = 123;

num = 100;
// var num;
console.log(num); // 100

console.log(abc);
var abc = 200;// 变量声明提升

var abc;
console.log(abc);
abc = 200;

var ccc = 1,bbb = 2,aaa = 3;
var haha = null;
var hello;

// 检测变量基本数据类型用关键字typeof

console.log(typeof b);
console.log(typeof a123);
console.log(typeof $w_e);
console.log(typeof haha);// object空对象
console.log(typeof hello);

