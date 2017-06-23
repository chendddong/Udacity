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


////////////////////////////////////////// Working Code //////////////////////////////////////////////////////////
// var bio = {
//     "name" : "Peter Chen",
//     "role" : "Web Developer",
//     "contact_info" : ["9088017841",
//                       "pcchen@gmail.com",
//                       "twitter.com/peter_butter1",
//                       "github.com/chendddong",
//                       "dcyou.tech.blog",
//                       "Princeton, NJ, 08540"],
//     "pic_url" : "images/me.jpg",
//     "welcome_msg" : "Stay Hungry, Stay foolish",
//     "skills" : ["Java" , "Web development", "Algorithms", "Machine Learning", "Data Analysis", "Anomaly Detection"]
// }


// var HTMLheaderName = '<h1 id="name">%data%</h1>';
// var HTMLheaderRole = '<span>%data%</span><hr>';
// var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
// var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
// var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
// var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
// var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
// var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
// var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';
// var HTMLbioPic = '<img src="%data%" class="biopic">';
// var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';
// var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-column"></ul>';
// var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';



// var name = bio.name;
// var role = bio.role;
// var contact_mobile = bio.contact_info[0];
// var contact_email = bio.contact_info[1];
// var contact_twitter = bio.contact_info[2];
// var contact_github = bio.contact_info[3];
// var contact_blog = bio.contact_info[4];
// var contact_location = bio.contact_info[5];
// var picture = bio.pic_url;
// var welcome_msg = bio.welcome_msg;
// var skill_start = HTMLskillsStart;
// var skills = bio.skills;

// var formattedName = HTMLheaderName.replace("%data%",
// name);
// var formattedRole = HTMLheaderRole.replace("%data%",
// role);
// var formattedMobile = HTMLmobile.replace("%data%", contact_mobile);
// var formattedEmail = HTMLemail.replace("%data%", contact_email);
// var formattedTwitter = HTMLtwitter.replace("%data%", contact_twitter);
// var formattedGithub = HTMLgithub.replace("%data%", contact_github);
// var formattedBlog = HTMLblog.replace("%data%", contact_blog);
// var formattedLocation = HTMLlocation.replace("%data%", contact_location);
// var formattedPic = HTMLbioPic.replace("%data%",picture);
// var formattedWelcom_msg = HTMLwelcomeMsg.replace("%data%",welcome_msg);
// var formattedSkill_start = HTMLskillsStart;
// var formattedSkills = HTMLskills.replace("%data%",skills);


// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);

// $("#topContacts").append(formattedMobile);
// $("#topContacts").append(formattedEmail);
// $("#topContacts").append(formattedTwitter);
// $("#topContacts").append(formattedGithub);
// $("#topContacts").append(formattedBlog);
// $("#topContacts").append(formattedLocation);

// $("#header").append(formattedPic);
// $("#header").append(formattedWelcom_msg);
// $("#header").append(formattedSkill_start);
// $("#skills-h3").append(formattedSkills);
////////////////////////////////////////////////////////////////////////////////////////////////////////////




///////////////////////////////////////////////
// Four 4 Objects bio work project education //
///////////////////////////////////////////////

////////////////
// bio Object //
////////////////

var bio = {
    "name" : "Peter Chen",
    "role" : "Web Developer",
    "welcome_msg" : "Stay Hungry, Stay foolish",
    "pic_url" : "images/me.jpg",

    "contacts" : {
        "mobile" : "9088017841",
        "email" : "pcchen@gmail.com",
        "twitter" : "twitter.com/peter_butter1",
        "github" : "github.com/chendddong",
        "blog" : "dcyou.tech.blog",
        "location" : "Princeton, NJ, 08540"
    },

    "skills" : ["Java", "C", "Python", "Web development", "Data Structures & Algorithms", "Machine Learning", "Data Analysis", "Anomaly Detection"]

}


/////////////////
// Work Object //
/////////////////

var work = {

    "work":
    [
        {
            "employer" : "SUNY Albany",
            "title" : "Teaching Assistant",
            "dates" : "2016 Fall",
            "location" : "Albany",
            "description" : "\u2022 Taught students algorithms concepts;<br />\u2022 Designed questions and labs."
        },

        {
            "employer" : "Diwinet Technologies",
            "title" : "Developer (Intern)",
            "dates" : "2015 Summer",
            "location" : "Beijing",
            "description" : "\u2022 Assisted the software team by testing the device’s (Mr.Water) WIFI connection and improved code using VB to count link failures;<br /> \u2022 Participated the design and development of the Mr.Water’s monitoring website."
        },

        {
            "employer" : "China Central Television Business Channel",
            "title" : "Reporter And Editor",
            "dates" : "June 2012 - June 2015",
            "location" : "Beijing",
            "description" : "\u2022 Mainly responsible for the interviews, editing, and broadcast of technological news;<br /> \u2022 Wrote and edited many press releases with depth related to political, economic and cultural;<br /> \u2022 Participated in producing the documentary films."
        }
    ]

}

///////////////////////
// Education Object! //
///////////////////////

var education = {

    "schools": [{
            "school_name": "SUNY-Albany",
            "degree": "Master of Science",
            "dates": "2017-05-17",
            "location": "Albany, NY, 12222",
            "url" : "http://albany.edu",
            "major": ["CS", "Statistics"],

            "online-course":
            [
                {
                    "title" : "Machine Learning Specialization",
                    "school" : "University of Washington on Coursera",
                    "dates" : "2016 Fall - 2017 Winter",
                    "url" : "https://www.coursera.org/account/accomplishments/specialization/certificate/3LHXHNAQC4QK"
                },

                {
                    "title" : "Full Stack Web Developer Nanodegree",
                    "school" : "Udacity",
                    "dates" : "2017 Spring till now",
                    "url" : "https://github.com/chendddong/Udacity"
                },

                {
                    "title" : "Front End Development Certification",
                    "school" : "freeCodeCamp",
                    "dates" : "2017 Spring till now",
                    "url" : "https://www.freecodecamp.com/chendddong"
                },

                {
                    "title" : "A Self-taught Education",
                    "school" : "OSSU",
                    "dates" : "2017 Spring till now",
                    "url" : "https://github.com/chendddong/OSSU"
                }
            ]
        },

        {
            "school_name": "CUC",
            "degree": "BA",
            "dates": "2012-06-17",
            "location": "Beijing, China",
            "major": ["Journalism"],
            "online-course":
            [
                {
                    "title" : "Java Developer",
                    "school" : "Beida Jade Bird",
                    "dates" : "2015 Summer",
                    "url" : "http://www.beidaqingniao.org/index.html"
                }

            ]
        }

    ]
}

////////////////////
// Project Object //
////////////////////

var projects = {

    "projects":
    [
        {
            "title": "Page Rank",
            "dates": "2017 Winter",
            "description": "Implemented page rank algorithm by using the data set from wiki, which is utilized by Google Search",
            "images": ["images/197x148.gif", "images/197x148.gif"]
        },

        {
            "title": "AI.DJ",
            "dates": "2016 Spring",
            "description": "Recommend songs to users based on Users thumbs ups and downs",
            "images": ["images/197x148.gif", "images/197x148.gif"]
        },

        {
            "title": "DocHub",
            "dates": "2015 Winter",
            "description": "Designed, built, deployed an online web application called DocHub which is aimed to help patients and doctors schedule appointments 7x24.",
            "images": ["images/197x148.gif", "images/197x148.gif"]
        }
    ]
}


///////////////////////////////////////////////////////



/////////////////
// Bio Session //
/////////////////

///////////////////////
// Education Section //
///////////////////////

//////////////////////
// Working Session  //
//////////////////////

function displayWork() {
    $("#workExperience").append(HTMLworkStart);
    for (key in work.work){
        if (work.work.hasOwnProperty(key)) {
            var employerHTML = HTMLworkEmployer.replace("%data%", work.work[key].employer);
            $(".work-entry:last").append(employerHTML);

            var titleHTML = HTMLworkTitle.replace("%data%", work.work[key].title);
            $("a:last").append(titleHTML);

            var datesHTML = HTMLworkDates.replace("%data%", work.work[key].dates);
            $(".work-entry:last").append(datesHTML);

            var locationHTML = HTMLworkLocation.replace("%data%", work.work
                [key].location);
            $(".work-entry:last").append(locationHTML);

            var descriptionHTML = HTMLworkDescription.replace("%data%", work.work
                [key].description);
            $(".work-entry:last").append(descriptionHTML);
        }
    }

}
displayWork();


//////////////////////
// Projects section //
//////////////////////

projects.display = function() {
    $("#projects").append(HTMLprojectStart);
    for (key in projects.projects){
        if (projects.projects.hasOwnProperty(key)) {

            var titleHTML = HTMLprojectTitle.replace("%data%", projects.projects[key].title);
            $(".project-entry:last").append(titleHTML);

            var datesHTML = HTMLprojectDates.replace("%data%", projects.projects[key].dates);
            $(".project-entry:last").append(datesHTML);

            var descriptionHTML = HTMLprojectDescription.replace("%data%", projects.projects[key].description);
            $(".project-entry:last").append(descriptionHTML);

            if (projects.projects[key].images.length > 0) {
                for (image in projects.projects[key].images) {
                    var imagesHTML = HTMLprojectImage.replace("%data%",projects.projects
                        [key].images[image]);
                    $(".project-entry:last").append(imagesHTML);
                }
            }
        }
    }
}
projects.display();

/////////////////
// Map Section //
/////////////////

$("#mapDiv").append(googleMap);
// $(document).load(initializeMap());

