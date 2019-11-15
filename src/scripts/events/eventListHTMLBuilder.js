/*

This module makes the list of events that will display on the DOM

*/

//HTML "template" for each event
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

    //Loop through each event, run the indivdual HTML builder, and add to the event list
const eventListHTMLBuilder = {
    listEventsHTML(eventsArray) {
        let eventsHTML = "";
        eventsArray.forEach(event => eventsHTML += eventHTMLBuilder(event));
        console.log(eventsHTML)
        return eventsHTML;
    }
}

  export default eventListHTMLBuilder;