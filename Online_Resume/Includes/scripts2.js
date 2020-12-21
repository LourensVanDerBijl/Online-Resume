//Professional information
document.getElementById("WorkExperience").addEventListener("mouseover", WorkExperience);
document.getElementById("DevelopmentSkills").addEventListener("mouseover", DevelopmentSkills);
document.getElementById("RelevantSkills").addEventListener("mouseover", RelevantSkills);
document.getElementById("Education").addEventListener("mouseover", Education);

var mybutton = document.getElementById("bckTop");

function WorkExperience() {
    document.getElementById("InformationText").innerHTML = "<div class='work-experience'>" +
        "<div class='row'>" +
        "<div class='col-sm-4' id='company-name'>mySHEQ <br><a href='https://www.mysheq.com/'>https://www.mysheq.com/</a><br><br> </div>" +
        "<div class='col-sm-4' id='position'>Junior UI/UX developer<br>Part-time<br><br>" +
        "<table>" +
        "<tr>" +
        "<td class='info-1'>" +
        "Since:" +
        "</td>" +
        "<td class='info-2'>" +
        "2020/09 to current" +
        "</td>" +
        "</tr>" +
        "<tr>" +
        "<td class='info-1'>" +
        "Reference:" +
        "</td>" +
        "<td class='info-2'>" +
        "Neil Van Der Bijl" +
        "</td>" +
        "</tr>" +
        "<tr>" +
        "<td class='info-1'>" +
        "Position:" +
        "</td>" +
        "<td class='info-2'>" +
        "Company director" +
        "</td>" +
        "</tr>" +
        "<tr>" +
        "<td class='info-1'>" +
        "Contact:" +
        "</td>" +
        "<td class='info-2'>" +
        "074 898 0101" +
        "</td>" +
        "</tr>" +
        "</table><br><br>" +
        "</div>" +
        "<div class='col-sm-4' id='position-discr'>" +
        "<ul>" +
        "<li>Part-time / Freelance developer for mySHEQ.</li>" +
        "<li>Front-end developer (html, CSS, JavaScript, SQL etc.).</li>" +
        "<li>Back-end in-training. Using JavaScript libraries.</li>" +
        "<li>Version migration (amchart3.js to amchart4.js).</li>" +
        "<li>Business enterprise systems in-training.</li>" +
        "<li>Working with enterprise system API.</li>" +
        "<li>Using multiple JS libraries (Vue.js, Bootstrap, AJAX, Jquery, amcharts etc.).</li>" +
        "<li>Maintaining excellent timekeeping responsible for projects on my own.</li>" +
        "</ul><br><br></div>" +
        "</div>" +
        "<br><br><br><br>" +
        "<!--break-->" +
        "<div class='row'>" +
        "<div class='col-sm-4' id='company-name1'>Umbane Technology<br><a href='http://umbanetechnology.co.za/'>http://umbanetechnology.co.za/</a><br>" +
        "<br></div>" +
        "<div class='col-sm-4' id='position1'>" +
        "Team leader / Site Supervisior <br>Full-time<br><br>" +
        "<table>" +
        "<tr>" +
        "<td class='info-1'>" +
        "Since:" +
        "</td>" +
        "<td class='info-2'>" +
        "2012/12 to current" +
        "</td>" +
        "</tr>" +
        "<tr>" +
        "<td class='info-1'>" +
        "Reference:" +
        "</td>" +
        "<td class='info-2'>" +
        "Louis Van Der Bijl" +
        "</td>" +
        "</tr>" +
        "<tr>" +
        "<td class='info-1'>" +
        "Position:" +
        "</td>" +
        "<td class='info-2'>" +
        "Company director" +
        "</td>" +
        "</tr>" +
        "<tr>" +
        "<td class='info-1'>" +
        "Contact:" +
        "</td>" +
        "<td class='info-2'>" +
        "073 799 1101" +
        "</td>" +
        "</tr>" +
        "</table><br><br>" +
        "</div>" +
        "<div class='col-sm-4' id='position-discr1'>" +
        "<ul>" +
        "<li>Worked closely with network administrators and server engineers to deliver quality service.</li>" +
        "<li>Planned layouts and ran the cable into buildings and through walls, attics and crawl spaces.</li>" +
        "<li>Diagnosed and resolved complex integrated customer issues for implementation, add-on, maintenance and support of voice, data, VoIP and CTI applications.</li>" +
        "<li>Installed and configured new devices and system components.</li>" +
        "<li>Performed network operations and installation of telecommunication equipment for several telecom companies.</li>" +
        "<li>Responded to service requests during and after business hours.</li>" +
        "<li>Maintained excellent attendance records, consistently arriving to work on time.</li>" +
        "<li>Managed quality assurance programs, including on-site evaluations, internal audits and customer surveys.</li><br>" +
        "</ul>" +
        "</div>" +
        "</div>" +
        "<br><br><br><br>" +
        "<!--break-->" +
        "<div class='row'>" +
        "<div class='col-sm-4' id='company-name2'>Bootcamp DEV courses<br>Developing phase <br><br>" +
        "</div>" +
        "<div class='col-sm-4' id='position2'>" +
        "Assisting Front-End developer <br> Volentary Work <br><br>" +
        "<table>" +
        "<tr>" +
        "<td class='info-1'>" +
        "Since:" +
        "</td>" +
        "<td class='info-2'>" +
        "2020/11 to current" +
        "</td>" +
        "</tr>" +
        "<tr>" +
        "<td class='info-1'>" +
        "Reference:" +
        "</td>" +
        "<td class='info-2'>" +
        "Ronica Singh" +
        "</td>" +
        "</tr>" +
        "<tr>" +
        "<td class='info-1'>" +
        "Position:" +
        "</td>" +
        "<td class='info-2'>" +
        "Senior Front-End Developer" +
        "</td>" +
        "</tr>" +
        "<tr>" +
        "<td class='info-1'>" +
        "Contact:" +
        "</td>" +
        "<td class='info-2'>" +
        "084 222 5005" +
        "</td>" +
        "</tr>" +
        "</table> <br><br>" +
        "</div>" +
        "<div class='col-sm-4' id='position-discr2'>" +
        "<ul>" +
        "<li>Providing theoretical advice to team members about coding languages and databases.</li>" +
        "<li>Doing small front-end development projects (web design, form design, etc.).</li>" +
        "<li>Assisting in project brainstorming and ideas.</li>" +
        "</ul>" +
        "</div>" +
        "</div>" +
        "<br><br><br><br><br><br><br><br>" +
        "</div>" +
        "</div>" +
        "</div> ";
};

function DevelopmentSkills() {
    document.getElementById("InformationText").innerHTML = "<div class='dSkils'>" +
        "<div class='Dev-skills1'>" +
        "<h3>FRONT-END DEVELOPMENT</h3>" +
        "I have fundamental experience with front-end development.<br> UI/UX is an important part of any development process and I enjoy the challenges it brings.<br> I have experience with the following technologies (but are not limited to):" +
        "<br><br>" +
        "<div class='progress'>" +
        "<div class='progress-bar progress-bar-success' role='progressbar' aria-valuenow='40' aria-valuemin='0' aria-valuemax='100' style='width:95%'>" +
        "HTML" +
        "</div>" +
        "</div>" +
        "<div class='progress'>" +
        "<div class='progress-bar progress-bar-success' role='progressbar' aria-valuenow='90' aria-valuemin='0' aria-valuemax='100' style='width:90%'>" +
        "HTML5" +
        "</div>" +
        "</div>" +
        "<div class='progress'>" +
        "<div class='progress-bar progress-bar-info' role='progressbar' aria-valuenow='89' aria-valuemin='0' aria-valuemax='100' style='width:89%'>" +
        "CSS" +
        "</div>" +
        "</div>" +
        "<div class='progress'>" +
        "<div class='progress-bar progress-bar-info' role='progressbar' aria-valuenow='75' aria-valuemin='0' aria-valuemax='100' style='width:75%'>" +
        "CSS3" +
        "</div>" +
        "</div>" +
        "</div>" +
        "<!--break-->" +
        "<div class='Dev-skills2'>" +
        "<div class='progress'>" +
        "<div class='progress-bar progress-bar-success' role='progressbar' aria-valuenow='93' aria-valuemin='0' aria-valuemax='100' style='width:93%'>" +
        "JavaScript (vanilla)" +
        "</div>" +
        "</div>" +
        "<div class='progress'>" +
        "<div class='progress-bar progress-bar-warning' role='progressbar' aria-valuenow='65' aria-valuemin='0' aria-valuemax='100' style='width:65%'>" +
        "TypeScript" +
        "</div>" +
        "</div>" +
        "<div class='progress'>" +
        "<div class='progress-bar progress-bar-danger' role='progressbar' aria-valuenow='60' aria-valuemin='0' aria-valuemax='100' style='width:60%'>" +
        "API's" +
        "</div>" +
        "</div>" +
        "<div class='progress'>" +
        "<div class='progress-bar progress-bar-info' role='progressbar' aria-valuenow='85' aria-valuemin='0' aria-valuemax='100' style='width:85%'>" +
        "JavaScript libraries" +
        "</div>" +
        "</div>" +
        "</div>" +
        "<br><br>" +
        "<div class='Dev-skills1'>" +
        "I also have experience working with the following JavaScript libraries and is actively expanding my knowledge of these libraries and studying new once:<br>" +
        "<br>" +
        "<div class='progress'>" +
        "<div class='progress - bar progress - bar - warning'  role='progressbar'  aria-valuenow='71' aria-valuemin='0' aria-valuemax='100 ' style='width:71%'>" +
        "jQuery" +
        "</div>" +
        "</div>" +
        "<div class='progress'>" +
        "<div class='progress-bar progress-bar-info' role='progressbar' aria-valuenow='83' aria-valuemin='0' aria-valuemax='100' style='width:83%'>" +
        "jQuery UI" +
        "</div>" +
        "</div>" +
        "<div class='progress'>" +
        "<div class='progress-bar progress-bar-success' role='progressbar' aria-valuenow='95' aria-valuemin='0' aria-valuemax='100' style='width:95%'>" +
        "Bootstrap" +
        "</div>" +
        "</div>" +
        "<div class='progress'>" +
        "<div class='progress-bar progress-bar-warning' role='progressbar' aria-valuenow='60' aria-valuemin='0' aria-valuemax='100' style='width:60%'>" +
        "Ajax" +
        "</div>" +
        "</div>" +
        "</div>" +
        "<!--break-->" +
        "<div class='Dev-skills2'>" +
        "<div class='progress'>" +
        "<div class='progress-bar progress-bar-info' role='progressbar' aria-valuenow='80' aria-valuemin='0' aria-valuemax='100' style='width:80%'>" +
        "Vue.js" +
        "</div>" +
        "</div>" +
        "<div class='progress'>" +
        "<div class='progress-bar progress-bar-info' role='progressbar' aria-valuenow='75' aria-valuemin='0' aria-valuemax='100' style='width:75%'>" +
        "JSON" +
        "</div>" +
        "</div>" +
        "<div class='progress'>" +
        "<div class='progress-bar progress-bar-danger' role='progressbar' aria-valuenow='60' aria-valuemin='0' aria-valuemax='100' style='width:60%'>" +
        "React" +
        "</div>" +
        "</div>" +
        "<div class='progress'>" +
        "<div class='progress-bar progress-bar-success' role='progressbar' aria-valuenow='89' aria-valuemin='0' aria-valuemax='100' style='width:89%'>" +
        "amCharts.js" +
        "</div>" +
        "</div>" +
        "</div>" +
        "<br><br><br>" +
        "<div class='Dev-skills1'>" +
        "<h3>BACK-END DEVELOPMENT</h3>" +
        "I have a great passion for developing web applications that interact with users and obtain and save information. The majority of my back-enddevelopment experience is based on PHP storing and manipulating data in MySQL. I also have some experience in other" +
        "back-end languages likeC++, Java etc.  I often also used JavaScript libraries for back-end development (Vue.js, React, etc.)." +
        "<br><br>" +
        "<div class='progress'>" +
        "<div class='progress-bar progress-bar-success' role='progressbar' aria-valuenow='85' aria-valuemin='0' aria-valuemax='100' style='width:85%'>" +
        "PHP" +
        "</div>" +
        "</div>" +
        "<div class='progress'>" +
        "<div class='progress-bar progress-bar-warning' role='progressbar' aria-valuenow='65' aria-valuemin='0' aria-valuemax='100' style='width:65%'>" +
        "C++" +
        "</div>" +
        "</div>" +
        "<div class='progress'>" +
        "<div class='progress-bar progress-bar-success' role='progressbar' aria-valuenow='86' aria-valuemin='0' aria-valuemax='100' style='width:86%'>" +
        "VB.net" +
        "</div>" +
        "</div>" +
        "<div class='progress'>" +
        "<div class='progress-bar progress-bar-info' role='progressbar' aria-valuenow='83' aria-valuemin='0' aria-valuemax='100' style='width:83%'>" +
        "SQL" +
        "</div>" +
        "</div>" +
        "</div>" +
        "<br><br><br><br><br><br>" +
        "</div>";
};

function RelevantSkills() {
    document.getElementById("InformationText").innerHTML = "Rel Skills";
};

function Education() {
    document.getElementById("InformationText").innerHTML = "Geleerdheid";
};


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









/* */














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