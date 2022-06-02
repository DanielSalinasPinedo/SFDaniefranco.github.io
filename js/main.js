import { data } from "./preguntas.js";

const contenedor = document.querySelector(".contenedor");
const contEncabezado = document.createElement("div");
const contPregunta = document.createElement("div");
const contPreParrafo = document.createElement("p");
const contCategoria = document.createElement("div");
const contCatParrafo = document.createElement("p")

contEncabezado.className = "encabezado";

contPregunta.className = "pregunta";
contPregunta.id = "pregunta"

contCategoria.className = "categoria";
contCategoria.id = "categoria";

contPreParrafo.textContent = "Pregunta";
contCatParrafo.textContent = "Categoria";


contPregunta.append(contPreParrafo)
contCategoria.append(contCatParrafo)

contEncabezado.append(contCategoria)
contEncabezado.append(contPregunta)

//creamos los botones con sus respectivas configuraciones
for(var i = 1; i<=4; i++){
    const contBtn = document.createElement("div")
    contBtn.className = "btn";
    contBtn.id = "btn"+i;
    contBtn.textContent = "btn";
    contEncabezado.append(contBtn)
}

contenedor.appendChild(contEncabezado)

var preguntaAletoria;

function llenarBontones(){
    //Primero ponemos las posibles respuestas de forma aleatoria
    var BtnPreguntas = ['1','2','3','4'];
    var i,j,k;
    for (i = BtnPreguntas.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = BtnPreguntas[i - 1];
        BtnPreguntas[i - 1] = BtnPreguntas[j];
        BtnPreguntas[j] = k;
    }

    //Luego elegimos una pregunta de forma aleatoria
    preguntaAletoria = Math.floor(Math.random()*5);
    //VerificarRespuesta(preguntaAletoria);
    //Mostramos
    contCatParrafo.textContent = data[0][preguntaAletoria].categoria;
    contPreParrafo.textContent = data[0][preguntaAletoria].pregunta;
    getElement("btn"+BtnPreguntas[0]).textContent = data[0][preguntaAletoria].respuesta;
    getElement("btn"+BtnPreguntas[1]).textContent = data[0][preguntaAletoria].incorrecta1;
    getElement("btn"+BtnPreguntas[2]).textContent = data[0][preguntaAletoria].incorrecta2;
    getElement("btn"+BtnPreguntas[3]).textContent = data[0][preguntaAletoria].incorrecta3;
}

getElement("btn1").onclick = function(){
    if((document.getElementById("btn1").textContent).localeCompare(data[0][preguntaAletoria].respuesta)==0){
        console.log("respuesta correcta");
    }else{
        console.log("respuesta incorrecta");
    }};
getElement("btn2").onclick = function(){
    if((document.getElementById("btn2").textContent).localeCompare(data[0][preguntaAletoria].respuesta)==0){
        console.log("respuesta correcta");
    }else{
        console.log("respuesta incorrecta");
    }};
getElement("btn3").onclick = function(){
    if((document.getElementById("btn3").textContent).localeCompare(data[0][preguntaAletoria].respuesta)==0){
        console.log("respuesta correcta");
    }else{
        console.log("respuesta incorrecta");
    }
};
getElement("btn4").onclick = function(){
    if((document.getElementById("btn4").textContent).localeCompare(data[0][preguntaAletoria].respuesta)==0){
        console.log("respuesta correcta");
    }else{
        console.log("respuesta incorrecta");
    }};

llenarBontones();

/*data.forEach(pregunta => {
    contCatParrafo.textContent = pregunta.categoria;
    contPreParrafo.textContent = pregunta.pregunta;
    getElement("btn"+myArray[0]).textContent = pregunta.respuesta;
    getElement("btn"+myArray[1]).textContent = pregunta.incorrecta1;
    getElement("btn"+myArray[2]).textContent = pregunta.incorrecta2;
    getElement("btn"+myArray[3]).textContent = pregunta.incorrecta3;
});*/

function getElement(id){
    return document.getElementById(id);
}