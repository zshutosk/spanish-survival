const main = document.querySelector('main');
const textarea = document.getElementById('text');
const readBtn = document.getElementById('read');
const toggleBtn = document.getElementById('toggle');
const closeBtn = document.getElementById('close');
const box= document.getElementById('box');



const data = [
  {
    image: './img/estados.jpg',
    text: "Soy de Estados Unidos",
    text2:"I am from the United States"
  },
  {
    image: './img/bano.jpg',
    text: "¿Dónde está el baño?",
    text2:"Where is the bathroom?"
  },
  {
    image: './img/english.jpg',
    text: "Disculpe, ¿entiende inglés?",
    text2:"Excuse me, do you understand English?"
  },
  {
    image: './img/police.jpg',
    text: "¿Dónde puedo encontrar a un policía?",
    text2:"Where can I find a policeman?"
  },
  {
    image: './img/help.jpg',
    text: 'Necesito ayuda!',
    text2:"I need help!"
  },
  {
    image: './img/ambulance.jpg',
    text: "Llame una ambulancia",
    text2:"Call an ambulance"
  },
  {
    image: './img/como.jpg',
    text: "¿Cómo está?",
    text2:"How are you?"
  },
  {
    image: './img/sorry.jpg',
    text: "Lo siento",
    text2:"I'm Sorry"
  },
  {
    image: './img/speak-slow.jpg',
    text: "¿Puede hablar más despacio, por favor?",
    text2:"Can you speak more slowly, please?"
  },
  {
    image: './img/gracias.jpg',
    text: 'Gracias',
    text2:"Thank you"
  },
  {
    image: './img/see-you-later.jpg',
    text: 'Nos vemos',
    text2:"See you later"
  },
  {
    image: './img/price.jpg',
    text: '¿Qué precio tiene…?',
    text2:"What is the price?"
  },
  {
    image: './img/phone.jpg',
    text: '¿Puedo tomar prestado tu teléfono?',
    text2:"May I borrow your phone"
  },
  {
    image: './img/morning.jpg',
    text: 'Buenos diaz',
    text2:"Good Morning"
  },
  {
    image: './img/afternoon.jpg',
    text: 'Buenas tardes',
    text2:"Good Afternoon"
  },
  {
    image: './img/night.jpg',
    text: 'Buenas noches',
    text2:"Good Night"
  }
];


data.forEach(createBox);


// Init speech synth
const message = new SpeechSynthesisUtterance();
speechSynthesis.getVoices()
message.voiceURI = 'native';
message.volume = 0.8; // 0 to 1
message.rate = 0.9; // 0.1 to 10
message.pitch = 1; //0 to 2
message.lang = 'es-ES';


// Create speech boxes
function createBox(item) {
  const box = document.createElement('div');
  const { image, text, text2 } = item;

  box.classList.add('box');

  box.innerHTML = `
    <img src="${image}" alt="${text}" />
    <div class="overlay">
      <div class="translate">${text}</div>
    </div>
    <p class="info">${text2}</p> 
  `;

  box.addEventListener('click', () => {
    setTextMessage(text);
    speakText();

    // Add active effect
    box.classList.add('active');
    setTimeout(() => box.classList.remove('active'), 800);
  });

  main.appendChild(box);
}



//Set text
function setTextMessage(text) {
 message.text = text;
}

// Speak text
function speakText() {
  speechSynthesis.speak(message);
}

