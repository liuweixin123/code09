// 三种打印输出方式
// alert("web1709");


console.log("你好");


document.write("一定要学好js！");

// 字面量

// 5种基本数据类型
var a = 1;// 数字型 Number

var b = "hello";// 字符串型 String

var c = true;// 布尔型 Boolean 只有true和false两个值

var d = null;// null型
console.log(d);

var e = undefined;//undefined型  未定义
var f;//只声明变量，并没有赋值
console.log(f);

// 。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。
// 数字型相关
// 二进制与十进制间转换   十 -> 二（短除法） 二 -> 十（按位相乘取和法）

console.log(2.1e10); // 2.1乘10的10次幂

console.log(Infinity);// 无穷，加 - 是负无穷

console.log(NaN);// NaN是Not a Number 数字型中表示不是一个数字的意思
console.log(0 / 0); // NaN
console.log(-10 / 0); // -Infinity

//......................................................................................
// 字符串型相关
console.log("2");
console.log(2);
console.log("人\t生自古谁无死,\n留\t取丹心照汗青。");
document.write("人生自古谁无死,<br>留取丹心照汗青。");
// 字符串中有引号，引号要与字符串字面量引号不同
console.log("我是一个'好人'");
// 字符串中有引号，引号一定要与字符串字面量引号相同时，给字符串中的引号加 \ 转义
console.log("他是一个\"狼人\"");

