# BigDuckHunter

[Big Duck Hunter](https://stevenpaalz.github.io/BigDuckHunter/) is a browser-based game that allows a user to play as a hunter attempting to shoot ducks. The user, however, does not want to shoot other types of birds. The user controls the displayed cross hair to aim and shoot at ducks. The user is awarded points for each duck they shoot. However, if a user shoots any bird besides a duck, the user loses the game.

The user is given 30 seconds to shoot as many ducks as they can without shooting other birds. The game also features the ability for the user to change the difficulty of the game, which changes the speed and quantity of birds. The user's score and a timer are displayed to the user during gameplay. Additionally, sound effects include background music, gun shot sounds, and duck quacks to signal successful shots.

![Game Display](./assets/game_display_readme.png)


[Big Duck Hunter](https://stevenpaalz.github.io/BigDuckHunter/) is a browser-based game that allows a user to play as a hunter attempting to shoot ducks. The user, however, does not want to shoot other types of birds. The user controls the displayed cross hair to aim and shoot at ducks. The user is awarded points for each duck they shoot. However, if a user shoots any bird besides a duck, the user loses the game.

The user is given 30 seconds to shoot as many ducks as they can without shooting other birds. The game also features the ability for the user to change the difficulty of the game, which changes the speed and quantity of birds. The user's score and a timer are displayed to the user during gameplay. Additionally, sound effects include background music, gun shot sounds, and duck quacks to signal successful shots. Finally, the game also includes a two player mode to compete against another user.

![Game Display](./assets/game_display_readme.png)


## Wireframe

![Wireframe](./assets/wireframe.png)


## Controls

![Controls](./assets/controls_readme.png)

## Functionality

The gameplay uses canvas to animate the various birds and trees displayed in the canvas area. Wireframe

![Wireframe](./assets/wireframe.png)


## Controls

![Controls](./assets/controls_readme.png)

## Functionality

The gameplay uses canvas to animate the various birds and trees displayed in the canvas area. Birds irds are generated to have random spawn locations, speeds, and periodic changes in direction. The speed and quantity of birds is dependent on the selected difficulty.
### Bird Generation:
```js    
static generateDure generated to have random spawn locations, speeds, and periodic changes in direction. The speed and quantity of birds is dependent on the selected difficulty.
### Bird Generation:
```js    
static generateDucks(difficulty, s(difficulty, game) {
    let ducks = []
    let numDucks = 15;
    switch(difficulty) {
        case "Medium":
            numDucks = 10;
            bame) {
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
    feak;
        case "Hard":
            numDucks = 5;
            break;
    }
    for (let i = 0; i < nr (let i = 0; i < numDucks; i ++) {
        ducks.push(mDucks; i ++) {
        ducks.push(new Duck(ew Duck(difficulty, game))
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
    if (this.time < 0) {
        if (!this.gameLost) {
            return this.gameOver();
        } else {return;}
    }
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
```ifficulty, game))
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

The Big Duck Hunter game allows a user to play as a hunter that is attempting to shoot the ducks in a gameplay environment. The user, however, does not want to shoot other types of birds. The user controls the aim of its rifle using the arrow keys to move a crosshair around the gameplay area. Pressing the space bar will fire a shot where the crosshair is currently positioned in the gameplay area. The user will be awarded one point for each duck they shoot. However, if the user shoots any bird besides a duck, they will instantly lose the game. 

The user is given 60 seconds to shoot as many ducks as they can without shooting other birds. The game also features the ability for the user to change the difficulty of the game. The user's score and a timer are displayed ot the user during gameplay.

## Functionality & MVPs

In Big Duck Hunter, users will be able to:

- Start and restart game when the user is ready to play.
- View a gameplay area with flying birds of various types as well as obstacles that birds fly behind.
- Move their crosshair around the gameplay area using the arrow keys to aim at different birds in the game. Users will be able to shoot the different birds in the game with the spacebar. 
- Earn a point by shooting a duck. Shooting any other type of birds will cause the player to immediately lose the game.
- Choose the level of difficulty of the game, which will change the flight speed, number of shootable birds, and number of shootable obstacles present in the gameplay area.
- View a scoreboard and timer that displays the user's score. Running out of time will end the game for the user.

In addition, this project will include:
- Instructions on how to play the game.
- Mutable music and sound effects that will be played during the game.

## Wireframes

![Wireframe](./src/assets/wireframe.png)

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
