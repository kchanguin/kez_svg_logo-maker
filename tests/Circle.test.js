//My Circle Shape
const Circle = require('../lib/circle.js');
test('renders accurately', () => {
    const shapeColor = "green";
    const shapeText = "OMG";
    const textColor = "white";
    const myCircle = new Circle(shapeColor, shapeText, textColor);
    expect(myCircle.render()).toBe(`<svg height="500" width="500" xmlns="http://www.w3.org/2000/svg">
        <circle cx="250" cy="250" r="250" fill="${shapeColor}"/>
        <text fill="${textColor}" font-size="75" x="172" y="250">${shapeText}</text>
    </svg>`)
});