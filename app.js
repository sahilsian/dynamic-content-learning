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

function ExpandHeight() {
    document.querySelector("#nickname-input").style.width = "100%";
}

function checkInput() {
    var inputfield = document.getElementById("nickname-input").value;

    if (inputfield === "" && text_state === false) {
            let alert = document.getElementById("nickname_alert");
            
            alert.innerText = "Please enter a Nickname";
            alert.style.color = "#ff0000";
            alert.style.position = "sticky";
            console.log(alert)

            text_state = true;
    } else {
            var ipadTop = document.getElementById("ipad-top");
            ipadTop.style.display = "none"
            var ipadBot = document.getElementById("ipad-bottom")
            ipadBot.style.display = "none"
            var ipadBorder = document.getElementById("screen-border")
            ipadBorder.style.borderTop = "0px";
            ipadBorder.style.borderBottom = "0px";
            console.log("hi");
            var screenWrapper = document.getElementById("screen-wrapper");
            screenWrapper.style.display = none;

    }
}


