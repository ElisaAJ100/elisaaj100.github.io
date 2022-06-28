document.addEventListener('DOMContentLoaded', start)

let elemento;
let tamanho;

//função start começa o código. Tem como tarefa selecionar o título e chamar outras funções
function start(){
    if(document.querySelector('h1') !== null){
        elemento = 'h1';
		InserirBotao();
    }//fim if com h1
    else{
        if(document.querySelector('h2') !== null){
            elemento = 'h2';
			InserirBotao();
        }//fim if com h2
        else{ 
            if(document.querySelector('h3') !== null){
                elemento = 'h3';
				InserirBotao();
            }//fim if com h3
            else{
                if(document.querySelector('h4') !== null){
                    elemento = 'h4';
					InserirBotao();
                }//fim if com h4
                else{
                    if(document.querySelector('h5') !== null){
                        elemento = 'h5';
						InserirBotao();
                    }//fim if com h5
                    else{
                        if(document.querySelector('h6') !== null){
                            elemento = 'h6';
							InserirBotao();
                        } // fim if com h6
                    }//fim else
                }//fim else
            }//fim else
        }//fim else
    }//fim else
}//fim função start
tamanho = 50;
function AlmentarTamanhoTexto() {
    elementoSelecionado = document.querySelector(elemento);
	tamanho = tamanho + 10;
    elementoSelecionado.style.fontSize = `${tamanho}px`;
}// fim função almentar tamanho

function DiminuirTamanhoTexto() {
    elementoSelecionado = document.querySelector(elemento);
	tamanho = tamanho - 10;
    elementoSelecionado.style.fontSize = `${tamanho}px`;
}//fim função diminuir tamanho

function InserirBotao() {
    div = document.createElement('div');
    div.style.backgroundColor = 'red';
    div.innerHTML = `
    <button onclick='AlmentarTamanhoTexto()'>+</button>
    <button onclick='DiminuirTamanhoTexto()'>-</button>
    `;
    document.body.prepend(div);
}//fim função que inseri botões