document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Pode adicionar aqui a lógica real para enviar dados para o servidor
        alert(`Nome: ${name}\nE-mail: ${email}\nSenha: ${password}`);
    });
});
