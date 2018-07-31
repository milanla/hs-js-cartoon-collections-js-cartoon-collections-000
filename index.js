function dwarfRollCall(dwarves) {
  var name = "";
  for (let i=0; i < dwarves.length; i++) {
    name += (i+1) + ". " + dwarves[i] + " ";
  }
  return name;
}

function summonCaptainPlanet(planeteerCalls){
  var shout = [];
  for (let i=0; i < planeteerCalls.length; i++) {
  shout.push(planeteerCalls[i].toUpperCase() + '!');
  }
  return shout;
}

function longPlaneteerCalls(words) { 
  for (let i=0; i < words.length; i++) {
    if (words[i].length > 4) {
      return true;
    } else {
      return false;
    }
  }
}

function findTheCheese(foods) {
  for (let i=0; i < foods.length; i++) {
    if (foods[i] === 'cheddar' ||
        foods[i] === 'gouda' ||
        foods[i] === 'camembert' ||
        foods[i] === 'swiss') {
          return foods[i];
        }
  }
  return 'no cheese!';
}


function wordsWithB(words) {
  var nameB =[];
  for (let i=0; i < words.length; i++) {
    if (words.includes('b')) {
      nameB.push(words[i])
    } 
  }
  return nameB;
}