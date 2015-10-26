/** Models **/
/**
 * This is the Model object for Bio in MVO style.
 * @type {Object}
 */
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

/**
 * This is the Model object for Education in MVO style.
 * @type {Object}
 */
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
      'title': 'HTML5 Canvas',
      'school': 'Udacity',
      'dates': 2015,
      'url': 'https://www.udacity.com/course/html5-canvas--ud292'
    },
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

/**
 * This is the Model object for Work in MVO style.
 * @type {Object}
 */
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

/**
 * This is the Model object for Projects in MVO style.
 * @type {Object}
 */
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
 * This is the Ocutopus object in MVO style.
 * This connects the models and the views.
 * @type {Object}
 */
var octopus = {
  init: function() {
    // Initialize Views.
    viewBio.init();
    viewEducation.init();
    viewProject.init();
    viewWork.init();

    // Initialize the goole map.
    viewGoogleMap.init();
  },
  getBio: function() {
    return bio;
  },
  getSchools: function() {
    return education.schools;
  },
  getOnlineCourses: function() {
    return education.onlineCourses;
  },
  getJobs: function() {
    return work.jobs;
  },
  getProjects: function() {
    return projects.projects;
  }
};

/***** Views *****/
/**
 * This is the View object for Bio in MVO style.
 * @type {Object}
 */
var viewBio = {
  init: function() {
    this.$header = $('#header');
    this.$topContacts = $('#topContacts');
    this.$footerContacts = $('#footerContacts');
    this.$main = $('#main');

    // Add the internationalization button to the bottom of the page.
    this.$internationalizeButton = $(internationalizeButton);

    // Add the onclick event listener.
    this.$internationalizeButton.click(function() {
      var iName = viewBio.inName() || function(){};
      $('#name').html(iName);
    });

    // Add the button in the main section.
    this.$main.append(this.$internationalizeButton);

    this.display();
  },
  /**
   * Displays values in the bio section.
   * @return {undefined}
   */
  display: function() {
    var bio = octopus.getBio();

    this.$header.prepend(HTMLheaderRole.replace('%data%', bio.role));
    this.$header.prepend(HTMLheaderName.replace('%data%', bio.name));
    this.$header.append(HTMLbioPic.replace('%data%', bio.biopic));
    this.$header.append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));

    // Append skills if defined.
    if (bio.skills.length > 0) {
      this.$header.append(HTMLskillsStart);

      bio.skills.forEach(function(skill) {
        $('#skills').append(HTMLskills.replace('%data%', skill));
      });
    }

    // Contacts at the top of the page.
    this.$topContacts.append(HTMLmobile.replace('%data%', bio.contacts.mobile));
    this.$topContacts.append(HTMLemail.replace('%data%', bio.contacts.email));
    this.$topContacts.append(HTMLtwitter.replace('%data%', bio.contacts.twitter));
    this.$topContacts.append(HTMLgithub.replace('%data%', bio.contacts.github));
    this.$topContacts.append(HTMLlocation.replace('%data%', bio.contacts.location));

    // Contacts at the bottom of the page.
    this.$footerContacts.append(HTMLmobile.replace('%data%', bio.contacts.mobile));
    this.$footerContacts.append(HTMLemail.replace('%data%', bio.contacts.email));
    this.$footerContacts.append(HTMLtwitter.replace('%data%', bio.contacts.twitter));
    this.$footerContacts.append(HTMLgithub.replace('%data%', bio.contacts.github));
    this.$footerContacts.append(HTMLlocation.replace('%data%', bio.contacts.location));
  },
  /**
   * Make bio.name to internationalized.
   * The last name will be all-uppercased, and the first name will be
   * capitalized.
   *
   * @return {string} new, modified name.
   */
  inName: function() {
    var newName = octopus.getBio().name;

    newName = newName.trim().split(' ');
    newName[0] = newName[0].slice(0, 1).toUpperCase() +
      newName[0].slice(1).toLowerCase();
    newName[1] = newName[1].toUpperCase();
    newName = newName.join(' ');

    return newName;
  }
};

/**
 * This is the View object for Education in MVO style.
 * @type {Object}
 */
var viewEducation = {
  init: function() {
    this.$education = $('#education');

    this.display();
  },
  /**
   * Displays values in the education section.
   * @return {undefined}
   */
  display: function() {
    var onlineCourses = octopus.getOnlineCourses();

    // Add a div, like a container, for each item.
    // Then, all the items are added inside the container.
    octopus.getSchools().forEach(function(school) {
      var schoolNameAndDegree;

      viewEducation.$education.append(HTMLschoolStart);

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
    if (onlineCourses.length > 0) {
      viewEducation.$education.append(HTMLonlineClasses);

      onlineCourses.forEach(function(course) {
        var onlineTitleAndSchool;

        // Add a div for each item, that holds all the related info.
        viewEducation.$education.append(HTMLschoolStart);

        // Online Course name followed by the school name.
        onlineTitleAndSchool = HTMLonlineTitle.replace('%data%', course.title) +
          HTMLonlineSchool.replace('%data%', course.school);

        $('.education-entry:last').append(onlineTitleAndSchool);
        $('.education-entry:last').append(HTMLonlineDates.replace('%data%', course.dates));
        $('.education-entry:last').append(HTMLonlineURL.replace('%data%', course.url));
      });
    }
  }
};

/**
 * This is the View object for Work in MVO style.
 * @type {Object}
 */
var viewWork = {
  init: function() {
    this.$workExperience = $('#workExperience');

    this.display();
  },
  /**
   * Displays values in the work section.
   * @return {undefined}
   */
  display: function() {
    octopus.getJobs().forEach(function(job) {
      var employerAndTitle;

      // Add a div for each item, that holds all the related info.
      viewWork.$workExperience.append(HTMLworkStart);

      // Employer name followed by the title.
      employerAndTitle = HTMLworkEmployer.replace('%data%', job.employer) +
        HTMLworkTitle.replace('%data%', job.title);

      $('.work-entry:last').append(employerAndTitle);
      $('.work-entry:last').append(HTMLworkDates.replace('%data%', job.dates));
      $('.work-entry:last').append(HTMLworkLocation.replace('%data%', job.location));
      $('.work-entry:last').append(HTMLworkDescription.replace('%data%', job.description));
    });
  }
};

/**
 * This is the View object for Projects in MVO style.
 * @type {Object}
 */
var viewProject = {
  init: function() {
    this.$projects = $('#projects');

    this.display();
  },
  /**
   * Displays values in the projects section.
   * @return {undefined}
   */
  display: function() {
    octopus.getProjects().forEach(function(project) {
      // Add a div for each item, that holds all the related info.
      viewProject.$projects.append(HTMLprojectStart);

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
  }
};

/**
 * This is the View object for the Google Map in MVO style.
 * @type {Object}
 */
var viewGoogleMap = {
  init: function() {
    this.$mapDiv = $('#mapDiv');

    this.render();
  },
  render: function() {
    // Add the google map to the page.
    this.$mapDiv.append(googleMap);
  }
};

octopus.init();
