const subtitulos = document.querySelectorAll('h2');
const topicos = new Array();
subtitulos.forEach(element => {
	topicos.push(element.textContent);
	
	const x = document.createElement('a');
	x.setAttribute("name", element.textContent);
	element.append(x);
});
const lista = document.querySelector('ol');
topicos.forEach(topico => {
	const item = document.createElement('li');
	const linkelemnto = document.createElement('a');
	lista.append(item);
	item.append(linkelemnto);
	linkelemnto.setAttribute("href", `#${topico}`);
	linkelemnto.textContent = topico;
});