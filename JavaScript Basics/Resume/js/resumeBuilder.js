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


/*

Resume Sections Requirements:

work
work contains an array of jobs. Each object in the jobs array should contain an employer, title, location, dates worked and description strings.

projects
projects contains an array of projects. Each object in the projects array should contain title, dates and description strings, and an images array with URL strings for project images.

bio
bio contains name, role, welcomeMessage, and biopic strings, contacts object and
skills array of skill strings. The contacts object should contain a mobile number, email address, gitHub user name, twitter handle and location. The twitter property is optional.

education
education contains an array of schools. Each object in the schools array contains name, location, degree dates and URL strings, and majors array of major strings.

education also contains an onlineCourses array. Each object in the onlineCourses array should contain a title, school, dates and URL strings.

*/


////////////////
// bio Object //
////////////////

var bio = {
    "name" : "Peter Chen",
    "role" : "Web Developer",
    "welcome_msg" : "Stay Hungry, Stay foolish",
    "pic_url" : "images/me.jpg", 
       
    "contact_info" : {
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
            "description" : "Taught students algorithms concepts; Design questions and labs."
        },

        {
            "employer" : "Diwinet Technologies",
            "title" : "Developer (Intern)",
            "dates" : "2015 Summer",
            "location" : "Beijing",
            "description" : "Assisted the software team by testing the device’s (Mr.Water) WIFI connection and improved code using VB to count link failures;Participated the design and development of the Mr.Water’s monitoring website."
        },

        {
            "employer" : "China Central Television Business Channel",
            "title" : "Reporter And Editor",
            "dates" : "June 2012, June 2015",
            "location" : "Beijing",
            "description" : "Mainly responsible for the interviews, editing, and broadcast of technological news; Wrote and edited many press releases with depth related to political, economic and cultural; Participated in producing the documentary films."
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




var project = {

    "projects":
    [
        {
            "title": "Page_Rank",
            "dates": "2017 Winter",
            "description": "Implemented page rank algorithm by using the data set from wiki, which is utilized by Google Search",
            "image": "images/project_2"
        },

        {
            "title": "AI.DJ",
            "dates": "2016 Spring",
            "description": "Recommend songs to users based on Users thumbs ups and downs",
            "image": ["images/project_1"]
        },

        {
            "title": "DocHub",
            "dates": "2015 Winter",
            "description": "Designed, built, deployed an online web application called DocHub which is aimed to help patients and doctors schedule appointments 7x24.",
            "image": ["images/project_2"]
        }
    ]
}