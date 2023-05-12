const n = document.querySelector("#datoNombre")
const a = document.querySelector("#datoApellido")
const c = document.querySelector("#datoCorreo")
const d = document.querySelector("#datoDirección")
const t = document.querySelector("#datoTelefono")
const e = document.querySelector("#datoFecha")

function almacenarData(){
    //capturar la data del html
    let nom = document.getElementById("nombre").value
    let ape = document.getElementById("apellido").value
    let cor = document.getElementById("correo").value
    let dic = document.getElementById("dirección").value
    let tel = document.getElementById("telefono").value
    let cha = document.getElementById("fecha").value
   
    //almacenamiento de la data con localStorage
    localStorage.setItem("Nombre", nom)
    localStorage.setItem("Apellido", ape)
    localStorage.setItem("Correo", cor)
    localStorage.setItem("Dirección", dic)
    localStorage.setItem("Telefono", tel)
    localStorage.setItem("Fecha", cha)

 
    /*Limpiando los campos o inputs*/
    document.getElementById("nombre").value = ""
    document.getElementById("apellido").value = ""
    document.getElementById("correo").value = "";
    document.getElementById("dirección").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("fecha").value = "";
    
}
function cargarData(){
    let nombre,apellido
    nombre = localStorage.getItem("Nombre")
    apellido = localStorage.getItem("Apellido")
    correo = localStorage.getItem("Correo");
    dirección = localStorage.getItem("Dirección");
    telefono = localStorage.getItem("Telefono");
    fecha = localStorage.getItem("Fecha");
    /*Mostrar datos almacenados*/      
    n.innerHTML = "<b>"+nombre+"</b>"
    a.innerHTML = "<b>"+apellido+"</b>";
    c.innerHTML = "<b>"+correo+"</b>";
    d.innerHTML = "<b>"+dirección+"</b>";
    t.innerHTML = "<b>"+telefono+"</b>";
    e.innerHTML = "<b>"+fecha+"</b>";
}