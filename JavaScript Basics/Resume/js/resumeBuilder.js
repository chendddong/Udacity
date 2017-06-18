/*
This is empty on purpose! Your code to build the resume will go here.
 */
// var name = "Peter";
// var awesomeToughts = "I am " + name + " and I am awesome";
// // .replace([old],[new]);
// var funToughts = awesomeToughts.replace("awesome","fun")
// console.log(funToughts);
// console.log(awesomeToughts);
// $("#main").append(funToughts);
// s = s.slice(1);
// s = s.replace("u","U");
//
var bio = {
    "name" : "Peter Chen",
    "role" : "Web Developer",
    "contact_info" : ["9088017841",
                      "pcchen@gmail.com",
                      "twitter.com/peter_butter1",
                      "github.com/chendddong",
                      "dcyou.tech.blog",
                      "Princeton, NJ, 08540"],
    "pic_url" : "images/me.jpg",
    "welcome_msg" : "Stay Hungry, Stay foolish",
    "skills" : ["Java" , "Web development", "Algorithms", "Machine Learning", "Data Analysis", "Anomaly Detection"]
}

// var work = {
//     "employer" : "SUNY Albany",
//     "title" : "Teaching Assistant",
//     "dates" : "2016 Fall",
//     "location" : "Albany",
//     "description" : "Explained classic algorithms concepts to students."
// }

var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span>%data%</span><hr>';
var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';
var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';
var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-column"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

// var HTMLworkStart = '<div class="work-entry"></div>';
// var HTMLworkEmployer = '<a href="#">%data%';
// var HTMLworkTitle = ' - %data%</a>';
// var HTMLworkDates = '<div class="date-text">%data%</div>';
// var HTMLworkLocation = '<div class="location-text">%data%</div>';
// var HTMLworkDescription = '<p><br>%data%</p>';

var name = bio.name;
var role = bio.role;
var contact_mobile = bio.contact_info[0];
var contact_email = bio.contact_info[1];
var contact_twitter = bio.contact_info[2];
var contact_github = bio.contact_info[3];
var contact_blog = bio.contact_info[4];
var contact_location = bio.contact_info[5];
var picture = bio.pic_url;
var welcome_msg = bio.welcome_msg;
var skill_start = HTMLskillsStart;
var skills = bio.skills;

// var employer = work.employer;
// var title = work.title;
// var dates = work.dates;
// var location = work.location;
// var description = work.description;
// var workStart = HTMLworkStart;



var formattedName = HTMLheaderName.replace("%data%",
name);
var formattedRole = HTMLheaderRole.replace("%data%",
role);
var formattedMobile = HTMLmobile.replace("%data%", contact_mobile);
var formattedEmail = HTMLemail.replace("%data%", contact_email);
var formattedTwitter = HTMLtwitter.replace("%data%", contact_twitter);
var formattedGithub = HTMLgithub.replace("%data%", contact_github);
var formattedBlog = HTMLblog.replace("%data%", contact_blog);
var formattedLocation = HTMLlocation.replace("%data%", contact_location);
var formattedPic = HTMLbioPic.replace("%data%",picture);
var formattedWelcom_msg = HTMLwelcomeMsg.replace("%data%",welcome_msg);
var formattedSkill_start = HTMLskillsStart;
var formattedSkills = HTMLskills.replace("%data%",skills);

// var formattedWorkStart = HTMLworkStart;
// var formattedEmployer = HTMLworkEmployer.replace("%data%", employer);
// var formattedTitle = HTMLworkTitle.replace("%data%", title);
// var formattedDates = HTMLworkDates.replace("%data%", dates);
// var formattedWorkLocation = HTMLworkLocation.replace("%data%", location);
// var formattedDescription = HTMLworkDescription.replace("%data%", description);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedBlog);
$("#topContacts").append(formattedLocation);

$("#header").append(formattedPic);
$("#header").append(formattedWelcom_msg);
$("#header").append(formattedSkill_start);
$("#skills-h3").append(formattedSkills);

// $("#workExperience").append(formattedWorkStart);
// // $("#workExperience").append(formattedEmployer);
// // $("#workExperience").append(formattedTitle);
// $("#workExperience").append(formattedDates);
// $("#workExperience").append(formattedWorkLocation);
// $("#workExperience").append(formattedDescription);





// var education = {
//     "school_name" : "SUNY-Albany",
//     "degree" : "Master of Science",
//     "dates" : "2017-05-17",
//     "location" : "Albany, NY, 12222",
//     "major" : "Computer Science"
// }

// var HTMLschoolStart = '<div class="education-entry"></div>';
// var HTMLschoolName = '<a href="#">%data%';
// var HTMLschoolDegree = ' -- %data%</a>';
// var HTMLschoolDates = '<div class="date-text">%data%</div>';
// var HTMLschoolLocation = '<div class="location-text">%data%</div>';
// var HTMLschoolMajor = '<em><br>Major: %data%</em>';

// var school_name = education.school_name;
// var degree = education.degree;
// var ed_dates = education.dates;
// var ed_location = education.location;
// var major = education.major;
