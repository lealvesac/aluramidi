//Função para da play no som.
function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);         
    if (elemento && elemento.localName == 'audio') {
        return elemento.play();
    }
    return alert('Elemento não encontrato.')
}

//Lista das teclas que tem no HTML.
const listaDeTeclas = document.querySelectorAll('.tecla');

//Estrutura de repetição para indexar os instrumentos.
for (let i = 0; listaDeTeclas.length; i++) {

    const tecla = listaDeTeclas[i]; //Mapemento das teclas.
    const instrumento = tecla.classList[1]; //Mapeamento dos instrumentos as teclas.
    const idAudio = `#som_${instrumento}`; //Mapeamento dos ID das teclas.
    
    //Enviando o evento para função tocaSom apos mapear o ID.
    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}