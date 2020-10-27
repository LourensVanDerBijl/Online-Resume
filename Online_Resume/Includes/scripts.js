function checkScreen() {
    var Wi = screen.width;
    var Hi = screen.height;

    if (Wi < Hi) {
        alert("Although this website supports all screen sizes please rotate your mobile for a better user experience.")
    }



}

function number() {
    alert("For calling and whatsApp purposes 060 526 1031")
}





function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function coverletter() {
    myWindow = window.open("", "myWindow", "width=950,height=950");
    myWindow.document.write("<img src='Includes/CoverleterIMG.png'>");
}

function resume() {
    myWindow = window.open("", "myWindow", "width=950px,height=950px");
    myWindow.document.write("<img src='Includes/ResumeIMG_Page1.png' >");
    myWindow.document.write("<img src='Includes/ResumeIMG_Page2.png' >");

}

function semester1() {
    myWindow = window.open("", "myWindow", "width=950,height=950");
    myWindow.document.write("<img src='Images/Semester1.png'>");
}

function semester2() {
    myWindow = window.open("", "myWindow", "width=950,height=950");
    myWindow.document.write("<img src='Images/Semester2.png'>");
}

function semester3() {
    myWindow = window.open("", "myWindow", "width=950,height=950");
    myWindow.document.write("<img src='Images/Semester3.png'>");
}

function stestimonial() {
    myWindow = window.open("", "myWindow", "width=950,height=950");
    myWindow.document.write("<img src='Includes/Getuigskrif.jpeg' width='940px' height='940px'>");
}

/**
 * --------------------------------------------------------
 * This demo was created using amCharts V4 preview release.
 * 
 * V4 is the latest installement in amCharts data viz
 * library family, to be released in the first half of
 * 2018.
 *
 * For more information and documentation visit:
 * https://www.amcharts.com/docs/v4/
 * --------------------------------------------------------
 */

//am4core.useTheme(am4themes_animated);

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);

// Add data
chart.data = [{
    "category": "HTML",
    "value": 89
}, {
    "category": "CSS",
    "value": 81
}, {
    "category": "JavaScript",
    "value": 74
}, {
    "category": "PHP",
    "value": 70
}, {
    "category": "VB.net",
    "value": 83
}, {
    "category": "C++",
    "value": 60
}, {
    "category": "SQL",
    "value": 72
}];

var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "category";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.tooltip.disabled = true;
categoryAxis.renderer.ticks.template.disabled = false;
categoryAxis.renderer.ticks.template.strokeOpacity = 1;
categoryAxis.renderer.ticks.template.stroke = am4core.color("#000000");
categoryAxis.renderer.ticks.template.strokeWidth = 1;
categoryAxis.renderer.ticks.template.length = 5;
categoryAxis.renderer.line.strokeOpacity = 1;
categoryAxis.renderer.labels.template.fill = am4core.color("#faf8f7");
categoryAxis.renderer.labels.template.fontSize = 14;
categoryAxis.renderer.line.strokeWidth = 1;
categoryAxis.renderer.line.strokeWidth = 2;
categoryAxis.renderer.minGridDistance = 2;
categoryAxis.sortBySeries = series;
categoryAxis.renderer.inversed = true;






//ValueAxis
var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
valueAxis.tooltip.disabled = true;
valueAxis.renderer.labels.template.adapter.add("text", (text, label) => { return label.dataItem.value; });

valueAxis.renderer.labels.template.fontsize = 12;
valueAxis.renderer.labels.template.fill = am4core.color("#faf8f7");
valueAxis.renderer.minGridDistance = 50;
valueAxis.min = 0;
valueAxis.max = 100;
valueAxis.strictMinMax = true;
valueAxis.renderer.ticks.template.disabled = false;
valueAxis.renderer.ticks.template.strokeOpacity = 5;
valueAxis.renderer.ticks.template.stroke = am4core.color("#000000");
valueAxis.renderer.ticks.template.strokeWidth = 6;
valueAxis.renderer.ticks.template.length = 5;
valueAxis.renderer.line.strokeOpacity = 1;
valueAxis.renderer.line.strokeWidth = 2;





var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.categoryY = "category";
series.dataFields.valueX = "value";
//series.dataFields.depthValue = "Value";
//series.name = "Count";

series.columns.template.strokeOpacity = 0;
series.columns.template.fill = am4core.color("#b5b3b3");
//series.tooltipText = "{categoryY}: [bold]{valueX.value}[/]";
series.columns.template.tooltipText = "[bold]Langauge:[/] {categoryY}\n[bold]Knowledge:[/] [bold]{valueX.value}%[/]";
series.columns.template.tooltipX = am4core.percent(50);
series.columns.template.tooltipY = am4core.percent(50);
series.tooltip.getFillFromObject = false;
series.tooltip.background.fill = am4core.color("#ffffff");
series.tooltip.label.fill = am4core.color("#000000");
series.tooltip.label.fontSize = 11;
series.tooltip.label.maxWidth = 262;
series.tooltip.label.wrap = true;
series.tooltip.label.textAlign = "middle";
series.tooltip.getStrokeFromObject = false;
series.tooltip.background.stroke = am4core.color("#000000");
series.tooltip.background.strokeWidth = 3;




/**
 * --------------------------------------------------------
 * This demo was created using amCharts V4 preview release.
 * 
 * V4 is the latest installement in amCharts data viz
 * library family, to be released in the first half of
 * 2018.
 *
 * For more information and documentation visit:
 * https://www.amcharts.com/docs/v4/
 * --------------------------------------------------------
 */

//am4core.useTheme(am4themes_animated);

// Create chart instance
var chart = am4core.create("libDiv", am4charts.XYChart);

// Add data
chart.data = [{
    "Library": "jQuery",
    "LKnowledge": 40
}, {
    "Library": "Vue.js",
    "LKnowledge": 46
}, {
    "Library": "Bootstrap",
    "LKnowledge": 74
}, {
    "Library": "JSON",
    "LKnowledge": 60
}, {
    "Library": "amCharts 4",
    "LKnowledge": 68
}];

var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Library";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.tooltip.disabled = true;
categoryAxis.renderer.ticks.template.disabled = false;
categoryAxis.renderer.ticks.template.strokeOpacity = 1;
categoryAxis.renderer.ticks.template.stroke = am4core.color("#000000");
categoryAxis.renderer.ticks.template.strokeWidth = 1;
categoryAxis.renderer.ticks.template.length = 5;
categoryAxis.renderer.line.strokeOpacity = 1;
categoryAxis.renderer.labels.template.fill = am4core.color("#faf8f7");
categoryAxis.renderer.labels.template.fontSize = 14;
categoryAxis.renderer.line.strokeWidth = 1;
categoryAxis.renderer.line.strokeWidth = 2;
categoryAxis.renderer.minGridDistance = 2;
categoryAxis.sortBySeries = series;
categoryAxis.renderer.inversed = true;






//ValueAxis
var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
valueAxis.tooltip.disabled = true;
valueAxis.renderer.labels.template.adapter.add("text", (text, label) => { return label.dataItem.value; });

valueAxis.renderer.labels.template.fontsize = 12;
valueAxis.renderer.labels.template.fill = am4core.color("#faf8f7");
valueAxis.renderer.minGridDistance = 50;
valueAxis.min = 0;
valueAxis.max = 100;
valueAxis.strictMinMax = true;
valueAxis.renderer.ticks.template.disabled = false;
valueAxis.renderer.ticks.template.strokeOpacity = 5;
valueAxis.renderer.ticks.template.stroke = am4core.color("#000000");
valueAxis.renderer.ticks.template.strokeWidth = 6;
valueAxis.renderer.ticks.template.length = 5;
valueAxis.renderer.line.strokeOpacity = 1;
valueAxis.renderer.line.strokeWidth = 2;





var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.categoryY = "Library";
series.dataFields.valueX = "LKnowledge";
//series.dataFields.depthValue = "Value";
//series.name = "Count";

series.columns.template.strokeOpacity = 0;
series.columns.template.fill = am4core.color("#b5b3b3");
//series.tooltipText = "{categoryY}: [bold]{valueX.value}[/]";
series.columns.template.tooltipText = "[bold]Library:[/] {categoryY}\n[bold]Knowledge:[/] [bold]{valueX.value}%[/]";
series.columns.template.tooltipX = am4core.percent(50);
series.columns.template.tooltipY = am4core.percent(50);
series.tooltip.getFillFromObject = false;
series.tooltip.background.fill = am4core.color("#ffffff");
series.tooltip.label.fill = am4core.color("#000000");
series.tooltip.label.fontSize = 11;
series.tooltip.label.maxWidth = 262;
series.tooltip.label.wrap = true;
series.tooltip.label.textAlign = "middle";
series.tooltip.getStrokeFromObject = false;
series.tooltip.background.stroke = am4core.color("#000000");
series.tooltip.background.strokeWidth = 3;




/**
 * --------------------------------------------------------
 * This demo was created using amCharts V4 preview release.
 * 
 * V4 is the latest installement in amCharts data viz
 * library family, to be released in the first half of
 * 2018.
 *
 * For more information and documentation visit:
 * https://www.amcharts.com/docs/v4/
 * --------------------------------------------------------
 */

//am4core.useTheme(am4themes_animated);

// Create chart instance
var chart = am4core.create("AditionalDiv", am4charts.XYChart);

// Add data
chart.data = [{
    "AdditionalSkill": "Networking",
    "AKnowledge": 86
}, {
    "AdditionalSkill": "Databases",
    "AKnowledge": 60
}, {
    "AdditionalSkill": "Information Systems",
    "AKnowledge": 79
}, {
    "AdditionalSkill": "Cloud-Computing",
    "AKnowledge": 62
}, {
    "AdditionalSkill": "Management Information Systems",
    "AKnowledge": 76
}, {
    "AdditionalSkill": "Big Data",
    "AKnowledge": 52
}, {
    "AdditionalSkill": "Internet of Things",
    "AKnowledge": 50
}];

var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "AdditionalSkill";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.tooltip.disabled = true;
categoryAxis.renderer.ticks.template.disabled = false;
categoryAxis.renderer.ticks.template.strokeOpacity = 1;
categoryAxis.renderer.ticks.template.stroke = am4core.color("#000000");
categoryAxis.renderer.ticks.template.strokeWidth = 1;
categoryAxis.renderer.ticks.template.length = 5;
categoryAxis.renderer.line.strokeOpacity = 1;
categoryAxis.renderer.labels.template.fill = am4core.color("#faf8f7");
categoryAxis.renderer.labels.template.fontSize = 14;
categoryAxis.renderer.line.strokeWidth = 1;
categoryAxis.renderer.line.strokeWidth = 2;
categoryAxis.renderer.minGridDistance = 2;
categoryAxis.sortBySeries = series;
categoryAxis.renderer.inversed = true;






//ValueAxis
var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
valueAxis.tooltip.disabled = true;
valueAxis.renderer.labels.template.adapter.add("text", (text, label) => { return label.dataItem.value; });

valueAxis.renderer.labels.template.fontsize = 12;
valueAxis.renderer.labels.template.fill = am4core.color("#faf8f7");
valueAxis.renderer.minGridDistance = 50;
valueAxis.min = 0;
valueAxis.max = 100;
valueAxis.strictMinMax = true;
valueAxis.renderer.ticks.template.disabled = false;
valueAxis.renderer.ticks.template.strokeOpacity = 5;
valueAxis.renderer.ticks.template.stroke = am4core.color("#000000");
valueAxis.renderer.ticks.template.strokeWidth = 6;
valueAxis.renderer.ticks.template.length = 5;
valueAxis.renderer.line.strokeOpacity = 1;
valueAxis.renderer.line.strokeWidth = 2;





var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.categoryY = "AdditionalSkill";
series.dataFields.valueX = "AKnowledge";
//series.dataFields.depthValue = "Value";
//series.name = "Count";

series.columns.template.strokeOpacity = 0;
series.columns.template.fill = am4core.color("#b5b3b3");
//series.tooltipText = "{categoryY}: [bold]{valueX.value}[/]";
series.columns.template.tooltipText = "[bold]Additional Skill:[/] {categoryY}\n[bold]Knowledge:[/] [bold]{valueX.value}%[/]";
series.columns.template.tooltipX = am4core.percent(50);
series.columns.template.tooltipY = am4core.percent(50);
series.tooltip.getFillFromObject = false;
series.tooltip.background.fill = am4core.color("#ffffff");
series.tooltip.label.fill = am4core.color("#000000");
series.tooltip.label.fontSize = 11;
series.tooltip.label.maxWidth = 262;
series.tooltip.label.wrap = true;
series.tooltip.label.textAlign = "middle";
series.tooltip.getStrokeFromObject = false;
series.tooltip.background.stroke = am4core.color("#000000");
series.tooltip.background.strokeWidth = 3;