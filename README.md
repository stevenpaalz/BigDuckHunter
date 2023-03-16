# BigDuckHunter

[Big Duck Hunter](https://stevenpaalz.github.io/BigDuckHunter/) is a browser-based game that allows a user to play as a hunter attempting to shoot ducks. The user, however, does not want to shoot other types of birds. The user controls the displayed cross hair to aim and shoot at ducks. The user is awarded points for each duck they shoot. However, if a user shoots any bird besides a duck, the user loses the game.

The user is given 30 seconds to shoot as many ducks as they can without shooting other birds. The game also features the ability for the user to change the difficulty of the game, which changes the speed and quantity of birds. The user's score and a timer are displayed to the user during gameplay. Additionally, sound effects include background music, gun shot sounds, and duck quacks to signal successful shots. Finally, the game also includes a two player mode to compete against another user.

![Game Display](./assets/game_display_readme.png)


## Wireframe

![Wireframe](./assets/wireframe.png)

## Controls

![Controls](./assets/controls_readme.png)

## Functionality

The gameplay uses canvas to animate the various birds and trees displayed in the canvas area. Birds irds are generated to have random spawn locations, speeds, and periodic changes in direction. The speed and quantity of birds is dependent on the selected difficulty.
### Bird Generation:
```js    
static generateDucks(difficulty, game) {
    let ducks = []
    let numDucks = 15;
    switch(difficulty) {
        case "Medium":
            numDucks = 10;
            break;
        case "Hard":
            numDucks = 5;
            break;
    }
    for (let i = 0; i < numDucks; i ++) {
        ducks.push(new Duck(difficulty, game))
    }
    return ducks;
}

static respawn(difficulty, game) {
    let newDuck = new Duck(difficulty, game);
    let i = getRndInteger(0, 2)
    if (i===0) {newDuck.x = (-newDuck.width/2)}
    else {newDuck.x = canvas.width}
    return newDuck;
}
```

Bird sprites were used plus animation in canvas to give birds the appearance of flying. Additionally, trees were animated in each animation cycle to give the trees the appearance of being in front of birds and serving as obstacles in the game.
### Animation Loop:
```js
animate() {
    if (this.checkGameOver()) {return true;}
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.frames += 1;
    for (let i = 0; i < this.ducks.length; i++) {
        this.ducks[i].update();
    }
    for (let i = 0; i < this.otherBirds.length; i++) {
        this.otherBirds[i].update();
    }
    for (let i = 0; i < this.trees.length; i++) {
        this.trees[i].draw();
    }
    this.crosshair.move();
    this.drawShots();
    const scoreDisplay = document.getElementById("score-display");
    scoreDisplay.innerText = this.score.toLocaleString('en-US', {
        minimumIntegerDigits: 2
        });
    requestAnimationFrame(this.animate.bind(this));
}
```

The user is able to maneuver the crosshair around the screen using arrow keys. Pressing the space bar generates a shot. When a shot is fired, the game detects first if an obstacle(tree) was hit, then if a different bird was hit, and finally if a duck was hit.
### Shot :
```js
fire() {
    this.framesRemaining = 20;
    const sound = document.getElementById('sound');
    if (sound.dataset.muted === "false") {
        const gunSound = new Audio();
        gunSound.src = "../BigDuckHunter/assets/gun_shot.mp3";
        gunSound.play();
    }
    this.game.currentShots.push(this);
    if (!this.treeCollisions()) {
        this.otherBirdCollisions();
        if (!this.game.gameLost) {
            this.duckCollisions();
        }
    }
}
```

Collision detection logic is included to determine if a shot hits something in the game. This required computation using the X, Y coordinate grid of the canvas area to determine the distance between objects in the game.
### Collision Loop:
```js
function detectCollision(circ, rect) {
    let distX = Math.abs(circ.x - rect.x - (rect.width/2));
    let distY = Math.abs(circ.y - rect.y - (rect.height/2));
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
```

## Technologies, Libraries, and APIs

- The Canvas API to render gameplay area
- webpack to bundle and transpile the source JavaScript code
- npm to manage project dependencies

## Implementation Timeline

**Friday Afternoon & Weekend**
Set up project, including getting web pack up and running. Build canvas for gameplay area. Spend time familiarizing self with canvas API. Build classes for board, obstacles, flying birds, ducks, and toucans. Display objects on canvas gameplay area.

**Monday**
Create underlying logic for gameplay. Develop logic for shooting birds, scoring points, time, game over, and losing the game. Include ability to restart game after losing or game ends.

**Tuesday**
Implement user controls. Build instructions page that appears before gameplay can begin. Layout extra features around board including score, timer, difficulty level. Implement variable difficulty level.

**Wendesday**
Ensure good, cohesive styling across all aspects of web page. Add in mutable music feature. Include sound effects for gun shots and duck quacks.

**Thursday**
Deploy to GitHub pages. 
