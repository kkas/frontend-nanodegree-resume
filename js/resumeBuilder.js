/*
This is empty on purpose! Your code to build the resume will go here.
 */
$("#main").append(["Kenta Kikui"]);

var awesomeThoughts = "I am Kenta Kikui and I am AWESOME!";
console.log(awesomeThoughts);

var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

$("#main").append(funThoughts);

var formattedName = HTMLheaderName.replace("%data%", "Kenta Kikui");
var formattedRole = HTMLheaderRole.replace("%data%", "Front-end Web Developer");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var work = {
  "jobs": [
    {
      "employer": "",
      "title": "",
      "location": "",
      "dates": "",
      "description": ""
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
    //"mobile": "090-xxxx-xxxx",
    "email": "kentakikui@gmail.com",
    "github": "https://github.com/kkas",
    "twitter": "@teriyakik",
    "location": "Tokyo, Japan"
  },
  //"pictureURL": "images/fry.jpg",
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
