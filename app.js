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
        "title1" : "TAEKWONDO LOGIC:",
        "title2" : "defend yourself",
        "direction" : "column"
    },

    "page2" : {
        "title1" : "",
        "title2" : "",
    }
}


function screenOn() {
    if (click_state === false){
        click_state = true;
        document.querySelector("#ipad-screen").style.display = "flex";
        document.querySelector("#ipad-screen").style.backgroundColor = "white";
        document.querySelector("#title-1").innerText = PageInfo.page1.title1;
        document.querySelector("#title-2").innerText = PageInfo.page1.title2;

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
            let alert = document.getElementById("nickname_alert");
            
            alert.innerText = "Please enter a Nickname";
            alert.style.color = "#ff0000";
            alert.style.position = "sticky";
            console.log(alert)
    } else {
            ipadGrow();
            game_running = true;

            contentControll();
            flexController();
            ChangeButton();
    }
}

// CheckInput() Funtions // 

function ipadGrow() {
    var ipadTop = document.getElementById("ipad-top");
            ipadTop.style.display = "none"

        var ipadBot = document.getElementById("ipad-bottom")
            ipadBot.style.display = "none"

        var ipadBorder = document.getElementById("screen-border")
            ipadBorder.style.borderTop = "0px";
            ipadBorder.style.borderBottom = "0px";

        var ipadRec = document.getElementById("ipad-rectangle");
            ipadRec.style.width = "100vw";
            ipadRec.style.height = "100vh";
            ipadRec.style.boxShadow = "none";
            ipadRec.style.top = "0";

        var screenWrapper = document.getElementById("screen-wrapper");
            screenWrapper.style.width = "100vw";
            screenWrapper.style.height = "100vh";
}

function contentControll(){
    document.querySelector("#header-container").style.display = "flex";
    document.querySelector("#title-1").innerText = PageInfo.page2.title1;
    document.querySelector("#title-2").innerText = PageInfo.page2.title2;
    
}

function flexController() {
    var leftFlex = document.querySelector("#mainbox1")
    var middleFlex = document.querySelector("#mainbox2")
    var rightFlex = document.querySelector("#mainbox3") 


    if (middleFlex.style.flex = "50") {
        middleFlex.style.flex = "1";
        leftFlex.style.flex = "50";
        rightFlex.style.flex = "50";
    } else if (middleFlex.style.flex = "1") {
        middleFlex.style.flex = "50";
        leftFlex.style.flex = "1";
        rightFlex.style.flex = "1"
    } else {
        return null;
    }  
}


function ChangeButton(){
    document.querySelector("#nickname-input").style.display = "none";
    document.querySelector("#nickname_alert").style.display = "none";
    var CTAb = document.querySelector("#call-to-action");
    CTAb.innerText = "NEXT";
    CTAb.style.animation = "bounce 0s infinite";
    CTAb.style.height = "100px";
    CTAb.style.fontSize = "20px";
    CTAb.style.backgroundColor = "white";
    CTAb.style.color = "grey";
    CTAb.style.border = "2px solid grey";


}
// Check Input Funtions End// 

 // Button toggle
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

 }
