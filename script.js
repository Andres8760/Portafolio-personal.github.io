// ==========================================
// CONFIGURACIÓN DE ALMACENAMIENTO
// ==========================================

const CLAVE_ALMACENAMIENTO = "datosCV";


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
// CARGAR DATOS GUARDADOS
// ==========================================

function cargarDatos() {

    const datosGuardados = localStorage.getItem(CLAVE_ALMACENAMIENTO);

    if (!datosGuardados) return;

    const datos = JSON.parse(datosGuardados);

    if (datos.textos) {

        elementosEditables.forEach(function (elemento, index) {

            if (datos.textos[index] !== undefined) {
                elemento.innerHTML = datos.textos[index];
            }

        });

    }

    if (datos.foto) {
        fotoPerfil.src = datos.foto;
    }

}


// ==========================================
// GUARDAR DATOS EN EL NAVEGADOR
// ==========================================

function guardarDatos() {

    const textos = [];

    elementosEditables.forEach(function (elemento) {
        textos.push(elemento.innerHTML);
    });

    const datos = {
        textos: textos,
        foto: fotoPerfil.src
    };

    localStorage.setItem(CLAVE_ALMACENAMIENTO, JSON.stringify(datos));

}


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


    // Guardar en localStorage para que persista

    guardarDatos();


    alert("✅ Cambios guardados. Se mantendrán aunque cierres o recargues la página.");

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


// ==========================================
// CARGAR DATOS AL ABRIR LA PÁGINA
// ==========================================

cargarDatos();
