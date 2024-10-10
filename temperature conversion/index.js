// Temperture conversion

const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const toKelvin = document.getElementById("toKelvin");
const result = document.getElementById("result");
const result1 = document.getElementById("result1");
let temp;

const form = document.getElementById("tempForm");

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Verhindert das Neuladen der Seite nach dem Submit
    convert(); // Führt die Konvertierung durch
});

function convert(){
   

        if(toFahrenheit.checked){
            temp = Number(textBox.value);
            temp = temp * 9 / 5+32;
            result.textContent = temp.toFixed(1) + "°F"; 
        }
        else if (toCelsius.checked) {
            temp = Number(textBox.value);
            temp = (temp - 32) * 5/9;
            result.textContent = temp.toFixed(1) + "°C"; 
        }
        else if (toKelvin.checked){
            temp = Number(textBox.value);
            temp = (temp - 32) * 5/9 + 273.15;
            result.textContent = temp.toFixed(1) + "°K"; 
        }
        else{
            result.textContent = "Select a unit";
        }
}