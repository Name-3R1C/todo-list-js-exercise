// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markComplete: function() {
      this.complete = true;
    }
  };
  return task;
}

// DRIVER CODE BELOW
const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundary", "😨");
const tasks = [task1, task2];

task1.logState(task1); // Clean Cat Litter has not been completed
task1.markComplete(task1);
task1.logState(task1); // Clean Cat Litter has been completed
