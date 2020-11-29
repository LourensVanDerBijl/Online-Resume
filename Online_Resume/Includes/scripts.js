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