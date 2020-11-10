function getAreaOfCircle(radius) {
    const area = Math.PI * Math.pow(radius, 2);
    return area;
}

function getCircumferenceOfCircle(radius) {
    const circumference = 2 * Math.PI * radius;
    return circumference;
}

function getAreaOfSquare(side) {
    const area = side * side;
    return area;
}

function getAreaOfTriangle(base, height) {
    const area = (base * height)/2;
    return area;
}

//To test them out, run the function inside a console.log so it will print out the result.
//The other option is to run the function directly in the Console tab of dev tools and look at the value that is returned.

console.log(`Area of circle: ${getAreaOfCircle(5)}`);
console.log(`Circumference of circle: ${getCircumferenceOfCircle(5)}`);
console.log(`Area of square: ${getAreaOfSquare(5)}`);
console.log(`Area of triangle: ${getAreaOfTriangle(10, 10)}`);
