var myInfo = '{"ten":"Hoàng","ho":"Nguyễn","nuoc":"Vietnam", "job":"Student at University of Science"}';
var Summary='{"p":"this`s my summary "}';
var Experience='{"job1":"Student at VTT highschool", "job2":"Student at University of Science"}';
var Education='{"college":"University of Science","year":"2013-2017"}';
var Skill='{"skill1":"Rap","skill2":"English Speaking"}';


var info = JSON.parse(myInfo);
document.getElementById("hoten").innerHTML = info.ho + " " + info.ten;
document.getElementById("quoctich").innerHTML = info.nuoc;
document.getElementById("job").innerHTML = info.job;

var mySur = JSON.parse(Summary);
document.getElementById("Summ").innerHTML = mySur.p;

var myExper = JSON.parse(Experience);
document.getElementById("Current").innerHTML = myExper.job2;
document.getElementById("past").innerHTML = myExper.job1;

var myEdu = JSON.parse(Education);
document.getElementById("Edu").innerHTML = myEdu.college;
document.getElementById("Year").innerHTML = myEdu.year;

var mySkill = JSON.parse(Skill);
document.getElementById("skill").innerHTML = mySkill.skill1 + "<br>" + mySkill.skill2;


