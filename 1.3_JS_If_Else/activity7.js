let str = 'zeekdygskdfta';
let vowel = ['a','e','i','o','u'];  //list vowels
let array = str.split('').reverse();  //reverse string
index1 = array.findIndex(a => vowel.includes(a))  
indexlast = str.length -index1 -1  
console.log(indexlast)