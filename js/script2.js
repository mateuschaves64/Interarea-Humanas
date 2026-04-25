const nomeEst = document.getElementById('nome-est');
const endereco = document.getElementById('endereco');
const tipoEst = document.getElementById('tipo-est');
const opVeg = document.getElementById('op-veg');
const tel1 = document.getElementById('tel1');
const tel2 = document.getElementById('tel2');
const historia = document.getElementById('historia');
const horario1 = document.getElementById('horario1');
const horario2 = document.getElementById('horario2');
const btnCadastrarEst = document.getElementById('btnCadastrarEst');

if (btnCadastrarEst) {
    btnCadastrarEst.addEventListener('click', function() {
        if (nomeEst.value !== '' && tipoEst.value !== '' && endereco !== '' && opVeg !== '' && tel1 !== '' && tel2 !== '' && historia !== '' && horario1 !== '' && horario2 !== '') {
            alert('Cadastro concluído!');
            window.location.href = "pg2.html";
            //sinaliza que o cadastro foi realizado e abre a pg2
        } else {
            alert('Preencha os campos para continuar');
        }
    });
}