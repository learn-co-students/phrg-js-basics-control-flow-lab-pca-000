// Write your code in this file!
function scuberGreetingForFeet(someValue) {
  let reply;
  if (someValue <= 400) {
    reply = 'This one is on me!';
  } else if (someValue > 2500) {
    reply = 'No can do.';
  } else if (someValue <= 2500) {
    reply = 'I will gladly take your thirty bucks.';
  }
  return reply;
}

function ternaryCheckCity(city) {
  let reply;
  city === 'NYC' ? reply = 'Ok, sounds good.' : reply ='No go.';
  return reply;
}


function switchOnCharmFromTip(tip) {
  let reply;
  switch (tip) {
    case 'generous':
      reply = 'Thank you so much.';
      break;
    case 'not as generous':
      reply = 'Thank you.';
      break;
    default:
      reply = 'Bye.'
  }
  return reply;
}
