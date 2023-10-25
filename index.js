//
// Adding elements to the DOM
//

// step1: create the element
const newImg = document.createElement("img");

// step2: add content or modify (ex. innerHTML...)
newImg.setAttribute("src", "./images/pikachu.jpg");

// step3: append to the dom: `parentElm.appendChild()`
const parentElm = document.getElementById("gallery");
parentElm.appendChild(newImg);


//
// JavaScript Events
//
// btn.addEventListener('click', () => {})
//

const btnElm = document.getElementById("btn");
const parent = document.getElementById("main-content")

// ex. append a paragraph everytime the user clicks on a button
btnElm.addEventListener("click", (event) => {
    const newParagraph = document.createElement("p");
    newParagraph.innerText = "This p has been created dynamically";
    parent.appendChild(newParagraph);
});



// detect key events
document.addEventListener("keydown", (e) => {
    switch (e.code) {
        case "Space":
            console.log("pressed spacebar");
            break;
        case "ArrowLeft":
            console.log("pressed left");
            break;
        case "ArrowRight":
            console.log("pressed right");
            break;
        case "ArrowUp":
            console.log("pressed up");
            break;
        case "ArrowDown":
            console.log("pressed down");
            break;
        default:
            console.log("other key.....");
    }
})


// Attach an event listener to multiple elements

const titles = document.querySelectorAll(".interactive-title");

titles.forEach( (elm) => {
    elm.addEventListener("click", () => {
        elm.classList.toggle("active");
    })
});
