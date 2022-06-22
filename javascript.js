const subtitulos = document.querySelectorAll('h3');
const topicos = new Array();
subtitulos.forEach(titulo => {
    topicos.push(titulo.textContent);
    const Name = document.createElement("a");
    Name.setAttribute("name", element.textContent);
	element.append(arco);
});
ListaCriada = document.querySelector('ol');
topicos.forEach(topico => {
    const item = document.createElement('li');
    const linkelemento = document.createElement('a');
    item.textContent = topico;
    ListaCriada.append(item);
    item.append(linkelemento);
    linkelemento.setAttribute('href', `#${topico}`);
    linkelemento.textContent = topico;
});
