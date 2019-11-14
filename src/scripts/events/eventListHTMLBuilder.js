const eventHTMLBuilder = (event) =>
    `
    <section id="eventID--${event.id}">
        <label for="completedTask">Mark Complete</label>
        <input id="completedTask--${task.id}" type="checkbox">
        <h1>${task.taskName}</h1>
        <h2>${task.completionDate}</h2>
        <button id="taskEditButton--${task.id}">EDIT</button>
        <button id="taskDeleteButton--${task.id}">DELETE</button>
    </section>
    `;

const eventListHTMLBuilder = {
    listEventsHTML(eventsArray) {
        let eventsHTML = "";
        eventsArray.forEach(event => eventsHTML += eventHTMLBuilder(event));
        console.log(eventsHTML)
        return eventsHTML;
    }
}

  export default eventListHTMLBuilder;