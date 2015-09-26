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
  "contactInfo": "my contact info",
  "pictureURL": "images/fry.jpg",
  "welcomeMessage": "Welcome Message",
  "skills": [
    "Programming", "JS"
  ]
};

var education = {
  "schools": [
    {
      "city": "Bakersfield, CA, US",
      "major": [
        "Comp Sci"
      ],
      "minor": [
        ""
      ],
      "dates": 2007
    }
  ],
  "onlineCourses": [
    {
      "title": "JavaScript",
      "school": "Udacity",
      "dates": 2015,
      "url": "http://www.udacity.com/course/xxxx"
    }
  ]
};
