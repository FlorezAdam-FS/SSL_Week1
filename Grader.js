// Add readline to create user input
const readline = require("readline");

// Create Grader class
class Grader {
  // Create a function called Get Grade
  GetGrade = () => {
    // Create readline interface
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    // ask questions for the name, assignment and grade
    rl.question("What is your name? ", (name) => {
      rl.question("What is the assignment name? ", (assignment) => {
        rl.question("What grade did you get? ", (grade) => {
          console.log("\r\n******************************\r\n");

          // conditional for grade letter value.
          if (grade >= 90 && grade < 100) {
            console.log(`${name} got an A on assignment: ${assignment}`);
          } else if (grade < 90 && grade >= 80) {
            console.log(`${name} got an B on assignment: ${assignment}`);
          } else if (grade < 80 && grade >= 70) {
            console.log(`${name} got an C on assignment: ${assignment}`);
          } else if (grade < 70 && grade >= 60) {
            console.log(`${name} got an D on assignment: ${assignment}`);
          } else if (grade < 60) {
            console.log(`${name} got an F on assignment: ${assignment}`);
          } else if (grade > 100 || grade < 0) {
            console.log(
              "That is not a valid grade, it can only be from 0 - 100"
            );
          }
          // Say goodbye and exit the process so they dont need to use Ctrl + ^
          console.log("\r\n******************************\r\n");
          console.log("Good Bye :)\r\n");
          process.exit(0);
        });
      });
    });
  };
}

// Create an instance of the class
myGrade = new Grader();
// Call the class function
myGrade.GetGrade();
