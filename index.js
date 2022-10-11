const input = document.querySelector(".valores")
const btnAnalizar=document.querySelector("#analizar")
const pala = document.querySelector("#palabras")
const nume = document.querySelector("#numeros")
const opera=document.querySelector("#operadores")
const palabrasDiferentes =document.querySelector("#palabrasDiferentes")
const btntestear = document.querySelector("#testear")
//------------------------------------------------------
//para el reconocimiento mediante palabras---

var rows = 5;
var columns = 1;
var currTile;
var otherTile;
var turns = 0;
//-----------------------------------------------------------------
//para el reconocimiento de imagenes


var mensaje=["Mostrar 5 + 8","si 5 mayor 9","mostar perro * 8","mostrar gato + carro"]
var posicion=0

var variable=0
var variable2=9
var tile;
var imagenBlanco="./images/blank.jpg";
  
window.onload = function() {
    //initialize the 5x5 board
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            //<img>
            tile = document.createElement("img");
            tile.src = imagenBlanco
            variable+=1
            tile.id=variable
            console.log(`el id es ${variable}`)
            

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
        variable2++
        let tile = document.createElement("img");
        tile.src = "./image/" + pieces[i] + ".jpg";
        tile.id=variable2
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

function testear(){
    console.log(mensaje[posicion])
    posicion++
    
    //revisar la ruta que usara la imagen para poder ser monitoreada si sucede algun evento
    //http://127.0.0.1:5500/image/12.jpg
    function contarValores(valor){
        var imagen1="http://127.0.0.1:5500/puzzle-2/image/1.jpg"
        var imagen2="http://127.0.0.1:5500/puzzle-2/image/2.jpg"
        var imagen3="http://127.0.0.1:5500/puzzle-2/image/3.jpg"
        var imagen4="http://127.0.0.1:5500/puzzle-2/image/4.jpg"
        var imagen5="http://127.0.0.1:5500/puzzle-2/image/5.jpg"
        var imagen6="http://127.0.0.1:5500/puzzle-2/image/6.jpg"
        var imagen7="http://127.0.0.1:5500/puzzle-2/image/7.jpg"
        var imagen8="http://127.0.0.1:5500/puzzle-2/image/8.jpg"
        var imagen9="http://127.0.0.1:5500/puzzle-2/image/9.jpg"
        var imagen10="http://127.0.0.1:5500/puzzle-2/image/10.jpg"
        var imagen11="http://127.0.0.1:5500/puzzle-2/image/11.jpg"
        var imagen12="http://127.0.0.1:5500/puzzle-2/image/12.jpg"
        var imagen13="http://127.0.0.1:5500/puzzle-2/image/13.jpg"
        var imagen14="http://127.0.0.1:5500/puzzle-2/image/14.jpg"
        var imagen15="http://127.0.0.1:5500/puzzle-2/image/15.jpg"
        var imagen16="http://127.0.0.1:5500/puzzle-2/image/16.jpg"
        var imagen17="http://127.0.0.1:5500/puzzle-2/image/17.jpg"
        var imagen18="http://127.0.0.1:5500/puzzle-2/image/18.jpg"
        var imagen19="http://127.0.0.1:5500/puzzle-2/image/19.jpg"
        var imagen20="http://127.0.0.1:5500/puzzle-2/image/20.jpg"
        var imagen21="http://127.0.0.1:5500/puzzle-2/image/21.jpg"
        var imagen22="http://127.0.0.1:5500/puzzle-2/image/22.jpg"
        var imagen23="http://127.0.0.1:5500/puzzle-2/image/23.jpg"
        var imagen24="http://127.0.0.1:5500/puzzle-2/image/24.jpg"
        var imagen25="http://127.0.0.1:5500/puzzle-2/image/25.jpg"
        var imagen26="http://127.0.0.1:5500/puzzle-2/image/26.jpg"
        var imagen27="http://127.0.0.1:5500/puzzle-2/image/27.jpg"
        var imagen28="http://127.0.0.1:5500/puzzle-2/image/28.jpg"
        var imagen29="http://127.0.0.1:5500/puzzle-2/image/29.jpg"
        var imagen30="http://127.0.0.1:5500/puzzle-2/image/30.jpg"
        var imagen31="http://127.0.0.1:5500/puzzle-2/image/31.jpg"
        var imagen32="http://127.0.0.1:5500/puzzle-2/image/32.jpg"
        var imagen33="http://127.0.0.1:5500/puzzle-2/image/33.jpg"
        var imagen34="http://127.0.0.1:5500/puzzle-2/image/34.jpg"
        var imagen35="http://127.0.0.1:5500/puzzle-2/image/35.jpg"
    
        var casilla1 =document.getElementById("1")
        var casilla2 =document.getElementById("2")
        var casilla3 =document.getElementById("3")
        var casilla4 =document.getElementById("4")
        var casilla5 =document.getElementById("5")
        var valor1 =casilla1.src
        var valor2 =casilla2.src
        var valor3 =casilla3.src
        var valor4 =casilla4.src
        var valor5 =casilla5.src
    
    
        var tokenNumeros =[imagen1,imagen2,imagen3,imagen4,imagen5,imagen6,imagen7,imagen8,imagen9,imagen10]
        var tokenOperadores =[imagen11,imagen12,imagen13,imagen14,imagen15]
        var tokenPalabrasReservadas=[imagen16,imagen17,imagen18,imagen19,imagen20,imagen21,imagen22]
        var tokenSustantivos =[imagen23,imagen24,imagen25,imagen26,imagen27,imagen28,imagen29,imagen30,imagen31,imagen32,imagen33,imagen34,imagen35]

    
        var lista =[valor1,valor2,valor3,valor4,valor5]
    
        for (let i=0;i<15;i++){
            if (valor==tokenNumeros[i]){
                contadorNumeros++
            }else if(valor==tokenOperadores[i]){
                contadorOperadores++
            }else if(valor==tokenPalabrasReservadas[i]){
                contadorPalabrasReservadas++
            }else if(valor==tokenSustantivos[i]){
                contadorSustantivos++
            }else{
                console.log("la imagen es blanca")
            }
        }


    }
    var contadorNumeros=0
    var contadorOperadores=0
    var contadorPalabrasReservadas=0
    var contadorSustantivos=0
    var casilla1 =document.getElementById("1")
    var casilla2 =document.getElementById("2")
    var casilla3 =document.getElementById("3")
    var casilla4 =document.getElementById("4")
    var casilla5 =document.getElementById("5")
    var valor1 =casilla1.src
    var valor2 =casilla2.src
    var valor3 =casilla3.src
    var valor4 =casilla4.src
    var valor5 =casilla5.src

    var lista =[valor1,valor2,valor3,valor4,valor5]
    for(i of lista){
        contarValores(i)
    }

    console.log(`Cantidad de numeros ${contadorNumeros}`)
    console.log(`Cantidad de operadores ${contadorOperadores}`)
    console.log(`Cantidad de Palabras Reservadas ${contadorPalabrasReservadas}`)
    console.log(`Cantidad de Sustantivos ${contadorSustantivos}`)
    document.getElementById("numeros").innerText=contadorNumeros
    document.getElementById("operadores").innerText=contadorOperadores
    document.getElementById("palReservadas").innerText=contadorPalabrasReservadas
    document.getElementById("Sustantivos").innerText=contadorSustantivos
    document.getElementById("caja").innerText= mensaje[posicion]

   
}


//limpiar pantalla

function Limpiar(){
    document.getElementById("1").src=imagenBlanco
    document.getElementById("2").src=imagenBlanco
    document.getElementById("3").src=imagenBlanco
    document.getElementById("4").src=imagenBlanco
    document.getElementById("5").src=imagenBlanco
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

