function agregarTarea() {
    var elemeto = document.getElementById("nueva-tarea").value;
    var nuevoItem = document.createElement("li");
    nuevoItem.textContent = elemeto;
    document.getElementById("tarea-lista").appendChild(nuevoItem);
    document.getElementById("nueva-tarea").value = "";
}