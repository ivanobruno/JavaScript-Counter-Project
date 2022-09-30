//General
const body = document.body;
const h1 = document.createElement("h1");
h1.innerHTML = "Progetto JavaScript Basic";
body.append(h1);
//container
const container = document.createElement("div");
container.classList.add("container");
body.append(container);
//display
const display = document.createElement("div");
display.classList.add("display");
container.append(display);
const number = document.createElement("p");
number.innerHTML = 0;
display.append(number);
//Button Container
const buttonContainer = document.createElement("div");
buttonContainer.classList.add("button-container");
container.append(buttonContainer);
//button Increase
const buttonIncrease = document.createElement("button");
buttonIncrease.classList.add("button-increase");
buttonIncrease.innerHTML = "+";
buttonContainer.append(buttonIncrease);
//button Reset
const buttonReset = document.createElement("button");
buttonReset.classList.add("button-reset");
buttonReset.innerHTML = "Reset";
buttonContainer.append(buttonReset);
//button Decrease
const buttonDecrease = document.createElement("button");
buttonDecrease.classList.add("button-decrease");
buttonDecrease.innerHTML = "-";
buttonContainer.append(buttonDecrease);
//footer
const footer = document.createElement("footer");
body.append(footer);
const p = document.createElement("p");
p.innerHTML = `Made With <span>❤</span> by Ivano Bruno`;
footer.append(p);
//counter
let i = 0;
buttonIncrease.addEventListener("click", ()=>{
    i++
    if (i>0){
        number.style.color="#008000";
    }
    if (i == 0){
        number.style.color="#000000";
    }
    number.innerHTML = i;
})
buttonReset.addEventListener("click", ()=>{
    i = 0
    number.style.color="#000000";
    number.innerHTML = i;
})
buttonDecrease.addEventListener("click", ()=>{
    i--
    if (i<0){
        number.style.color="#FF0000";
    }
    if (i == 0){
        number.style.color="#000000";
    }
    number.innerHTML = i;
});