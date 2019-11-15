/*

This module makes the list of events that will display on the DOM

*/

//HTML "template" for each event
const eventHTMLBuilder = (event) =>
    `
    <section id="eventID--${event.id}">
        <label for="completedTask">Mark Complete</label>
        <input id="completedTask--${event.id}" type="checkbox">
        <h1>${event.name}</h1>
        <h2>${event.date}</h2>
        <button id="taskEditButton--${event.id}">EDIT</button>
        <button id="taskDeleteButton--${event.id}">DELETE</button>
    </section>
    `;

    //Loop through each event, run the indivdual HTML builder, and add to the event list
const eventListHTMLBuilder = {
    listEventsHTML(events) {
        let eventsHTML = "";
        events.forEach(event => eventsHTML += eventHTMLBuilder(event));
        return eventsHTML;
    }
}

  export default eventListHTMLBuilder;