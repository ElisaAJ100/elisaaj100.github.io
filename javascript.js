const subtitulos = document.querySelectorAll('h2');
const topicos = new Array();
subtitulos.forEach(titulo => {
    topicos.push(titulo.textContent);
});
ListaCriada = document.querySelector('ol');
topicos.forEach(topico => {
    const centro = document.createElement('center')
    const item = document.createElement('li');
    item.textContent = topico;
    ListaCriada.append(item);
});
