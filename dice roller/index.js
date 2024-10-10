// dice roller program

function rollDice() {
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const diceType = document.getElementById("diceType");
    const clearDice = document.getElementById("clearDice");
    const values = [];
    const images = [];
    let sum = 0;

    //Random Wurf pro Würfel
    for (let i = 0; i< numOfDice; i++){
        const value = Math.floor(Math.random()*diceType.value)+1;
        values.push(value);
        images.push(`<img src="img/${value}.png" alt="Dice ${value}">`);
    }

    //Schleife, die den Array durchläuft und dann der sum dazu addiert
    values.forEach(function(value) { 
        sum += value;
    });
    
    // Diplay die Zahl, die Summe der Würfel und das Bild
    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceSum.textContent = `The sum is:  ${sum}`;
    diceImages.innerHTML = images.join('');
}

function clearDice(){
        diceResult.textContent = ``;
        diceSum.textContent = ``;
        diceImages.innerHTML = '';
}

