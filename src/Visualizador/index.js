var btnVerHora = document.querySelector('#verHora');
btnVerHora.addEventListener('click', mostrarModal);
var btnSair = document.querySelector('#sair');
btnSair.addEventListener('click', sairDoModal);

function mostrarModal() {
    var img = document.querySelector('#img');
    var input = document.querySelector('#nome');
    var fundo = document.querySelector('#fundo');
    var paragrafo = document.querySelector('#paragrafo');

    var newHorario = new Date();
    var hora = newHorario.getHours();
    var minuto = newHorario.getMinutes();
    var inputValue = input.value;
    fundo.style.display = 'block';

    if (hora >= 0 && hora <= 12) {
        paragrafo.innerText = `Boa dia! Senhor ${inputValue}. Agora são ${hora}:${minuto} da manhã.`;
        img.src = '../Assets/img/manhã.jpg';
        fundo.style.background = '#e2cd9f'

    } else if (hora > 12 && hora <= 18) {
        paragrafo.innerText = `Boa Tarde! Senhor ${inputValue}. Agora são ${hora}:${minuto} da tarde.`;
        img.src = "../Assets/img/tarde.jpg";
        fundo.style.background = "#b9846f";
    } else if (hora > 18 && hora <= 23) {
        paragrafo.innerText = `Boa noite! Senhor ${inputValue}. Agora são ${hora}:${minuto} da noite.`;
        img.src = '../Assets/img/noite.jpg';
        fundo.style.background = '#515154';
    } else {
        fundo.style.display = 'none';
        alert('Hora não existente.');
        alert('Tente novamente.')
    }
}

function sairDoModal() {
    fundo.style.display = 'none';
}
