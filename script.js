// inserir nome
let userName = prompt("Por favor, insira seu nome:");
let welcomeMessage = document.createElement('div');
if (userName) {
    welcomeMessage.textContent = "Bem-vindo, " + userName + "!";
} else {
    welcomeMessage.textContent = "Bem-vindo, visitante!";
}
welcomeMessage.style.marginTop = "20px";
welcomeMessage.style.fontSize = "24px";
welcomeMessage.style.color = "#333";
document.body.appendChild(welcomeMessage);

//lampada
function toggleLight() {
    var light = document.getElementById("light");
    if (light.src.includes("lampada-desligada.gif")) {
        light.src = "lampada-ligada.gif";
    } else {
        light.src = "lampada-desligada.gif";
    }
}

//senha
function togglePassword() {
    var passwordField = document.getElementById("password");
    var toggleIcon = document.querySelector(".toggle-password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleIcon.classList.remove("fa-eye");
        toggleIcon.classList.add("fa-eye-slash");
    } else {
        passwordField.type = "password";
        toggleIcon.classList.remove("fa-eye-slash");
        toggleIcon.classList.add("fa-eye");
    }
} 

