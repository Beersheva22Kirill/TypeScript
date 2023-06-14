import Rectangle from "./Rectangle";
import Shape from "./Shape";

let n = 10;

n = 20;

let num:number | 'abc' = 32;
num = 33;
num = 'abc';
let str:string = 'str';

const array:string[] = [];
array.push('str');

const array1:[string, number?] = ['abc',10]; //? опционально (может быть а может и не быть)
array1[0] = 'lmn';
array1[1] = 3;

const array2:Array<string> = []

const map1:Map<string,number> = new Map([['abc', 40]]);

console.log(map1.get("abc"));
console.log(map1.entries());

Array.from(map1.entries()).forEach(e => console.log(`key ${e[0]} -> value ${e[1]}`));

function func (a:number) : number {
    
    return a * 2;
}

console.log(func(2));

let comparator:( num: number, num1: number) => number;

comparator = function(num1: number, num2:number):number{
    
    return num1 - num2;
}


type Comparator<T = number> = (p1: T, p2: T) => number; // <T = number> значение по умолчанию

let comparator_param: Comparator =                          //можно не указывать тип, но можно поменять указав "let comparator_param: Comparator<string>" например
        function (num1: number, num2:number): number{
    
    return num1 > num2 ? 1 : -1;
    
}

type Person = {id: number, date: Date|string, name: string, gender?: 'male'|'female'} //? необязательный параметр

function displayPerson(person:Person):void {
    console.log("\ndisplay person:");
    
    console.log(person.id);
    console.log(person.name);
    console.log(person.date);
    person.gender && console.log(person.gender);
  
}

const pers:Person = {id: 123456,date:"04-04-1989",name: "Kirill",gender: "male"} 
displayPerson(pers);

function ciper(text:string, key: number): string {
    let res = ""
 Array.from(text).forEach(e => {

    let index:number = e.charCodeAt(0) + key;
    if (index > "~".charCodeAt(0)) {
        index = index - ("~".charCodeAt(0) - " ".charCodeAt(0)) - 1;
    }
    console.log(index);
    res += String.fromCharCode(index)
 })
    return res;
}

function deciper(text:string, key: number): string {
    let res = ""
    Array.from(text).forEach(e => {
        let index = e.charCodeAt(0) - key;
        if (index < " ".charCodeAt(0)) {
        index += ("~".charCodeAt(0) - " ".charCodeAt(0)) + 1;    
    }
    res += String.fromCharCode(index)
    })
    return res;
}
console.log("\n====Cifer=======");
console.log(ciper("{|}",3));
console.log("\n===Decifer========");
console.log(deciper(ciper("{|}",3),3));

console.log("\n===Shape========");
const shape: Shape = new Rectangle(4,5);


let width = shape.width;

console.log(width);


