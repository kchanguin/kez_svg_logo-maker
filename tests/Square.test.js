//My Square Shape
const Square = require('../lib/square.js');
test('renders accurately', () => {

    const shapeColor = "green";
    const shapeText = "OMG";
    const textColor = "white";
    const mySquare = new Square(shapeColor, shapeText, textColor);
    expect(mySquare.render()).toBe(`<svg height="500" width="500" xmlns="http://www.w3.org/2000/svg">
        <rect width="500" height="500" fill="${this.color}"/>
        <text fill="${textColor}" font-size="75" x="172" y="250">${shapeText}</text>
    </svg>`)
});