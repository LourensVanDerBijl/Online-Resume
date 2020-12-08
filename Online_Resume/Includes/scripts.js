document.getElementById("personalInfo").addEventListener("mouseover", PersonalInfomation);
document.getElementById("aboutMe").addEventListener("mouseover", AboutMe);
document.getElementById("myGoals").addEventListener("mouseover", MyGoals);
document.getElementById("hobies").addEventListener("mouseover", MyHobies);

var mybutton = document.getElementById("bckTop");


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
    document.getElementById("InformationBody").innerHTML = "<div class='introduction'> My name is Lourens Van Der Bijl I am a 26-year-old male currently situated in<br> Witbank, Mpumalanga, South-Africa.<br> I am highly motivated and eager to <br>relocate to any city/town where my skillset are required<br>and and can" +
        " expand.</div>" +
        "<br><br>" +


        "<table class='intro-table'>" +
        "<tr class='tb-1'>" +
        "<td>Name:</td>" +
        "<td>Louis Lourens</td>" +
        "</tr>" +
        "<tr class='tb-2'>" +
        "<td>Surname:</td>" +
        "<td>Van Der Bijl</td>" +
        "</tr>" +
        "<tr class='tb-1'>" +
        "<td>ID number:</td>" +
        "<td>269409025019088</td>" +
        "</tr>" +
        "<tr class='tb-2'>" +
        "<td>Nationality:</td>" +
        "<td>South African</td>" +
        "</tr>" +
        "<tr class='tb-1'>" +
        "<td>Gendre:</td>" +
        "<td>Male</td>" +
        "</tr>" +
        "<tr class='tb-2'>" +
        "<td>Relationship status:</td>" +
        "<td>Married</td>" +
        "</tr>" +
        "<tr class='tb-1'>" +
        "<td>Dependant:</td>" +
        "<td>2</td>" +
        "</tr>" +
        "<tr class='tb-2'>" +
        "<td>Age:</td>" +
        " <td>26</td>" +
        "</tr>" +
        "<tr class='tb-1'>" +
        " <td>Driver's licence:</td>" +
        " <td>Yes</td>" +
        " </tr>" +
        "<tr class='tb-2'>" +
        " <td>Health status :</td>" +
        " <td>Excellent </td>" +
        " </tr>" +
        "<tr class='tb-1'>" +
        "   <td>Willing to relocate:</td>" +
        "   <td><input type='checkbox' checked></td>" +
        " </tr>" +
        " <tr class='tb-2'>" +
        "<td>Criminal record:</td>" +
        "<td>None </td>" +
        "</tr>" +
        "</table>" +
        " <br><br><br><br><br><br><br><br><br><br><br><br><br>";



    ;
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





// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function footer() {
    document.getElementById("footer").innerHTML = "<div class='Contact-me'>" +
        "Lourens Van Der Bijl<br>lourensvdbijl@gmail.com" +
        "<br> 060 526 1031<br><br>" +
        "</div>" +


        "<div class='contact-logos'>" +
        "<a href='mailto:lourensvdbijl@gmail.com'> <img src='Images/gmail (1).png' class='logo-img'></a>" +
        "<a href='https://join.skype.com/invite/b5s3XDTzBnwi'> <img src='Images/skype (1).png' class='logo-img'></a>" +
        "<a href='https://www.linkedin.com/in/lourens-van-der-bijl-453a6a19b'> <img src='Images/linkedin (2).png' class='logo-img'></a>" +
        "<a href='https://github.com/LourensVanDerBijl?tab=repositories'><img src='Images/github.png' class='logo-img'></a>" +
        "<button id='bckTop' onclick='topFunction()'><img src='Images/top-alignment.png' class='logo-img'></button>" +
        "</div>";
}