import getName from './nameGenerator';
import './styles/main.scss';
import kSvg from './assets/k.svg';

const kImg = document.getElementById('kImg');
const greetElement = document.getElementById('greet');
kImg.src = kSvg;

setInterval(() => {
  greet();
}, 3000);

const greet = () => {
  const name = getName();
  greetElement.innerHTML = `Hello <b>${name}</b>, good to see you!`;
};

greet();
console.log(getName());
