

var bio = {
	"name": "Gabriel",
	"role": "Student",
	"contacts" : {
		"mobile": "04 3529 xxxx",
		"email": "niko.mojica@live.com",
		"github": "github.com/gabriel2761",
		"location": "Sydney, Australia"
	},
	"welcomeMessage": "Welcome to my portfolio",
	"skills": ["Javascript", "HTML5", "CSS3", "Sass", "Git", "Java", "Bash"],
	"biopic": "What is this?",
	"display": function() {}
};

var work = {
	"jobs": [
		{
			"employer": "ParkTrent Properties Group",
			"title": "Face-to-Face Promotions",
			"location": "Sydney, Australia",
			"dates": "2012-9-10",
			"description": "Promoting a real estate seminar"
		}
	]
};

var education = {
	"schools":
		[
			{
				"name": "Univesity of Technology, Sydney",
				"location": "Sydney, Australia",
				"degree": "Bachelour of Science in Information Technology, Diploma of Professional Practice",
				"Majors": ["Enterprise Systems Development"],
				"dates": "2014-28-3",
				"url": "http://handbook.uts.edu.au/courses/c10345.html"
		}
	],
	"onlineCourses":
	[
		{
			"title": "Front-end Developer",
			"school": "Udacity",
			"date": "2016-1-5",
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Front-end Portfolio",
			"dates": "2016-1-7",
			"description": "Create a page to feature web development projects",
			"images": ["http://placehold.it/350x150"],
			"display": function(){}
		}
	]
};


var name = HTMLheaderName.replace("%data%", bio.name);
var role = HTMLheaderRole.replace("%data%", bio.role);

$("#header").append(name);
$("#header").append(role);


if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	bio.skills.forEach(function(skill) {
		$("#skills").append(HTMLskills.replace("%data%", skill));
	});
}

if (work.jobs.length > 0) {
	$("#workExperience").append(HTMLworkStart);
	work.jobs.forEach(function(job) {
		$("")
	});
}










