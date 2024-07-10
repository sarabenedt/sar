// inserir nomeQ1
let userName = prompt("Por favor, insira seu nome:");
let welcomeMessage = document.querySelector('#nome');
if (userName) {
    welcomeMessage.textContent = "Bem-vindo, " + userName + "!";
}
//lampadaQ2
const btn_onoff = document.querySelector('#btn-onoff')
const lampada = document.querySelector('#lamp')
const icone_onoff = document.querySelector("#icon-onoff")
const body = document.querySelector('body')

let ligado = true
btn_onoff.addEventListener('click', () => {
    if (ligado) {
        lampada.src = "lampada-desligada.gif"
        icone_onoff.src = "togle.png"
        body.style.backgroundColor = "black"
        body.style.color = 'white'
        icone_onoff.style.color = 'white'
        ligado = false
    } else {
        lampada.src = "lampada-ligada.gif"
        icone_onoff.src = "togle.png"
        body.style.backgroundColor = "white"
        body.style.color = 'black'
        icone_onoff.style.color = 'black'
        ligado = true
    }
})

//senhaQ3                                                                                                                                         

const ipt_senha = document.querySelector('#senha')
const btn_olho = document.querySelector('#btn-olho')
const icn_olho = document.querySelector('#icon-olho')
let visivel = false
btn_olho.addEventListener('click', () => {
    if (visivel) {
        ipt_senha.type = 'password'
        icn_olho.src = "icom1.png"
        visivel = false
    } else {
        ipt_senha.type = 'text'
        icn_olho.src = "icon2.png"
        visivel = true
    }

})
//senhaQ4





