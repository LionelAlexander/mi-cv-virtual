function infoLaboral(informacion) {
    let infoElemento = document.getElementById(informacion);
if ( infoElemento.style.display === "none") {
    infoElemento.style.display = "block";
} else {
    infoElemento.style.display = "none";
}

}