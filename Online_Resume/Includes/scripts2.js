//Professional information
document.getElementById("1").addEventListener("mouseover", test);
document.getElementById("2").addEventListener("mouseover", AboutMe);
document.getElementById("3").addEventListener("mouseover", MyGoals);
document.getElementById("4").addEventListener("mouseover", MyHobies);

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







// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function footer() {
    document.getElementById("footer").innerHTML = "<div class='Contact-me'>" +
        "Lourens Van Der Bijl<br>lourensvdbijl@gmail.com" +
        "<br> 060 526 1031" +
        "</div>" +


        "<div class='contact-logos'>" +
        "<a href='mailto:lourensvdbijl@gmail.com'> <img src='Images/gmail (1).png' class='logo-img'></a>" +
        "<a href='https://join.skype.com/invite/b5s3XDTzBnwi'> <img src='Images/skype (1).png' class='logo-img'></a>" +
        "<a href='https://www.linkedin.com/in/lourens-van-der-bijl-453a6a19b'> <img src='Images/linkedin (2).png' class='logo-img'></a>" +
        "<a href='https://github.com/LourensVanDerBijl?tab=repositories'><img src='Images/github.png' class='logo-img'></a>" +
        "<button id='bckTop' onclick='topFunction()'><img src='Images/top-alignment.png' class='logo-img'></button>" +
        "</div>";
}