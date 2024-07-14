/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
max number 10^15 -> 1000000000000000
*/

const inputEl = document.getElementById('input');
const meterToFeetEl = document.getElementById('meter-to-feet');
const feetToMeterEl = document.getElementById('feet-to-meter');
const literToGallonEl = document.getElementById('liters-to-gallons');
const gallonToLiterEl = document.getElementById('gallons-to-liters');
const kilogramToPoundEl = document.getElementById('kilograms-to-pounds');
const poundToKilogramEl = document.getElementById('pounds-to-kilograms');

renderConversions(0);

inputEl.onkeydown = function(e) {
    if(e.keyCode === 189 || e.keyCode === 69 || e.keyCode === 187)
        return false;
}

inputEl.addEventListener('input', function() {
    const val = inputEl.value;
    let value = Number(val);
    if(val.length >= 20) {
        let temp = val;
        temp = temp.slice(0, 20);
        inputEl.value = temp;
        value = Number(temp);
    }
    renderConversions(value);
}
);

function renderConversions(value) {
    meterToFeetEl.textContent = value + " meters = ";
    meterToFeetEl.textContent += convertMeterToFeet(value).toFixed(3);
    meterToFeetEl.textContent += " feets.";

    feetToMeterEl.textContent = value + " feets = ";
    feetToMeterEl.textContent += convertFeetToMeter(value).toFixed(3);
    feetToMeterEl.textContent += " meters.";

    literToGallonEl.textContent = value + " liters = ";
    literToGallonEl.textContent += convertLiterToGallon(value).toFixed(3);
    literToGallonEl.textContent += " gallons.";

    gallonToLiterEl.textContent = value + " gallons = ";
    gallonToLiterEl.textContent += convertGallonToLiter(value).toFixed(3);
    gallonToLiterEl.textContent += " liters.";

    kilogramToPoundEl.textContent = value + " kilograms = ";
    kilogramToPoundEl.textContent += convertKilogramToPound(value).toFixed(3);
    kilogramToPoundEl.textContent += " pounds.";

    poundToKilogramEl.textContent = value + " pounds = ";
    poundToKilogramEl.textContent += convertPoundToKilogram(value).toFixed(3);
    poundToKilogramEl.textContent += " kilograms.";
}

function convertMeterToFeet(meter) {
    return meter * 3.281;
}

function convertFeetToMeter(feet) {
    return feet / 3.281;
}

function convertLiterToGallon(liter) {
    return liter * 0.264;
}

function convertGallonToLiter(gallon) {
    return gallon / 0.264;
}

function convertKilogramToPound(kilogram) {
    return kilogram * 2.204;
}

function convertPoundToKilogram(pound) {
    return pound / 2.204;
}
