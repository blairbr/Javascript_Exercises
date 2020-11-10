(function() {
    let facingForward = true;
    let position = 0;

    function moveForward(distance) {
        if (facingForward) {
            position = position + distance;
        } else position = position - distance;
    } 
    
    function moveBackward(distance) {
        if (facingForward) {
            position = position - distance;
        } else position = position + distance;
    }

    function turnAround() {
        facingForward = !facingForward;
    }

    function printLocation() {
        console.log(position);
    }

moveForward(5);
moveBackward(3);
printLocation();
turnAround();
moveForward(10);
printLocation();
turnAround();
moveForward(2);
printLocation();

})()