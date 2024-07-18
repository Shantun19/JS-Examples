// String methods : 

let str = "shantun";

// .length()
console.log(str.length);

// .charAt();
console.log(str.charAt(1))

// .charCodeAt() :
console.log(str.charCodeAt(2))

// .at() :
console.log(str.at(-1))

// .slice() :
console.log('slice() : ' , str.slice(1 , 5)) // 1 , 2 , 3 , 4
console.log('slice() : ' , str.slice())
console.log('slice() : ' , str.slice(4))
console.log('slice() : ' , str.slice(-4))

// .substring() : 
console.log('substring() : ' , str.substring(1 , 5))
console.log('substring() : ' , str.substring(3))
console.log('substring() : ' , str.substring(0))
console.log('substring() : ' , str.substring(-4)) // 0 

// substr() :
console.log('substr() : ' , str.substr(2 , 1))
console.log('substr() : ' , str.substr(2))
console.log('substr() : ' , str.substr(-3))

// concat() : 
let a = "Hello";
let b = "World";

console.log("concat : " , a.concat(" " , b));

// trim() 
let temp = "     hello   world    ";
console.log('trim : ' , temp.trim())

// .padStart() or padEnd() 
let s = "s";
console.log(s.padStart(3 , "P"))

// .repeat()
console.log(str.repeat(3))

// .replace() 
let m = "welcome to my ghar to ghar to ghar";
console.log(m.replace("ghar" , "Home"))

// gloally 
console.log(m.replace(/ghar/g , "Home"))

// .replaceAll() 
let p = "welcome sir to sir with sir";
console.log(p.replaceAll("sir" , "Director"));

// .split();
let fruits = "apple , banana , kiwi , grapes";
console.log(fruits.split(","));

let fruit = "apple-banana-kiwi-grapes";
console.log(fruit.split("-"));
