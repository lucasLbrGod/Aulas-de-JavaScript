
function entrar() {
    let gmail = document.getElementById("gmail").value;
    let password = document.getElementById("password").value;
    let mensagem = document.getElementById("mensagem");

    if (gmail === "" || password === "") {
        mensagem.innerHTML = "Por favor, preencha todos os campos.";
        mensagem.style.color = "red";

    } else if (gmail === "lucas@gmail.com" && password === "123456") {
        mensagem.innerHTML = "Login bem-sucedido!";
        mensagem.style.color = "green";
        window.location.href = "./home.html";

    } else {
        mensagem.innerHTML = "E-mail ou senha incorretos.";
        mensagem.style.color = "red";
    }

}