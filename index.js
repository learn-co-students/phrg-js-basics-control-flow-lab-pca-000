// Write your code in this file!
function scuberGreetingForFeet(rideLength) {
  if (rideLength <= 400) {
    return 'This one is on me!';
  } else if (rideLength >= 2000 && rideLength < 2500) {
    return 'I will gladly take your thirty bucks.';
  } else
    return 'No can do.';
}

function ternaryCheckCity(cityName) {
  return cityName === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip) {
  let response;

  switch (tip) {
    case "generous":
      return 'Thank you so much.';
    case "not as generous":
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}
