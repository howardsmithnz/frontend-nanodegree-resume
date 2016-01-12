/*
This is empty on purpose! Your code to build the resume will go here.
 */
//$("#main").append("Howard");

//var awesomeThoughts = "I am Howard and I am AWESOME!";
//console.log(awesomeThoughts);

//var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
//$("#main").append(funThoughts);

var name = "Howard Smith";
var role = "Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
  "name": name,
  "role": role,
  "contacts": {
    "mobile": "123-456-789",
    "email": "name@abc.com"
  },
  "welcomeMessage": "Hello and welcome!",
  "skills": ["programming", "teaching", "making coffee"],
  "bioPic": "images/fry.jpg"
};

//var formattedBio = HTMLheaderBio.replace("%data%", bio);
//$("#header").append(formattedBio);

//var formattedContactGeneric = HTMLcontactGeneric.replace("%contact%", bio.contact_info);
//$("#header").append(formattedContactGeneric);

// --------------------------------------------

var formattedHTMLcontacts = HTMLcontactGeneric.replace("%contact%", "Here's my contact info:");
$("#header").append(formattedHTMLcontacts);

var formattedHTMLmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#header").append(formattedHTMLmobile);

// --------------------------------------------

var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMsg);

var formattedHTMLskills = HTMLskills.replace("%data%", bio.skills);
$("#header").append(formattedHTMLskills);

var formattedHTMLbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedHTMLbioPic);

var work = [{
  "title": "JS and Python Developer",
  "employer": "ACME Corp",
  "location": "Wellington",
  "dates": "1/1/2016",
  "description": "Developing things"
}];

var projects = [{
  "title": "The Big Push",
  "dates": "3/3/2014",
  "description": "Doing stuff",
  "images": "http://www.xyz.com/pic.jpg"
}];

var education = [{
  "name": "EDA",
  "dates": "5/5/2016",
  "location": "Wellington",
  "degree": "Bachelor",
  "majors": ["CompSci","Stamp Collecting"],
  "url": "http://www.eda.com"
  },
  var onlineCourses = [{
    "title": "HTML and CSS",
    "school": "Udacity",
    "dates": "1/1/1970",
    "url", "www.udacity.com"
  }]
];

var formattedHTMLworkTitle = HTMLworkTitle.replace("%data%", work["currentJobPosition"]);
$("#header").append(formattedHTMLworkTitle);

var formattedHTMLschoolName = HTMLschoolName.replace("%data%", education.name);
$("#header").append(formattedHTMLschoolName);