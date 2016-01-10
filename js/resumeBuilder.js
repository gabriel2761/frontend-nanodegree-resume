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
  "biopic": "What is this?",
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
    "title": "Front-end Developer",
    "school": "Udacity",
    "dates": "2016-1-5 - present",
    "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
  }],
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

  $("#header").append(name);
  $("#header").append(role);
};

education.display = function() {
  this.schools.forEach(function(school) {
    var name = HTMLschoolName.replace("%data%", school.name);
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

	this.onlineCourses.forEach(function(course) {
		var title = HTMLonlineTitle.replace("%data%", course.title);
		var school = HTMLonlineSchool.replace("%data%", course.school);
		var dates = HTMLonlineDates.replace("%data%", course.dates);
		var url = HTMLonlineURL.replace("%data%", course.url);

		$("#education").append(HTMLonlineClasses);
		$("#education").append(title + school);
		$("#education").append(dates);
		$("#education").append(url);

	});
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
    var date = HTMLprojectDates.replace("%data%", project.dates);
    var description = HTMLprojectDescription.replace("%data%", project.description);
    var image = HTMLprojectImage.replace("%data%", project.image);

    $("#projects").append(HTMLprojectStart);
    $(".project-entry").append(title);
    $(".project-entry").append(date);
    $(".project-entry").append(description);
    $(".project-entry").append(image);
  });
};

$("#mapDiv").append(googleMap);

/* CALL JSON DISPLAY METHODS */

bio.display();
projects.display();
education.display();
work.display();
