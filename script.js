// Função para tratar o evento de cadastro
async function cadastrar(event) {
    event.preventDefault();

    const nome = document.getElementById('nomeCadastro').value;
    const email = document.getElementById('emailCadastro').value;
    const senha = document.getElementById('senhaCadastro').value;

    // Validação dos campos (exemplo: verificar se os campos obrigatórios estão preenchidos)

    // Exibir feedback visual (exemplo: mostrar um spinner de carregamento)

    try {
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
            // Exibir uma mensagem de erro ao usuário (exemplo: mostrar no elemento 'message')
            console.log(errorMessage); // Exibir o erro no console ou tratar de acordo com a necessidade
        }
    } catch (error) {
        // Tratar erros de conexão, por exemplo
        console.log(error); // Exibir o erro no console ou tratar de acordo com a necessidade
    } finally {
        // Remover feedback visual (exemplo: esconder o spinner de carregamento)
    }
}

// Função para tratar o evento de login
async function login(event) {
    event.preventDefault();

    const email = document.getElementById('emailLogin').value;
    const senha = document.getElementById('senhaLogin').value;

    // Validação dos campos (exemplo: verificar se os campos obrigatórios estão preenchidos)

    // Exibir feedback visual (exemplo: mostrar um spinner de carregamento)

    try {
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
            // Exibir uma mensagem de erro ao usuário (exemplo: mostrar no elemento 'message')
            console.log(errorMessage); // Exibir o erro no console ou tratar de acordo com a necessidade
        }
    } catch (error) {
        // Tratar erros de conexão, por exemplo
        console.log(error); // Exibir o erro no console ou tratar de acordo com a necessidade
    } finally {
        // Remover feedback visual (exemplo: esconder o spinner de carregamento)
    }
}

const registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', cadastrar);

const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', login);
// Função para tratar o evento de cadastro
async function cadastrar(event) {
    event.preventDefault();

    const nome = document.getElementById('nomeCadastro').value;
    const email = document.getElementById('emailCadastro').value;
    const senha = document.getElementById('senhaCadastro').value;

    // Validação dos campos (exemplo: verificar se os campos obrigatórios estão preenchidos)

    // Exibir feedback visual (exemplo: mostrar um spinner de carregamento)

    try {
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
            // Exibir uma mensagem de erro ao usuário (exemplo: mostrar no elemento 'message')
            console.log(errorMessage); // Exibir o erro no console ou tratar de acordo com a necessidade
        }
    } catch (error) {
        // Tratar erros de conexão, por exemplo
        console.log(error); // Exibir o erro no console ou tratar de acordo com a necessidade
    } finally {
        // Remover feedback visual (exemplo: esconder o spinner de carregamento)
    }
}

// Função para tratar o evento de login
async function login(event) {
    event.preventDefault();

    const email = document.getElementById('emailLogin').value;
    const senha = document.getElementById('senhaLogin').value;

    // Validação dos campos (exemplo: verificar se os campos obrigatórios estão preenchidos)

    // Exibir feedback visual (exemplo: mostrar um spinner de carregamento)

    try {
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
            // Exibir uma mensagem de erro ao usuário (exemplo: mostrar no elemento 'message')
            console.log(errorMessage); // Exibir o erro no console ou tratar de acordo com a necessidade
        }
    } catch (error) {
        // Tratar erros de conexão, por exemplo
        console.log(error); // Exibir o erro no console ou tratar de acordo com a necessidade
    } finally {
        // Remover feedback visual (exemplo: esconder o spinner de carregamento)
    }
}

const registerform = document.getElementById('registerForm');
registerForm.addEventListener('submit', cadastrar);

const loginform = document.getElementById('loginForm');
loginForm.addEventListener('submit', login);
