// Write your code in this file!

function scuberGreetingForFeet(numberOfFeet) {
  let result
  if (numberOfFeet <= 400) {
    result = "This one is on me!"
  }
  else if (numberOfFeet > 1999 && numberOfFeet < 2499) {
    result = "I will gladly take your thirty bucks."
  }
  else {
    result = "No can do."
  }
  return result
};

function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye."
  };
};
