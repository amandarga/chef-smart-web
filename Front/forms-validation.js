// Definindo os usuários válidos
var users = [
    { username: "mascate", password: "123" },
    { username: "lanchonete", password: "123" },
    { username: "cafeteria", password: "123" }
];
// Função para validar o login
function validateLogin(form, redirectTo) {
    var usernameInput = form.querySelector('input[type="text"]');
    var passwordInput = form.querySelector('input[type="password"]');
    // Obtém o usuário correspondente ao username fornecido
    var user = users.find(function (u) { return u.username === usernameInput.value; });
    // Verifica se encontrou um usuário com o username e se a senha está correta
    if (user && user.password === passwordInput.value) {
        // Redireciona para a página especificada
        window.location.href = redirectTo;
        return true; // Permitir envio do formulário
    }
    else {
        alert("Usuário ou senha incorretos!");
        return false; // Impedir envio do formulário
    }
}
// Adiciona manipuladores de eventos para os formulários
var formMascate = document.getElementById('form-mascate');
if (formMascate) {
    formMascate.addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário
        validateLogin(formMascate, "masc-home.html");
    });
}
var formLanchonete = document.getElementById('form-lanchonete');
if (formLanchonete) {
    formLanchonete.addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário
        validateLogin(formLanchonete, "lc-home.html");
    });
}
