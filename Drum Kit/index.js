
var length = document.querySelectorAll(".drum").length;
// alert(length);
for (let index = 0; index < length; index++) {
    document.querySelectorAll("button")[index].addEventListener("click", handelClick);

}

function handelClick() {
    var buttonHTML = this.innerHTML;
    makeSound(buttonHTML);
    buttonAnimation(buttonHTML);
}

document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;

        default:
            break;
    }
}

function buttonAnimation(currentKey) {
    var actionButton = document.querySelector("." + currentKey);
    actionButton.classList.add("pressed");
    setTimeout(function() {
        actionButton.classList.remove("pressed");
    },100);
}