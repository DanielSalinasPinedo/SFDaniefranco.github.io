import { data } from "./preguntas.js";

const contenedor = document.querySelector(".contenedor");
const contEncabezado = document.createElement("div");
const contPregunta = document.createElement("div");
const contPreParrafo = document.createElement("p");
const contCategoria = document.createElement("div");
const contCatParrafo = document.createElement("p")
const contBtn = document.createElement("div")

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
for(var i = 1; i<=4; i++){
    const contBtn = document.createElement("div")
    contBtn.className = "btn";
    contBtn.id = "btn"+i;
    contBtn.textContent = "btn";
    contEncabezado.append(contBtn)
}

contenedor.appendChild(contEncabezado)

var myArray = ['1','2','3','4'];
var i,j,k;
for (i = myArray.length; i; i--) {
    j = Math.floor(Math.random() * i);
    k = myArray[i - 1];
    myArray[i - 1] = myArray[j];
   myArray[j] = k;
}
console.log(myArray)

llenarPreguntas();

function llenarPreguntas(){
    contCatParrafo.textContent = data[0].categoria;
    contPreParrafo.textContent = data[0].pregunta;
    getElement("btn"+myArray[0]).textContent = data[0].respuesta;
    getElement("btn"+myArray[1]).textContent = data[0].incorrecta1;
    getElement("btn"+myArray[2]).textContent = data[0].incorrecta2;
    getElement("btn"+myArray[3]).textContent = data[0].incorrecta3;
}

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