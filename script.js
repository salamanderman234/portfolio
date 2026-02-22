/**
 * Terminal Portfolio Engine
 * A simple, dependency-free terminal emulator for personal portfolios.
 */

const output = document.getElementById('output');
const commandInput = document.getElementById('command-input');
const terminalBody = document.getElementById('terminal-body');

// --- Configuration & Content ---

const commands = {
    help: () => `
<div class="help-list">
  <div><span class="highlight">summary</span> - Professional overview</div>
  <div><span class="highlight">about</span> - About me</div>
  <div><span class="highlight">skills</span> - My stack</div>
  <div><span class="highlight">projects</span> - Best work</div>
  <div><span class="highlight">contact</span> - Reach me</div>
  <div><span class="highlight">social</span> - Social links</div>
  <div><span class="highlight">email</span> - Send email</div>
  <div><span class="highlight">update</span> - Life updates</div>
  <div><span class="highlight">clear</span> - Clear screen</div>
  <div><span class="highlight">whoami</span> - User info</div>
</div>
`,
    summary: () => `
<div class="summary-text">
  Hello! I'm <span class="accent">Tresna Saputra</span>, a <span class="accent">Fullstack Engineer</span> currently contributing to the WordPress ecosystem as a Developer at <span class="highlight">Gutenverse</span>. Over the past year, I've focused on building powerful, high-performance web solutions using a diverse stack that includes <span class="highlight">Golang</span>, <span class="highlight">Python</span>, <span class="highlight">Laravel</span>, and modern frontend frameworks like <span class="highlight">React</span> and <span class="highlight">Vue</span>. 
  <br><br>
  One of my latest key projects is <span class="highlight">Gutenverse News</span>, a specialized WordPress plugin designed to streamline the creation of dynamic news sites. I'm always open to new challenges and collaborations—feel free to reach out to me directly at <a href="mailto:tresnasaputra9@gmail.com" class="accent">tresnasaputra9@gmail.com</a>.
</div>
`,
    about: () => `
Hello! I'm <span class="accent">Tresna Saputra</span>, a dedicated <span class="accent">Fullstack Engineer</span> with a passion for building robust and scalable web solutions. 
I am currently working as a <span class="highlight">WordPress Developer</span> at <span class="highlight">Gutenverse</span>, where I've spent the past year refining my expertise in block-based development and modern web ecosystems. 
I pride myself on my reliability, attention to detail, and a results-driven approach to every project. Whether it's crafting complex backend logic or pixel-perfect frontends, I'm committed to delivering high-quality code and pushing the boundaries of what's possible on the web.
`,
    update: () => `
<div class="update-list">
  <div>- Currently enjoying my professional journey as a <span class="highlight">WordPress Developer</span>.</div>
  <div>- Advancing my language proficiency in <span class="accent">English</span> and <span class="accent">Japanese</span> through Duolingo.</div>
  <div>- Diving deep into <span class="highlight">Cyber Security</span> and mastering the <span class="highlight">Rust</span> programming language.</div>
</div>
`,
    skills: () => `
<div class="skills-list">
  <div>- Golang (Backend)</div>
  <div>- Laravel (PHP Framework)</div>
  <div>- WordPress (CMS Ecosystem)</div>
  <div>- Python (Scripting & Backend)</div>
  <div>- React & Vue (Modern UI)</div>
  <div>- Git (Version Control)</div>
  <div>- Docker & CI/CD</div>
</div>
`,
    projects: () => `
Recent Projects:
  <div class="project-card">
    <div class="project-title">1. Gutenverse News</div>
    <div class="project-desc">A specialized WordPress plugin designed for building high-performance news and magazine websites. I contributed several core features to this project to enhance its flexibility and power.</div>
    <div class="project-link"><a href="https://wordpress.org/plugins/gutenverse-news/" target="_blank" class="accent">View on WordPress.org -></a></div>
  </div>
  <div class="project-card">
    <div class="project-title">2. Gutenverse</div>
    <div class="project-desc">A dominant WordPress Gutenberg block plugin with over 30,000 active installations. I serve as a maintainer and active developer, implementing key features across its block ecosystem.</div>
    <div class="project-link"><a href="https://wordpress.org/plugins/gutenverse/" target="_blank" class="accent">View on WordPress.org -></a></div>
  </div>
  <div class="project-card">
    <div class="project-title">3. Dcamel Fastferry</div>
    <div class="project-desc">A comprehensive reservation and management system for a boat company, streamlining ticketing and operational workflows.</div>
    <div class="project-link"><a href="https://dcamelfastferry.com/" target="_blank" class="accent">Visit Project -></a></div>
  </div>
  <div class="project-card">
    <div class="project-title">4. Kusuka Creative Studio</div>
    <div class="project-desc">A custom Point of Sale (POS) application tailored for a photo studio, managing bookings, sales, and studio operations efficiently.</div>
  </div>
`,
    contact: () => `
<div class="contact-list">
  <div><span class="highlight">Email:</span>    <a href="mailto:tresnasaputra9@gmail.com" class="accent">tresnasaputra9@gmail.com</a></div>
  <div><span class="highlight">GitHub:</span>   <a href="https://github.com/salamanderman234" target="_blank" class="accent">github.com/salamanderman234</a></div>
  <div><span class="highlight">LinkedIn:</span> <a href="https://id.linkedin.com/in/i-gede-tresna-agung-saputra-19b753197" target="_blank" class="accent">linkedin.com/in/i-gede-tresna-agung-saputra-19b753197</a></div>
</div>
`,
    social: () => `
<div class="social-list">
  <div><span class="highlight">Instagram:</span> <a href="https://instagram.com/tresnasaputra9" target="_blank" class="accent">@tresnasaputra9</a></div>
  <div><span class="highlight">Twitter:</span>   <a href="https://twitter.com/tresnasaputra23" target="_blank" class="accent">@tresnasaputra23</a></div>
  <div><span class="highlight">Facebook:</span>  <a href="https://facebook.com/tresna.saputra.75" target="_blank" class="accent">@tresna.saputra.75</a></div>
  <div><span class="highlight">GitHub:</span>    <a href="https://github.com/salamanderman234" target="_blank" class="accent">github.com/salamanderman234</a></div>
  <div><span class="highlight">LinkedIn:</span>  <a href="https://id.linkedin.com/in/i-gede-tresna-agung-saputra-19b753197" target="_blank" class="accent">linkedin.com/in/i-gede-tresna-agung-saputra-19b753197</a></div>
</div>
`,
    whoami: () => `guest_user_${Math.floor(Math.random() * 10000)}`,
    email: () => {
        window.location.href = "mailto:tresnasaputra9@gmail.com";
        return "Opening email client...";
    },
    clear: () => {
        output.innerHTML = '';
        return '';
    },
    error: (cmd) => `<span class="error">Command not found: ${cmd}</span>. Type <span class="highlight">'help'</span> for a list of available commands.`
};

// --- Terminal State ---

let commandHistory = [];
let historyIndex = -1;

// --- Helper Functions ---

function scrollToBottom() {
    terminalBody.scrollTop = terminalBody.scrollHeight;
}

function typeWriter(text, element, speed = 20, callback) {
    let i = 0;
    const interval = setInterval(() => {
        element.innerHTML += text.charAt(i);
        i++;
        if (i === text.length) {
            clearInterval(interval);
            if (callback) callback();
        }
        scrollToBottom();
    }, speed);
}

function addLine(content, className = 'line') {
    const line = document.createElement('div');
    line.className = className;
    line.innerHTML = content;
    output.appendChild(line);
    scrollToBottom();
    return line;
}

// --- Event Listeners ---

commandInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const fullCommand = commandInput.value.trim();
        const [cmd, ...args] = fullCommand.toLowerCase().split(' ');

        if (fullCommand) {
            commandHistory.push(fullCommand);
            historyIndex = commandHistory.length;
        }

        // Display the command typed
        addLine(`<span class="prompt">guest@visitor:~$</span> ${fullCommand}`);

        // Process Command
        if (cmd) {
            const result = commands[cmd] ? commands[cmd](args) : commands.error(cmd);
            if (result) addLine(result);
        }

        commandInput.value = '';
        commandInput.style.width = "0ch";

    } else if (e.key === 'ArrowUp') {
        if (historyIndex > 0) {
            historyIndex--;
            commandInput.value = commandHistory[historyIndex];
        }
        e.preventDefault();
    } else if (e.key === 'ArrowDown') {
        if (historyIndex < commandHistory.length - 1) {
            historyIndex++;
            commandInput.value = commandHistory[historyIndex];
        } else {
            historyIndex = commandHistory.length;
            commandInput.value = '';
        }
        e.preventDefault();
    }
});

// Auto-focus input
document.addEventListener('click', () => commandInput.focus());

// Dynamically update input width and hide cursor while typing
let typingTimeout;
commandInput.addEventListener('input', () => {
    commandInput.style.width = commandInput.value.length + "ch";

    // Hide cursor
    const inputLine = document.querySelector('.input-line');
    inputLine.classList.add('typing');

    // Show cursor back after stop typing
    clearTimeout(typingTimeout);
    typingTimeout = setTimeout(() => {
        inputLine.classList.remove('typing');
    }, 400); // 400ms delay
});

// --- Initialization ---

const asciiArt = `
  _    _ ______ _      _      ____    _______ _    _ ______ _____  ______ 
 | |  | |  ____| |    | |    / __ \\  |__   __| |  | |  ____|  __ \\|  ____|
 | |__| | |__  | |    | |   | |  | |    | |  | |__| | |__  | |__) | |__   
 |  __  |  __| | |    | |   | |  | |    | |  |  __  |  __| |  _  /|  __|  
 | |  | | |____| |____| |___| |__| |    | |  | |  | | |____| | \\ \\| |____ 
 |_|  |_|______|______|______\\____/     |_|  |_|  |_|______|_|  \\_\\______|
`;

window.onload = () => {
    addLine(`<pre class="ascii-art">${asciiArt}</pre>`);
    addLine('Welcome to my digital terminal. I\'m <span class="accent">Tresna Saputra</span>, a Fullstack Engineer building the future of the web.');
    addLine('Type <span class="highlight">\'help\'</span> to see all available commands.');
    commandInput.focus();
};
