// Função para tratar o evento de cadastro
async function cadastrar(event) {
    event.preventDefault();

    const nome = document.getElementById('nomeCadastro').value;
    const email = document.getElementById('emailCadastro').value;
    const senha = document.getElementById('senhaCadastro').value;

    const response = await fetch('URL_DA_API/cadastrar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome, email, senha })
    });

    if (response.ok) {
        const message = document.getElementById('message');
        message.innerHTML = 'Cadastro realizado com sucesso!';
        message.style.color = 'green';
    } else {
        const errorMessage = await response.text();
        console.log(errorMessage); // Exibir o erro no console ou tratar de acordo com a necessidade
    }
}

// Função para tratar o evento de login
async function login(event) {
    event.preventDefault();

    const email = document.getElementById('emailLogin').value;
    const senha = document.getElementById('senhaLogin').value;

    const response = await fetch('URL_DA_API/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, senha })
    });

    if (response.ok) {
        const message = document.getElementById('message');
        message.innerHTML = 'Login realizado com sucesso!';
        message.style.color = 'green';
    } else {
        const errorMessage = await response.text();
        console.log(errorMessage); // Exibir o erro no console ou tratar de acordo com a necessidade
    }
}

const registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', cadastrar);

const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', login);
