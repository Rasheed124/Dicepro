
var buttons = document.querySelector(".drum").clientHeight;
for(var i = 0; i < buttons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

       var buttonInnerHtml = this.innerHTML;
       makeSound(buttonInnerHtml);
       animateButton(buttonInnerHtml)

       document.addEventListener("keypress" , function(event){
           makeSound(event.key)
           animateButton(event.key)
       })
       

       function makeSound(buttonInnerHtml){
        switch (buttonInnerHtml) {
            case "w":
                var tom1 = new Audio("sounds/tom-1.mp3")
                tom1.play()
                break;
            case "a":
                var tom2 = new Audio("sounds/tom-2.mp3")
                tom2.play()
                break;
            case "s":
                var tom3 = new Audio("sounds/tom-3.mp3")
                tom3.play()
                break;
            case "d":
                var tom4 = new Audio("sounds/tom-4.mp3")
                tom4.play()
                break;
            case "j":
                var kickbass = new Audio("sounds/kick-bass.mp3")
                kickbass.play()
                break;
            case "k":
                var snare = new Audio("sounds/snare.mp3")
                snare.play()
                break;
            case "l":
                var crash = new Audio("sounds/crash.mp3")
                crash.play()
                break;
        
            default:
                break;
        }
    
       }
   
    });

    function animateButton(curtkey){
        var actionPressed = document.querySelector("." + curtkey)
        actionPressed.classList.add("pressed");

        // setTimeout( function(){
        //     actionPressed.classList.remove("pressed")
        // }, 500)

        setInterval(() => {

            actionPressed.classList.remove("pressed")
            
            
        }, 500);
    }
}

