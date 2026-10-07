let astronautName = "Luke Skywalker";
let astronautAge = 28;
let isCommander = true;
let planet = "Tatooine";
let missionDuration = 4;

console.log(`Astronaut Name: ${astronautName}`);
console.log(`Astronaut Age: ${astronautAge}`);
console.log(`Is Commander: ${isCommander}`);
console.log(`Planet: ${planet}`);
console.log(`Mission Duration: ${missionDuration} days`);
console.log("-----After Mission Update------");
missionDuration += 30;
astronautAge += 10;
isCommander = false;

console.log(`Astronaut Name: ${astronautName}`);
console.log(`Astronaut Age: ${astronautAge}`);
console.log(`Is Commander: ${isCommander}`);
console.log(`Planet: ${planet}`);
console.log(`Mission Duration: ${missionDuration} days`);
console.log("----Function to display astronaut info----");
let resultAstronaut = {
  Name: astronautName,
  Age: astronautAge,
  Commander: isCommander,
  Planet: planet,
  MissionDuration: missionDuration,
};

function displayAstronautInfo(astronaut) {
  for (let i in astronaut) console.log(`${i}: ${astronaut[i]}`);
  console.log(" ");
}

displayAstronautInfo(resultAstronaut);
