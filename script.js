document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email && password) {
        // Aqui você pode adicionar a lógica de autenticação

        // Exemplo de mensagem de sucesso
        showMessage('success', 'Login realizado com sucesso!');
    } else {
        // Exemplo de mensagem de erro
        showMessage('error', 'Por favor, preencha todos os campos.');
    }
});

function showMessage(type, message) {
    var messageDiv = document.getElementById('message');
    messageDiv.innerHTML = message;
    messageDiv.className = type;
}
