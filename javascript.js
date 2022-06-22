const subtitulos = document.querySelectorAll('h2');
const topicos = new Array();
subtitulos.forEach(titulo => {
    topicos.push(titulo.textContent);
});
L = document.querySelector('ol');
topicos.forEach(topico => {
    const item = document.createElement('li');
    item.textContent = topico;
    L.append(item);
});
