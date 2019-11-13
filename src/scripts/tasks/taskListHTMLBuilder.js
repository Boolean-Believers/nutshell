const taskListHTMLBuilder = (task) =>
    `
    <section id="taskID--${task.id}">
        <label for="completedTask">Mark Complete</label>
        <input id="completedTask--${task.id}" type="checkbox">
        <h1>${task.taskName}</h1>
        <h2>${task.completionDate}</h2>
        <button id="taskEditButton--${task.id}">EDIT</button>
        <button id="taskDeleteButton--${task.id}">DELETE</button>
    </section>
    `;
  

  export default taskListHTMLBuilder;