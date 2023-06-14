"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Rectangle_1 = __importDefault(require("./Rectangle"));
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
var comparator;
comparator = function (num1, num2) {
    return num1 - num2;
};
var comparator_param = function (num1, num2) {
    return num1 > num2 ? 1 : -1;
};
function displayPerson(person) {
    console.log("\ndisplay person:");
    console.log(person.id);
    console.log(person.name);
    console.log(person.date);
    person.gender && console.log(person.gender);
}
var pers = { id: 123456, date: "04-04-1989", name: "Kirill", gender: "male" };
displayPerson(pers);
function ciper(text, key) {
    var res = "";
    Array.from(text).forEach(function (e) {
        var index = e.charCodeAt(0) + key;
        if (index > "~".charCodeAt(0)) {
            index = index - ("~".charCodeAt(0) - " ".charCodeAt(0)) - 1;
        }
        console.log(index);
        res += String.fromCharCode(index);
    });
    return res;
}
function deciper(text, key) {
    var res = "";
    Array.from(text).forEach(function (e) {
        var index = e.charCodeAt(0) - key;
        if (index < " ".charCodeAt(0)) {
            index += ("~".charCodeAt(0) - " ".charCodeAt(0)) + 1;
        }
        res += String.fromCharCode(index);
    });
    return res;
}
console.log("\n====Cifer=======");
console.log(ciper("{|}", 3));
console.log("\n===Decifer========");
console.log(deciper(ciper("{|}", 3), 3));
console.log("\n===Shape========");
var shape = new Rectangle_1.default(4, 5);
var width = shape.width;
console.log(width);
//# sourceMappingURL=main.js.map