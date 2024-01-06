//Detecting Button Press
var numberOfDrumButtons = document.querySelectorAll(".piano").length;

for (var i = 0; i<numberOfDrumButtons; i++) {

  document.querySelectorAll(".piano")[i].addEventListener("click", function() {

this.style.color = "black";

var buttonInnerHTML = this.innerHTML;
makeSound(buttonInnerHTML);

buttonAnimation(buttonInnerHTML);

    //What to de when cleck detected.
  });

}

document.addEventListener("keypress", function(event) {

makeSound(event.key);

buttonAnimation(event.key);

});

// Detecting keyboard Press
function makeSound(key) {
      switch (key) {
        case "q":
        var audio = new Audio("sounds/key01.ogg");
        audio.play();
          break;

        case "w":
        var audio = new Audio("sounds/key02.ogg");
        audio.play();
        break;

        case "e":
        var audio = new Audio("sounds/key03.ogg");
        audio.play();
        break;

        case "r":
        var audio = new Audio("sounds/key04.ogg");
        audio.play();
        break;

        case "t":
        var audio = new Audio("sounds/key05.ogg");
        audio.play();
        break;

        case "y":
        var audio = new Audio("sounds/key06.ogg");
        audio.play();
        break;

        case "u":
        var audio = new Audio("sounds/key07.ogg");
        audio.play();
        break;

        case "i":
        var audio = new Audio("sounds/key08.ogg");
        audio.play();
        break;

        case "o":
        var audio = new Audio("sounds/key09.ogg");
        audio.play();
        break;

        case "p":
        var audio = new Audio("sounds/key10.ogg");
        audio.play();
        break;

        case "a":
        var audio = new Audio("sounds/key11.ogg");
        audio.play();
        break;

        case "s":
        var audio = new Audio("sounds/key12.ogg");
        audio.play();
        break;

        case "d":
        var audio = new Audio("sounds/key13.ogg");
        audio.play();
        break;

        case "f":
        var audio = new Audio("sounds/key14.ogg");
        audio.play();
        break;

        case "g":
        var audio = new Audio("sounds/key15.ogg");
        audio.play();
        break;

        case "h":
        var audio = new Audio("sounds/key16.ogg");
        audio.play();
        break;

        case "j":
        var audio = new Audio("sounds/key17.ogg");
        audio.play();
        break;

        case "k":
        var audio = new Audio("sounds/key18.ogg");
        audio.play();
        break;

        case "l":
        var audio = new Audio("sounds/key19.ogg");
        audio.play();
        break;

        case "x":
        var audio = new Audio("sounds/key20.ogg");
        audio.play();
        break;

        case "c":
        var audio = new Audio("sounds/key21.ogg");
        audio.play();
        break;

        case "v":
        var audio = new Audio("sounds/key22.ogg");
        audio.play();
        break;

        case "b":
        var audio = new Audio("sounds/key23.ogg");
        audio.play();
        break;

        case "n":
        var audio = new Audio("sounds/key24.ogg");
        audio.play();
        break;

        default: console.log(buttonInnerHTML);
      }
}

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
