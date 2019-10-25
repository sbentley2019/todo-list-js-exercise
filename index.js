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

const task1 = newTask("Clean Cat Litter", "Take all the crap out of the litter box");
const task2 = newTask("Do Laundry", "Dead Stare emoji");
const tasks = [task1, task2];

task1.logState();
task1.markComplete();
task1.logState();
