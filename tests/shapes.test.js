const Triangle = require("../lib/triangle.js")
const Square = require("../lib/square.js")
const Circle = require("../lib/circle.js")


//ALL Shapes
//My Square Shape
test ('renders accurately', () => {
    const shapeColor = "green"
    const shapeText= "OMG"
    const textColor= "white"
    const shape = new Square(shapeColor,shapeText,textColor);
    expect(shape.render()).toBe(`<svg height="500" width="500" xmlns="http://www.w3.org/2000/svg">
        <rect width="500" height="500" fill="${shapeColor}"/>
        <text fill="${textColor}" font-size="75" x="172" y="250">${shapeText}</text>
        </svg>`)

});
//My Triangle shape
    test ('renders accurately', () => {
        
        const shapeColor = "green"
        const shapeText= "OMG"
        const textColor= "white"
        const myTriangle = new Triangle(shapeColor,shapeText,textColor);
        expect(myTriangle.render()).toBe(`<svg height="500" width="500" xmlns="http://www.w3.org/2000/svg">
        <polygon points="250,0 0,500 500,500" fill="${shapeColor}" />
        <text fill="${textColor}" font-size="75" x="172" y="250">${shapeText}</text>
     </svg>`)

    });

//My Circle Shape
    test ('renders accurately', () => {
        
        const shapeColor= "green"
        const shapeText= "OMG"
        const textColor= "white"
        const myCircle = new Circle(shapeColor,shapeText,textColor);
        expect(myCircle.render()).toBe(`<svg height="500" width="500" xmlns="http://www.w3.org/2000/svg">
        <circle cx="250" cy="250" r="250" fill="${shapeColor}"/>
        <text fill="${textColor}" font-size="75" x="172" y="250">${shapeText}</text>
        </svg>`)
    });