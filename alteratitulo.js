document.addEventListener('DOMContentLoaded', InserirBotao)
function start(){
    if(document.querySelector('h1') !== null){
        const elemento = 'h1';
        alert('h1 selecionado');
    }//fim if com h1
    else{
        if(document.querySelector('h2') !== null){
            const elemento = 'h2';
            alert('h2 selecionado');
        }//fim if com h2
        else{
            if(document.querySelector('h3') !== null){
                const elemento = 'h3';
                alert('h3 selecionado');
            }//fim if com h3
            else{
                if(document.querySelector('h4') !== null){
                    const elemento = 'h4';
                    alert('h4 selecionado');
                }//fim if com h4
                else{
                    if(document.querySelector('h5') !== null){
                        const elemento = 'h5';
                        alert('h5 selecionado');
                    }//fim if com h5
                    else{
                        if(document.querySelector('h6') !== null){
                            const elemento = 'h6';
                            alert('h6 selecionado');
                        } // fim if com h6
                    }//fim else
                }//fim else
            }//fim else
        }//fim else
    }//fim else
}//fim função start
function AlmentarTamanhoTexto(elemento) {
    elementoSelecionado = document.querySelector(elemento);
    elementoSelecionado.style.size += x;
}// fim função almentar tamanho

function DiminuirTamanhoTexto(elemento) {
    elementoSelecionado = document.querySelector(elemento);
    elementoSelecionado.style.size -= x;
}//fim função diminuir tamanho

function InserirBotao() {
    div = document.createElement('div');
    div.style.backgroundColor = 'red';
    div.innerHTML = `
    <button onclick='AlmentarTamanhoTexto()'>+</button>
    <button onclick='DiminuirTamanhoTexto()'>-</button>
    `;
    document.body.prepend(elemento);
}//fim função que inseri botões
