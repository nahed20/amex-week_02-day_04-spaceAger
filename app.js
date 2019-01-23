let planetYears = {
  "Earth": 1,
  "Mercury": 0.2408467,
  "Venus": 0.61519726,
  "Mars": 1.8808158,
  "Jupiter": 11.862615,
  "Saturn": 29.447498,
  "Uranus": 84.016846,
  "Neptune": 164.79132,
};

function printAgeOnPlanets(ageInSeconds) {
  for (var planet in planetYears) {
    var mathStuff = ageInSeconds / 31557600 * planetYears[planet];
    console.log("Your age on " + planet + " is: " + mathStuff + " years.");
  }
}