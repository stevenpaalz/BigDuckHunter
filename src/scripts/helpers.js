export function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

export function getVelHor(difficulty) {
    let speedInt = 0;
    switch(difficulty) {
        case "easy":
            speedInt = 2;
            break;
        case "medium":
            speedInt = 3;
            break;
        case "hard":
            speedInt = 5;
            break;
    }
    let vel = getRndInteger(-speedInt, speedInt);
    while (vel === 0) {
        vel = getRndInteger(-speedInt, speedInt);
    }
    return vel;
}

export function getVelVert (difficulty) {
    let speedInt = 0;
    switch(difficulty) {
        case "easy":
            speedInt = 1;
            break;
        case "medium":
            speedInt = 2;
            break;
        case "hard":
            speedInt = 3;
            break;
    }

    let vel = getRndInteger(-speedInt, speedInt);
    while (vel === 0) {
        vel = getRndInteger(-speedInt, speedInt);
    }
    return vel;
}