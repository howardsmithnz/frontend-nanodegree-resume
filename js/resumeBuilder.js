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

var work = {
  "currentJobPosition": "JS and Python Developer",
  "employer": "ACME Corp",
  "yearsWorked": 5,
  "cityOfBusiness": "Wellington"
};

var education = {
  "name": "EDA",
  "yearsAttended": "2016",
  "schoolsCity": "Wellington"
};

var formattedHTMLworkTitle = HTMLworkTitle.replace("%data%", work["currentJobPosition"]);
$("#header").append(formattedHTMLworkTitle);

var formattedHTMLschoolName = HTMLschoolName.replace("%data%", education.name);
$("#header").append(formattedHTMLschoolName);