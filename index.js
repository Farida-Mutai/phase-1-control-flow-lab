//Write your code here!
function scuberGreetingForFeet(feet) {
  if (feet <= 400) {
      return "This one is on me!";
  } else if (feet > 400 && feet <= 2000) {
      return "That will be twenty bucks.";
  } else if (feet > 2000 && feet <= 2500) {
      return "I will gladly take your thirty bucks.";
  } else if (feet > 2500) {
      return "No can do.";
  } else {
      return "Please provide a valid distance.";
  }
}

console.log(scuberGreetingForFeet(199));  // Output: "This one is on me!"
console.log(scuberGreetingForFeet(1000));  // Output: "That will be twenty bucks."
console.log(scuberGreetingForFeet(2300));  // Output: "I will gladly take your thirty bucks."
console.log(scuberGreetingForFeet(3000));  // Output: "No can do."
console.log(scuberGreetingForFeet(-100));  // Output: "Please provide a valid distance."



// Write your code here!

function ternaryCheckCity(destination) {
  return destination === 'NYC' ? "Ok, sounds good." : "No go.";
}
console.log(ternaryCheckCity('NYC'));  // Output: "Ok, sounds good."
console.log(ternaryCheckCity('LA'));   // Output: "No go."


  // Write your code here!

function switchOnCharmFromTip(tip) {
    switch (tip) {
        case 'generous':
            return "Thank you so much.";
        case 'not as generous':
            return "Thank you.";
        default:
            return "Bye.";
    }
}
console.log(switchOnCharmFromTip('generous'));  // Output: "Thank you so much."
console.log(switchOnCharmFromTip('not as generous'));  // Output: "Thank you."
console.log(switchOnCharmFromTip('okay'));  // Output: "Bye."