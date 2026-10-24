const formCadastro = document.getElementById("formCadastro");

const senha = document.getElementById("password");

const confirmarSenha = document.getElementById("confirmPassword");

const mensagemErro = document.getElementById("mensagemErro");

formCadastro.addEventListener("submit", function(event) {
    event.preventDefault();

    const valorSenha = senha.value;

    const valorConfirmacao = confirmarSenha.value;
    
    if (valorSenha.length < 8) {
        mensagemErro.textContent = "A senha deve conter pelo menos 8 caracteres";
    } else if (valorConfirmacao !== valorSenha) {
        mensagemErro.textContent = "As senhas devem ser iguais"
    } else {
        mensagemErro.textContent = "";
    }    
    

});