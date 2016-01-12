/* JSON OBJECTS */

var bio = {
  'name': 'Gabriel Mojica',
  'role': 'Student',
  'contacts': {
    'mobile': '04 3529 xxxx',
    'email': 'niko.mojica@live.com',
    'github': 'github.com/gabriel2761',
    'location': 'Sydney, Australia'
  },
  'welcomeMessage': 'Welcome to my portfolio',
  'skills': ['Javascript', 'HTML5', 'CSS3', 'Sass', 'Bootstrap', 'JQuery', 'Git', 'Polymer', 'Php', 'Java', 'Bash'],
  'biopic': 'images/gabriel.jpg',
};

var education = {
  'schools': [{
    'name': 'Univesity of Technology, Sydney',
    'location': 'Sydney, Australia',
    'degree': 'Bachelour of Science in Information Technology, Diploma of Professional Practice',
    'majors': ['Enterprise Systems Development'],
    'dates': '2014 Febuary - present',
    'url': 'http://handbook.uts.edu.au/courses/c10345.html'
  }],
  'onlineCourses': [{
    'title': 'Front-End Developer Nanodegree',
    'school': 'Udacity',
    'date': '2016 January - present',
    'url': 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
  }]
};

var work = {
  'jobs': [{
    'employer': 'ParkTrent Properties Group',
    'title': 'Face-to-Face Promotions',
    'location': 'Sydney, Australia',
    'dates': '2012 September - 2012 December',
    'description': 'Handing out flyers in Sydney CBD to promote a real estate seminar',
    'url': 'http://parktrent.com.au/seminars/upcoming-seminars/'
  }],
};

var projects = {
  'projects': [{
    'title': 'Front-End Portfolio',
    'dates': '2016 January',
    'description': 'Create a page to feature web development projects',
    'image': ['https://placehold.it/60x60'],
    'url': 'https://github.com/gabriel2761/Udacity-Front-End-Project-1.git'
  }]
};


/* DISPLAY FUNCTIONS FOR JSON OBJECTS */


/**
 * @description Appends bio JSON data to index.html
 */
bio.display = function() {
  var name = HTMLheaderName.replace('%data%', this.name);
  var role = HTMLheaderRole.replace('%data%', this.role);

  var mobile = HTMLmobile.replace('%data%', this.contacts.mobile);
  var email = HTMLemail.replace('%data%', this.contacts.email);
  var github = HTMLgithub.replace('%data%', this.contacts.github);
  var location = HTMLlocation.replace('%data%', this.contacts.location);
  var biopic = HTMLbioPic.replace('%data%', this.biopic);
  var welcomeMessage = HTMLwelcomeMsg.replace('%data%', this.welcomeMessage);

  $('#header').prepend(name + role)
    .append(biopic)
    .append(welcomeMessage)
    .append(HTMLskillsStart);

  $('#topContacts').append(email)
    .append(github)
    .append(location);

  $('#footerContacts').append(email)
    .append(github)
    .append(location);

  this.skills.forEach(function(skill) {
    skill = HTMLskills.replace('%data%', skill);
    $('#skills').append(skill);
  });

};

/**
 * @description Appends education JSON data to index.html
 */
education.display = function() {
  this.schools.forEach(function(school) {
    var name = HTMLschoolName.replace('%data%', school.name).replace('#', school.url);
    var dates = HTMLschoolDates.replace('%data%', school.dates);
    var degree = HTMLschoolDegree.replace('%data%', school.degree);
    var location = HTMLschoolLocation.replace('%data%', school.location);

    $('#education').append(HTMLschoolStart);
    $('.education-entry:last').append(name + degree)
      .append(dates)
      .append(location);

    school.majors.forEach(function(major) {
      var subject = HTMLschoolMajor.replace('%data%', major);
      $('.education-entry:last').append(subject);
    });
  });

  if (this.onlineCourses.length > 0) {
    $('#education').append(HTMLonlineClasses);
    this.onlineCourses.forEach(function(course) {
      var title = HTMLonlineTitle.replace('%data%', course.title).replace('#', course.url);
      var school = HTMLonlineSchool.replace('%data%', course.school);
      var dates = HTMLonlineDates.replace('%data%', course.dates);
      var url = HTMLonlineURL.replace('#', course.url).replace('%data%', 'info');

      $('#education').append(HTMLschoolStart);
      $('.education-entry:last').append(title + school)
        .append(dates)
        .append(url);
    });
  }
};

/**
 * @description Appends work JSON data to index.html
 */
work.display = function() {
  this.jobs.forEach(function(job) {
    var employer = HTMLworkEmployer.replace('%data%', job.employer).replace('#', job.url);
    var title = HTMLworkTitle.replace('%data%', job.title);
    var dates = HTMLworkDates.replace('%data%', job.dates);
    var description = HTMLworkDescription.replace('%data%', job.description);
    var location = HTMLworkLocation.replace('%data%', job.location);

    $('#workExperience').append(HTMLworkStart);
    $('.work-entry:last').append(employer + title)
      .append(dates)
      .append(location)
      .append(description);
  });
};

/**
 * @description Appends project JSON data to index.html
 */
projects.display = function() {
  this.projects.forEach(function(project) {
    var title = HTMLprojectTitle.replace('%data%', project.title).replace('#', project.url);
    var dates = HTMLprojectDates.replace('%data%', project.dates);
    var description = HTMLprojectDescription.replace('%data%', project.description);
    var image = HTMLprojectImage.replace('%data%', project.image);

    $('#projects').append(HTMLprojectStart);
    $('.project-entry:last').append(title)
      .append(dates)
      .append(description)
      .append(image);
  });
};

/**
 * @description Appends a google map to index.html
 */
function mapDisplay() {
  $('#mapDiv').append(googleMap);
}

/* CALL JSON DISPLAY METHODS */

bio.display();
projects.display();
education.display();
work.display();
mapDisplay();
