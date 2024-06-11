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
    listContainer.innerHTML += (`<li class="item-list">${shoppingList[i]}`);

    // incrementa valore indice
    i++
}

// prendi elemento LI
const listItem = document.getElementsByClassName("item-list");
console.log(listItem);

// crea un evento al click
let clickCount = 0;
for(let i = 0; i < listItem.length; i++){
    listItem[i].addEventListener("click", 
        function(){
            clickCount++;
            if (clickCount % 2 === 0){
                listItem[i].classList.remove("active");
            } else {
                listItem[i].classList.add("active");
            }
        }
    )
}