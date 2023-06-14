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

