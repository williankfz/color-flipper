//Criar um array com no minimo 5 cores, ao clicar no botão as cores de background irão mudando de forma randomica, o código da cor deve ser mostrada na tela.
//Baseado no projeto: https://www.freecodecamp.org/news/javascript-projects-for-beginners/#how-to-create-a-color-flipper
const body = document.querySelector('body');
const button = document.querySelector('button');
const colorSpan = document.querySelector(".color");
const coloArray = ['#4F4F4F', '#6959CD', '#40E0D0', '#98FB98', '#B8860B', '#8A2BE2', '#FF69B4', '#B22222', '#FF8C00', '#FFFF00'];

function handleClick(e){
  e.preventDefault();
  const random = coloArray[Math.floor((Math.random() * coloArray.length))];  
  body.style.background = random;
  colorSpan.innerHTML = random;
  colorSpan.style.color = random;
}

button.addEventListener('click', handleClick);