// crea un array con la lista della spesa
const shoppingList = [    
    "pane",
    "latte",
    "uova",
    "burro",
    "formaggio",
    "prosciutto",
    "frutta",
    "verdura",
    "pasta",
    "riso",
    "olio d'oliva",
    "sale",
    "zucchero",
    "farina",
    "caffè",
    "tè",
    "succhi di frutta",
    "acqua",
    "yogurt",
    "cereali"
];

// prendi elemento UL
const listContainer = document.getElementById("list-container");

// crea variabile per ciclo while con indice 0
let i = 0;

// crea ciclo while
while(i < shoppingList.length){
    // inserisci LI nel container
    listContainer.innerHTML += (`<li>${shoppingList[i]}`);

    // incrementa valore indice
    i++
}