// Gravitational acc on each Planet

const gravitationalAcc = {
  mercury: 3.7,
  venus: 8.87,
  earth: 9.81,
  mars: 3.71,
  jupiter: 24.79,
  saturn: 10.44,
  uranus: 8.69,
  neptune: 11.15,
};

// cal function for each planet

function calWeightOnPlanets(weightOnEarth) {
  const weightOnPlanets = {};
  for (const planet in gravitationalAcc) {
    const gravityOnPlanet = gravitationalAcc[planet];
    const weightOnPlanet =
      (weightOnEarth * gravityOnPlanet) / gravitationalAcc.earth;
    weightOnPlanets[planet] = weightOnPlanet;
  }
  return weightOnPlanets;
}

// function for handle btn , display res
function calculateWeight() {
  const earthWeightInput = document.getElementById("earthWeight");
  const resultDiv = document.getElementById("result");

  const weightOnEarth = parseFloat(earthWeightInput.value);

  if (!isNaN(weightOnEarth)) {
    const weightOnPlanets = calWeightOnPlanets(weightOnEarth);

    let resultText = ``;
    for (const planet in weightOnPlanets) {
      resultText += `<div class="planet-box">
        <img src=${planet}.png />
        <p>${
          planet.charAt(0).toUpperCase() + planet.slice(1)
        }<br>${weightOnPlanets[planet].toFixed(2)}kg</p>
      </div>`;
    }
    resultDiv.innerHTML = resultText;
  } else {
    resultDiv.innerHTML = "<p> Enter Your Valid Weight.</p>";
  }
}

let resultText = ``;
