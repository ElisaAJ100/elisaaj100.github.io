if(document.querySelector('h1') !== null){
    const elemento = 'h1';
    alert('h1 selecionado');
    const botao = document.createElement('button')
    boatao.textContent = '+';
    botao.textContent = '-';
}
else{
    if(document.querySelector('h2') !== null){
        const elemento = 'h2';
        alert('h2 selecionado');
    }
    else{
        if(document.querySelector('h3') !== null){
            const elemento = 'h3';
            alert('h3 selecionado');
        }
        else{
            if(document.querySelector('h4') !== null){
                const elemento = 'h4';
                alert('h4 selecionado');
            }
            else{
                if(document.querySelector('h5') !== null){
                    const elemento = 'h5';
                    alert('h5 selecionado');
                }
                else{
                    if(document.querySelector('h6') !== null){
                        const elemento = 'h6';
                        alert('h6 selecionado');
                    }
                }
            }
        }
    }
}
