///*
//This is empty on purpose! Your code to build the resume will go here.
// */
//
//
//
////var formattedRole = HTMLheaderRole.replace()
//
//
//
//
//
//
//
//
////var awesomeThoughts = " I am bill and I am AWESOME!";
////var funThoughts = awesomeThoughts.replace("AWESOME", "fun");
////
////$('#main').append(funThoughts);
// 
//
//var name = "bill";
//
//var forMattedName = HTMLheaderName.replace("%data%", name);
//
//var role = "branch master";
//var forMattedRole = HTMLheaderRole.replace("%data%", role);
//
//
//
//$('#header').prepend(forMattedRole);
//$('#header').prepend(forMattedName);
//$('#workExperience').prepend(bio.name);
//
//
//
////console.log(awesomeThoughts);
////
////var email = "tuntunkimpo@naver.com";
////
////var newEmail = email.replace("naver", "gmail");
////
////console.log(email);
////console.log(newEmail);


var bio = {
    "name": "bill",
    "role": "tuntun branch master",
    "contact": {
        "mobile": "01049055202",
        "email": "tuntunkimpo@naver.com"
    },
    "skills" : [
        "awesomeness", "programming", "teaching", "JS"
    ],
    "welcomeMessage" : "Thanks",
    "bioPic": "images/fry.jpg"
};

//
//var education = {
//    "school": [
//        {
//            "name": "경희대학교",
//            "city": "Seoul"
//        },
//        {
//            "name": "명덕고등학교",
//            "city": "Seoul"
//        }
//    ]
//};
//
//var work = {
//    jobs: [
//        {
//            "title": "디지털헤럴드"
//        },
//        {
//            "title": "튼튼영어"
//        }
//    ]
//};
//var project = {
//    "project": [
//        {
//            "name": "tuntunReference"
//        }
//    ]
//};
// bio객체에 skills가 있는지 확인하고 있다면 ID가 header인 div에 
if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $('#skills').append(formattedSkill);
    
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $('#skills').append(formattedSkill);
    
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $('#skills').append(formattedSkill);
    
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $('#skills').append(formattedSkill);
}
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      

