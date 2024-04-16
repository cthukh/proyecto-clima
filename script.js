function Aviso(){
    window.alert("Cargando clima");
}
setTimeout(Aviso,0.0100);


let ciudad1 = document.querySelector("#buenos_aires");
let ciudad2 = document.querySelector("#ciudad_de_mexico");
let ciudad3 = document.querySelector("#santiago");
let ciudad4 = document.querySelector("#sao_paulo");
let ciudad5 = document.querySelector("#quito");

let cc1 = document.querySelector("#container-ciudad-1");
let cc2 = document.querySelector("#container-ciudad-2");
let cc3 = document.querySelector("#container-ciudad-3");
let cc4 = document.querySelector("#container-ciudad-4");
let cc5 = document.querySelector("#container-ciudad-5");


ciudad1.addEventListener("click", function() {
    cc1.style.display = "block"; //activo
    cc2.style.display = "none";
    cc3.style.display = "none";
    cc4.style.display = "none";
    cc5.style.display = "none";
});

ciudad2.addEventListener("click", function() {
    cc1.style.display = "none"; //activo
    cc2.style.display = "block";
    cc3.style.display = "none";
    cc4.style.display = "none";
    cc5.style.display = "none";
});
ciudad3.addEventListener("click", function() {
    cc1.style.display = "none";
    cc2.style.display = "none";
    cc3.style.display = "block"; //activo
    cc4.style.display = "none";
    cc5.style.display = "none";
});
ciudad4.addEventListener("click", function() {
    cc1.style.display = "none";
    cc2.style.display = "none";
    cc3.style.display = "none";
    cc4.style.display = "block"; //activo
    cc5.style.display = "none";
});
ciudad5.addEventListener("click", function() {
    cc1.style.display = "none";
    cc2.style.display = "none";
    cc3.style.display = "none";
    cc4.style.display = "none";
    cc5.style.display = "block"; //activo
});

let cookies = document.querySelector("#btn-acept-cookie");
cookies.addEventListener("click", function (){
    document.querySelector("#footer").remove ();
    window.alert("has aceptado cookies");
});

document.getElementById("leer-mas").addEventListener("click", function() {
    window.alert("textoitextoitextoitextoitextoitextoitextoitextoitextoitextoitextoitextoitextoitextoitextoitextoitextoitextoitextoitextoitextoitextoitextoitextoitextoitextoitextoi");
});