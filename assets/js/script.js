//Function for create element 
const div = document.querySelector("div");
const createElement = (tag, text, classname, parent) => {
    const element = document.createElement(tag);
    element.innerHTML = text;
    element.classList.add(classname);
    parent.append(element);
    return element;
};
//Element
const h1 = createElement("h1", "Progetto JavaScript Basic", "title", document.body);
const container = createElement("div", "", "container", document.body);
const display = createElement("div", "", "display", container);
const number = createElement("p", "0", "number", display);
const buttonContainer = createElement("div", "", "button-container", container);
const buttonIncrease = createElement("button", "+", "button-increase", buttonContainer);
const buttonReset = createElement("button", "Reset", "button-reset", buttonContainer);
const buttonDecrease = createElement("button", "-", "button-decrease", buttonContainer);
const footer = createElement("footer", "", "footer-info", document.body);
const p = createElement("p", `Made with <span>❤</span> by Ivano Bruno`, "bio", footer);
//Counter
const button = document.querySelector(".button-container");
let i = 0;
button.addEventListener("click", function (num) {
    if (num.target.matches(".button-increase")) {
        i++;
        if (i>0){
            number.style.color="#008000";
        } else if (i == 0){
            number.style.color="#000000";
        };
        number.innerHTML = i;
    } else if (num.target.matches(".button-reset")){
        i = 0;
        number.style.color="#000000";
        number.innerHTML = i;
    } else if (num.target.matches(".button-decrease")){
        i--;
        if (i<0){
            number.style.color="#FF0000";
        } else if (i == 0){
            number.style.color="#000000";
        };
        number.innerHTML = i;
    };
});