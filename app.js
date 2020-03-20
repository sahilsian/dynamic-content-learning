var click_state = false;
var text_state = false;
var game_running = false;
var slider_state = false;
var next_state = 0;
var pageinitiator = 0;
var totalpage = 0; // the number of page


function screenOn() {
    if (click_state === false){
        click_state = true;
        document.querySelector("#ipad-screen").style.display = "flex";
        document.querySelector("#ipad-screen").style.backgroundColor = "white";
        document.querySelector("#title-1").innerText = "TAEKWONDO LOGIC:";
        document.querySelector("#title-2").innerText = "defend yourself";

    } else {
        click_state = true;
    }
}


function nextScreen() {
    console.log("im ready");
    if(pageinitiator >= 1) {
        pageinitiator = 0;
        slider_state = false;
        totalpage++;
        console.log(totalpage);
        ChangeButton()
        imagereset()
        flexControllerMid()
        sliderreset()
    } else {
    checkInput();
    totalpage++
    console.log("pagecounter" + pageinitiator);  
    console.log("totalpage is " + totalpage); 
    }
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
    document.querySelector("#title-1").innerText = "";
    document.querySelector("#title-2").innerText = "";
    
}

function flexController() {
    var leftFlex = document.querySelector("#mainbox1")
    var middleFlex = document.querySelector("#mainbox2")
    var rightFlex = document.querySelector("#mainbox3") 

        leftFlex.style.display = "flex";
        leftFlex.style.flex = "1";
        rightFlex.style.display = "flex";
        rightFlex.style.flex = "1";
        middleFlex.style.display = "none";
}
function flexControllerMid() {
    var leftFlex = document.querySelector("#mainbox1")
    var middleFlex = document.querySelector("#mainbox2")
    var rightFlex = document.querySelector("#mainbox3") 

        leftFlex.style.display = "flex";
        leftFlex.style.flex = "1";
        rightFlex.style.display = "flex";
        rightFlex.style.flex = "1";
        //middleFlex.style.display = "block";
        //middleFlex.style.flex = "1"
}


function ChangeButton(){
    document.querySelector("#nickname-input").style.display = "none";
    document.querySelector("#nickname_alert").style.display = "none";
    var CTAb = document.querySelector("#call-to-action");
    CTAb.innerText = "NEXT";
    CTAb.style.animation = "bounce 0s infinite";
    CTAb.style.height = "50px";
    CTAb.style.fontSize = "20px";
    CTAb.style.backgroundColor = "white";
    CTAb.style.color = "grey";
    CTAb.style.border = "2px solid grey";


}

 function slidertoggle() {
    var leftFlex = document.querySelector("#mainbox1");
    var rightFlex = document.querySelector("#mainbox3");
    var mainButton = document.querySelector("#slider-button");
    var buttonSlider = document.querySelector(".button-section");
    var s1 = document.querySelector("#s1");
    var s2 = document.querySelector("#s2");
   

    if (slider_state === false) {
        slider_state = true;
        leftFlex.style.opacity = "20%"
        rightFlex.style.opacity = "100%"
        buttonSlider.style.justifyContent = "flex-end"
        s1.style.display = "none"
        s2.style.display = "block"
        pageinitiator++
        next_state++
        console.log("nextstate" + next_state)
            if (next_state >= 1) {
                var CTAb = document.querySelector("#call-to-action");
                CTAb.style.color = "white"
                CTAb.style.backgroundColor = "green"
                console.log("pagecstatus" + pageinitiator)
                next_state = 0;
            }
            if (next_state >=2) {
                var CTAb = document.querySelector("#call-to-action");
                CTAb.style.color = "white"
                CTAb.style.backgroundColor = "green"
                console.log("pagecstatus" + pageinitiator)
                next_state = 0;
            }
        console.log(slider_state);
    } else {
        slider_state = false;
        rightFlex.style.opacity = "20%"
        leftFlex.style.opacity = "100%"
        console.log(slider_state);
        buttonSlider.style.justifyContent = "flex-start"
        s2.style.display = "none"
        s1.style.display = "block"
    }
 }

 function sliderreset() {
    var leftFlex = document.querySelector("#mainbox1");
    var rightFlex = document.querySelector("#mainbox3");
    var s1 = document.querySelector("#s1");
    var s2 = document.querySelector("#s2");
    var buttonSlider = document.querySelector(".button-section");

    if(buttonSlider.style.justifyContent === "flex-end") {
        s2.style.display = "none";
        buttonSlider.style.justifyContent = "flex-start";
        s1.style.display = "block";
        rightFlex.style.opacity = "20%"
        leftFlex.style.opacity = "100%"
    } else {
        s1.style.display = "block";
        buttonSlider.style.justifyContent = "flex-start";
    }
 }

 


 function imagereset() {
     var deduc = document.querySelector(".contents1-textbox-label");
     var induc = document.querySelector(".contents3-textbox-label");
if (totalpage === 2) { //page 2 statement 1
    deduc.innerText = "page2_D_statement2";
    induc.innerText = "page2_I_statement2";
} else if (totalpage === 3) { // page 3 statement2 
    deduc.innerText = "page3_D_con";
    induc.innerText = "page3_I_con";
    //IMAGES
    var main1img = document.querySelector("#mainbox1-image")
    //var main2img = document.querySelector("a#mainbox2-image")
    var main3img = document.querySelector("#mainbox3-image");

    main1img.style.backgroundImage = "none";
    main3img.style.backgroundImage = "none";

    //TITLES
    var main1title = document.querySelector(".contents1-textbox");
    var main3title = document.querySelector(".contents3-textbox");
    main1title.innerText = "People need to learn how to protect themselves";
    main3title.innerText = "When the kick is flying, I clench my fist and lift it up and block it dowm";
    
    console.log(totalpage)
 }
 }