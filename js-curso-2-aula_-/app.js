let listaNumeroSorteados = [];
let qtaDeNumerosSorteados = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;

function exibirTextoTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate:1.2});

}

function textDaTela() {
    exibirTextoTela('h1', 'Jogo do numero secreto');
    exibirTextoTela('p', 'Escolha um numero entre 1 e 10');
}

textDaTela();

function verificarChute(){
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto){

        let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Voce descobriu o numero secreto com ${tentativa} ${palavraTentativa}`;
        exibirTextoTela('h1', 'Voce acertou!');
        exibirTextoTela('p', mensagemTentativa );
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else {

        if ( chute > numeroSecreto){

            exibirTextoTela('p', 'Numero secreto e menor.');
        } else {

            exibirTextoTela('p', 'Numero secreto e maior');
        }

        tentativa++;
        limparCampo();
    }

}

function gerarNumeroAleatorio() {
    
    let numeroEscolhido = parseInt(Math.random() * qtaDeNumerosSorteados + 1);
    let quantidadeDeElementosNaLista = listaNumeroSorteados.length;

    if(quantidadeDeElementosNaLista == qtaDeNumerosSorteados){

        listaNumeroSorteados = [];
    }

    if (listaNumeroSorteados.includes(numeroEscolhido)){

        return gerarNumeroAleatorio();
    }else{

        listaNumeroSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }

}

function limparCampo () {
    
    chute = document.querySelector('input');
    chute.value = '';

}

function reiniciarGame() {

    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativa = 1;
    textDaTela();
    document.getElementById('reiniciar').setAttribute('disabled',true);

}

