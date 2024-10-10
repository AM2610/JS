const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("listContainer");
const menu = document.getElementById("menu");
const form = document.getElementById("form");

let taskList = [];

// Funktion, um den Local Storage zu aktualisieren
function updateLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(taskList));
}

// Beim Laden der Seite gespeicherte Aufgaben abrufen
window.onload = function() {
    let savedTasks = localStorage.getItem('tasks');
    
    if (savedTasks) {
        taskList = JSON.parse(savedTasks); // Gespeicherte Aufgaben laden
        
        // Für jede gespeicherte Aufgabe ein li-Element erstellen
        taskList.forEach(function(task) {
            createTaskElement(task);
        });
    }
};

// Funktion zum Erstellen eines neuen Task-Elements
function createTaskElement(task) {
    let li = document.createElement('li');
    li.textContent = task;

    // Durchstreichen-Event (toggle)
    li.addEventListener('click', function() {
        if (li.style.textDecoration === 'line-through') {
            li.style.textDecoration = 'none';
        } else {
            li.style.textDecoration = 'line-through';
        }
    });

    // "Remove"-Button erstellen
    let removeButton = document.createElement('button');
    removeButton.textContent = 'x';
    removeButton.className = 'buttonRemove';

    // Entfernen-Event für den Button
    removeButton.addEventListener('click', function(event) {
        // Entfernen des li-Elements aus der Liste
        li.remove();

        // Entfernen der Aufgabe aus dem taskList-Array
        taskList = taskList.filter(t => t !== task);
        updateLocalStorage(); // Local Storage aktualisieren
    });

    // Button dem li-Element hinzufügen
    li.appendChild(removeButton);
    menu.appendChild(li); // li-Element zur Liste hinzufügen
}

// Aufgabe hinzufügen (über den Submit-Event des Formulars)
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Verhindert das Neuladen der Seite

    const task = inputBox.value;
    if (task === '') {
        window.alert("Keine Aufgabe erstellt!");
    } else {
        taskList.push(task); // Neue Aufgabe zum Array hinzufügen
        updateLocalStorage(); // Array im Local Storage speichern
        createTaskElement(task); // Neue Aufgabe zur Liste hinzufügen
        inputBox.value = ''; // Eingabefeld leeren
    }
});

// Funktion, um die komplette Liste zu leeren (nicht im Task gefragt, aber als Beispiel)
function deleteB() {
    menu.innerHTML = ''; // Alle li-Elemente entfernen
    taskList = []; // taskList leeren
    updateLocalStorage(); // Local Storage leeren
}
