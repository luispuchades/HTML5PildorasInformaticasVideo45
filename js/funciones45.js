///*global window*/
/*jslint browser: true, for:true */

/**JavaScript Document
 * Curso: HMTL5 - Pildoras Informáticas - API DRAG&DROP VI
 * Origin: Capitulo44.html ==> Arrastrando archivos
 */

// "use strict";


//1. Definición de Objetos y Variables
var miUbicacion;
var dameUbicacion;



//1.1 Extracción de elementos desde HTML
miUbicacion = document.getElementById("ubicacion");
dameUbicacion = document.getElementById("dame-ubicacion");

//2. Definición de Funciones
function mostrarPosicion(posicion) {
    var latitud;
    var longitud;
    var exactitud;
    var ubicacion;

    latitud = "Latitud: " + posicion.coords.latitude + "<br />";
    longitud = "Longitud: " + posicion.coords.longitude + "<br />";
    exactitud = "Exactitud: " + posicion.coords.accuracy + "<br />";
    ubicacion = latitud + longitud + exactitud;

    miUbicacion.innerHTML = ubicacion;
}

function obtenerUbicacion() {
// Llamamos al método getCurrentPosition perteneciente al API geolocation que
// pertenece al objetoJS navigator y guarda como evento el objeto position que
// devuelve
    navigator.geolocation.getCurrentPosition(mostrarPosicion);
}

function comenzar() {
    dameUbicacion.addEventListener("click", obtenerUbicacion, false);
}


//3. Asignación de Eventos
document.addEventListener("DOMContentLoaded", comenzar, false);
