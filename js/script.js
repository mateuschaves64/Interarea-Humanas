const nome = document.getElementById('nome');
const email = document.getElementById('email');
const datanasci = document.getElementById('nascimento');
const tel = document.getElementById('telefone');
const ambi = document.getElementById('ambiente');
const restri = document.getElementById('restricoesAlimentares');
const btn = document.getElementById('botaoEnviar');
const usuarioDisplay = document.getElementById('usuario'); // Pegando o elemento da pg2
const mens = document.getElementById('feedback');
const avalia = document.getElementById('av');
const botao = document.getElementById('button');
const mais = document.getElementById('+');


if (btn) {
    btn.addEventListener('click', function() {
        if (nome.value !== '' && email.value !== '' && tel !== '') {

            // Salva o nome no "banco de dados" do navegador
            localStorage.setItem('nomeUsuario', nome.value);

            alert('Cadastro concluído!');
            window.location.href = "pg2.html";
            //sinaliza que o cadastro foi realizado e abre a pg2
        } else {
            alert('Preencha os campos para continuar');
        }
    });
}

//Aqui é os codigos da paigna 2:

// Quando a página 2 carregar, ela verifica se existe um nome salvo
window.addEventListener('load', function() {
    const nomeSalvo = localStorage.getItem('nomeUsuario');

    if (nomeSalvo && usuarioDisplay) {
        usuarioDisplay.textContent = nomeSalvo;
    }
});

botao.addEventListener('click', function() {
    if (avalia.value.trim() != '') {
        mens.textContent = 'Sua avaliação foi encaminhada para a nossa equipe!';
        avalia.value = ''
    } else {
        alert('O campo de avaliação se encontra em branco, por favor, insira sua avaliação');
    }
});

function openPanel(nome, horario, endereco, telefone, desc, imagem, icones) {
    document.getElementById('panel-title').innerText = nome;
    document.getElementById('panel-time').innerText = horario;
    document.getElementById('panel-address').innerText = endereco;
    document.getElementById('panel-phone').innerText = telefone;
    document.getElementById('panel-description').innerText = desc;
    document.getElementById('panel-img').src = imagem;
    document.getElementById('panel-icons').innerText = icones;
    document.getElementById('side-panel').classList.add('active');
    document.getElementById('overlay').classList.add('active');
}

function closePanel() {
    document.getElementById('side-panel').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
}