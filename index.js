//Mars Rover Exercise

//(BONUS 4: OBSTACLES MISSING!)

// ======================
// Rover, Grid and Obsticle

let rover = {
  direction: "N",
  x: 0,
  y: 1,
  travelLog: [],
};

let grid = [
  ["", "OBS", "", "", "", "", "", "", "", ""],
  ["OBS", "", "", "", "", "", "", "", "", ""],
  ["", "OBS", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
];

let obstacle = {
  x: 1,
  y: 0,
};

// ======================
//Iteration 2: Turning the Rover

function turnLeft(rover) {
  console.log("turnLeft was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      console.log("Rover is now facing West.");
      break;
    case "E":
      rover.direction = "N";
      console.log("Rover is now facing North.");
      break;
    case "S":
      rover.direction = "E";
      console.log("Rover is now facing East.");
      break;
    case "W":
      rover.direction = "S";
      console.log("Rover is now facing South.");
      break;
  }
}

function turnRight(rover) {
  console.log("turnRight was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      console.log("Rover is now facing East.");
      break;
    case "E":
      rover.direction = "S";
      console.log("Rover is now facing South.");
      break;
    case "S":
      rover.direction = "W";
      console.log("Rover is now facing West.");
      break;
    case "W":
      rover.direction = "N";
      console.log("Rover is now facing North.");
      break;
  }
}

//==================================
//Iteration 3: Moving the Rover

function moveForward(rover) {
  console.log("moveForward was called");

  switch (rover.direction) {
    case "N":
      //Bonus 1 | Enforce Boundaries
      if (rover.y > 0) {
        rover.y--;
      } else {
        console.log("You cannot place Rover outside grid.");
      }

      break;

    case "E":
      if (rover.x < 9) {
        rover.x++;
      } else {
        console.log("You cannot place Rover outside grid.");
      }

      break;

    case "S":
      if (rover.y < 9) {
        rover.y++;
      } else {
        console.log("You cannot place Rover outside grid.");
      }

      break;

    case "W":
      if (rover.x > 0) {
        rover.x--;
      } else {
        console.log("You cannot place Rover outside grid.");
      }

      break;
  }

  console.log(`Rover now has the position x = ${rover.x}, y = ${rover.y}.`);
}

//=========================================
//Bonus 2: Move Backwards

function moveBackward(rover) {
  console.log("moveBackward was called");
  switch (rover.direction) {
    case "N":
      //Bonus 1 | Enforce Boundaries
      if (rover.y < 9) {
        rover.y++;
      } else {
        console.log("You cannot place Rover outside grid.");
      }

      break;

    case "E":
      if (rover.x > 0) {
        rover.x--;
      } else {
        console.log("You cannot place Rover outside grid.");
      }

      break;

    case "S":
      if (rover.y > 0) {
        rover.y--;
      } else {
        console.log("You cannot place Rover outside grid.");
      }

      break;

    case "W":
      if (rover.x < 9) {
        rover.x++;
      } else {
        console.log("You cannot place Rover outside grid.");
      }

      break;
  }
  console.log(`Rover now has the position x = ${rover.x}, y = ${rover.y}.`);
}

//==================================
//Iteration 4: Commands

function movingRover(commands) {
  for (let i = 0; i < commands.length; i++) {
    switch (commands[i]) {
      case "f":
        rover.travelLog.push(`x = ${rover.x}, y = ${rover.y}`); //Iteration 5: Tracking
        moveForward(rover);
        break;
      case "r":
        turnRight(rover);
        break;
      case "l":
        turnLeft(rover);
        break;
      case "b":
        rover.travelLog.push(`x = ${rover.x}, y = ${rover.y}`); //Iteration 5: Tracking
        moveBackward(rover);
        break;
      default:
        //Bonus 3: Validate Inputs
        console.log("Please enter valid letter: 'f','b','r', or 'l'.");
    }
  }
  console.log("Travel Log:");
  rover.travelLog.forEach((log) => {
    console.log(log);
  }); //Iteration 5: Tracking
}

movingRover("b");
