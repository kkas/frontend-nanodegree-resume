/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Cameron Pittman
*/


/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span>%data%</span><hr/>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';

/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x, y);
});



/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable

// Make sure the events are triggered after DOM is constructed.
$(function() {
  // Indicates the menu bar is shown (open).
  var MENU_BAR_OPEN = 'open';
  var MENU_SHOWN = 'shown';

  /**
   * Find the y-axis position of the element using
   * kword parameter.
   * @param  {string} kword keyword for the target element.
   * @return {Object} Y-axis position or undefined.
   */
  var findPointY = function(kword) {
    switch (kword) {
      case 'work':
        return $('#workExperience').offset().top;

      case 'projects':
        return $('#projects').offset().top;

      case 'education':
        return $('#education').offset().top;

      case 'map':
        return $('#map').offset().top;

      default:
        console.log('Could not find the element.');
    }
  };

  /**
   * Scroll the page to the target element.
   * @param  {event} event Event object that is passed to the handler.
   * @return {undefined}
   */
  var smoothScroll = function(event) {
    var pointY;

    // Nutralize the default click event of the element, <a>.
    event.preventDefault();

    // Find the y-axis point of the element you want to scroll to.
    pointY = findPointY($(this).attr('data-section-name'));

    // Hide menu bar before scrolling.
    hideMenuBar();

    // Scroll to the element within 1000ms.
    $('body').animate({scrollTop: pointY}, 1000);
  };

  /**
   * Toggle the class for displaying the menu bar.
   * @param  {event} event Event object that is passed to the handler.
   * @return {undefined}
   */
  var toggleMenuBar = function(event) {
    $('.nav-list').toggleClass(MENU_BAR_OPEN);
    $('.nav').toggleClass(MENU_SHOWN);
  };

  /**
   * Hide the menu bar by removing the class.
   * @param  {event} event Event object that is passed to the handler.
   * @return {undefined}
   */
  var hideMenuBar = function(event) {
    $('.nav-list').removeClass(MENU_BAR_OPEN);
    $('.nav').removeClass(MENU_SHOWN);
  };

  // Bind events to the elements.
  $('.nav-item-link').bind('click', smoothScroll);
  $('.hamburger-icon').bind('click', toggleMenuBar);
  $('#main').children('div').bind('click', hideMenuBar);
});
