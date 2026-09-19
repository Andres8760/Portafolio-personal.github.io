// ==========================================
// ELEMENTOS
// ==========================================

const botonEditar = document.getElementById("botonEditar");
const botonGuardar = document.getElementById("botonGuardar");

const botonFoto = document.getElementById("botonFoto");
const inputFoto = document.getElementById("inputFoto");

const fotoPerfil = document.getElementById("fotoPerfil");

const elementosEditables =
    document.querySelectorAll(".editable");


// ==========================================
// ACTIVAR MODO EDICIÓN
// ==========================================

botonEditar.addEventListener("click", function () {

    elementosEditables.forEach(function (elemento) {

        elemento.contentEditable = true;

        elemento.classList.add("editando");

    });


    // Mostrar botones

    botonEditar.classList.add("oculto");

    botonGuardar.classList.remove("oculto");

    botonFoto.classList.remove("oculto");

});


// ==========================================
// GUARDAR CAMBIOS
// ==========================================

botonGuardar.addEventListener("click", function () {

    elementosEditables.forEach(function (elemento) {

        elemento.contentEditable = false;

        elemento.classList.remove("editando");

    });


    botonEditar.classList.remove("oculto");

    botonGuardar.classList.add("oculto");

    botonFoto.classList.add("oculto");


    alert("✅ Cambios guardados en la página.");

});


// ==========================================
// CAMBIAR FOTO
// ==========================================

inputFoto.addEventListener("change", function (evento) {

    const archivo = evento.target.files[0];


    if (archivo) {

        const lector = new FileReader();


        lector.onload = function (e) {

            fotoPerfil.src = e.target.result;

        };


        lector.readAsDataURL(archivo);

    }

});
