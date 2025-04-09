class TodoList {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push({ task, completed: false });
    console.log(`Added task: "${task}"`);
  }

  markComplete(task) {
    const found = this.tasks.find(t => t.task === task);
    if (found) {
      found.completed = true;
      console.log(`Marked task as complete: "${task}"`);
    } else {
      console.log(`Task not found: "${task}"`);
    }
  }

  listTasks() {
    console.log("\nYour Tasks:");
    this.tasks.forEach((t, i) => {
      const status = t.completed ? "Completed" : "Not Completed";
      console.log(`${i + 1}. ${t.task} - ${status}`);
    });
  }
}



export default TodoList