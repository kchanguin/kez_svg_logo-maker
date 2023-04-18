//My Triangle Shape

const Triangle = require('../lib/triangle.js');
test('renders accurately', () => {

    const shapeColor = "green";
    const shapeText = "OMG";
    const textColor = "white";
    const myTriangle = new Triangle(shapeColor, shapeText, textColor);
    expect(myTriangle.render()).toBe(`<svg height="500" width="500" xmlns="http://www.w3.org/2000/svg">
    <polygon points="250,0 0,500 500,500" fill="${this.color}" />
        <text fill="${textColor}" font-size="75" x="172" y="250">${shapeText}</text>
    </svg>`)
});