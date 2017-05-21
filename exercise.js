// Lesson3 append

var name = "bill";

var forMattedName = HTMLheaderName.replace("%data%", name);

var role = "branch master";
var forMattedRole = HTMLheaderRole.replace("%data%", role);

$('#header').prepend(forMattedRole);
$('#header').prepend(forMattedName);

console.log(awesomeThoughts);






// Lesson3 12 increase the value of the last number [0, 0, 7] -> [0 ,0 ,8] 
 
var sampleArray = [0,0,7];

function incrementLastArrayElement(_array)  {
    var newArray = [];
    newArray = _array.slice(0);
    var lastNumber = newArray.pop();
    newArray.push(lastNumber + 1);
    return newArray;
}

conslole.log(incrementLastArrayElement(sampleArray));


// Lesson3 13 "AlbERt EINstEiN" -> "Albert EINSTEIN".
// answer 1( by my self )
var name = "AlbERt EINstEiN";

function nameChanger(oldName){
    var finalName = oldName;
    
    var newArray = [];
    var newArray2 = [];
    
    newArray = finalName.slice(0, 6);
    newArray = newArray.toLowerCase();
    newArray = newArray.slice(1, 6);
    newArray = "A" + newArray;
    
    newArray2 = finalName.slice(7, 15);
    newArray2 = newArray2.toUpperCase();    
    
    finalName = newArray + " " + newArray2;
    
    return finalName;
}

console.log(nameChanger(name));

// answer 2 ( Udacity solved ) 
var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    var names = oldName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    return finalName;
}

console.log(nameChanger(name));

// Lesson3 Object

var skills = ["awesomeness", "programming", "teaching", "JS"];

var bio = {
    "name" : "James",
    "age" : 32,
    "skills" : skills
};

$("#main").append(bio.name);

// Lesson3 Biography Quiz  , how to use array and jquery .append or prepend
var skills = ["awesomeness", "programming", "teaching", "JS"];

var bio = {
    "name" : "bill",
    "role" : 32,
    "contactinfo" : 010-4905-5202,
    "pictureURL" : "https://accounts.google.com/SignOutOptions?hl=ko&continue=https://www.google.co.kr/_/chrome/newtab%3Fei%3DPTUeWZX-L4qd0gSChrv4Ag%26espv%3D2%26yv%3D2",
    "skills" : skills,
    "welcomeMessage" : "Thanks"
};

$("#workExperience").prepend(bio.name);
$("#workExperience").append(bio.role);
$("#workExperience").append(bio.contactinfo);

// Lesson3 JSON

var education = {
 "schools": [ //array
     { //object 0
        "cities": "bill",
        "major": ["fineArt"],
        "minors": "no", 
        "graduationyears": "2011"
     },
     { //object 2
        "cities": "bill",
        "major": ["fineArt"],
        "minors": "no", 
        "graduationyears": "2011"
     }
 ]
}

// Lesson4 Protecting the Resume
//

var charEscape = function(_html) {
    var newHTML = _html;

    newHTML = _html.replace(/</g, "&lt;");
    newHTML = newHTML.replace(/>/g, "&gt;");

    return newHTML;
};



//Lesson5 for loops

for (var i=0; i<9; i++){
    console.log(i);
}




















