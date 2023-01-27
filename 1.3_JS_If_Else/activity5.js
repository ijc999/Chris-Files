let num =202012;
str=num.toString(); //changes number to a string
str=str.split(").reverse.join(");
parseFloat(str); //changes string back to number

if (num == str) {
    output =" Is palindrome"
} else {
    output = " Not palindrome"
}

console.log(num + output);