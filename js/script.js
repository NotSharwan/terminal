const BLACKLISTED_KEY_CODES = [ 38 ];	
const COMMANDS = {	
  help:	
    'Supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">education</span>, <span class="code">skills</span>, <span class="code">contact</span>.',	
  about:	
    "Hello World 🐱‍👤 <br>I'm Sharwan Solanki. I'm a 19-year-old Programmer / Developer / CS Undergrad currently living in Hyderabad. I've got a burning passion to want to help others with the code I create. I enjoy the limitless potential of impact that I can have on what I'm building. It's what pushes me to become a better developer every day. Other than coding, I love watching anime.",	
  skills:	
    '<span class="code">Languages:</span> Python, C/C++, Java, HTML, CSS, JavaScript.<br><span class="code">Frameworks:</span> Node.js, Flask.<br><span class="code">Tools:</span> Bash, Git & GitHub, Windows, Linux.<br><span class="code">~Learning New Stack Everyday.</span>',	
  education:	
    "Bachelor of Technology — Computer Science,<br>Institute Of Aeronautical Engineering, Hyderabad.",	
  resume: "<a href='./resume.pdf' class='success link'>resume.pdf</a>",	
  experience: '<span class="code">dark : </span> <a href="https://darklang.com/" class="success link">Beta Tester</a> - Helping to improve the language. [Feb 2020 – Present] <br><span class="code">JPMorgan Chase & Co : </span> <a href="https://insidesherpa.s3.amazonaws.com/completion-certificates/JP%20Morgan/R5iK7HMxJGBgaSbvk_JPMorgan%20Chase_5zNrvokdFe9q9QQrv_completion_certificate.pdf" class="success link">Virtual Intership</a> - Software Engineering Virtual Experience [May 2020]<br>',	
  contact:	
    "Email: <a href='mailto:sharwansolanki01@gmail.com' class='success link'>sharwansolanki01@gmail.com</a> <br>LinkedIn : <a href='https://www.linkedin.com/in/notsharwan/' class='success link'>NotSharwan</a><br>Phone : (+91)8801453981",	
  hello:	
  "Hello?",	
  notsharwan:	
"<a href='https://www.google.com/search?q=notsharwan' class='success link'>NotSharwan?</a> "	
};	
let userInput, terminalOutput;	

const app = () => {	
  userInput = document.getElementById("userInput");	
  terminalOutput = document.getElementById("terminalOutput");	
  document.getElementById("dummyKeyboard").focus();	
  console.log("Application loaded");	

};	


const execute = function executeCommand(input) {	
  let output;	
  input = input.toLowerCase();	
  if (input.length === 0) {	
    return;	
  }	
  output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;	
  if (!COMMANDS.hasOwnProperty(input)) {	
    output += `<div class="terminal-line">no such command: ${input}</div>`;	
    console.log("Oops! no such command");	
  } else {	
    output += COMMANDS[input];	
  }	

  terminalOutput.innerHTML = `${	
    terminalOutput.innerHTML	
  }<div class="terminal-line">${output}</div>`;	
  terminalOutput.scrollTop = terminalOutput.scrollHeight;	
};	

const key = function keyEvent(e) {	
  const input = userInput.innerHTML;	

  if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {	
    return;	
  }	

  if (e.key === "Enter" || e.key ==='Return') {	
    execute(input);	
    userInput.innerHTML = "";	
    return;	
  }	

  userInput.innerHTML = input + e.key;	
};	

const backspace = function backSpaceKeyEvent(e) {	
  if (e.keyCode !== 8 && e.keyCode !== 46) {	
    return;	
  }	
  userInput.innerHTML = userInput.innerHTML.slice(	
    0,	
    userInput.innerHTML.length - 1	
  );	
};	

document.addEventListener("keydown", backspace);	
document.addEventListener("keypress", key);	
document.addEventListener("DOMContentLoaded", app);	


let text = ["(~) Noobie", "Programmer .\\n", "StillLearning :/",'CS Undergrad.' ];	
var counter = 1;var elem = document.getElementById("changeText");setInterval(change, 1500);function change(){elem.classList.add('hide');setTimeout(function () {elem.innerHTML = text[counter]; elem.classList.remove('hide'); counter++;if (counter >= text.length) {counter = 0;}}, 500);}	
