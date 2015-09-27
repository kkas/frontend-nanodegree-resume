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
      "title": "",
      "dates": "",
      "description": "",
      "images": [
        ""
      ]
    }
  ]
};

var bio = {
  "name": "Kenta Kikui",
  "role": "Front-end Web Developer",
  "welcomeMessage": "Welcome Message",
  "contacts": {
    "email": "kentakikui@gmail.com",
    "github": "https://github.com/kkas",
    "twitter": "@teriyakik",
    "location": "Tokyo, Japan"
  },
  "skills": [
    "Japanese", "English", "Programming",
    "HTML", "CSS", "JS", "Bootstrap",
    "Ruby", "Ruby on Rails",
    "Java",
    "Python",
    "PostgreSQL",
    "git",
    "GitHub"
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

if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);

  for (var skill in bio.skills) {
    $("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
  }
}

var displayWork = function() {
  for (var job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var employerAndTitle = HTMLworkEmployer.replace("%data%", work.jobs[job].employer) +
      HTMLworkTitle.replace("%data%", work.jobs[job].title);

    $(".work-entry:last").append(employerAndTitle);
    $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
    $(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
    $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
  }
};

displayWork();

$("#main").append(internationalizeButton);
