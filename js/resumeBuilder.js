/*
This is empty on purpose! Your code to build the resume will go here.
 */

// ----------------------- Data Objects -----------------------------

var bio = {
  "name": name,
  "role": role,
  "contacts": {
    "mobile": "123-456-789",
    "email": "name@abc.com",
    "github": "howardsmithnz",
    "location": "Wellington"
  },
  "welcomeMessage": "Hello and welcome! Lorem Ipsum and all that",
  "skills": ["programming", "teaching", "making coffee"],
  "bioPic": "images/fry.jpg"
};

var work = {
  "jobs": [{
    "title": "JS and Python Developer",
    "employer": "ACME Corp",
    "location": "Auckland",
    "dates": "2016-2020",
    "description": "Developing things. Developing things. Developing things. Developing things. Developing things. Developing things. Developing things. Developing things. "
    }, 
    {
    "title": "Implementation Consultant",
    "employer": "SilentOne",
    "location": "Wellington",
    "dates": "2004-2006",
    "description": "Implementing things. Implementing things. Implementing things. Implementing things. Implementing things. Implementing things. Implementing things. Implementing things. "
    }]
  };

var projects = { 
  "projectList": [{
    "title": "The Big Push",
    "dates": " Mar.2014",
    "description": "Doing stuff",
    "image": "http://www.xyz.com/pic.jpg"
    },
    {
    "title": "Project X",
    "dates": "2000",
    "description": "Sorry, can't say...",
    "image": "http://www.xyz.com/pic.jpg"
    }]
};

var education = {
  "schools": [{
    "name": "EDA",
    "dates": "2015-2016",
    "location": "Wellington",
    "degree": "Dev Bootcamp",
    "majors": ["Software Development"],
    "url": "http://www.eda.com"
    },
    {
    "name": "Massey University",
    "dates": "1987-1991",
    "location": "Palmerston North",
    "degree": "Bachelor of Science",
    "majors": ["Botany"],
    "url": "http://www.massey.ac.nz"
    }],
  "onlineCourses": [{
    "title": "HTML and CSS",
    "school": "Udacity",
    "dates": "1/1/1970",
    "url": "www.udacity.com"
  }]
};

// --------------------- DOM Manipulation ---------------------------

// Make title of name(as an H1) and role
var name = "Howard Smith";
var role = "Developer";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

// Add contact details as a horizontal wrapped list
var formattedHTMLmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedHTMLmobile);

var formattedHTMLemail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedHTMLemail);

var formattedHTMLgithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedHTMLgithub);

var formattedHTMLlocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedHTMLlocation);

// Add a welcome message
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMsg);

// Add a pic
var formattedHTMLbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedHTMLbioPic);

// Add some skills as a list (doing this manually - no loop yet)
if(bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
} 

// Add some previous jobs as a list (using a loop)
/*
for (job in work.jobs) {
  
  $("#workExperience").append(HTMLworkStart);

  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;
  $(".work-entry:last").append(formattedEmployerTitle);

  var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
  $(".work-entry:last").append(formattedLocation);

  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
  $(".work-entry:last").append(formattedDates);

  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
  $(".work-entry:last").append(formattedDescription);

}
*/

function displayWork() {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }
}

displayWork();

$("#main").append(internationalizeButton);

function inName() {
  var nameStr = bio.name;
  console.log("nameStr is " + nameStr);
  var nameArray = nameStr.split(' ');
  var firstName = nameArray[0][0].toUpperCase() + nameArray[0].slice(1);
  console.log("firstName is " + firstName);
  var lastName = nameArray[1];
  lastName = lastName.toUpperCase();
  var fullName = firstName + ' ' + lastName;
  console.log(fullName);
  return fullName;
}

projects.display = function() {
  for (projectItem in projects.projectList) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projectList[projectItem].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projectList[projectItem].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projectList[projectItem].description);
    $(".project-entry:last").append(formattedDescription);

    var formattedImage = HTMLprojectImage.replace("%data%", projects.projectList[projectItem].image);
    $(".project-entry:last").append(formattedImage);
  }
}

projects.display();

education.display = function() {
  for (school in education.schools) {
    $("#education").append(HTMLschoolStart);

    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
    $(".education-entry:last").append(formattedSchoolName);

    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    $(".education-entry:last").append(formattedSchoolDegree);

    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    $(".education-entry:last").append(formattedSchoolDates);

    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").append(formattedSchoolLocation);

    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
    $(".education-entry:last").append(formattedSchoolMajor);
  }
  for (course in education.onlineCourses) {
    $("#education").append(HTMLonlineClasses);

    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", /*education.onlineCourses[course].title*/ "TEST");
    $("#education h3").next().append(formattedOnlineTitle);
// XXXXX This has a weird render issue - </a> tag is appearing before " - Udacity"!! Why?? It's going INSIDE the h3 tag-- better fix this!!!
  /*  var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
    $("#education h3").append(formattedOnlineSchool);

    var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
    $("#education h3").append(formattedOnlineDates);

    var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
    $("#education h3").append(formattedOnlineURL);
*/
  }
}

education.display();

$("#mapDiv").append(googleMap);

// console.log(inName("sebastian thrun") === "Sebastian THRUN");

// var formattedHTMLschoolName = HTMLschoolName.replace("%data%", education.name);
// $("#header").append(formattedHTMLschoolName);
