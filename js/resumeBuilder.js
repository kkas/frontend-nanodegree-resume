(function(){
  'use strinct';

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
      this.map = undefined;
      this.currentInfoWindow = undefined;

      this.addInitialEvents();

      this.render();
    },
    render: function() {
      // Add the google map to the page.
      this.$mapDiv.append(googleMap);
    },
    addInitialEvents: function() {
      // Call initializeMap when the DOM is fully ready.
      $(document).ready(this.initializeMap);
    },
    /**
     * Initialize the Google Map. This function needs to be executed after
     * the full DOM constructions.
     * See the documentation below for more details.
     * https://developers.google.com/maps/documentation/javascript/reference
     * @return {[type]} [description]
     */
    initializeMap: function() {
      var locations;

      var mapOptions = {
        disableDefaultUI: true
      };

      /*
      For the map to be displayed, the googleMap var must be
      appended to #mapDiv in resumeBuilder.js.
      */
      viewGoogleMap.map = new google.maps.Map(document.querySelector('#map'), mapOptions);

      // Sets the boundaries of the map based on pin locations
      window.mapBounds = new google.maps.LatLngBounds();

      // locations is an array of location strings returned from locationFinder()
      locations = viewGoogleMap.locationFinder();

      // pinPoster(locations) creates pins on the map for each location in
      // the locations array
      viewGoogleMap.pinPoster(locations);
    },
    /**
     * pinPoster(locations) takes in the array of locations created by
     * locationFinder() and fires off Google place searches for each location
     * @param  {Array} locations  array that contains locations
     * @return {undefined}
     */
    pinPoster: function(locations) {
      // creates a Google place search service object. PlacesService does the work of
      // actually searching for location data.
      var service = new google.maps.places.PlacesService(viewGoogleMap.map);

      // Iterates through the array of locations, creates a search object for each location
      for (var place in locations) {

        // the search request object
        var request = {
          query: locations[place]
        };

        // Actually searches the Google Maps API for location data and runs the
        // callback function with the search results after each search.
        service.textSearch(request, viewGoogleMap.callback);
      }
    },
    /**
     * locationFinder() returns an array of every location string from the JSONs
      written for bio, education, and work.
     * @return {Array} locations
     */
    locationFinder: function() {
      // initializes an empty array
      var locations = [];

      // adds the single location property from bio to the locations array
      locations.push(bio.contacts.location);

      // iterates through school locations and appends each location to
      // the locations array
      for (var school in education.schools) {
        locations.push(education.schools[school].location);
      }

      // iterates through work locations and appends each location to
      // the locations array
      for (var job in work.jobs) {
        locations.push(work.jobs[job].location);
      }

      return locations;
    },
    /**
     * A callback function that will be triggered when the textSearch is
     * completed. Calls a function to create map a marker for the location.
     * TODO: add comments
     * @param  {[type]}   results [description]
     * @param  {[type]}   status  [description]
     * @return {undefined}
     */
    callback: function(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        viewGoogleMap.createMapMarker(results[0]);
      }
    },
    /**
     * createMapMarker(placeData) reads Google Places search results to create
     * map pins. placeData is the object returned from search results containing
     * information about a single location.
     * TODO: add comments
     * @param  {[type]} placeData [description]
     * @return {[type]}           [description]
     */
    createMapMarker: function(placeData) {
      // The next lines save location data from the search result object to local variables
      var lat = placeData.geometry.location.lat();  // latitude from the place service
      var lon = placeData.geometry.location.lng();  // longitude from the place service
      var name = placeData.formatted_address;   // name of the place from the place service
      var bounds = window.mapBounds;            // current boundaries of the map window

      // marker is an object with additional data about the pin for a single location
      var marker = new google.maps.Marker({
        map: viewGoogleMap.map,
        position: placeData.geometry.location,
        title: name
      });

      // infoWindows are the little helper windows that open when you click
      // or hover over a pin on a map. They usually contain more information
      // about a location.
      var infoWindow = new google.maps.InfoWindow({
        content: name
      });

      // Add clicking event to the event listener. To make only one infoWindow can be
      // open at a time, the newly created infoWindow is stored in currentInfoWindow,
      // so that every time clicking event get fired, I can close the infoWindow before I
      // open the new one.
      google.maps.event.addListener(marker, 'click', function() {
        if (viewGoogleMap.currentInfoWindow !== undefined) {
          viewGoogleMap.currentInfoWindow.close();
        }

        infoWindow.open(viewGoogleMap.map, marker);

        viewGoogleMap.currentInfoWindow = infoWindow;
      });

      // this is where the pin actually gets added to the map.
      // bounds.extend() takes in a map location object
      bounds.extend(new google.maps.LatLng(lat, lon));
      // fit the map to the new marker
      viewGoogleMap.map.fitBounds(bounds);
      // center the map
      viewGoogleMap.map.setCenter(bounds.getCenter());
    }
  };

  octopus.init();
})();
