var n = 10;
n = 20;
var num = 32;
num = 33;
num = 'abc';
var str = 'str';
var array = [];
array.push('str');
var array1 = ['abc', 10];
array1[0] = 'lmn';
array1[1] = 3;
var array2 = [];
var map1 = new Map([['abc', 40]]);
console.log(map1.get("abc"));
console.log(map1.entries());
Array.from(map1.entries()).forEach(function (e) { return console.log("key ".concat(e[0], " -> value ").concat(e[1])); });
function func(a) {
    return a * 2;
}
console.log(func(2));
//# sourceMappingURL=main.js.map