var bio = {
  "name" : "Patrick",
  "role" : "Web Developer",
  "welcomeMessage" : "Hi there! Thanks for viewing my interactive resume. I am a web developer currently seeking employment. Willing to relocate for great opportunities!",
  "contacts" : {
    "mobile" : "(919) 818-0165",
    "email" : "patrickkim93@gmail.com",
    "github" : "patrickk93",
    "linkedin" : "https://www.linkedin.com/in/patrickk93",
    "location" : "Raleigh, NC"
  },
  "biopic" : "url",
  "skills" : ["HTML", "CSS", "JavaScript", "ReactJS", "jQuery", "ExpressJS", "NodeJS", "PostgreSQL", "Bootstrap", "Responsive Design", "Web Optimization"]
};

var work = {
  "jobs" : [
    {
      "employer" : "Self",
      "title" : "Freelancer",
      "location" : "South Korea",
      "dates" : "09/2016 ~ 12/2016",
      "description" : "- Translate research papers from Korean to English for clients" + "<br>"+
                       "- Prepare adults for interviewing skills in English"+"<br>"+
                       "- Instruct adults to write effective cover letters and resumes"+"<br>"+
                       "- Teach conversational English to high school students and adults"

    },
    {
      "employer" : "Gyeonggido Board of Education",
      "title" : "Native English Teacher",
      "location" : "Pyeongtaek, South Korea",
      "dates" : "09/2015 ~ 09/2016",
      "description" : "- Instruct 3rd - 6th grade public school students in English"+"<br>"+
                       "- Brainstorm new materials and ideas with coteachers"+"<br>"+
                       "- Translate documents in English to Korean and vice versa"+"<br>"+
                       "- Act as the translator between administrative staff and US military personnel"

    },
    {
      "employer" : "UNC School of Dentistry",
      "title" : "Materials Technician",
      "location" : "Chapel Hill, NC",
      "dates" : "07/2015-08/2015",
      "description" : "- Sterilize and prepare dental cassettes and burrs according to protocol"+"<br>"+
                      "- Maintain and organize laboratory and inventory"+"<br>"+
                      "- Check in and check out dental equipment"

    },
    {
      "employer" : "UNC Gillings School of Global Public Health",
      "title" : "Interviewer",
      "location" : "Chapel Hill, NC",
      "dates" : "07/2014 ~ 08/2015",
      "description" : "- Conduct research surveys funded by the FDA, CDC, and U.S. universities"+"<br>"+
      "- Meet with university researchers to brainstorm survey questions and discuss interactions with respondents"+"<br>"+
      "- Cold calling respondents on topics such as ancestry, genetics, tobacco policies, health"+"<br>"+
      "- Data entry through the Blaise software"
    },
    {
      "employer" : "Residential Services, Inc.",
      "title" : "Direct Support Professional",
      "location" : "Chapel Hill, NC",
      "dates" : "07/2014 ~ 08/2015",
      "description" : "- Provide support and supervision of residents with mental and intellectual disabilities"+"<br>"+
      "- Answering phone calls, filing, emailing, and performing other clerical duties "+"<br>"+
      "- Data entry through web-based developmental disabilities software, Therap Services"+"<br>"+
      "- Facilitating and teaching daily routines in hygiene, finance management, nutrition education, meal preparation, educational development, and social skills"
    },
    {
      "employer" : "UNC School of Medicine: Thurston Bowles Lab",
      "title" : "Intern/Researcher",
      "location" : "Chapel Hill, NC",
      "dates" : "05/2013 ~ 08/2013",
      "description" : "- Feed cells with ALI media (Air Liquid Interface)and cleanse with PBS (Phosphate buffered saline)"+"<br>"+
      "- Autoclave biohazard waste, glassware"+"<br>"+
      "- Prepare cell cultures with antibiotics and antifungals via pipetting"+"<br>"+
      "- Experiment with various gels and buffer solution PBS to observe changes and assist postdoctoral mentor"+"<br>"+
      "- Prepare ALI media with micropore filtration"
    },

  ]

};

var projects = {
  "projects" : [
    {
      "title" : "Random Quote Generator",
      "dates" :  "03/2016",
      "description" : "Use third-party API to pull and display inspirational quotes",
      "images" : ["url","url1"]
    },
    {
      "title" : "Weather App",
      "dates" :  "04/2016",
      "description" : "Use third-party API to pull and display weather information based on geolocation",
      "images" : ["url","url1"]
    },
    {
      "title" : "Wikipedia Searcher",
      "dates" :  "05/2016",
      "description" : "Use Wikipedia API to search and display Wikipedia articles",
      "images" : ["url","url1"]
    },
    {
      "title" : "Twitch TV Viewer",
      "dates" :  "05/2016",
      "description" : "Use TwitchTV API to display data on streamers",
      "images" : ["url","url1"]
    },
    {
      "title" : "Todo List",
      "dates" :  "09/2016",
      "description" : "Todo list app which lets you add, edit, and delete entries",
      "images" : ["url","url1"]
    },
    {
      "title" : "Park View App",
      "dates" :  "10/2016",
      "description" : "Use NodeJS, Express, MongoDB, and JS to create, read, update, and destroy information on local parks.",
      "images" : ["url","url1"]
    }
  ]
};

var education = {
    "schools" : [
    {
      "name" :"The University of North Carolina at Chapel Hill",
      "degree" : "BS, BA",
      "majors" : ["Biology", "History"],
      "dates" : "2015",
      "location" : "Chapel Hill, NC",
      "url" : "http://www.unc.edu/"
    },
    {
      "name" :"Green Hope High School",
      "degree" : "Graduate",
      "majors" : ["None"],
      "dates" : "2011",
      "location" : "Cary, NC",
      "url" : "http://www.wcpss.net/greenhopehs"
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
var replaceData = "%data%";
//Display basic information about me
bio.display = function () {
  var formattedName=HTMLheaderName.replace(replaceData, "Patrick Kim"),
   formattedRole=HTMLheaderRole.replace(replaceData, "Web Developer"),
   formattedWelcomeMsg = HTMLwelcomeMsg.replace(replaceData, bio.welcomeMessage);
   formattedBioPic = HTMLbioPic.replace(replaceData, "http://theeconomiccollapseblog.com/wp-content/uploads/2013/12/Bear-Market-Photo-by-Appalachian-Encounters-300x300.jpg");
   formattedMobile = HTMLmobile.replace(replaceData, bio.contacts.mobile),
   formattedEmail = HTMLemail.replace(replaceData, bio.contacts.email),
   formattedGithub = HTMLgithub.replace(replaceData, bio.contacts.github),
   formattedLoc = HTMLlocation.replace(replaceData, bio.contacts.location);
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  $("#header").append(formattedBioPic);
  $("#header").append(HTMLskillsStart);
  $("#header").append(formattedWelcomeMsg);
  $("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLoc);
  if (bio.skills.length > 0) {
  this.skills.forEach(function(skill){
    var formattedSkill = HTMLskills.replace(replaceData,skill);
    $("#skills").append(formattedSkill);
  });
}
};
bio.display();

//Display work information
work.display = function() {
  $("#workExperience").append(HTMLworkStart);
work.jobs.forEach(function(info){
  var formattedTitle = HTMLworkTitle.replace(replaceData, info.title),
   formattedEmployer = HTMLworkEmployer.replace(replaceData, info.employer),
   formattedWorkDates = HTMLworkDates.replace(replaceData, info.dates),
   formattedWorkDescription = HTMLworkDescription.replace(replaceData, info.description),
   formattedWorkLocation = HTMLworkLocation.replace(replaceData,info.location);
  $(".work-entry:last").append(formattedEmployer + formattedTitle + formattedWorkDates + formattedWorkLocation + formattedWorkDescription);
  });
};
work.display();

//Display info on projects
projects.display = function() {
  $("#projects").append(HTMLprojectStart);
  var formattedProjectTitle,
  formattedProjectDates,
  formattedProjectDescription,
  formattedProjectImage;
  this.projects.forEach(function(data){
    formattedProjectTitle=HTMLprojectTitle.replace(replaceData,data.title);
    formattedProjectDates=HTMLprojectDates.replace(replaceData,data.dates);
    formattedProjectDescription=HTMLprojectDescription.replace(replaceData,data.description);
    formattedProjectImage=HTMLprojectImage.replace(replaceData,projects.images);
    $(".project-entry:last").append(formattedProjectTitle,formattedProjectDates, formattedProjectDescription, formattedProjectImage);
  });

};
projects.display();

//Display education information
education.display = function() {
  $("#education").append(HTMLschoolStart);
  $("#education").append(HTMLonlineClasses);
  var schoolName,
  schoolDegree,
  schoolDates,
  schoolLocation,
  schoolMajor,
  schoolURL,
  onlineTitle,
  onlineSchool,
  onlineDates,
  onlineURL;
  education.schools.forEach(function(data){
    schoolName = HTMLschoolName.replace(replaceData, data.name).replace("#", data.url);
    schoolDegree = HTMLschoolDegree.replace(replaceData, data.degree);
    schoolDates = HTMLschoolDates.replace(replaceData, data.dates);
    schoolMajor = HTMLschoolMajor.replace(replaceData, data.majors);
    schoolLocation = HTMLschoolLocation.replace(replaceData, data.location);
    $(".education-entry").append(schoolName + schoolDegree + schoolDates + schoolMajor + schoolLocation);
  });
  education.onlineCourses.forEach(function(data){
    onlineTitle = HTMLonlineTitle.replace(replaceData, data.title);
    onlineSchool = HTMLonlineSchool.replace(replaceData, data.school);
    onlineDates = HTMLonlineDates.replace(replaceData, data.dates);
    onlineURL = HTMLonlineURL.replace(replaceData, data.url);

    $(".online-entry").append(onlineTitle + onlineSchool + onlineDates + onlineURL);
  });

};
education.display();

$("#mapDiv").append(googleMap);
