var click_state = false;
var text_state = false;

function screenOn() {
    if (click_state === false){
        click_state = true;
        document.querySelector("#ipad-screen").style.display = "flex";
        document.querySelector("#ipad-screen").style.backgroundColor = "white";
    } else {
        click_state = true;
    }
}

function nextScreen() {
    checkInput();
}


function checkInput() {
    var inputfield = document.getElementById("nickname-input").value;

    if (inputfield === "" && text_state === false) {
            let alert = document.createElement("p")
            
            alert.innerHTML = "Please enter a Nickname"
            alert.innerText.fontcolor = "#ff0000"
            console.log(alert)

            document.getElementById("button-menu").appendChild(alert)
            text_state = true;
    }
}