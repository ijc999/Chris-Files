let birthdate = new Date('01/10/2003');
let today = new Date();
let diffInMilliseconds = today - birthdate;
let diffInDays = diffInMilliseconds / (1000 * 60 * 60 * 24);
console.log(`Number of days since I was born to today is ${diffInDays} days.`);
