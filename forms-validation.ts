// Definindo uma interface para representar um usuário
interface User {
    username: string;
    password: string;
  }
  
  // Definindo os usuários válidos
  const users: User[] = [
    { username: "mascate", password: "123" },
    { username: "lanchonete", password: "123" },
    { username: "cafeteria", password: "123" }
  ];
  
  // Função para validar o login
  function validateLogin(form: HTMLFormElement, redirectTo: string): boolean {
    const usernameInput = form.querySelector('input[type="text"]') as HTMLInputElement;
    const passwordInput = form.querySelector('input[type="password"]') as HTMLInputElement;
  
    // Obtém o usuário correspondente ao username fornecido
    const user = users.find(u => u.username === usernameInput.value);
  
    // Verifica se encontrou um usuário com o username e se a senha está correta
    if (user && user.password === passwordInput.value) {
      // Redireciona para a página especificada
      window.location.href = redirectTo;
      return true; // Permitir envio do formulário
    } else {
      alert("Usuário ou senha incorretos!");
      return false; // Impedir envio do formulário
    }
  }
  
  // Adiciona manipuladores de eventos para os formulários
  const formMascate = document.getElementById('form-mascate') as HTMLFormElement;
  if (formMascate) {
    formMascate.addEventListener('submit', function(event) {
      event.preventDefault(); // Impede o envio padrão do formulário
      validateLogin(formMascate, "masc-home.html");
    });
  }
  
  const formLanchonete = document.getElementById('form-lanchonete') as HTMLFormElement;
  if (formLanchonete) {
    formLanchonete.addEventListener('submit', function(event) {
      event.preventDefault(); // Impede o envio padrão do formulário
      validateLogin(formLanchonete, "lc-home.html");
    });
  }
  