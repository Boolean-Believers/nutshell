const formBuilder = {
    newTaskButton() {
        return `
        <button id="newTask">New Task</button>
        `
    },
  addFormBuilder() {
    return `
    <article id="newTaskForm"><h1>Add New Task</h1>
    <section>
        <label for="taskName">Task</label>
        <input type="text" id="taskName">
    </section>

    <section>
        <label for="completionDate">Completion Date</label>
        <input type="text" id="completionDate">
    </section>

    <button type="submit" id="submitTask">Submit Task</button></article>
    `;
  },

  editFormBuilder() {
    return `
   <article id="editForm"> <h1>Edit Task</h1>
    <section>
        <label for="editTaskName">Task</label>
        <input type="text" id="editTaskName">
    </section>

    <section>
        <label for="editCompletionDate">Completion Date</label>
        <input type="text" id="editCompletionDate">
    </section>

    <button type="submit" id="submitEditedTask">Submit Edited Task</button></article>
    `;
}
}
export default formBuilder;
