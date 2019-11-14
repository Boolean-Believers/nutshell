const eventsFormBuilder = {
    newEventButton() {
        return `
        <button id="newEvent">New Event</button>
        `
    },
  newEventFormBuilder() {
    return `
    <article id="newEventForm">
        <h1>Add New Event</h1>
            <section>
                <label for="eventName">Event</label>
                <input type="text" id="eventName">
            </section>

            <section>
                <label for="eventDate">Event Date</label>
                <input type="date" id="eventDate">
            </section>

            <section>
                <label for="eventLocation">Location</label>
                <input type="text" id="eventLocation">
            </section>
        <button type="submit" id="submitEvent">Submit Event</button>
    </article>
    `;
    },

  editEventFormBuilder() {
    return `
    <article id="editEventForm">
        <h1>Edit Event</h1>
            <section>
                <label for="editEventName">Event</label>
                <input type="text" id="editEventName">
            </section>

            <section>
                <label for="editEventDate">Event Date</label>
                <input type="date" id="editEventDate">
            </section>

            <section>
                <label for="editEventLocation">Location</label>
                <input type="text" id="editEventLocation">
            </section>
        <button type="submit" id="submitEditedEvent">Submit Edited Event</button>
    </article>
`;
    }
}
export default eventsFormBuilder;
