const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("listContainer");
const menu = document.getElementById("menu");
const liTask = document.getElementById("liTask");

const form = document.getElementById("form"); // Form richtig referenzieren

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Verhindert das Neuladen der Seite nach dem Submit
});

function addTask() {
    const task = inputBox.value;
    if (task === '') { 
        window.alert("Keine Aufgabe erstellt!")
    } 
    else {
        let li = document.createElement('li');
        li.textContent = task;
        menu.appendChild(li);
        li.addEventListener('click', function(event){
            if (li.style.textDecoration === 'line-through'){
                li.style.textDecoration = 'none';
            }else{
                li.style.textDecoration = 'line-through';
            }
        });
        
        let removeButton = document.createElement('BUTTON');
        removeButton.textContent = "x";
        removeButton.className = 'buttonRemove';
        li.appendChild(removeButton);       
        removeButton.addEventListener('click', function(event){
            event.target.parentElement.remove();
            event.stopPropagation();
        });

    }
    inputBox.value = '';
}

function deleteB(){
    menu.innerHTML = '';
}

