/* JSON OBJECTS */

var bio = {
  "name": "Gabriel Mojica",
  "role": "Student",
  "contacts": {
    "mobile": "04 3529 xxxx",
    "email": "niko.mojica@live.com",
    "github": "github.com/gabriel2761",
    "location": "Sydney, Australia"
  },
  "welcomeMessage": "Welcome to my portfolio",
  "skills": ["Javascript", "HTML5", "CSS3", "Sass", "Bootstrap", "JQuery", "Git", "Polymer", "Php", "Java", "Bash"],
  "biopic": "../images/gabriel.jpg",
};

var education = {
  "schools": [{
    "name": "Univesity of Technology, Sydney",
    "location": "Sydney, Australia",
    "degree": "Bachelour of Science in Information Technology, Diploma of Professional Practice",
    "majors": ["Enterprise Systems Development"],
    "dates": "2014-28-3 - present",
    "url": "http://handbook.uts.edu.au/courses/c10345.html"
  }],
  "onlineCourses": [{
    "title": "Front-End Developer Nanodegree",
    "school": "Udacity",
    "dates": "2016-1-5 - present",
    "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
  }]
};

var work = {
  "jobs": [{
    "employer": "ParkTrent Properties Group",
    "title": "Face-to-Face Promotions",
    "location": "Sydney, Australia",
    "dates": "2012-9-10",
    "description": "Promoting a real estate seminar"
  }],
};

var projects = {
  "projects": [{
    "title": "Front-end Portfolio",
    "dates": "2016-1-7",
    "description": "Create a page to feature web development projects",
    "image": ["http://placehold.it/60x60"]
  }]
};

/* DISPLAY FUNCTIONS FOR JSON OBJECTS */

bio.display = function() {
  var name = HTMLheaderName.replace("%data%", this.name);
  var role = HTMLheaderRole.replace("%data%", this.role);

	var mobile = HTMLmobile.replace("%data%", this.contacts.mobile);
	var email = HTMLemail.replace("%data%", this.contacts.email);
	var github = HTMLgithub.replace("%data%", this.contacts.github);
	var location = HTMLlocation.replace("%data%", this.contacts.location);
  var biopic = HTMLbioPic.replace("%data%", this.biopic);
  var welcomeMessage = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);

  $("#header").prepend(name + role);
	$("#topContacts").append(email);
	$("#topContacts").append(github);
	$("#topContacts").append(location);

  $("#header").append(biopic);
  $("#header").append(welcomeMessage);
  $("#header").append(HTMLskillsStart);

  this.skills.forEach(function(skill) {
    skill = HTMLskills.replace("%data%", skill);
    $(header).append(skill);
  });

};

education.display = function() {
  this.schools.forEach(function(school) {
    var name = HTMLschoolName.replace("%data%", school.name).replace("#", school.url);
    var dates = HTMLschoolDates.replace("%data%", school.dates);
    var degree = HTMLschoolDegree.replace("%data%", school.degree);
    var location = HTMLschoolLocation.replace("%data%", school.location);

    $("#education").append(HTMLschoolStart);
    $(".education-entry:last").append(name + degree);
    $(".education-entry:last").append(dates);
    $(".education-entry:last").append(location);

    school.majors.forEach(function(major) {
      var subject = HTMLschoolMajor.replace("%data%", major);
      $(".education-entry:last").append(subject);
    });
  });

	if (this.onlineCourses.length > 0) {
		$("#education").append(HTMLonlineClasses);
	  this.onlineCourses.forEach(function(course) {
	    var title = HTMLonlineTitle.replace("%data%", course.title);
	    var school = HTMLonlineSchool.replace("%data%", course.school);
	    var dates = HTMLonlineDates.replace("%data%", course.dates);
	    var url = HTMLonlineURL.replace("#", course.url).replace("%data%", "info");

	    $("#education").append(HTMLschoolStart);
	    $(".education-entry:last").append(title + school);
	    $(".education-entry:last").append(dates);
	    $(".education-entry:last").append(url);
	  });
	}
};

work.display = function() {
  this.jobs.forEach(function(job) {
    var employer = HTMLworkEmployer.replace("%data%", job.employer);
    var title = HTMLworkTitle.replace("%data%", job.title);
    var dates = HTMLworkDates.replace("%data%", job.dates);
    var description = HTMLworkDescription.replace("%data%", job.description);
    var location = HTMLworkLocation.replace("%data%", job.location);

    $("#workExperience").append(HTMLworkStart);
    $(".work-entry:last").append(employer + title);
    $(".work-entry:last").append(dates);
    $(".work-entry:last").append(location);
    $(".work-entry:last").append(description);
  });
};

projects.display = function() {
  this.projects.forEach(function(project) {
    var title = HTMLprojectTitle.replace("%data%", project.title);
    var dates = HTMLprojectDates.replace("%data%", project.dates);
    var description = HTMLprojectDescription.replace("%data%", project.description);
    var image = HTMLprojectImage.replace("%data%", project.image);

    $("#projects").append(HTMLprojectStart);
    $(".project-entry:last").append(title);
    $(".project-entry:last").append(dates);
    $(".project-entry:last").append(description);
    $(".project-entry:last").append(image);
  });
};

$("#mapDiv").append(googleMap);

/* CALL JSON DISPLAY METHODS */

bio.display();
projects.display();
education.display();
work.display();
