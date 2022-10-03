const input = document.querySelector(".valores")
const btnAnalizar=document.querySelector("#analizar")
const pala = document.querySelector("#palabras")
const nume = document.querySelector("#numeros")
const opera=document.querySelector("#operadores")
const palabrasDiferentes =document.querySelector("#palabrasDiferentes")

var imagen1 = "hppt://http://127.0.0.1:5501/image/1.jpg"
var imagen2="mundo"
var imagen3 =1
var imagen4="+"
var imagen5=2
var imagen6=3
var imagen7=4
var imagen8="-"
var imagen9="vaca"
var imagen10="gato"
var imagen11=";"
var imagen12="="
var imagen13=7
var imagen14="mostra"

var palabrasReservadas={
    palabras:["mostrar","si","si-no","mientras","funcion","para","i","j"],
    numeros:[1,2,3,4,5,6,7,8,9,0],
    operadores:["+","-","*","/","<",">","=","<=",">=","==","(",")"],
    terminadores:[imagen11]
}
var palabras = 0;
var numeros=-1;
var operadores=0;
var terminadores=0;
var otrasPalbras=-1;
//------------------------------------------------------

var rows = 5;
var columns = 1;
var currTile;
var otherTile;
var turns = 0;
var listasImagenes =[]

//document.getElementById().addEventListener("click",detectar)

// function detectar(){
//     console.log("cargar imagen")
// }
var variable=0

window.onload = function() {
    //initialize the 5x5 board
    imagenBlanco="./images/blank.jpg";
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            //<img>
            let tile = document.createElement("img");
            
            tile.src = imagenBlanco
            variable+=1
            tile.id=variable
            // if ((tile.src.target)===(imagen1.target)){
            //     console.log(`la imagen ya no es blanca${tile.src}`)
            // }else{
            //     console.log("imagen igual")
            // }

            //funcionalidad de arrastre
            tile.addEventListener("dragstart", dragStart); //click en la imagen para arrastrar
            tile.addEventListener("dragover", dragOver);   //arrastrar imagen
            tile.addEventListener("dragenter", dragEnter); //arrastrar una imagen a otra
            tile.addEventListener("dragleave", dragLeave); //arrastrar una imagen lejos de otra
            tile.addEventListener("drop", dragDrop);       //colocar una imagen sobre otra
            tile.addEventListener("dragend", dragEnd);      //despues de completar dragDrop

            document.getElementById("board").append(tile);
        }
    }
    //piezas
    var pieces = [];
    for (let i=1; i <= 7*5; i++) {
        pieces.push(i.toString()); //poner "1" a "25" en la matriz (nombres de imágenes de rompecabezas)
    }
    pieces.reverse();
    for (i in pieces) {
        let j = Math.floor(Math.random() * pieces.length);

        //intercambio
        let tmp = pieces[i];
        pieces[i] = pieces[j];
        pieces[j] = tmp;
    }
    for (i in pieces) {
        let tile = document.createElement("img");
        tile.src = "./image/" + pieces[i] + ".jpg";
        let guardar = tile.src
        listasImagenes.push(guardar)
        //console.log("cargar  ",guardar)
//--------------

        //funcionalidad de arrastre
        tile.addEventListener("dragstart", dragStart); //click en la imagen para arrastrar
        tile.addEventListener("dragover", dragOver);   //arrastrar imagen
        tile.addEventListener("dragenter", dragEnter); //arrastrar una imagen a otra
        tile.addEventListener("dragleave", dragLeave); //arrastrar una imagen lejos de otra
        tile.addEventListener("drop", dragDrop);       //colocar una imagen sobre otra
        tile.addEventListener("dragend", dragEnd);      //despues de completar dragDrop

        document.getElementById("pieces").append(tile);

    }
}

//arrastrar imagenes
function dragStart() {
    currTile = this; //this refers to image that was clicked on for dragging
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {

}

function dragDrop() {
    otherTile = this; //this refers to image that is being dropped on
}

function dragEnd() {
    if (currTile.src.includes("blank")) {
        return;
    }
    let currImg = currTile.src;
    let otherImg = otherTile.src;
    currTile.src = otherImg;
    otherTile.src = currImg;

    turns += 1;
    document.getElementById("turns").innerText = turns;
}
function verificar(){
    var lista = input.value.split(" ")
    console.log(lista)
    for(i in palabrasReservadas.palabras){
        for(j in lista){
                //console.log(palabrasReservadas.palabras[i])
            if(lista[j]==palabrasReservadas.palabras[i]){
                palabras+=1; }
        }
    }
    for(i in palabrasReservadas.numeros){
        for(j in lista){
            if(lista[j]==palabrasReservadas.numeros[i]){
                numeros+=1  
            }
        }
    }
    
    for(i in palabrasReservadas.operadores){
        for(j in lista){
            if(lista[j]==palabrasReservadas.operadores[i]){
                operadores+=1}
        }
    }
    for (i in lista){
        if(lista[i]==palabrasReservadas.operadores[i] || lista[i]==palabrasReservadas.palabras[i] || lista[i]==palabrasReservadas.numeros[i]){
            console.log("Funciono siuuuuuuu")
        }else{
            otrasPalbras+=1
        }
    }
    let conprobarUltimoElemento=[...lista].pop()
    if(conprobarUltimoElemento==palabrasReservadas.terminadores[0]){
        alert("la terminacion es correcta")
    }
    else{
        alert("la terminacion es incorrecta")
    }

    console.log(palabras)
    console.log(numeros)
    console.log(operadores)
    console.log(otrasPalbras)
    console.log(otrasPalbras)
    pala.innerHTML=`Token palabras --> ${palabras}`
    nume.innerHTML=`Token numeros --> ${numeros}`
    opera.innerHTML=`Token operadores --> ${operadores}`
    palabrasDiferentes.innerHTML=`Token otros --> ${otrasPalbras}`
    
    return palabras, numeros, operadores

}
verificar()
// let imagen1 = listasImagenes[1]
// console.log(imagen1)
// // for (i of listasImagenes){
// // }

console.log("imagenes ",listasImagenes)

