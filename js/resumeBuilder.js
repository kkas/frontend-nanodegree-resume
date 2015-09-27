var bio = {
  "name": "Kenta Kikui",
  "role": "Front-end Web Developer",
  "contacts": {
    "email": "kentakikui@gmail.com",
    "github": "https://github.com/kkas",
    "twitter": "@teriyakik",
    "location": "Tokyo, Japan"
  },
  "welcomeMessage": "I eager to learn new things, especially web developing.<br>" +
    "I am self learner with a lot of passion.<br>" +
    "I am enhancing my skills, that are necessary for Front-end web developer, here at Udacity.<br>",
  "skills": [
    "Japanese", "English", "Programming",
    "HTML", "CSS", "JS", "Bootstrap",
    "Ruby", "Ruby on Rails",
    "Java",
    "Python",
    "PostgreSQL",
    "git",
    "GitHub"
  ],
  "biopic": "images/fry.jpg"
};

var work = {
  "jobs": [
    {
      "employer": "Fujitsu Social Science Laboratory Limited",
      "title": "System Integrator",
      "location": "Kanagawa, Japan",
      "dates": "April 2008 - August 2015 (7 years 5 months)",
      "description": "Designing and implementing internal and external systems for companies, using Java (mostly) and Ruby."
    },
    {
      "employer": "CSU, Bakersfield",
      "title": "Teaching Assistant",
      "location": "Bakersfield, CA, US",
      "dates": "June 2006 - May 2007 (1 year)",
      "description": "Assisted Students in CMPS120('Computer Skills & Concepts') with grading their homework and assignments, and answering their questions related to the class. Report the results to the professor."
    }
  ]
};

var projects = {
  "projects": [
    {
      "title": "title",
      "dates": "dates",
      "description": "description",
      "images": [
        "images/197x148.gif",
        "images/197x148.gif"
      ]
    },
    {
      "title": "title",
      "dates": "dates",
      "description": "description",
      "images": [
        "images/197x148.gif",
        "images/197x148.gif"
      ]
    }
  ]
};

var education = {
  "schools": [
    {
      "name": "California State University, Bakersfield",
      "location": "Bakersfield, CA, US",
      "degree": "BS",
      "majors": [
        "Comp Sci"
      ],
      "dates": 2007,
      "url": "http://www.csub.edu/"
    }
  ],
  "onlineCourses": [
    {
      "title": "How to Use Git and GitHub",
      "school": "Udacity",
      "dates": 2015,
      "url": "https://www.udacity.com/course/how-to-use-git-and-github--ud775"
    },
    {
      "title": "Intro to HTML and CSS",
      "school": "Udacity",
      "dates": 2015,
      "url": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
    },
    {
      "title": "JavaScript Basics",
      "school": "Udacity",
      "dates": 2015,
      "url": "https://www.udacity.com/course/javascript-basics--ud804"
    },
    {
      "title": "Responsive Images",
      "school": "Udacity",
      "dates": 2015,
      "url": "https://www.udacity.com/course/responsive-images--ud882"
    },
    {
      "title": "Responsive Web Design Fundamentals",
      "school": "Udacity",
      "dates": 2015,
      "url": "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
    }
  ]
};

$("#main").append(internationalizeButton);

var inName = function(names) {
  var newName = names;

  newName = newName.trim().split(" ");
  newName[0] = newName[0].slice(0, 1).toUpperCase() +
    newName[0].slice(1).toLowerCase();
  newName[1] = newName[1].toUpperCase();
  newName = newName.join(" ");

  return newName;
};

bio.display = function() {
  $("#header").prepend(HTMLheaderRole.replace("%data%", this.role));
  $("#header").prepend(HTMLheaderName.replace("%data%", this.name));
  $("#header").append(HTMLbioPic.replace("%data%", this.biopic));

  $("#topContacts").append(HTMLemail.replace("%data%", this.contacts.email));
  $("#topContacts").append(HTMLtwitter.replace("%data%", this.contacts.twitter));
  $("#topContacts").append(HTMLgithub.replace("%data%", this.contacts.github));
  $("#topContacts").append(HTMLlocation.replace("%data%", this.contacts.location));

  $("#header").append(HTMLwelcomeMsg.replace("%data%", this.welcomeMessage));

  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (var skill in bio.skills) {
      $("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
    }
  }
};

projects.display = function() {
  for (var project in this.projects) {
    $("#projects").append(HTMLprojectStart);

    $(".project-entry:last").append(HTMLprojectTitle.replace(
      "%data%", this.projects[project].title));
    $(".project-entry:last").append(HTMLprojectDates.replace(
      "%data%", this.projects[project].dates));
    $(".project-entry:last").append(HTMLprojectDescription.replace(
      "%data%", this.projects[project].description));
    for (var image in this.projects[project].images) {
      $(".project-entry:last").append(HTMLprojectImage.replace(
      "%data%", this.projects[project].images[image]));
    }
  }
};

education.display = function() {
  for (var school in this.schools) {
    $("#education").append(HTMLschoolStart);
    $(".education-entry").append(HTMLschoolName.replace("%data%", this.schools[school].name) +
      HTMLschoolDegree.replace("%data%", this.schools[school].degree));
    $(".education-entry").append(HTMLschoolDates.replace("%data%", this.schools[school].dates));
    $(".education-entry").append(HTMLschoolLocation.replace("%data%", this.schools[school].location));
    for (var major in this.schools[school].majors) {
      $(".education-entry").append(HTMLschoolMajor.replace("%data%", this.schools[school].majors[major]));
    }
  }

  $("#education").append(HTMLonlineClasses);

  for (var course in this.onlineCourses) {
    $("#education").append(HTMLschoolStart);
    var onlineCourse =
      HTMLonlineTitle.replace("%data%", this.onlineCourses[course].title) +
      HTMLonlineSchool.replace("%data%", this.onlineCourses[course].school) +
      HTMLonlineDates.replace("%data%", this.onlineCourses[course].dates) +
      HTMLonlineURL.replace("%data%", this.onlineCourses[course].url);
    $(".education-entry:last").append(onlineCourse);
  }
};

work.display = function() {
  for (var job in this.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var employerAndTitle = HTMLworkEmployer.replace("%data%", this.jobs[job].employer) +
      HTMLworkTitle.replace("%data%", this.jobs[job].title);

    $(".work-entry:last").append(employerAndTitle);
    $(".work-entry:last").append(HTMLworkDates.replace("%data%", this.jobs[job].dates));
    $(".work-entry:last").append(HTMLworkLocation.replace("%data%", this.jobs[job].location));
    $(".work-entry:last").append(HTMLworkDescription.replace("%data%", this.jobs[job].description));
  }
};

projects.display();
education.display();
bio.display();
work.display();

$("#mapDiv").append(googleMap);
