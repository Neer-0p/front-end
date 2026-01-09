console.log("hello")

// bom:- browser object model

// alert("Plz filled the data...")
// console.log(alert("hello"))
// alert("hello")
// confirm("Are you sure ??")
// prompt("5 + 5 =>")

// variables
// syntax:- variable-name = value
// 3types:-

// 1)var(GLOBAL)

var x = 10  //declare
var x = 20  //re-declare
x = 30      //re-assign
console.log("x=>",x)
document.writeln("x=>",x,"<br>")

// 2)let (BLOCK)

let y = 5 //declare
// let y = 15 //re-declare not allow
y = 15+10 //re-assign
console.log("y=>",y)
document.writeln("y=>",y,"<br>")

// 3)const (BLOCK AND UNIQUE)

const z = 3 //declare
// const z = 6 //re-declare not allowed
// z = 9 //re-assign not allow
console.log("z=>",z)
document.writeln("z=>",z,"<br>")

// datatypes
// 2 types:- primitive :- for single user
//           non-primitive :- for multiple user

// primitive have total 7 types but mainly used 5 types

// 1)Number
let num = 5.5
console.log("num =>",num)
console.log(typeof(num))

// 2)String
let string = "hello"
console.log("string =>",string)
console.log(typeof(string))

// 3)null
let a = null
console.log("a =>",a)
console.log(typeof(a))

// 4)Boolean
let b = true
console.log("b =>",b)
console.log(typeof(b))

// 5)undefined
let blank
console.log("blank =>")
console.log(typeof(blank))

// 6)Symbol
let sym = Symbol(123)
console.log("symbol =>",sym)
console.log(typeof(sym))

// 7)BigInt
let int = BigInt(4337457457)
console.log("big-int =>",int)
console.log(typeof(int))


