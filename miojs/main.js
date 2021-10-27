/* Consegna: Dati tre array contenenti: - una lista ordinata di 5 immagini, - una lista ordinata dei relativi 5 luoghi e - una lista di 5 news, creare un carosello come nella foto allegata.
Al click dell’utente sulle frecce verso l’alto o verso il basso, l’immagine attiva diventa visibile in formato grande a sinistra e nel suo angolo in basso a destra dovranno essere aggiunti i relativi - titolo e - testo.
Allo stesso tempo nelle miniature l’immagine attiva dovrà apparire in evidenza rispetto alle altre. */

/* array delle immagini */
const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];
/* array del titolo delle immagin */
const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]
/* array dei test delle immagini */
const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

/* creo delle variabili per richiamare le claasi dall'htmal */
const itemsCont = document.querySelector('.items');
const thumbsCont = document.querySelector('.thumbs');
const next = document.querySelector(".next");
console.log(next);

let item = "";
let thumbs = "";

for (let i = 0; i < items.length; i++) {
    item +=`
        <div class="item  ">
            <img  src="${items[i]}" alt="${title[i]}">
            <div class="text">
                <h3>
                    ${title[i]}
                </h3>

                <p>
                    ${text[i]}
                </p>
            </div>
        </div>`;


    thumbs +=`       
        <div class="thumb ">
            <img src="${items[i]}" alt="${title[i]}">
        </div>`;
}


itemsCont.innerHTML = item;

document.getElementsByClassName("item")[0].classList.add("active");


thumbsCont.innerHTML += thumbs;

document.getElementsByClassName("thumb")[0].classList.add("active");

let activePointion = 0;
document.querySelector(".next").addEventListener('click', function(){

    ++activePointion;
    console.log(activePointion);

    document.querySelector(".items.active").classList.remove("active");
    document.getElementsByClassName("items")[activePointion].classList.add("active");

    document.querySelector(".thumbs.active").classList.remove("active");
    document.getElementsByClassName("thumb")[activePointion].classList.add("active");
   }
);

let disattivePointion = 0;
document.querySelector(".prev").addEventListener('click', function(){

    --activePointion;
    console.log(activePointion);

    document.querySelector(".items.active").classList.remove("active");
    document.getElementsByClassName("items")[activePointion].classList.add("active");

    document.querySelector(".thumbs.active").classList.remove("active");
    document.getElementsByClassName("thumb")[activePointion].classList.add("active");
   }
);