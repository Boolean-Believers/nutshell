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

  editEventFormBuilder(eventToEdit) {
    return `
    <article id="editEventForm--${eventToEdit.id}">
        <h1>Edit Event</h1>
            <section>
                <label for="editEventName">Event</label>
                <input type="text" id="editEventName" value="${eventToEdit.name}">
            </section>

            <section>
                <label for="editEventDate">Event Date</label>
                <input type="date" id="editEventDate" value="${eventToEdit.date}">
            </section>

            <section>
                <label for="editEventLocation">Location</label>
                <input type="text" id="editEventLocation" value="${eventToEdit.location}">
            </section>
        <button type="submit" id="submitEditedEvent--${eventToEdit.id}">Submit Edited Event</button>
    </article>
`;
    }
}
export default eventsFormBuilder;
