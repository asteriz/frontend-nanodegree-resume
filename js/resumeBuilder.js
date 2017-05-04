var bio = {
    "name": "James Bond",
    "role": "Secret Agent",
    "contacts": {
        "mobile": "0800 789 321",
        "email": "007@sis.gov.uk",
        "github": "none",
        "location": "London"
    },
    "welcomeMessage": "My name is Bond, James Bond",
    "skills": ["Spying", "Killing", "Kidding"],
    "biopic": "images/Fleming007impression.jpg",
    "display": function() {
        $('#header').prepend(HTMLheaderRole.replace("%data%", bio.role));
        $('#header').prepend(HTMLheaderName.replace("%data%", bio.name));
        $('#topContacts').append(HTMLmobile.replace("%data%", bio.contacts.mobile));
        $('#topContacts').append(HTMLemail.replace("%data%", bio.contacts.email));
        $('#topContacts').append(HTMLgithub.replace("%data%", bio.contacts.github));
        $('#topContacts').append(HTMLlocation.replace("%data%", bio.contacts.location));
        $('#header').append(HTMLbioPic.replace("%data%", bio.biopic));
        $('#header').append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
        $('#header').append(HTMLskillsStart);
        bio.skills.forEach(function(skill) {
             $('#skills').append(HTMLskills.replace("%data%", skill));
        });
    }
};

var education = {
    "schools": [
        {
            "name": "X School",
            "location": "Scotland",
            "degree": "Competent Agent",
            "majors": ["Intelligence"],
            "dates": "Dates: confidential",
            "url": "confidential"
        }
    ],
    "onlineCourses": [
        {
            "title": "Hack Programming",
            "school": "X School",
            "dates": "Dates: confidential",
            "url": "URL: confidential"
        }
    ],
    "display": function() {
        education.schools.forEach(function(school) {
            $('#education').append(HTMLschoolStart);
            $('.education-entry:last').append(HTMLschoolName.replace("%data%", school.name) + HTMLschoolDegree.replace("%data%", school.degree));
            $('.education-entry:last').append(HTMLschoolDates.replace("%data%", school.dates));
            $('.education-entry:last').append(HTMLschoolLocation.replace("%data%", school.location));
            school.majors.forEach(function(major) {
                $('.education-entry:last').append(HTMLschoolMajor.replace("%data%", major));
            });
        });
        $('#education').append(HTMLonlineClasses);
        education.onlineCourses.forEach(function(onlineCourse) {
            $('#education').append(HTMLschoolStart);
            $('.education-entry:last').append(HTMLonlineTitle.replace("%data%", onlineCourse.title) + HTMLonlineSchool.replace("%data%", onlineCourse.school));
            $('.education-entry:last').append(HTMLonlineDates.replace("%data%", onlineCourse.dates));
            $('.education-entry:last').append(HTMLonlineURL.replace("%data%", onlineCourse.url));
        });
    }
};

var work = {
    "jobs": [
        {
            "employer": "MI6",
            "title": "Number 007",
            "location": "London",
            "dates": "Dates: confidential",
            "description": "Residing in London but active internationally."
        }
    ],
    "display": function() {
        work.jobs.forEach(function(work) {
            $('#workExperience').append(HTMLworkStart);
            $('.work-entry:last').append(HTMLworkEmployer.replace("%data%", work.employer) + HTMLworkTitle.replace("%data%", work.title));
            $('.work-entry:last').append(HTMLworkDates.replace("%data%", work.dates));
            $('.work-entry:last').append(HTMLworkLocation.replace("%data%", work.location));
            $('.work-entry:last').append(HTMLworkDescription.replace("%data%", work.description));
        });
    }
};

var projects = {
    "projects": [
        {
            "title": "TomorrowNeverDies",
            "dates": "1997",
            "description": "Description: confidential",
            "images": ["images/tnd-publicity-33.jpg", "images/tnd-publicity-22.jpg"]
        },
        {
            "title": "GodenEye",
            "dates": "1995",
            "description": "Description: confidential",
            "images": ["images/GoldenEye_-_UK_cinema_poster.jpg", "images/GoldenEye-010.jpg"]
        }
    ],
    "display": function() {
        projects.projects.forEach(function(project) {
            $('#projects').append(HTMLprojectStart);
            $('.project-entry:last').append(HTMLprojectTitle.replace("%data%", project.title));
            $('.project-entry:last').append(HTMLprojectDates.replace("%data%", project.dates));
            $('.project-entry:last').append(HTMLprojectDescription.replace("%data%", project.description));
            project.images.forEach(function(image) {
                $('.project-entry:last').append(HTMLprojectImage.replace("%data%", image));
            });
        });
    }
};

bio.display();
education.display();
work.display();
projects.display();

$('#mapDiv').append(googleMap);
