const readline = require("readline");

class Grader {
  GetGrade = () => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question("What is your name? ", (name) => {
      rl.question("What is the assignment name? ", (assignment) => {
        rl.question("What grade did you get? ", (grade) => {
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
        });
      });
    });
  };
}

module.exports = Grader;
