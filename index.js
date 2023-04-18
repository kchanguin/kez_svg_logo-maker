const fs = require('fs');
const inquirer = require('inquirer');
const {Circle, Square, Triangle} = require('.lib/shapes');


// circle class extends shape class and inherits text, textColor, and shapeColor



//Defines array of 'questions using the 'inquirer' library with the following questions.

const questions = [

    {
      type: "input",
      name: "text",
      message: "TEXT: Enter up to 'three(3)' characters:"

    },

    {
        type: "input",
        name: "text-color",
        message: "TEXT COLOR: Enter a color keyword:",
    },

    {
        type: "input",
        name: "shape",
        message: "SHAPE COLOR: Enter a color keyword",
    },

    {

        type: "list",
        name: "pixel-image",
        message: "CHOOSE: any shape you like",
        choices: ['Circle', 'Square', 'Triangle'],
    },
];

//Create a function to write data into a file
function writeToFile(fileName, data) {
    console.log("Writing [" + data +  "]  to file [" + fileName + "]" )
    fs.writeFile(fileName, data, function (err)  {
   if (err) {
    return console.log(err);
   }
   console.log("Awesome! You just generate a logo.SVG!");

});

}

async function init () {
console.log("now starting init");
var svgString = "";
var svg_file = "logo.svg";


//prompt the user for answers
const answer = await inquirer.prompt(questions);

//user text

var thisUser_text = "";
if (answer.text.length > 0 && answer.text.length < 4) {
 //1-3 characters for a valid entry
 thisUser_text = answer.text;
}else{
  console.log('Text is unable to function, please try again. NOTE: Characters must be 1-3 letters only ');
 return;

}
console.log("User text: [" + user_text + "]");
//user font color
thisUser_font_color = answer["text-color"];
console.log("User font color: ["+ user_font_color +"]");

//user shape color
thisUser_shape_color = answer.shape;
console.log('User Shape color : ["+ user_shape_color +"]');

//user shape type
thisUser_shape_type = answer["pixel-image"];
console.log('User entered shape = ["+ user_shape_type+"]');

//user shape
var thisUser_shape;
if(thisUser_shape_type === "Square" || thisUser_shape_type === "square") {
    thisUser_shape = Square();
    console.log("This user selected the shape: Square");

}
else if (thisUser_shape_type === "Triangle"  || thisUser_shape_type === "triangle") {
thisUser_shape = Triangle();
console.log('This user has selected the shape: Triangle');
}

 else if (thisUser_shape_type === "Circle"  || thisUser_shape_type === "triangle") {
    thisUser_shape = Circle();
    console.log('This user has selected the shape: Circle');
    }
    else {
        console.log("Shape unresponsive, please try again!");
    }
    thisUser_shape.setColor(thisUser_shape_color);

    //Create a new SVG 

    var SVG = SVG();
    SVG.setTextElement(thisUser_text, thisUser_font_color);
    SVG.setShapeElement(thisUser_shape);
    SVGString = SVG.render();

    //Print shape to log
    console.log("")



    writeToFile(SVG_file, SVGString);



//ask for W3 measurments for  square, triangle circle;






}






