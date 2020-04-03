// question 1

/* var name = function() {
    console.log(name)
}

console.log("Tobias Thrane"); */

// question 2

/* const button = document.querySelector(".btn");
function clicked() {
    console.log("I was clicked");
};

button.addEventListener("click", clicked); */


// question 3

/* const textInput = document.querySelector("#firstName");

function keyLog(e) {
    console.dir(e.key)
};

textInput.addEventListener("keydown", keyLog); */

// question 4

/* const btn = document.querySelector("button");

function doOnHover() {
    btn.classList.add("hover");
};

btn.addEventListener("mouseover", doOnHover); */

// question 5

/* const btn = document.querySelector("button");

function doOnHover() {
    btn.classList.add("hover");
};

function doOnOut() {
    btn.classList.remove("hover");
}
btn.addEventListener("mouseover", doOnHover);
btn.addEventListener("mouseout", doOnOut); */

// question 6

/* const list = document.querySelectorAll("[data-animal]");

for (let i = 0; i < list.length; i++) {
    list[i].addEventListener("mouseover", logIt);
}

function logIt() {
    console.log(event.target.dataset);
} */

// question 7

/* const animal = "cow";

switch (animal) {
    case "cat":
        console.log("Meow");
        break;
    case "cow":
        console.log("Moo");
        break;
    case "bird":
        console.log("Tweet");
        break;
    default:
        console.log("Harrumph");
} */

// question 8

/* const sheep = ["Malcolm", "Anders", "Marie"];

sheep.forEach(function(sheep) {
    console.log(sheep);
}); */

// question 9

/* function logTime() {
    // first log the current date/time
    console.log("hello");

    // if the counter is equal to 4 it means the function has been called 5 times (because we started the counter at 0)
    // cancel the timer - the logTime function won't be called again
    if(counter === 5) {
        clearInterval(intervalId);
    }

    // add one to the counter variable
    // this is shorthand for count = count + 1
    counter++;

}

// this is the variable we'll increment and use to check how of often the function has been called
let counter = 0;

// The timer's id will be stored in `intervalId`:
const intervalId = setInterval(logTime, 500); */

// question 10

//<div class="container">Placeholder text</div>

/* const newText = document.querySelector("div.container");

function upDateText() {
    newText.innerHTML = "Text updated"
}

setTimeout(upDateText, 2000); */

