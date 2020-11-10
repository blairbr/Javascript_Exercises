const characters = [
    {
      name: "Dolores Abernathy",
      health: 21,
    },
    {
      name: "Blair",
      health: 22,
    },
    {
      name: "RBG",
      health: 12,
    },
  ];
  
  const opponent = {
    name: "Voldemort",
    health: 25,
  };
  characters.push(opponent);
  
  let userChoice;
  do {
    userChoice = prompt("Pick a character. Enter 1, 2 or 3.");
    let counter = 0;
    for (const character of characters) {
      counter++;
      console.log(
        `Player #${counter} is ${character.name} with ${character.health} health points.`
      );
    }
    userChoice = userChoice - 1; //since player 1 is really at position 0 in the index (and so on)
    battleOpponent(userChoice, characters);
  } while (userChoice !== null);
  
  function battleOpponent(userChoice, characters) {
    console.log(
      `Initiating battle. Character ${characters[userChoice].name}'s health is currently ${characters[userChoice].health}.`
    );
    characters[userChoice].health =
      characters[userChoice].health - Math.floor(Math.random() * 5 + 1);
    console.log(
      `Uff! That'll leave a battle scar. Character ${characters[userChoice].name}'s health has dropped to ${characters[userChoice].health}.`
    );
    characters[3].health =
      characters[3].health - Math.floor(Math.random() * 5 + 1);
    console.log(
      `Ouch! The opponent ${characters[3].name}'s health has dropped to ${characters[3].health}.`
    );
  }
  