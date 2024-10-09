var calculateButton = document.querySelector("button");

calculateButton.addEventListener("click", function () {
  calculateResistorValue();
});

var multiplicationResultElement = document.createElement("div");
document.body.appendChild(multiplicationResultElement);

function calculateResistorValue() {
  var colorValue1 = parseInt(document.getElementById("color1").value);
  var colorValue2 = parseInt(document.getElementById("color2").value);
  var colorValue3 = parseInt(document.getElementById("color3").value);
  var colorValue4 = document.getElementById("color4").value;

  if (
    !isNaN(colorValue1) &&
    !isNaN(colorValue2) &&
    !isNaN(colorValue3) &&
    colorValue4 !== ""
  ) {
    var result = (colorValue1 * 10 + colorValue2) * colorValue3;
    document.getElementById("result").textContent =
      "Resistor Value: " + result + " ohm" + " ± " + colorValue4;
  } else {
    document.getElementById("result").textContent =
      "Please select all colors correctly";
  }
}
