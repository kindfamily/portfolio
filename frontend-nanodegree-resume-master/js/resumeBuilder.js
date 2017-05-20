/*
This is empty on purpose! Your code to build the resume will go here.
 */



//var formattedRole = HTMLheaderRole.replace()








//var awesomeThoughts = " I am bill and I am AWESOME!";
//var funThoughts = awesomeThoughts.replace("AWESOME", "fun");
//
//$('#main').append(funThoughts);

var forMattedName = HTMLheaderName.replace("%data%", name);

var role = "branch master";
var forMattedRole = HTMLheaderRole.replace("%data%", role);

$('#header').prepend(forMattedRole);
$('#header').prepend(forMattedName);



//console.log(awesomeThoughts);
//
//var email = "tuntunkimpo@naver.com";
//
//var newEmail = email.replace("naver", "gmail");
//
//console.log(email);
//console.log(newEmail);
