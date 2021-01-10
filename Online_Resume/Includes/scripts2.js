//Professional information
document.getElementById("WorkExperience").addEventListener("mouseover", WorkExperience);
document.getElementById("DevelopmentSkills").addEventListener("mouseover", DevelopmentSkills);
document.getElementById("RelevantSkills").addEventListener("mouseover", RelevantSkills);
document.getElementById("Education").addEventListener("mouseover", Education);
document.getElementById("Studies").addEventListener("mouseover", Studies);


//certificates


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
        "<li>Maintain excellent timekeeping.</li> <li>Responsible for projects on my own.</li>" +
        "</ul><br><br></div>" +
        "</div>" +
        "<br><br><br><br>" +
        "<!--break-->" +
        "<div class='row'>" +
        "<div class='col-sm-4' id='company-name1'>Umbane Technology<br><a href='http://umbanetechnology.co.za/'>http://umbanetechnology.co.za/</a><br>" +
        "<br></div>" +
        "<div class='col-sm-4' id='position1'>" +
        "Team leader / Site supervisor <br>Full-time<br><br>" +
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
        "<li>Work closely with network administrators and server engineers to deliver quality service.</li>" +
        "<li>Plan layouts and run the cable into buildings and through walls, attics and crawl spaces.</li>" +
        "<li>Diagnose and resolve complex integrated customer issues for implementation, add-on, maintenance and support of voice, data, VoIP and CTI applications.</li>" +
        "<li>Install and configure new devices and system components.</li>" +
        "<li>Perform network operations and installation of telecommunication equipment for several telecom companies.</li>" +
        "<li>Responds to service requests during and after business hours.</li>" +
        "<li>Maintain excellent attendance records, consistently arriving to work on time.</li>" +
        "<li>Manage quality assurance programs, including on-site evaluations, internal audits and customer surveys.</li><br>" +
        "</ul>" +
        "</div>" +
        "</div>" +
        "<br><br><br><br>" +
        "<!--break-->" +
        "<div class='row'>" +
        "<div class='col-sm-4' id='company-name2'>Bootcamp DEV courses<br>Developing phase <br><br>" +
        "</div>" +
        "<div class='col-sm-4' id='position2'>" +
        "Assisting Front-End developer <br> Voluntary Work <br><br>" +
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
        "I have fundamental experience with front-end development.<br> UI/UX is an important part of any development process and I enjoy the challenges it presents.<br> I have experience with the following technologies (but are not limited to):" +
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
        "<div class='progress-bar progress-bar-warning' role='progressbar' aria-valuenow='71' aria-valuemin='0' aria-valuemax='100' style='width:71%'>" +
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
        "I have a great passion for developing web applications that interact with users and obtain and save information. The majority of my back-end development experience is based on PHP storing and manipulating data in MySQL. I also have some experience in other" +
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
    document.getElementById("InformationText").innerHTML = "<div class='container'>" +
        "<div class='row'>" +
        "<div class='col-sm-6'>" +
        "<div class='relSkills'> Experienced in Object-Oriented Programming (OOP).</div>" +
        "<div class='relSkills'> Experienced in Object-Oriented Design (OOD).</div>" +
        "<div class='relSkills'> Experienced in Software testing and debugging.</div>" +
        "<div class='relSkills'> Experienced in Software testing and debugging.</div>" +
        "<div class='relSkills'> Critical and logical mindset with a problem-solving attitude.</div>" +
        "<div class='relSkills'> Advance knowledge of source-control.</div>" +
        "<div class='relSkills'> Theoretical and working knowledge of databases.</div>" +
        "<div class='relSkills'> Theoretical and working experience in networking.</div>" +
        "<div class='relSkills'> API knowledge.</div>" +
        "<div class='relSkills'> Knowledge of operating systems.</div>" +
        "<div class='relSkills'> Knowledge of supporting developer forums and websites.</div>" +
        "</div>" +
        "<div class='col-sm-6'>" +
        "<div class='relSkills'> Ability to multitask.</div>" +
        "<div class='relSkills'> Team player but also a successful individual employee.</div>" +
        "<div class='relSkills'> Great at time management.</div>" +
        "<div class='relSkills'> Experienced with a variety of IDE's and text editors.</div>" +
        "<div class='relSkills'> Cross-Platform software design.</div>" +
        "<div class='relSkills'> Working knowledge of the SDLC.</div>" +
        "<div class='relSkills'> Proficient in written and verbal communication.</div>" +
        "<div class='relSkills'> Achieving and fast learning.</div>" +
        "<div class='relSkills'> Experienced with software applications such as Microsoft office etc.</div>" +
        "<div class='relSkills'> Fluent in English and Afrikaans.</div>" +
        "<div class='relSkills'> Drivers licence (Code B).</div>" +
        "</div>" +
        "<br><br><br><br><br><br><br><br>" +
        "</div>" +
        "</div>";
};

function Education() {
    document.getElementById("InformationText").innerHTML = "<div class='Education-sub'>" +
        "I am a highly competent distance learning student currently undertaking my Bachelor’s Degree Of Science In Information Technology (final year)<br><br><br>" +
        "<div class='year2Sem2'>" +
        "<div class='container'>" +
        "<div class='row'>" +
        "<div class='col-sm-6'>" +
        "<h3>Bachelor's degree of Science in Information Technology - <i>Year 2 - Semester 2</i></h3>" +
        "<h4><a href='https://www.richfield.ac.za/'>Richfield Graduate Institute of Technology</a></h4>" +
        "<ul>" +
        "<li>BIG DATA & IOT 600</li>" +
        "<li>Information Systems 622</li>" +
        "<li>Management Information Systems & BI 600</li>" +
        "<li>Internet Programming 622</li>" +
        "<li>Programming 622</li>" +
        "<br>" +
        "<a href='Includes/Year_2_sem_2.pdf' class='DownloadResult' download>Download official Result</a>" +
        "</ul>" +
        "</div>" +
        "<div class='col-sm-6'>" +
        "<div class='result1'>" +
        "<table class='table'>" +
        "<thead>" +
        "<tr>" +
        "<th scope='col'>Module</th>" +
        "<th scope='col'>Result</th>" +
        "</tr>" +
        "</thead>" +
        "<tbody>" +
        "<tr>" +
        "<th scope='BIG_DATA_&_IOT_600'>BIG DATA & IOT 600</th>" +
        "<td>95%</td>" +
        "</tr>" +
        "<tr>" +
        "<th scope='Information_Systems_622'>Information Systems 622</th>" +
        "<td>93%</td>" +
        "</tr>" +
        "<tr>" +
        "<th scope='Management_Information_Systems_&_BI_600'>Management Information Systems & BI 600</th>" +
        "<td>92%</td>" +
        "</tr>" +
        "<tr>" +
        "<th scope='Internet_Programming_622'>Internet Programming 622</th>" +
        "<td>74%</td>" +
        "</tr>" +
        "<tr>" +
        "<th scope='Programming_622'>Programming 622</th>" +
        "<td>81%</td>" +
        "</tr>" +
        "</tbody>" +
        "</table>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "<!--break-->" +
        "<br><br><br>" +
        "<div class='year2Sem2'>" +
        "<div class='container'>" +
        "<div class='row'>" +
        "<div class='col-sm-6'>" +
        "<h3>Bachelor's degree of Science in Information Technology - <i>Year 2 - Semester 1</i></h3>" +
        "<h4><a href='https://www.richfield.ac.za/'>Richfield Graduate Institute of Technology</a></h4>" +
        "<ul>" +
        "<li>Information Systems 621</li>" +
        "<li>Database Systems 600</li>" +
        "<li>Cloud Computing 600</li>" +
        "<li>Internet Programming 621</li>" +
        "<li>Programming 621</li><br>" +
        "<a href='Includes/Year_2_sem_1.pdf' class='DownloadResult' download>Download official Result</a>" +
        "</ul>" +
        "</div>" +
        "<div class='col-sm-6'>" +
        "<div class='result1'>" +
        "<table class='table'>" +
        "<thead>" +
        "<tr>" +
        "<th scope='col'>Module</th>" +
        "<th scope='col'>Result</th>" +
        "</tr>" +
        "</thead>" +
        "<tbody>" +
        "<tr>" +
        "<th scope='Information_Systems_621'>Information Systems 621</th>" +
        "<td>96%</td>" +
        "</tr>" +
        "<tr>" +
        "<th scope='Database_Systems_600'>Database Systems 600</th>" +
        "<td>93%</td>" +
        "</tr>" +
        "<tr>" +
        "<th scope='Cloud_computing_600'>Cloud Computing 600</th>" +
        "<td>96%</td>" +
        "</tr>" +
        "<tr>" +
        "<th scope='Internet_Programming_621'>Internet Programming 621</th>" +
        "<td>88%</td>" +
        "</tr>" +
        "<tr>" +
        "<th scope='Programming_621'>Programming 622</th>" +
        "<td>90%</td>" +
        "</tr>" +
        "</tbody>" +
        "</table>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "<!--break-->" +
        "<br><br><br>" +
        "<div class='year2Sem2'>" +
        "<div class='container'>" +
        "<div class='row'>" +
        "<div class='col-sm-6'>" +
        "<h3>Bachelor's degree of Science in Information Technology - <i>Year 1 - Semester 2</i></h3>" +
        "<h4><a href='https://www.richfield.ac.za/'>Richfield Graduate Institute of Technology</a></h4>" +
        "<ul>" +
        "<li>Information Systems 512</li>" +
        "<li>Mathematics 512</li>" +
        "<li>Networks 512</li>" +
        "<li>Programming 512</li>" +
        "<li>Web Technology 512</li><br>" +
        "<a href='Includes/Year_1_sem_2.pdf' class='DownloadResult' download>Download official Result</a>" +
        "</ul>" +
        "</div>" +
        "<div class='col-sm-6'>" +
        "<div class='result1'>" +
        "<table class='table'>" +
        "<thead>" +
        "<tr>" +
        "<th scope='col'>Module</th>" +
        "<th scope='col'>Result</th>" +
        "</tr>" +
        "</thead>" +
        "<tbody>" +
        "<tr>" +
        "<th scope='Information_systems_512'>Information Systems 512</th>" +
        "<td>78%</td>" +
        "</tr>" +
        "<tr>" +
        "<th scope='Mathematics_512'>Mathematics 512</th>" +
        "<td>69%</td>" +
        "</tr>" +
        "<tr>" +
        "<th scope='Networks_512'>Networks 512</th>" +
        "<td>73%</td>" +
        "</tr>" +
        "<tr>" +
        "<th scope='Web_Technology_512'>Web Technology 512</th>" +
        "<td>88%</td>" +
        "</tr>" +
        "<tr>" +
        "<th scope='Programming_512'>Programming 512</th>" +
        "<td>76%</td>" +
        "</tr>" +
        "</tbody>" +
        "</table>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "<!--break-->" +
        "<br><br><br>" +
        "<div class='year2Sem2'>" +
        "<div class='container'>" +
        "<div class='row'>" +
        "<div class='col-sm-6'>" +
        "<h3>Bachelor's degree of Science in Information Technology - <i>Year 1 - Semester 1</i></h3>" +
        "<h4><a href='https://www.richfield.ac.za/'>Richfield Graduate Institute of Technology</a></h4>" +
        "<ul>" +
        "<li>Information systems 511</li>" +
        "<li>Mathematics 511</li>" +
        "<li>Networks 511</li>" +
        "<li>Web Technology 511</li>" +
        "<li>Programming 511</li><br>" +
        "<a href='Includes/year_1_sem_1.pdf' class='DownloadResult' download>Download official Result</a>" +
        "</ul>" +
        "</div>" +
        "<div class='col-sm-6'>" +
        "<div class='result1'>" +
        "<table class='table'>" +
        "<thead>" +
        "<tr>" +
        "<th scope='col'>Module</th>" +
        "<th scope='col'>Result</th>" +
        "</tr>" +
        "</thead>" +
        "<tbody>" +
        "<tr>" +
        "<th scope='Information_systems_511'>Information systems 511</th>" +
        "<td>70%</td>" +
        "</tr>" +
        "<tr>" +
        "<th scope='Mathematics_511'>Mathematics 511</th>" +
        "<td>58%</td>" +
        "</tr>" +
        "<tr>" +
        "<th scope='Networks_511'>Networks 511</th>" +
        "<td>76%</td>" +
        "</tr>" +
        "<tr>" +
        "<th scope='Web_Technology_511'>Web Technology 511</th>" +
        "<td>86%</td>" +
        "</tr>" +
        "<tr>" +
        "<th scope='Programming_511'>Programming 511</th>" +
        "<td>80%</td>" +
        "</tr>" +
        "</tbody>" +
        "</table>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "<!--break-->" +
        "<br><br><br>" +
        "<div class='year2Sem2'>" +
        "<h4>National Senior Certificate (NSC)</h4>" +
        "<h5>Technology High School Middelburg</h5>" +
        "<h5>Class of 2012</h5>" +
        "<a href='https://htsmiddelburg.co.za/'>https://htsmiddelburg.co.za/</a><br> For academic record please contact <br> Miss Antonette Kolesky <br>" +
        "<a href='mailto:admin@htsmiddelburg.co.za'>admin@htsmiddelburg.co.za</a><br> +27 13 282 6029<br><br>" +
        "<a href='Includes/Getuigskrif.jpeg' class='DownloadResult' download>Download Testimonial</a><br><br>" +
        "</div>" +
        "<!--break-->" +
        "<br><br><br>" +
        "<h3><u>Online Certificates completed</u></h3>" +
        "These certifications do not provide any additional credits. The goal of completing these certificates was to show my dedication and interest in the development field and also to gain some additional knowledge of these subjects.<br><br>" +
        "<div class='container'>" +
        "<div class='row'>" +
        "<div class='col-sm-4'><br><br>" +
        "<div class='certificate1'>" +
        "HTML Fundamentals course <br>19 July 2020 <br><button onclick='htmlCer()'>View Certificate</button>" +
        "</div>" +
        "</div>" +
        "<!--break-->" +
        "<div class='col-sm-4'><br><br>" +
        "<div class='certificate1'>" +
        "CSS Fundamentals course <br>24 July 2020 <br><button onclick='CSSCer()'>View Certificate</button>" +
        "</div>" +
        "</div>" +
        "<!--break-->" +
        "<div class='col-sm-4'><br><br>" +
        "<div class='certificate1'>" +
        "JavaScript Tutorial course <br>19 July 2020 <br><button onclick='JSCer()'>View Certificate</button>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "<div class='container'>" +
        "<div class='row'>" +
        "<div class='col-sm-4'><br><br>" +
        "<div class='certificate1'>" +
        "PHP Tutorial course <br>25 July 2020 <br><button onclick='PHPCer()'>View Certificate</button>" +
        "</div>" +
        "</div>" +
        "<!--break-->" +
        "<div class='col-sm-4'><br><br>" +
        "<div class='certificate1'>" +
        "SQL Fundamentals course <br>27 July 2020 <br><button onclick='SQLCer()'>View Certificate</button>" +
        "</div>" +
        "</div>" +
        "<!--break-->" +
        "</div>" +
        "</div>" +
        "<br><br><br><br><br><br><br><br><br>" +
        "</div>";
};

function Studies() {
    document.getElementById("InformationText").innerHTML = " <div class='container'>" +
        "<div class='row'>" +
        "<div class='col-sm-6'>" +
        "<h4>BIG DATA & IOT 600 (BSCBDI600)</h4>" +
        "<h5>NQF level 6</h5>" +
        "<ul>" +
        "<li>Big Data Analysis and Extraction Techniques.</li>" +
        "<li>IoT Architectures and Applications.</li>" +
        "<li>Big Data Storage and Security.</li>" +
        "<li>Big Data ethics, standards and policies.</li>" +
        "<li>IoT technologies and Standards.</li>" +
        "</ul>" +
        "</div>" +
        "<!--break-->" +
        "<div class='col-sm-6'>" +
        "<h4>Information Systems 622  ( BSCINS622 ) </h4>" +
        "<h5>NQF level 6</h5>" +
        "<ul>" +
        "<li>Operating Systems.</li>" +
        "<li>Management information and Decision Support Systems.</li>" +
        "<li>Knowledge Management and Specialized Information Systems.</li>" +
        "<li>Pervasive Computing.</li>" +
        "<li>Systems Analysis.</li>" +
        "<li>Systems Designed, Privacy and Ethical Issues.</li>" +
        "</ul>" +
        "</div>" +
        "<br><br>" +
        "<!--break-->" +
        "</div>" +
        "</div>" +
        "<br><br>" +
        "<!--break - break-->" +
        "<div class='container'>" +
        "<div class='row'>" +
        "<div class='col-sm-6'>" +
        "<h4>Management Information Systems & BI 600 (BSCSTN600)</h4>" +
        "<h5>NQF level 6</h5>" +
        "<ul>" +
        "<li>Fundamentals Of Information Systems.</li>" +
        "<li>Data Communication, The Internet E-Commerce And Global Information Systems.</li>" +
        "<li>IS Development, Enterprise Systems MSS, IIS And Emerging Trends.</li>" +
        "<li>Business Intelligence, Nature Of Data, Data Warehousing.</li>" +
        "<li>Data Mining, Social Media, Perspective Analytics.</li>" +
        "<li>Big Data, Privacy In Information Systems.</li>" +
        "</ul>" +
        "</div>" +
        "<!--break-->" +
        "<div class='col-sm-6'>" +
        "<h4>Internet Programming 622 (BSCIPR622)</h4>" +
        "<h5>NQF level 6</h5>" +
        "<ul>" +
        "<li>PHP And HTML Forms.</li>" +
        "<li>Session Controls And Cookies.</li>" +
        "<li>File System Management.</li>" +
        "<li>Databases And Structured Query Language.</li>" +
        "</ul>" +
        "</div>" +
        "<br><br>" +
        "<!--break-->" +
        "</div>" +
        "</div>" +
        "<br><br>" +
        "<div class='container'>" +
        "<div class='row'>" +
        "<div class='col-sm-6'>" +
        "<h4>Programming 622   (BSCPRO622)</h4>" +
        "<h5>NQF level 6</h5>" +
        "<ul>" +
        "<li>Software engineuring principles and C++ classes.</li>" +
        "<li>Standard template library (STL)1.</li>" +
        "<li>Linked lists.</li>" +
        "<li>Recursion.</li>" +
        "<li>Stacks.</li>" +
        "<li>Ques.</li>" +
        "<li>Searching and hashing algorithms.</li>" +
        "<li>Sorting Algorithms.</li>" +
        "<li>Binary trees and B-trees.</li>" +
        "<li>Graphs</li>" +
        "</ul>" +
        "</div>" +
        "<!--break-->" +
        "<div class='col-sm-6'>" +
        "<h4>Information Systems 621 (BSCINS621)</h4>" +
        "<h5>NQF level 6</h5>" +
        "<ul>" +
        "<li>Information System in Organisations.</li>" +
        "<li>Hardware: Input, Processing, Output and Storage Devices.</li>" +
        "<li>Software: System and Application Software.</li>" +
        "<li>Computer Network.</li>" +
        "<li>Organising and Storing Data.</li>" +
        "</ul>" +
        "</div>" +
        "<br><br>" +
        "<!--break-->" +
        "</div>" +
        "</div>" +
        "<br><br>" +
        "<!--break - break-->" +
        "<div class='container'>" +
        "<div class='row'>" +
        "<div class='col-sm-6'>" +
        "<h4>Database Systems 600 (BSCDBS600)</h4>" +
        "<h5>NQF level 6</h5>" +
        "<ul>" +
        "<li>Knowledge of database design and normalization.</li>" +
        "<li>Study of different database models.</li>" +
        "<li>SQL commands (using with PHP code).</li>" +
        "<li>Practical experience with MySQL.</li>" +
        "<li>SQL performance tuning.</li>" +
        "</ul>" +
        "</div>" +
        "<!--break-->" +
        "<div class='col-sm-6'>" +
        "<h4>Cloud Computing 600 (BSCCCP600)</h4>" +
        "<h5>NQF level 6</h5>" +
        "<ul>" +
        "<li>Cloud Computing Architecture and Platforms.</li>" +
        "<li>Virtualization.</li>" +
        "<li>Cloud Security.</li>" +
        "<li>Parallel Processing, Distributed Computing and Storage System.</li>" +
        "<li>Web 2.0</li>" +
        "</ul>" +
        "</div>" +
        "<br><br>" +
        "<!--break-->" +
        "</div>" +
        "</div>" +
        "<br><br>" +
        "<!--next-->" +
        "<div class='container'>" +
        "<div class='row'>" +
        "<div class='col-sm-6'>" +
        "<h4>Internet Programming 621 (BSCIPR621)</h4>" +
        "<h5>NQF level 6</h5>" +
        "<ul>" +
        "<li>PHP syntax.</li>" +
        "<li>PHP connection with MySQL.</li>" +
        "<li>PHP using SQL queries.</li>" +
        "<li>PHP scripts.</li>" +
        "<li>PHP control structures and algorithms.</li>" +
        "<li>PHP machine learning.</li>" +
        "</ul>" +
        "</div>" +
        "<!--break-->" +
        "<div class='col-sm-6'>" +
        "<h4>Programming 621 (BSCPRO621)</h4>" +
        "<h5>NQF level 6</h5>" +
        "<ul>" +
        "<li>C++ pointers and dataflow methods</li>" +
        "<li>C++ Syntax's.</li>" +
        "<li>C++ Containership.</li>" +
        "<li>C++ headers and containers.</li>" +
        "<li>C++ recursive functions etc.</li>" +
        "</ul>" +
        "</div>" +
        "<br><br>" +
        "<!--break-->" +
        "</div>" +
        "</div>" +
        "<br><br>" +
        "<!--break - break-->" +
        "<div class='container'>" +
        "<div class='row'>" +
        "<div class='col-sm-6'>" +
        "<h4>Information Systems 512 (BSCINS512)</h4>" +
        "<h5>NQF level 5</h5>" +
        "<ul>" +
        "<li>Programs.</li>" +
        "<li>Digital safety and security.</li>" +
        "<li>Digital storage.</li>" +
        "<li>Communication networks.</li>" +
        "<li>Data, database systems and program/app developments.</li>" +
        "</ul>" +
        "</div>" +
        "<!--break-->" +
        "<div class='col-sm-6'>" +
        "<h4>Mathematics 512  (BSCMAT512)</h4>" +
        "<h5>NQF level 5</h5>" +
        "<ul>" +
        "<li>Linear Equations.</li>" +
        "<li>Quadratic Equations.</li>" +
        "<li>Tangents & Limits.</li>" +
        "<li>Derivatives.</li>" +
        "<li>Integrals.</li>" +
        "</ul>" +
        "</div>" +
        "<br><br>" +
        "<!--break-->" +
        "</div>" +
        "</div>" +
        "<br><br>" +
        "<div class='container'>" +
        "<div class='row'>" +
        "<div class='col-sm-6'>" +
        "<h4>Networks Engineering 512  (BSCNET512)</h4>" +
        "<h5>NQF level 5</h5>" +
        "<ul>" +
        "<li>Network essentials and current wiring standards.</li>" +
        "<li>Structured cabling.</li>" +
        "<li>Entrance facility.</li>" +
        "<li>Backbone cabling.</li>" +
        "<li>Telecommunication enclosure.</li>" +
        "<li>Horizontal cabling.</li>" +
        "<li>Ethernet standards.</li>" +
        "<li>Wireless Protocols.</li>" +
        "<li>Intranet.</li>" +
        "<li>Asynchronous Transfer Mode (ATM).</li>" +
        "<li>Power over Ethernet (PoE).</li>" +
        "<li>The Open System Interconnection Model.</li>" +
        "<li>Rounding Topologies.</li>" +
        "<li>Network Design Criteria.</li>" +
        "<li>Embedded Device Servers.</li>" +
        "<li>Conclusion.</li>" +
        "<li>Security Systems.</li>" +
        "<li>Network Switching.</li>" +
        "<li>Designing for Maximum Benefit</li>" +
        "</ul>" +
        "</div>" +
        "<!--break-->" +
        "<div class='col-sm-6'>" +
        "<h4>Web Technology 512 (BSCWBT512)</h4>" +
        "<h5>NQF level 5</h5>" +
        "<ul>" +
        "<li>Introduction to JavaScript.</li>" +
        "<li>JavaScript syntax and the browser.</li>" +
        "<li>JavaScript programming basics.</li>" +
        "<li>Arrays and functions.</li>" +
        "<li>JavaScript string manipulation.</li>" +
        "<li>JavaScript objects.</li>" +
        "<li>JavaScript and HTML elements.</li>" +
        "<li>JavaScript errors and exceptions.</li>" +
        "</ul>" +
        "</div>" +
        "<br><br>" +
        "<!--break-->" +
        "</div>" +
        "</div>" +
        "<br><br>" +
        "<!--break - break-->" +
        "<div class='container'>" +
        "<div class='row'>" +
        "<div class='col-sm-6'>" +
        "<h4>Programming 512  (BSCPRO512)</h4>" +
        "<h5>NQF level 5</h5>" +
        "<ul>" +
        "<li>Exceptions Handling.</li>" +
        "<li>Sequential file.</li>" +
        "<li>Random access file.</li>" +
        "<li>The graphical display of data.</li>" +
        "<li>Additional controls and objects.</li>" +
        "<li>Classes (Object) and structures.</li>" +
        "<li>Database management.</li>" +
        "</ul>" +
        "</div>" +
        "<!--break-->" +
        "<div class='col-sm-6'>" +
        "<h4>Mathematics 511  (BSCMAT511)</h4>" +
        "<h5>NQF level 5</h5>" +
        "<ul>" +
        "<li>The Foundations(Logic and Proofs).</li>" +
        "<li>Boolean Algebra.</li>" +
        "<li>Basic Structures.</li>" +
        "<li>Graphs.</li>" +
        "</ul>" +
        "</div>" +
        "<br><br>" +
        "<!--break-->" +
        "</div>" +
        "</div>" +
        "<br><br>" +
        "<div class='container'>" +
        "<div class='row'>" +
        "<div class='col-sm-6'>" +
        "<h4>Networks Engineering 511   (BSCNET511)</h4>" +
        "<h5>NQF level 5</h5>" +
        "<ul>" +
        "<li>Type of topologies and the OSI model.</li>" +
        "<li>Network infrastructure implementation.</li>" +
        "<li>Topologies selections, backbones and segments.</li>" +
        "<li>Open system Interconnection.</li>" +
        "<li>OSI layer protocols.</li>" +
        "<li>Encapsulation/de-capsulation.</li>" +
        "</ul>" +
        "</div>" +
        "<!--break-->" +
        "<div class='col-sm-6'>" +
        "<h4>Web Technology 511 (BSCWBT511)</h4>" +
        "<h5>NQF level 5</h5>" +
        "<ul>" +
        "<li>Internet and the world wide web.</li>" +
        "<li>Introduction to HTML.</li>" +
        "<li>HTML basics.</li>" +
        "<li>Stylesheets.</li>" +
        "<li>Forms and frames.</li>" +
        "</ul>" +
        "</div>" +
        "<br><br>" +
        "<!--break-->" +
        "</div>" +
        "</div>" +
        "<br><br>" +
        "<div class='container'>" +
        "<div class='row'>" +
        "<div class='col-sm-6'>" +
        "<h4>Programming 511 (BSCPRO511)</h4>" +
        "<h5>NQF level 5</h5>" +
        "<ul>" +
        "<li>Problem-solving.</li>" +
        "<li>Fundamentals of programming in VB.net</li>" +
        "<li>General procedures.</li>" +
        "<li>Decision-making programming.</li>" +
        "<li>Repetition structure.</li>" +
        "<li>Arrays.</li>" +
        "</ul>" +
        "</div>" +
        "<!--break-->" +
        "<br><br>" +
        "<!--break-->" +
        "</div>" +
        "</div>" +
        "<br><br><br><br><br><br>";
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

function htmlCer() {
    window.open("https://www.sololearn.com/Certificate/1014-15586817/jpg");
};

function CSSCer() {
    window.open("https://www.sololearn.com/Certificate/1023-15586817/pdf/");
};

function JSCer() {
    window.open("https://www.sololearn.com/Certificate/1024-15586817/pdf/");
};

function PHPCer() {
    window.open("https://www.sololearn.com/Certificate/1059-15586817/pdf/");
};

function SQLCer() {
    window.open("https://www.sololearn.com/Certificate/1060-15586817/pdf/");
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