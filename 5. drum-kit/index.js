var drumElements = document.querySelectorAll(".drum");
var drumSounds = ["tom-1", "tom-2", "tom-3", "tom-4", "snare", "crash", "kick-bass"];
var keys = ["w", "a", "s", "d", "j", "k", "l"]



for (var i = 0; i < drumElements.length; i++) {
   
    drumElements[i].addEventListener("click", function () {
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}


document.addEventListener("keydown", (event) => {
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(key){
    switch (key) {
        case 'w':
            var caminho = './sounds/tom-1.mp3';
            break;
        case 'a':
            var caminho = './sounds/tom-2.mp3';
            break;
        case 's':
            var caminho = './sounds/tom-3.mp3';
            break;

        case 'd':
            var caminho = './sounds/tom-4.mp3';
            break;
        case 'j':
            var caminho = './sounds/snare.mp3';
            break;
        case 'k':
            var caminho = './sounds/crash.mp3';
            break;
        case 'l':
            var caminho = './sounds/kick-bass.mp3';
            break;
    }
    var audio = new Audio(caminho);
    audio.play();
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+ currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100)
}