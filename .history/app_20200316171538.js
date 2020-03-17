var click_state = false;
var text_state = false;
var game_running = false;


//var dataset;

/*fetch("pageinfo.json")
    .then(response => response.json())
    .then(data => dataset = data)
    .then(json => {
        console.log(json);

        
    });*/

var PageInfo = {
    "page1" : {
        "title" : "TAEKWONDO LOGIC:",
        "title2" : "defend yourself",
        "direction" : "column"
    }
}


function screenOn() {
    if (click_state === false){
        click_state = true;
        /*
        document.querySelector("#ipad-screen").style.display = "flex";

        document.querySelector("#ipad-screen").style.backgroundColor = "white";

        document.querySelector("#ipad-screen").style.backgroundColor = "white";*/
        document.querySelector("#title-1").innerText = PageInfo.page1.title;
        document.querySelector("#title-2").innerText = PageInfo.page1.title2;

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
    } else {
            var ipadTop = document.getElementById("ipad-top");
            ipadTop.style.display = "none"
            var ipadBot = document.getElementById("ipad-bottom")
            ipadBot.style.display = "none"
            var ipadBorder = document.getElementById("screen-border")
            ipadBorder.style.borderTop = "0px";
            ipadBorder.style.borderBottom = "0px";
            console.log("hi");
            var ipadRec = document.getElementById("ipad-rectangle");
            ipadRec.style.width = "100vw";
            ipadRec.style.height = "100vh";
            ipadRec.style.boxShadow = "none";
            ipadRec.style.top = "0";
            var screenWrapper = document.getElementById("screen-wrapper");
            screenWrapper.style.width = "100vw";
            screenWrapper.style.height = "100vh";
            game_running = true;
            gameController()
    }
}

/*
function gameController() {
    let headerSpace = document.getElementById("header-space");
    headerSpace.style.backgroundColor = "#FAD"
    let title

    
}

*/


function togglebutton() {
    // Button toggle
    var btn = document.getElementById("togglebutton");

    btn.classList.toggle('btn-toggle-white');

    if (btn.textContent == "S1") {
        btn.textContent = "S2";
    }
    else {
        btn.textContent = "S1";
    }
