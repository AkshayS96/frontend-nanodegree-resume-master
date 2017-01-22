// work object
var work ={
"jobs":[
{
	"employer":"Kendriya Vidyalaya",
	"title":"Student",
	"dates":"2004-2014",
	"location":"Muzaffarnagar",
	"description":"Hey this is my school where i study from 3 to 12 class"
},
	{

"employer":"National institute of Technology",
"title":"Student",
"dates":"2015-2019",
"location":"Srinagar Garhwal",
"description":"Hey this is my college here i am studying in computer science and engineering Department"
}]
};
work.display=function()
{
work.jobs.forEach(function(w)
{
$("#workExperience").append(HTMLworkStart);
var employer=HTMLworkEmployer.replace("%data%",w.employer);
var title=HTMLworkTitle.replace("%data%",w.title);
var dates=HTMLworkDates.replace("%data%",w.dates);
var loc=HTMLworkLocation.replace("%data%",w.location);
var des=HTMLworkDescription.replace("%data%",w.description);
$(".work-entry:last").append(employer);
$(".work-entry:last").append(title);
$(".work-entry:last").append(dates);
$(".work-entry:last").append(loc);
$(".work-entry:last").append(des);


});
};
// project object
var project={
	"pro":[
{
	"title":"Resume-Generator",
	"dates":"Jan 2017",
	"description":"This project is a part of course Javascript Basics in frontend nanodegree at Udacity.This project is used to make resume by enterin basic information about a person and his projects and interest",
	"image":""},


	]
};
// bio object
project.display=function(){
$("#projects").append(HTMLprojectStart);
var project1=$("#projects");
project.pro.forEach(function(name)
	{
     var title=HTMLprojectTitle.replace("%data%",name.title);
     var dates=HTMLprojectDates.replace("%data%",name.dates);
     var des=HTMLprojectDescription.replace("%data%",name.description);
     var image =HTMLprojectImage.replace("%data%",name.image);
  project1.append(title,dates,des,image);

	});



};
var bio={

"name":"akshay Solanki",
"role":"Student",
"welcomeMessage":"Hey this is akshay solanki",
"biopic":"https://avatars3.githubusercontent.com/u/20216387?v=3&u=2b624452b5de0aa5e433df77f248d2c3c4ac2214&s=400",
"contacts":{
	"mobile":"88998889989",
	"email":"asolanki786@gmail.com",
	"github":"AkshayS96",
	"location":"Muzaffarnagar"
},
"skills":["java","C++","C","Javascript","HTML 5","CSS 3"]
};
var education={
	"schools":[
	{
     "name":"Kendriya Vidyalaya",
     "location":"Muzaffarnagar",
     "degree":"Senior Secondary School",
     "degreedates":"2013-2014",
     "majors":["Maths","Chemistry","Physics","Computer Science","English"],
     "url":"www.kvmuzaffnagar.edu.in"
	},
	{
		"name":"National Institute of Technology,Uttarakhand",
		"location":"Srinagar Garhwal",
		"degree":"BTech",
		"degreedates":"2015-2019",
		"majors":["DataStructure"],
		"url":"www.nituk.ac.in"
	}

],
"onlineCourses":[
{
	"onlinetitle":"JavaScript Basics(Frontend-nanodegree Udacity)",
	"onlineSchool":"www.udacity.com",
	"dates":"Jan 2017",
	"url":"https://classroom.udacity.com/courses/ud804"
},


]
};

// function to display bio information
bio.display=function()
{
var headerName=HTMLheaderName.replace("%data%",bio.name);
 var headerRole=HTMLheaderRole.replace("%data%",bio.role);
    biopic=HTMLbioPic.replace("%data%",bio.biopic);
    welcomeMsg=HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
 header=$("#header");
 bio.contactHeader($("#topContacts"));
 bio.contactHeader($("#footerContacts"));
header.prepend(headerRole);
header.prepend(headerName);
header.append(biopic);
header.append(welcomeMsg);
if(bio.skills.length>0)
{
header.append(HTMLskillsStart);
bio.skills.forEach(function(skill)
{
skill=HTMLskills.replace("%data%",skill);
$('#skills').append(skill);	

});
}

};


bio.contactHeader=function(contactpos){
var contactmobile=HTMLmobile.replace("%data%",bio.contacts.mobile);
    contactemail=HTMLemail.replace("%data%",bio.contacts.email);
    contactgithub=HTMLgithub.replace("%data%",bio.contacts.github);
    contactlocation=HTMLlocation.replace("%data%",bio.contacts.location);
    topcontacts=contactpos;
    topcontacts.append(contactmobile,contactemail,contactgithub,contactlocation);
};

// function to display education related information
education.display=function()
{
	$("#education").append(HTMLschoolStart);
 var educationEntry=$(".education-entry");
 education.schools.forEach(function(edu){
 var schoolName=HTMLschoolName.replace("%data%",edu.name);
 var dates=HTMLschoolDates.replace("%data%",edu.degreedates);
 var degree=HTMLschoolDegree.replace("%data%",edu.degree);
 var location=HTMLschoolLocation.replace("%data%",edu.location);

     educationEntry.append(schoolName,dates,degree,location);
edu.majors.forEach(function(major){
	var majorsub=HTMLschoolMajor.replace("%data%",major)
	educationEntry.append(majorsub);
});
});

education.onlineCourses.forEach(function(ed){
var title=HTMLonlineTitle.replace("%data%",ed.onlinetitle);
var onlineschool=HTMLonlineSchool.replace("%data%",ed.onlineSchool);
var onlinedates=HTMLonlineDates.replace("%data%",ed.dates);
var url=HTMLonlineURL.replace("%data%",ed.url);
educationEntry.append(HTMLonlineClasses,title,onlineschool,onlinedates,url);
});

};
bio.display();
work.display();
project.display();
education.display();

// internationalizing the names using the internationalize button
$("#main").append(internationalizeButton);
var inName=function(name)
{ var space=' ';
	var names=name.split(space);
	console.log(names);
	var b=names[0][0].toUpperCase();
	names[0]=names[0].replace(names[0][0],b);
	var nam=names[0]+' '+names[1].toUpperCase();
	return nam;
};
$("#mapDiv").append(googleMap);