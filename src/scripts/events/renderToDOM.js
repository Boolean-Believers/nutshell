import eventListHTMLBuilder from "./eventListHTMLBuilder.js"
import formBuilderAndEditor from "./formBuilderAndEditor.js"

//Loop through each event, run the indivdual HTML builder, and add to the event list

const renderEventListToDOM = {
    listEventsHTML(events) {
        let eventsHTML = "";
        events.forEach(event => eventsHTML += eventListHTMLBuilder(event));
        return eventsHTML;
    }
}

export default renderEventListToDOM;