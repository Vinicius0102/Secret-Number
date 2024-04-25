let listaNumeroSorteados = [];
let qtaDeNumerosSorteados = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;

function exibirTextoTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'US English Female', {rate:1.1});

}

function textDaTela() {
    exibirTextoTela('h1', 'Game Secret Number');
    exibirTextoTela('p', 'Choose a number between 1 and 10');
}

textDaTela();

function verificarChute(){
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto){

        let palavraTentativa = tentativa > 1 ? 'attempts' : 'attempt';
        let mensagemTentativa = `Congratulations! You discovered the secret number with ${tentativa} ${palavraTentativa}`;
        exibirTextoTela('h1', 'You got it right!');
        exibirTextoTela('p', mensagemTentativa );
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else {

        if ( chute > numeroSecreto){

            exibirTextoTela('p', 'Try again, number is lower.');
        } else {

            exibirTextoTela('p', 'Try again, number is higher');
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

