// inserir nome1
let userName = prompt("Por favor, insira seu nome:");
let welcomeMessage = document.querySelector('#nome');
if (userName) {
    welcomeMessage.textContent = "Bem-vindo, " + userName + "!";
}
//lampada2
const btn_onoff = document.querySelector('#btn-onoff')
 const lampada = document.querySelector('#lamp') 
 const icone_onoff = document.querySelector("#icon-onoff") 
  const body = document.querySelector('body') 
  let ligado = true
   btn_onoff.addEventListener('click', () => {
     if (ligado){
        lampada.src = "lampada-ligada.gif"
         icone_onoff.innerHTML = toggle_off 
         body.style.backgroundColor = "black" 
         body.style.color = 'white'
          icone_onoff.style.color = 'white' 
          ligado = false
     } else { 
            lampada.src = "lampada-desligada.gif" 
     icone_onoff.innerHTML = 'toggle_on'
      body.style.backgroundColor = "white" 
      body.style.color = 'black'
      icone_onoff.style.color = 'black'
      ligado = true
     }
        } )

//senha3                                                                                                                                         

