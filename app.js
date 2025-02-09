let amigos = [];
let amigosSorteados = []; 

function verificarNombre() {
    let nombreDeAmigo = document.querySelector("#amigo").value.trim();

    if (nombreDeAmigo === "") {
        alert("Por favor, inserte un nombre");
        return null;
    }

    if (amigos.includes(nombreDeAmigo)) {
        alert("Este nombre ya está registrado. Por favor, inserte uno nuevo");
        return null;
    }

    amigos.push(nombreDeAmigo);
    return nombreDeAmigo;
}

function limpiarCaja() {
    document.querySelector("#amigo").value = "";
}

function agregarAmigo() {
    let nombreAmigo = verificarNombre();

    if (nombreAmigo === null) return;

    limpiarCaja();

    let lista = document.querySelector("#listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Todos los amigos ya han sido sorteados.");
        return;
    } 
    
    document.querySelector("#resultado").innerHTML = "";

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos.splice(indiceAleatorio, 1)[0]; 
    amigosSorteados.push(amigoSorteado);

    let resultado = document.querySelector("#resultado");
    let li = document.createElement("li");
    li.textContent = `El amigo secreto sorteado es: ${amigoSorteado}`;
    resultado.appendChild(li);
}