var bio = {
  'name': 'Kenta Kikui',
  'role': 'Front-end Web Developer',
  'contacts': {
    'mobile': '+81-90-xxxx-xxxx',
    'email': 'kentakikui@gmail.com',
    'github': 'https://github.com/kkas',
    'twitter': '@teriyakik',
    'location': 'Tokyo, Japan'
  },
  'welcomeMessage': 'I eager to learn new things, especially web developing.<br>' +
    'I am self learner with a lot of passion.<br>' +
    'I am enhancing my skills, that are necessary for Front-end web developer, here at Udacity.<br>',
  'skills': [
    'Japanese', 'English', 'Programming',
    'HTML', 'CSS', 'JS', 'Bootstrap',
    'Ruby', 'Ruby on Rails',
    'Java',
    'Python',
    'PostgreSQL',
    'git',
    'GitHub'
  ],
  'biopic': 'images/fry.jpg'
};

var education = {
  'schools': [
    {
      'name': 'California State University, Bakersfield',
      'location': 'Bakersfield, CA, US',
      'degree': 'BS',
      'majors': [
        'Comp Sci'
      ],
      'dates': 2007,
      'url': 'http://www.csub.edu/'
    }
  ],
  'onlineCourses': [
    {
      'title': 'How to Use Git and GitHub',
      'school': 'Udacity',
      'dates': 2015,
      'url': 'https://www.udacity.com/course/how-to-use-git-and-github--ud775'
    },
    {
      'title': 'Intro to HTML and CSS',
      'school': 'Udacity',
      'dates': 2015,
      'url': 'https://www.udacity.com/course/intro-to-html-and-css--ud304'
    },
    {
      'title': 'Intro to jQuery',
      'school': 'Udacity',
      'dates': 2015,
      'url': 'https://www.udacity.com/course/intro-to-jquery--ud245'
    },
    {
      'title': 'JavaScript Basics',
      'school': 'Udacity',
      'dates': 2015,
      'url': 'https://www.udacity.com/course/javascript-basics--ud804'
    },
    {
      'title': 'Object-Oriented JavaScript',
      'school': 'Udacity',
      'dates': 2015,
      'url': 'https://www.udacity.com/course/object-oriented-javascript--ud015',
    },
    {
      'title': 'Responsive Images',
      'school': 'Udacity',
      'dates': 2015,
      'url': 'https://www.udacity.com/course/responsive-images--ud882'
    },
    {
      'title': 'Responsive Web Design Fundamentals',
      'school': 'Udacity',
      'dates': 2015,
      'url': 'https://www.udacity.com/course/responsive-web-design-fundamentals--ud893'
    },
    {
      'title': 'Website Performance Optimization (in-progress)',
      'school': 'Udacity',
      'dates': 2015,
      'url': 'https://www.udacity.com/course/website-performance-optimization--ud884'
    },
    {
      'title': 'Browser Rendering Optimization (in-progress)',
      'school': 'Udacity',
      'dates': 2015,
      'url': 'https://www.udacity.com/course/browser-rendering-optimization--ud860'
    }
  ]
};

var work = {
  'jobs': [
    {
      'employer': 'Fujitsu Social Science Laboratory Limited',
      'title': 'System Integrator',
      'location': 'Kanagawa, Japan',
      'dates': 'April 2008 - August 2015 (7 years 5 months)',
      'description': 'Designing and implementing internal and external systems for companies, using (mostly) Java and Ruby.'
    },
    {
      'employer': 'CSU, Bakersfield',
      'title': 'Teaching Assistant',
      'location': 'Bakersfield, CA, US',
      'dates': 'June 2006 - May 2007 (1 year)',
      'description': 'Assisting students in CMPS120("Computer Skills & Concepts") with grading their homework and assignments, and answering their questions related to the class.' +
        'Also, reporting any circumstances to the professor.'
    }
  ]
};

var projects = {
  'projects': [
    {
      'title': 'title',
      'dates': 'dates - dates',
      'description': 'description',
      'images': [
        'images/197x148.gif',
        'images/197x148.gif'
      ]
    },
    {
      'title': 'title',
      'dates': 'dates - dates',
      'description': 'description',
      'images': [
        'images/197x148.gif',
        'images/197x148.gif'
      ]
    }
  ]
};

/**
 * Make bio.name to internationalized.
 * The last name will be all-uppercased, and the first name will be
 * capitalized.
 *
 * @return {string} new, modified name.
 */
var inName = function() {
  var newName = bio.name;

  newName = newName.trim().split(' ');
  newName[0] = newName[0].slice(0, 1).toUpperCase() +
    newName[0].slice(1).toLowerCase();
  newName[1] = newName[1].toUpperCase();
  newName = newName.join(' ');

  return newName;
};

/**
 * Displays values in the bio section.
 * @return {undefined}
 */
bio.display = function() {
  $('#header').prepend(HTMLheaderRole.replace('%data%', this.role));
  $('#header').prepend(HTMLheaderName.replace('%data%', this.name));
  $('#header').append(HTMLbioPic.replace('%data%', this.biopic));
  $('#header').append(HTMLwelcomeMsg.replace('%data%', this.welcomeMessage));

  // Append skills if defined.
  if (bio.skills.length > 0) {
    $('#header').append(HTMLskillsStart);

    bio.skills.forEach(function(skill) {
      $('#skills').append(HTMLskills.replace('%data%', skill));
    });
  }

  // Contacts at the top of the page.
  $('#topContacts').append(HTMLmobile.replace('%data%', this.contacts.mobile));
  $('#topContacts').append(HTMLemail.replace('%data%', this.contacts.email));
  $('#topContacts').append(HTMLtwitter.replace('%data%', this.contacts.twitter));
  $('#topContacts').append(HTMLgithub.replace('%data%', this.contacts.github));
  $('#topContacts').append(HTMLlocation.replace('%data%', this.contacts.location));

  // Contacts at the bottom of the page.
  $('#footerContacts').append(HTMLmobile.replace('%data%', this.contacts.mobile));
  $('#footerContacts').append(HTMLemail.replace('%data%', this.contacts.email));
  $('#footerContacts').append(HTMLtwitter.replace('%data%', this.contacts.twitter));
  $('#footerContacts').append(HTMLgithub.replace('%data%', this.contacts.github));
  $('#footerContacts').append(HTMLlocation.replace('%data%', this.contacts.location));
};

/**
 * Displays values in the education section.
 * @return {undefined}
 */
education.display = function() {
  // Add a div, like a container, for each item.
  // Then, all the items are added inside the container.
  this.schools.forEach(function(school) {
    var schoolNameAndDegree;

    $('#education').append(HTMLschoolStart);

    // School name followed by the degree earned.
    schoolNameAndDegree = HTMLschoolName.replace('%data%', school.name) +
      HTMLschoolDegree.replace('%data%', school.degree);

    $('.education-entry').append(schoolNameAndDegree);
    $('.education-entry').append(HTMLschoolDates.replace('%data%', school.dates));
    $('.education-entry').append(HTMLschoolLocation.replace('%data%', school.location));

    // Append majors if defined.
    school.majors.forEach(function(major) {
      $('.education-entry').append(HTMLschoolMajor.replace('%data%', major));
    });
  });

  // Append online courses if any.
  if (this.onlineCourses.length > 0) {
    $('#education').append(HTMLonlineClasses);

    this.onlineCourses.forEach(function(course) {
      var onlineTitleAndSchool;

      // Add a div for each item, that holds all the related info.
      $('#education').append(HTMLschoolStart);

      // Online Course name followed by the school name.
      onlineTitleAndSchool = HTMLonlineTitle.replace('%data%', course.title) +
        HTMLonlineSchool.replace('%data%', course.school);

      $('.education-entry:last').append(onlineTitleAndSchool);
      $('.education-entry:last').append(HTMLonlineDates.replace('%data%', course.dates));
      $('.education-entry:last').append(HTMLonlineURL.replace('%data%', course.url));
    });
  }
};

/**
 * Displays values in the work section.
 * @return {undefined}
 */
work.display = function() {
  this.jobs.forEach(function(job) {
    var employerAndTitle;

    // Add a div for each item, that holds all the related info.
    $('#workExperience').append(HTMLworkStart);

    // Employer name followed by the title.
    employerAndTitle = HTMLworkEmployer.replace('%data%', job.employer) +
      HTMLworkTitle.replace('%data%', job.title);

    $('.work-entry:last').append(employerAndTitle);
    $('.work-entry:last').append(HTMLworkDates.replace('%data%', job.dates));
    $('.work-entry:last').append(HTMLworkLocation.replace('%data%', job.location));
    $('.work-entry:last').append(HTMLworkDescription.replace('%data%', job.description));
  });
};

/**
 * Displays values in the projects section.
 * @return {undefined}
 */
projects.display = function() {
  this.projects.forEach(function(project) {
    // Add a div for each item, that holds all the related info.
    $('#projects').append(HTMLprojectStart);

    $('.project-entry:last').append(HTMLprojectTitle.replace(
      '%data%', project.title));
    $('.project-entry:last').append(HTMLprojectDates.replace(
      '%data%', project.dates));
    $('.project-entry:last').append(HTMLprojectDescription.replace(
      '%data%', project.description));

    // Append project images if defined.
    project.images.forEach(function(image) {
      $('.project-entry:last').append(HTMLprojectImage.replace(
      '%data%', image));
    });
  });
};

// Call display() for each objects.
bio.display();
education.display();
work.display();
projects.display();

// Add the google map to the page.
$('#mapDiv').append(googleMap);

// Add the internationalization button to the bottom of the page.
$('#main').append(internationalizeButton);
