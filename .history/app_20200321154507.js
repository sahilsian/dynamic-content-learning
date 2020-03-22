var click_state = false;
var text_state = false;
var game_running = false;
var slider_state = false;
var next_state = 0;
var pageinitiator = 0;
var totalpage = 0; // the number of page
var right = 0;


var quiz_true = false;
var quiz_false = false;


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
    if(totalpage === 4) {
        
        var CTAb = document.querySelector("#call-to-action");
        CTAb.style.color = "white";
        CTAb.style.backgroundColor = "green";

    } else if(pageinitiator >= 1) {
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
    right++
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
        mainButton.style.backgroundColor = "#0047a0";
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
        console.log(slider_state);
    } else {
        mainButton.style.backgroundColor = "#C1281B";
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

    if (buttonSlider.style.justifyContent === "flex-end") {
        s2.style.display = "none";
        buttonSlider.style.justifyContent = "flex-start";
        s1.style.display = "block";
        leftFlex.style.opacity = "100%"
        
            if (totalpage < 4) {
            rightFlex.style.opacity = "20%";
            } else {
            rightFlex.style.opacity = "100%"
            }
    } else {
        s1.style.display = "block";
        buttonSlider.style.justifyContent = "flex-start";
    }

 }

 

 function imagereset() {
     var deduc = document.querySelector(".contents1-textbox-label");
     var induc = document.querySelector(".contents3-textbox-label");
if (totalpage === 2) { //page 2 statement 2
    deduc.innerText = " People need to learn how to protect themselves";
    induc.innerText = "When the kick is flying, I clench my fist and lift it up and block it down";
} else if (totalpage === 3) { // page 3 conclusion 
    deduc.innerText = "I can use these 3 motions to protect myself";
    induc.innerText = "We can protect ourselves from dangerous situations of accidents by learning Taekwondo";
    
 } else if (totalpage === 4) { // page4 quiz
    document.querySelector("#contents1_textbox").style.display = "none";
    document.querySelector("#contents3_textbox").style.display = "none";
    document.querySelector("#mainbox3-image").style.display = "none";
    document.querySelector("#quizwrapper").style.display = "flex";
    document.querySelector("#header2").style.display = "none";
 } 
 }

function CheckAnswer1(){
        document.querySelector("#quiz-question-text").innerText = "explain why it's not true";
        document.querySelector("#quiz-choice-2").style.backgroundColor = "white";
        document.querySelector("#quiz-choice-1").style.backgroundColor = "gray";
    }

function CheckAnswer2() {
         document.querySelector("#quiz-question-text").innerText = "explain why its correct";
         document.querySelector("#quiz-choice-1").style.backgroundColor = "white";
         document.querySelector("#quiz-choice-2").style.backgroundColor = "gray";
         QuizMode();
            }

function QuizMode(){
    document.querySelector("#call-to-action").style.backgroundColor = "green";
    document.querySelector("#call-to-action").style.color = "white";
    document.querySelector("#call-to-action").innerText = "Play Again?";
    document.getElementById("call-to-action").onclick = LastQuiz;
}

function LastQuiz(){
    location.reload();
    return false;
    // document.querySelector("#call-to-action").style.backgroundColor = "white";
    // document.querySelector("#call-to-action").style.color = "grey";
    // document.querySelector("#call-to-action").innerText = "Last Quiz";
    // document.querySelector("#quiz-question-name").innerText = "Question2";
    // document.querySelector("#quiz-question").innerText = "Question2's question is here";
    // document.getElementById("quiz-choice-1").onclick = CheckAnswer3;
    // document.getElementById("quiz-choice-2").onclick = CheckAnswer4;

}

function CheckAnswer3() {
    document.querySelector("#quiz-question-text").innerText = "explain why it's correct";
}

function CheckAnswer4() {
    document.querySelector("#quiz-question-text").innerText = "explain why it's incorrect";
    document.querySelector("#call-to-action").style.backgroundColor = "green";
    document.querySelector("#call-to-action").style.color = "white";
    document.querySelector("#call-to-action").innerText = "Try Again";
}


/*
    var deducQ = document.querySelector("#quiz-question-text");
    if (totalpage === 4) {
        deducQ.innerText = "wefslkvfksflsnlfnsknfksnfnksfslf"
    } else if (totalpage === 5){
    document.querySelector("#quiz-choice-1").style.display = "block";
    document.querySelector("#quiz-choice-2").style.display = "flex";

}*/



// What I changed
var colors = new Array(
    [62,35,255],
    [60,255,60],
    [255,35,98],
    [45,175,230],
    [255,0,255],
    [255,128,0]);
  
  var step = 0;
  //color table indices for: 
  // current color left
  // next color left
  // current color right
  // next color right
  var colorIndices = [0,1,2,3];
  
  //transition speed
  var gradientSpeed = 0.002;
  
  function updateGradient()
  {
    
    if ( $===undefined ) return;
    
  var c0_0 = colors[colorIndices[0]];
  var c0_1 = colors[colorIndices[1]];
  var c1_0 = colors[colorIndices[2]];
  var c1_1 = colors[colorIndices[3]];
  
  var istep = 1 - step;
  var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
  var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
  var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
  var color1 = "rgb("+r1+","+g1+","+b1+")";
  
  var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
  var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
  var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
  var color2 = "rgb("+r2+","+g2+","+b2+")";
  
   $('#gradient').css({
     background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
      background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
    
    step += gradientSpeed;
    if ( step >= 1 )
    {
      step %= 1;
      colorIndices[0] = colorIndices[1];
      colorIndices[2] = colorIndices[3];
      
      //pick two new target color indices
      //do not pick the same as the current one
      colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
      colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
      
    }
  }
  
  setInterval(updateGradient,10);