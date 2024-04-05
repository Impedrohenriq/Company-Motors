const icon =document.querySelector('.carro_botao')
const menu =document.querySelector('.menu_nav')
let carroMovido = false; // Variável para rastrear se o carro foi movido ou não

icon.onclick = () =>{
  menu.classList.toggle('ativo')
  if (!carroMovido) {
    icon.classList.add('clicked'); // Adiciona a classe "clicked" para mover o carro
} else {
    icon.classList.remove('clicked'); // Remove a classe "clicked" para mover o carro de volta
}
carroMovido = !carroMovido; // Inverte o estado da variável para indicar se o carro foi movido ou não
};