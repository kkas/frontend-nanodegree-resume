var bio = {
  "name": "Kenta Kikui",
  "role": "Front-end Web Developer",
  "contacts": {
    "mobile": "+81-90-xxxx-xxxx",
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
      "dates": "dates - dates",
      "description": "description",
      "images": [
        "images/197x148.gif",
        "images/197x148.gif"
      ]
    },
    {
      "title": "title",
      "dates": "dates - dates",
      "description": "description",
      "images": [
        "images/197x148.gif",
        "images/197x148.gif"
      ]
    }
  ]
};

var inName = function() {
  var newName = bio.name;

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

  $("#topContacts").append(HTMLmobile.replace("%data%", this.contacts.mobile));
  $("#topContacts").append(HTMLemail.replace("%data%", this.contacts.email));
  $("#topContacts").append(HTMLtwitter.replace("%data%", this.contacts.twitter));
  $("#topContacts").append(HTMLgithub.replace("%data%", this.contacts.github));
  $("#topContacts").append(HTMLlocation.replace("%data%", this.contacts.location));

  $("#footerContacts").append(HTMLmobile.replace("%data%", this.contacts.mobile));
  $("#footerContacts").append(HTMLemail.replace("%data%", this.contacts.email));
  $("#footerContacts").append(HTMLtwitter.replace("%data%", this.contacts.twitter));
  $("#footerContacts").append(HTMLgithub.replace("%data%", this.contacts.github));
  $("#footerContacts").append(HTMLlocation.replace("%data%", this.contacts.location));

  $("#header").append(HTMLwelcomeMsg.replace("%data%", this.welcomeMessage));

  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    bio.skills.forEach(function(skill) {
      $("#skills").append(HTMLskills.replace("%data%", skill));
    });
  }
};

projects.display = function() {
  this.projects.forEach(function(project) {
    $("#projects").append(HTMLprojectStart);

    $(".project-entry:last").append(HTMLprojectTitle.replace(
      "%data%", project.title));
    $(".project-entry:last").append(HTMLprojectDates.replace(
      "%data%", project.dates));
    $(".project-entry:last").append(HTMLprojectDescription.replace(
      "%data%", project.description));
    project.images.forEach(function(image) {
      $(".project-entry:last").append(HTMLprojectImage.replace(
      "%data%", image));
    });
  });
};

education.display = function() {
  this.schools.forEach(function(school) {
    $("#education").append(HTMLschoolStart);
    $(".education-entry").append(HTMLschoolName.replace("%data%", school.name) +
      HTMLschoolDegree.replace("%data%", school.degree));
    $(".education-entry").append(HTMLschoolDates.replace("%data%", school.dates));
    $(".education-entry").append(HTMLschoolLocation.replace("%data%", school.location));

    school.majors.forEach(function(major) {
      $(".education-entry").append(HTMLschoolMajor.replace("%data%", major));
    });
  });

  $("#education").append(HTMLonlineClasses);

  this.onlineCourses.forEach(function(course) {
    $("#education").append(HTMLschoolStart);

    var onlineCourse =
      HTMLonlineTitle.replace("%data%", course.title) +
      HTMLonlineSchool.replace("%data%", course.school) +
      HTMLonlineDates.replace("%data%", course.dates) +
      HTMLonlineURL.replace("%data%", course.url);
    $(".education-entry:last").append(onlineCourse);
  });
};

work.display = function() {
  this.jobs.forEach(function(job) {
    $("#workExperience").append(HTMLworkStart);

    var employerAndTitle = HTMLworkEmployer.replace("%data%", job.employer) +
      HTMLworkTitle.replace("%data%", job.title);

    $(".work-entry:last").append(employerAndTitle);
    $(".work-entry:last").append(HTMLworkDates.replace("%data%", job.dates));
    $(".work-entry:last").append(HTMLworkLocation.replace("%data%", job.location));
    $(".work-entry:last").append(HTMLworkDescription.replace("%data%", job.description));
  });
};

projects.display();
education.display();
bio.display();
work.display();

$("#mapDiv").append(googleMap);
$("#main").append(internationalizeButton);
