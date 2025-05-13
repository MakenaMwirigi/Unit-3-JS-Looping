// Code your solutions in this file
writeCards(["Charlie", "Samip", "Ali"], "birthday");

function writeCards(names, eventName) {
  const messages = [];

  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
  }

  return messages;
}

// Function to count down from a given number to 0
function countDown(startingNumber) {
  while (startingNumber >= 0) {
    console.log(startingNumber);
    startingNumber--;
  }
}