
function mostraHora() {
    let titulo = document.querySelector('h1');
    let agora = new Date();
    titulo.textContent = agora.toLocaleDateString();
}
mostraHora();
setInterval(mostraHora,1000);
const titulos = document.querySelectorAll('h2');
const topicos = new Array();
titulos.forEach(titulo => {
    topicos.push(titulo.textContent);
});
paragrafo = document.querySelector('p');
paragrafo.textContent = topicos
