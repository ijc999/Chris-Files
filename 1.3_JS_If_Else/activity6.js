let time = 7;
let placeOfWork = "office";
let townOfHome = "home";

if (time < 8) {
  console.log(`At ${time} I am at ${townOfHome}.`);
} else if (time === 8) {
  console.log(`At ${time} I am commuting.`);
} else if (time >= 9 && time < 17) {
  console.log(`At ${time} I am at ${placeOfWork}.`);
} else {
  console.log("I am not sure where I am.");
}
