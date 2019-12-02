let x:[string,number];
x = ['hello', 10];
x[0]+='world';
console.log(x);
let y:number;
// @ts-ignore
y=undefined;

let someValue:any='this is a string'
let stringLength:number=(<string>someValue).length;
console.log(stringLength);
let anotherStringLength:number=(someValue as string).length;
console.log(anotherStringLength)


