<html><head><base href="https://websimcreationengine.ai/futuristic-text-to-speech/">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Conversor Futurista de Texto a Voz - Multi-Ventana</title>
<style>
:root {
  --bg-color: rgba(10, 15, 25, 0.8);
  --text-color: #e0e0ff;
  --neon-blue: #00f3ff;
  --neon-green: #00ff9d;
  --neon-purple: #b300ff;
  --neon-red: #ff0055;
}

body {
  margin: 0;
  font-family: 'Arial', sans-serif;
  background: linear-gradient(45deg, #000, #111, #001), url('https://websimcreationengine.ai/futuristic-text-to-speech/bear-background.png') no-repeat center center fixed;
  background-size: cover;
  color: var(--text-color);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
}

body::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: -1;
}

.container {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.side-buttons {
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: sticky;
  top: 20px;
  align-self: flex-start;
  margin-top: 7cm;
}

.side-button {
  background: var(--bg-color);
  border: 2px solid var(--neon-blue);
  color: var(--text-color);
  padding: 10px 15px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 180px;
}

.side-button:hover {
  background: var(--neon-blue);
  color: #000;
  box-shadow: 0 0 20px var(--neon-blue);
}

.side-button i {
  margin-right: 10px;
}

.window {
  background: var(--bg-color);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  padding: 20px;
  margin: 10px;
  width: calc(100% - 220px);
  min-width: 300px;
  display: flex;
  flex-direction: column;
}

#textInputWindow {
  flex-grow: 1;
}

.window-title {
  font-size: 18px;
  margin-bottom: 15px;
  color: var(--neon-blue);
  text-align: center;
}

.text-area-container {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  position: relative;
}

.text-area {
  width: 100%;
  flex-grow: 1;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid var(--neon-blue);
  border-radius: 10px;
  color: var(--text-color);
  font-size: 16px;
  padding: 10px;
  resize: none;
  transition: all 0.3s ease;
  min-height: 150px;
}

.text-area:focus {
  outline: none;
  box-shadow: 0 0 15px var(--neon-blue);
}

.text-area-buttons {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  gap: 10px;
}

.icon-button {
  background: transparent;
  border: none;
  color: var(--text-color);
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 5px;
  border-radius: 5px;
}

.icon-button:hover {
  background: rgba(255, 255, 255, 0.1);
}

.slider-container {
  margin-bottom: 15px;
}

.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 5px;
  background: rgba(255, 255, 255, 0.2);
  outline: none;
  border-radius: 5px;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  background: var(--neon-green);
  cursor: pointer;
  border-radius: 50%;
  box-shadow: 0 0 10px var(--neon-green);
}

.button-container {
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
}

.neon-button {
  background: transparent;
  border: 2px solid var(--neon-purple);
  color: var(--neon-purple);
  padding: 8px 15px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.neon-button:hover {
  background: var(--neon-purple);
  color: #000;
  box-shadow: 0 0 20px var(--neon-purple);
}

.theme-toggle {
  position: fixed;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  color: var(--text-color);
  font-size: 24px;
  cursor: pointer;
  z-index: 1000;
}

.history-item {
  margin-bottom: 10px;
  padding: 5px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
}

.social-icons {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  gap: 15px;
  z-index: 1000;
}

.social-icon {
  font-size: 24px;
  color: var(--text-color);
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-icon:hover {
  color: var(--neon-blue);
  text-shadow: 0 0 10px var(--neon-blue);
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
}

.floating-emoji {
  position: fixed;
  font-size: 30px;
  opacity: 0.5;
  animation: float 3s ease-in-out infinite;
  pointer-events: none;
  z-index: 500;
}

.select-container {
  margin-bottom: 15px;
}

.voice-select {
  width: 100%;
  padding: 5px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid var(--neon-blue);
  border-radius: 5px;
  color: var(--text-color);
  font-size: 16px;
}

.ai-music-description {
  font-size: 14px;
  line-height: 1.6;
}

.ai-music-description h3 {
  color: var(--neon-green);
  margin-bottom: 10px;
}

.ai-music-description ul {
  padding-left: 20px;
}

.ai-music-description li {
  margin-bottom: 10px;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
  
  .side-buttons {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    position: static;
    margin-bottom: 20px;
    margin-top: 7cm;
  }

  .window {
    width: 100%;
    margin: 10px 0;
  }
}

@media (min-width: 1200px) {
  .container {
    flex-wrap: wrap;
  }

  .window {
    width: calc(50% - 130px);
  }

  #aiMusicWindow {
    width: calc(100% - 220px);
  }
}
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/all.min.js"></script>
</head>
<body>
<button class="theme-toggle" id="themeToggle"><i class="fas fa-adjust"></i></button>

<div class="container">
  <div class="side-buttons">
    <button class="side-button"><i class="fas fa-magic"></i> Efecto 1</button>
    <button class="side-button"><i class="fas fa-robot"></i> Efecto 2</button>
    <button class="side-button"><i class="fas fa-microphone-alt"></i> Efecto 3</button>
    <button class="side-button"><i class="fas fa-volume-up"></i> Efecto 4</button>
    <button class="side-button"><i class="fas fa-music"></i> Efecto 5</button>
    <button class="side-button"><i class="fas fa-cog"></i> Configuración</button>
  </div>
  
  <div class="window" id="textInputWindow">
    <h2 class="window-title">Entrada de Texto</h2>
    <div class="text-area-container">
      <textarea class="text-area" id="textArea" placeholder="Escribe o pega tu texto aquí..."></textarea>
      <div class="text-area-buttons">
        <button class="icon-button" id="clearBtn" title="Limpiar texto"><i class="fas fa-trash-alt"></i></button>
        <button class="icon-button" id="copyBtn" title="Copiar texto"><i class="fas fa-copy"></i></button>
      </div>
    </div>
  </div>
  
  <div class="window" id="controlsWindow">
    <h2 class="window-title">Controles</h2>
    <div class="select-container">
      <label for="voiceStyle">Estilo de Voz</label>
      <select id="voiceStyle" class="voice-select">
        <option value="default">Por defecto</option>
        <option value="formal">Formal</option>
        <option value="casual">Casual</option>
        <option value="robotic">Robótica</option>
      </select>
    </div>
    <div class="slider-container">
      <label for="speed">Velocidad</label>
      <input type="range" id="speed" class="slider" min="0.5" max="2" step="0.1" value="1">
    </div>
    <div class="slider-container">
      <label for="volume">Volumen</label>
      <input type="range" id="volume" class="slider" min="0" max="1" step="0.1" value="0.5">
    </div>
    <div class="slider-container">
      <label for="pitch">Entonación</label>
      <input type="range" id="pitch" class="slider" min="0.5" max="2" step="0.1" value="1">
    </div>
    <div class="button-container">
      <button class="neon-button" id="playBtn"><i class="fas fa-play"></i> Reproducir</button>
      <button class="neon-button" id="pauseBtn"><i class="fas fa-pause"></i> Pausar</button>
      <button class="neon-button" id="downloadBtn"><i class="fas fa-download"></i> Descargar</button>
    </div>
  </div>
  
  <div class="window" id="historyWindow">
    <h2 class="window-title">Historial de Conversiones</h2>
    <div id="historyList"></div>
  </div>

  <div class="window" id="aiMusicWindow">
    <h2 class="window-title">IA de Generación de Música</h2>
    <div class="ai-music-description">
      <h3>Características principales:</h3>
      <ul>
        <li><strong>Generación de Música basada en Texto:</strong> Utiliza modelos de lenguaje y redes neuronales para traducir descripciones textuales en secuencias musicales.</li>
        <li><strong>Generación de Voces:</strong> Integra modelos de Text-to-Speech avanzados para producir voces que encajan con el estilo de la canción.</li>
        <li><strong>Personalización del Género:</strong> Permite a los usuarios elegir entre diferentes estilos y géneros musicales.</li>
        <li><strong>Control de la estructura musical:</strong> Genera canciones con una estructura coherente (versos, coros, puentes, etc.).</li>
        <li><strong>Entrenamiento y afinación del modelo:</strong> Utiliza datasets de música variada para adaptarse a cualquier género.</li>
        <li><strong>Interfaz de usuario sencilla:</strong> Diseñada para ser accesible a cualquier persona, sin necesidad de experiencia previa.</li>
      </ul>
    </div>
  </div>
</div>

<div class="social-icons">
  <a href="https://twitter.com/textospeechAI" class="social-icon"><i class="fab fa-twitter"></i></a>
  <a href="https://youtube.com/textospeechAI" class="social-icon"><i class="fab fa-youtube"></i></a>
  <a href="https://t.me/textospeechAI" class="social-icon"><i class="fab fa-telegram"></i></a>
</div>

<script>
const emojis = ['🎵', '🔊', '🎶', '📢', '🎤', '🎧'];
const container = document.body;

function createFloatingEmoji() {
  const emoji = document.createElement('div');
  emoji.classList.add('floating-emoji');
  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.left = `${Math.random() * 100}vw`;
  emoji.style.top = `${Math.random() * 100}vh`;
  emoji.style.animationDuration = `${3 + Math.random() * 4}s`;
  container.appendChild(emoji);
  
  setTimeout(() => {
    container.removeChild(emoji);
  }, 7000);
}

setInterval(createFloatingEmoji, 2000);

const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-theme');
  if (body.classList.contains('light-theme')) {
    document.documentElement.style.setProperty('--bg-color', 'rgba(240, 240, 255, 0.8)');
    document.documentElement.style.setProperty('--text-color', '#333');
  } else {
    document.documentElement.style.setProperty('--bg-color', 'rgba(10, 15, 25, 0.8)');
    document.documentElement.style.setProperty('--text-color', '#e0e0ff');
  }
});

let speech = new SpeechSynthesisUtterance();

const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const downloadBtn = document.getElementById('downloadBtn');
const textArea = document.getElementById('textArea');
const speedSlider = document.getElementById('speed');
const volumeSlider = document.getElementById('volume');
const pitchSlider = document.getElementById('pitch');
const historyList = document.getElementById('historyList');
const clearBtn = document.getElementById('clearBtn');
const copyBtn = document.getElementById('copyBtn');
const voiceStyleSelect = document.getElementById('voiceStyle');

playBtn.addEventListener('click', () => {
  speech.text = textArea.value;
  speech.volume = volumeSlider.value;
  speech.rate = speedSlider.value;
  speech.pitch = pitchSlider.value;
  
  updateVoiceStyle(voiceStyleSelect.value);

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(speech);
  
  addToHistory(textArea.value);
});

function updateVoiceStyle(style) {
  switch (style) {
    case 'formal':
      speech.pitch = 1.2;
      speech.rate = 0.9;
      break;
    case 'casual':
      speech.pitch = 1.0;
      speech.rate = 1.1;
      break;
    case 'robotic':
      speech.pitch = 0.5;
      speech.rate = 0.8;
      break;
    default:
      speech.pitch = 1.0;
      speech.rate = 1.0;
  }
  pitchSlider.value = speech.pitch;
  speedSlider.value = speech.rate;
}

pauseBtn.addEventListener('click', () => {
  window.speechSynthesis.pause();
});

downloadBtn.addEventListener('click', () => {
  alert('Descarga simulada iniciada. El archivo se descargará pronto.');
});

clearBtn.addEventListener('click', () => {
  textArea.value = '';
  adjustTextAreaHeight();
});

copyBtn.addEventListener('click', () => {
  textArea.select();
  document.execCommand('copy');
  
  copyBtn.innerHTML = '<i class="fas fa-check"></i>';
  setTimeout(() => {
    copyBtn.innerHTML = '<i class="fas fa-copy"></i>';
  }, 2000);
});

function addToHistory(text) {
  const div = document.createElement('div');
  div.classList.add('history-item');
  div.textContent = text.substring(0, 30) + '...';
  historyList.prepend(div);
  
  if (historyList.children.length > 5) {
    historyList.removeChild(historyList.lastChild);
  }
}

function adjustTextAreaHeight() {
  textArea.style.height = 'auto';
  textArea.style.height = textArea.scrollHeight + 'px';
}

textArea.addEventListener('input', adjustTextAreaHeight);

window.addEventListener('load', adjustTextAreaHeight);

window.addEventListener('resize', adjustTextAreaHeight);

speedSlider.addEventListener('input', () => {
  speech.rate = speedSlider.value;
});

volumeSlider.addEventListener('input', () => {
  speech.volume = volumeSlider.value;
});

pitchSlider.addEventListener('input', () => {
  speech.pitch = pitchSlider.value;
});

voiceStyleSelect.addEventListener('change', () => {
  updateVoiceStyle(voiceStyleSelect.value);
});

function populateVoiceList() {
  const voices = window.speechSynthesis.getVoices();
  
  if (voices.length > 0) {
    speech.voice = voices[0];
  }
}

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}
</script>
</body>
</html>