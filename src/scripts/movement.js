export function keyDownHandler(event) {
    switch (event.keyCode) {
        case 37:
            leftPressed = true;
            break;
        case 39:
            rightPressed = true;
            break;
        case 38:
            upPressed = true;
            break;
        case 40:
            downPressed = true;
            break;
    }
}

export function keyUpHandler(event) {
    switch (event.keyCode) {
        case 37:
            leftPressed = false;
            break;
        case 39:
            rightPressed = false;
            break;
        case 38:
            upPressed = false;
            break;
        case 40:
            downPressed = false;
            break;
    }
}