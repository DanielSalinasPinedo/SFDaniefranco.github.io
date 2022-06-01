const contenedor = document.querySelector(".contenedor");
const contEncabezado = document.createElement("div");
const contPregunta = document.createElement("div");
const contPreParrafo = document.createElement("p");
const contCategoria = document.createElement("div");
const contCatParrafo = document.createElement("p")
const contBtn = document.createElement("div")

contEncabezado.className = "encabezado";
contPregunta.className = "pregunta";
contCategoria.className = "categoria";


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

