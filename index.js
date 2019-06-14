function scuberGreetingForFeet(feet) {
  let ride;

  if (feet <= 400) {
    ride = 'This one is on me!';
  } else if (feet > 2000 && feet < 2500) {
    ride = 'I will gladly take your thirty bucks.';
  } else if (feet > 2500) {
    ride = 'No can do.';
  }
  return ride;
};

function ternaryCheckCity(city){
  let rideLocation;

  city === 'NYC' ? rideLocation = 'Ok, sounds good.' : rideLocation = 'No go.'

  return rideLocation
};

function switchOnCharmFromTip(tip){
  let charm
  switch (tip) {
    case 'generous':
      charm = 'Thank you so much.';
    break;
    case 'not as generous':
      charm = 'Thank you.';
    break;
    default:
      charm = 'Bye.';
    break;
  }
  return charm;
};

