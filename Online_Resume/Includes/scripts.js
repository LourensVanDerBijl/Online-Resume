document.getElementById("personalInfo").addEventListener("mouseover", PersonalInfomation);
document.getElementById("aboutMe").addEventListener("mouseover", AboutMe);
document.getElementById("myGoals").addEventListener("mouseover", MyGoals);
document.getElementById("hobies").addEventListener("mouseover", MyHobies);


function checkScreen() {
    var Wi = screen.width;
    var Hi = screen.height;

    if (Wi < Hi) {
        document.getElementById("screenSize").innerHTML = "Mobile view detected.";
    };



};

function PersonalView() {
    window.location.href = "Personal.html";
};

function ProffesionalView() {
    window.location.href = "Proffesional.html";
};

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
};



function PersonalInfomation() {
    document.getElementById("InformationBody").innerHTML = "Lourens" + "piet";
};

function AboutMe() {
    document.getElementById("InformationBody").innerHTML = "about me";
};

function MyGoals() {
    document.getElementById("InformationBody").innerHTML = "What is my goals?";
};

function MyHobies() {
    document.getElementById("InformationBody").innerHTML = "What do I like?";
};