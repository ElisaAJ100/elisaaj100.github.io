
function mostraHora() {
    let titulo = document.querySelector('h2');
    let agora = new Date();
    titulo.textContent = agora.toLocaleDateString();
}
mostraHora();
setInterval(mostraHora,1000);