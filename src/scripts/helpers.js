export function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

export function getVelHor(difficulty) {
    let speedInt = 0;
    switch(difficulty) {
        case "Easy":
            speedInt = 1;
            break;
        case "Medium":
            speedInt = 2;
            break;
        case "Hard":
            speedInt = 4;
            break;
    }
    let vel = getRndInteger(-speedInt, speedInt + 1);
    while (vel === 0) {
        vel = getRndInteger(-speedInt, speedInt + 1);
    }
    return vel;
}

export function getVelVert (difficulty) {
    let speedInt = 0;
    switch(difficulty) {
        case "Easy":
            speedInt = 1;
            break;
        case "Medium":
            speedInt = 2;
            break;
        case "Hard":
            speedInt = 3;
            break;
    }

    let vel = getRndInteger(-speedInt, speedInt + 1);
    while (vel === 0) {
        vel = getRndInteger(-speedInt, speedInt + 1);
    }
    return vel;
}

export function detectCollision(circ, rect) {
    // debugger
    let distX = Math.abs(circ.x - rect.x - (rect.width/2))
    let distY = Math.abs(circ.y - rect.y - (rect.height/2))
    if (distX > (rect.w / 2 + circ.r)) {
        return false;
    }
    if (distY > (rect.height / 2 + circ.radius)) {
        return false;
    }

    if (distX <= (rect.width / 2) && distY <= (rect.height / 2)) {
        return true;
    }

    var dx = distX - rect.width / 2;
    var dy = distY - rect.height / 2;
    return (dx * dx + dy * dy <= (circ.radius * circ.radius));
}