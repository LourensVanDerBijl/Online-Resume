//Personal Information
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

function test() {
    document.getElementById("InformationBody").innerHTML = "foken werk";
}


// Personal Information
function PersonalInfomation() {
    document.getElementById("InformationBody").innerHTML = "<div class='introduction'> My name is Lourens Van Der Bijl. I am a 26-year-old male currently situated in<br> Witbank, Mpumalanga, South-Africa.<br> I am highly motivated and eager to <br>relocate to any city/town where my skillsets are required<br>and can" +
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
        "<td>940902 5019 08 8</td>" +
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
    document.getElementById("InformationBody").innerHTML = "<div class='about-me'> Passionate, reliable, dedicated, neat, hardworking, 'quick study' and goal-driven are just a few attributes I can use to describe myself. I take pride in my appearance and am motivated by my achievements. I am devoted to becoming a great developer/software engineer and achieving my career goal as a full stack developer." +
        "<br><br><br><br>I am a high achieving distance student at  Richfield Graduate Institute of Technology currently undertaking my Bachelor of Science in Information Technology degree. During the course of my studies in which I had minimum lecture support and still obtained remarkble results (distinctions), I have learned that I can accomplish anything that I put my heart on. I will be completing my degree (final year) in 2021." +
        "<br><br><br><br>In my career, I attempt to be productive rather than busy. I always regard a companies needs and targets as a significant priority. I enjoy working in a team and as my current colleagues can attest I can also produce excellent results on my own. As a team leader for 5 years I also have target-driven leadership skills. " +
        "As a Junior (but still learning) developer, I enjoy working with and learning new coding languages. <br><br><br><br><br><br><br><br></div> ";
};

function MyGoals() {
    document.getElementById("InformationBody").innerHTML = "<div class='myGoals'>" +
        "<h4>Personal goals</h4>" +
        "<ul>" +
        "<li>To make a career change from telecommunications to development.</li>" +
        "<li>To relocate to a bigger town/city where my skillsets are required.</li>" +
        "<li>To gain a career opportunity that can improve my lifestyle.</li>" +
        "<li>To be considered an expert in the development industry.</li>" +
        "<li>To empower myself with development knowledge to outshine competitors and provide permanent solutions to projects.</li>" +
        "<li>To expand my professional connections.</li>" +
        "</ul>" +
        "<br><br><br>" +


        "<h4>Career Goals</h4>" +
        "<ul>" +
        "<li>To be a valuable asset to a company with high standards and quality work.</li>" +
        "<li>To gain experience in my field of study.</li>" +
        "<li>To learn from senior developers and expand my knowledge.</li>" +
        "<li>To reach a leadership position.</li>" +
        "<li>To obtain a new skillset from senior developers with more experiences.</li>" +
        "</ul>" +
        "</div><br><br><br><br><br><br><br><br>";
};

function MyHobies() {
    document.getElementById("InformationBody").innerHTML = "<div class = 'myHobies'><h4>What do I enjoy?</h4><ul><li>I enjoy spending time infront of my computer, whether it is playing games or working on development projects.</li>" +
        "<li>I enjoy spending time with colleagues and friends, socializing and engaging in different activities together.</li>" +
        "<li>Although I am not a musician, I enjoy playing the guitar.</li>" +
        "<li>I like to do outside activities, engaging in board sport, motor sport etc.</li></ul><br><br><br><br><br><br><br></div>";
};

//Professional Information
function MworkExperience() {
    document.getElementById("InformationBody").innerHTML = "<div class = 'myHobies'><h4>What do I enjoy?</h4><ul><li>I enjoy spending time infront of my computer, whether it is playing games or working on development projects.</li>" +
        "<li>I enjoy spending time with colleagues and friends, socializing and engaging in different activities together.</li>" +
        "<li>Although I am not a musician, I enjoy playing the guitar.</li>" +
        "<li>I like to do outside activities, engaging in board sport, motor sport etc.</li></ul><br><br><br><br><br><br><br></div>";
};





// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function footer() {
    document.getElementById("footer").innerHTML = "<div class='Contact-me'>" +
        "Lourens Van Der Bijl<br>lourensvdbijl@gmail.com" +
        "<br> +27 60 526 1031" +
        "</div>" +


        "<div class='contact-logos'>" +
        "<a href='mailto:lourensvdbijl@gmail.com'> <img src='Images/gmail (1).png' class='logo-img'></a>" +
        "<a href='https://join.skype.com/invite/b5s3XDTzBnwi'> <img src='Images/skype (1).png' class='logo-img'></a>" +
        "<a href='https://www.linkedin.com/in/lourens-van-der-bijl-453a6a19b'> <img src='Images/linkedin (2).png' class='logo-img'></a>" +
        "<a href='https://github.com/LourensVanDerBijl?tab=repositories'><img src='Images/github.png' class='logo-img'></a>" +
        "<button id='bckTop' onclick='topFunction()'><img src='Images/top-alignment.png' class='logo-img'></button>" +
        "</div>";
}