var bio = {
  "name" : "Patrick",
  "role" : "Web Developer",
  "welcome" : "Hi there! Thanks for viewing my interactive resume. I am a web developer currently seeking employment.",
  "contacts" : {
    "mobile" : "(111) 111-1111",
    "email" : "patrickkim93@gmail.com",
    "github" : "patrickk93",
    "linkedin" : "https://linkedin.com/",
    "location" : "Raleigh, NC"
  },
  "biopic" : "url",
  "skills" : ["HTML", "CSS", "JavaScript", "ReactJS", "jQuery", "ExpressJS", "NodeJS", "MongoDB", "Bootstrap"]
};

var work = {
  "jobs" : [
    {
      "employer" : "Self",
      "title" : "Freelancer",
      "location" : "South Korea",
      "dates" : "09/2016 ~ 12/2016",
      "description" : ["Translate research papers from Korean to English for clients",
                       " Prepare adults for interviewing skills in English",
                       " Instruct adults to write effective cover letters and resumes",
                       " Teach conversational English to high school students and adults"
                      ]
    },
    {
      "employer" : "Gyeonggido Board of Education",
      "title" : "Native English Teacher",
      "location" : "Pyeongtaek, South Korea",
      "dates" : "09/2015 ~ 09/2016",
      "description" : ["Instruct 3rd - 6th grade public school students in English",
                       " Brainstorm new materials and ideas with coteachers",
                       " Translate documents in English to Korean and vice versa",
                       " Act as the translator between administrative staff and US military personnel"
                      ]
    },
    {
      "employer" : "UNC School of Dentistry",
      "title" : "Materials Technician",
      "location" : "Chapel Hill, NC",
      "dates" : "07/2015-08/2015",
      "description" : "Maintain dental equipment used by the School of Dentistry"
    },
    {
      "employer" : "UNC Gillings School of Global Public Health",
      "title" : "Interviewer",
      "location" : "Chapel Hill, NC",
      "dates" : "07/2014 ~ 08/2015",
      "description" : [

                      ]
    },
    {
      "employer" : "Residential Services, Inc.",
      "title" : "Direct Support Professional",
      "location" : "Chapel Hill, NC",
      "dates" : "07/2014 ~ 08/2015",
      "description" : [

                      ]
    },
    {
      "employer" : "UNC School of Medicine: Thurston Bowles Lab",
      "title" : "Intern/Researcher",
      "location" : "Chapel Hill, NC",
      "dates" : "05/2013 ~ 08/2013",
      "description" : [

                      ]
    },

  ]

};

var projects = {
  "projects" : [
    {
      "title" : "Random Quote Generator",
      "date" :  "03/2016",
      "description" : "Use third-party API to pull and display inspirational quotes",
      "images" : ["url"]
    },
    {
      "title" : "Weather App",
      "date" :  "04/2016",
      "description" : "Use third-party API to pull and display weather information based on geolocation",
      "images" : ["url"]
    },
    {
      "title" : "Wikipedia Searcher",
      "date" :  "05/2016",
      "description" : "Use Wikipedia API to search and display Wikipedia articles",
      "images" : ["url"]
    },
    {
      "title" : "Twitch TV Viewer",
      "date" :  "05/2016",
      "description" : "Use TwitchTV API to display data on streamers",
      "images" : ["url"]
    },
    {
      "title" : "Todo List",
      "date" :  "09/2016",
      "description" : "Todo list app which lets you add, edit, and delete entries",
      "images" : ["url"]
    },
    {
      "title" : "Park View App",
      "date" :  "10/2016",
      "description" : "Use NodeJS, Express, MongoDB, and JS to create, read, update, and destroy information on local parks.",
      "images" : ["url"]
    }
  ]
};

var education = {
    "schools" : [
    {
      "name" :"The University of North Carolina at Chapel Hill",
      "degree" : "BS, BA",
      "majors" : ["Biology", "History"],
      "graduation" : "2015",
      "location" : "Chapel Hill, NC"
    },
    {
      "name" :"Green Hope High School",
      "degree" : "Graduate",
      "majors" : ["Graduate"],
      "graduation" : "2011",
      "location" : "Cary, NC"
    }
              ],
  "onlineCourses" : [
    {
      "title" : "Front End Development",
      "school" : "FreeCodeCamp",
      "dates" : "02/2016 ~ Current",
      "url" : "https:/freecodecamp.com"
    },
    {
      "title" : "Front End Nanodegree",
      "school" : "Udacity",
      "dates" : "10/2016 ~ Current",
      "url" : "https:/udacity.com"
    }
  ]
};

//Display basic information about me
bio.display = function () {
  var formattedName=HTMLheaderName.replace("%data%", "Patrick Kim");
  var formattedRole=HTMLheaderRole.replace("%data%", "Web Developer");
  var formattedBioPic = HTMLbioPic.replace("%data%", "http://theeconomiccollapseblog.com/wp-content/uploads/2013/12/Bear-Market-Photo-by-Appalachian-Encounters-300x300.jpg");
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedLoc = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  $("#header").append(formattedBioPic);
  $("#header").append(HTMLskillsStart);
  $("#topContacts").append(formattedMobile);
  $("#topContacts").append(formattedEmail);
  $("#topContacts").append(formattedGithub);
  $("#topContacts").append(formattedLoc);
  // for (var i = 0; i < bio.contacts.length; i++){
  //   if(bio.contacts.hasOwnProperty(i)) {
  //     $("#topContacts").append(bio.contacts[i]);
  //   }
  // };
if (bio.skills.length > 0) {
  this.skills.forEach(function(skill){
    var formattedSkill = HTMLskills.replace("%data%",skill);
    $("#skills").append(formattedSkill);
  });
}
};
bio.display();

//Display work information
work.display = function() {
  $("#workExperience").append(HTMLworkStart);
work.jobs.forEach(function(info){
  var formattedTitle = HTMLworkTitle.replace("%data%", info.title);
  var formattedEmployer = HTMLworkEmployer.replace("%data%", info.employer);
  var formattedWorkDates = HTMLworkDates.replace("%data%", info.dates);
  var formattedWorkDescription = HTMLworkDescription.replace("%data%", info.description);
  $(".work-entry:last").append(formattedEmployer + formattedTitle + formattedWorkDates + formattedWorkDescription);
});
};
work.display();
// for (job in work.jobs) {
//
//   var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
//   var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
//   var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
//   var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
//   $(".work-entry:last").append(formattedEmployer + formattedTitle);
//   $(".work-entry:last").append(formattedWorkDates);
//   $(".work-entry:last").append(formattedDescription);
//
// }



// $(document).click(function(loc){
//   var x = loc.pageX;
//   var y = loc.pageY;
//
//   logClicks(x,y);
// });
// //
// $("#main").append(internationalizeButton);
// function inName(name) {
//   var firstName,
//   lastName,
//   fullName;
//   name = name.trim().split(" ");
//   firstName = name[0].charAt(0).toUpperCase() + name[0].slice(1).toLowerCase();
//   lastName = name[1].toUpperCase();
//   fullName = firstName + " " + lastName;
//   console.log(fullName);
// }

//Display info on projects
projects.display = function() {
  $("#projects").append(HTMLprojectStart);
  var formattedProjectTitle,
  formattedProjectDate,
  formattedProjectDescription,
  formattedProjectImage;
  this.projects.forEach(function(data){
    formattedProjectTitle=HTMLprojectTitle.replace("%data%",data.title);
    formattedProjectDate=HTMLprojectDates.replace("%data%",data.date);
    formattedProjectDescription=HTMLprojectDescription.replace("%data%",data.description);
    formattedProjectImage=HTMLprojectImage.replace("%data%",data.images);
    $(".project-entry:last").append(formattedProjectTitle,formattedProjectDate, formattedProjectDescription, formattedProjectImage);
  });

};
projects.display();

//Display education information
education.display = function() {
  $("#education").append(HTMLschoolStart);
  $("#education").append(HTMLonlineClasses);
  var schoolName,
  schoolDegree,
  schoolDate,
  schoolLocation,
  schoolMajor,
  onlineTitle,
  onlineSchool,
  onlineDates,
  onlineURL;
  education.schools.forEach(function(data){
    schoolName = HTMLschoolName.replace("%data%", data.name);
    schoolDegree = HTMLschoolDegree.replace("%data%", data.degree);
    schoolDate = HTMLschoolDates.replace("%data%", data.graduation);
    schoolMajor = HTMLschoolMajor.replace("%data%", data.majors);
    schoolLocation = HTMLschoolLocation.replace("%data%", data.location);
    $(".education-entry").append(schoolName + schoolDegree + schoolDate + schoolMajor + schoolLocation);
  });
  education.onlineCourses.forEach(function(data){
    onlineTitle = HTMLonlineTitle.replace("%data%", data.title);
    onlineSchool = HTMLonlineSchool.replace("%data%", data.school);
    onlineDates = HTMLonlineDates.replace("%data%", data.dates);
    onlineURL = HTMLonlineURL.replace("%data%", data.url);

    $(".online-entry").append(onlineTitle + onlineSchool + onlineDates + onlineURL);
  });

};
education.display();

$("#mapDiv").append(googleMap);
