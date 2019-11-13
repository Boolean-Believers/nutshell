const createForms = {
    createNewMessageForm() {
        return `
        <h3>Write a New Message</h3>
        <section id="newMessageForm">
        <label for="newChatMessage">New Message</label>
        <input id="newChatMessage" type="text" default="Type your message here"></input>
        </section>
        <button id="submitNewMessage-Button"></button>
        `
    },
    createEditMessageForm(messageToEdit) {
        return `
        <h3>Edit Your Message</h3>
        <section id="editMessageForm">
        <label for="editChatMessage">Edit Message</label>
        <input id="editChatMessage" type="text">${messageToEdit.content}</input>
        </section>
        <button id="submitEditedMessage-Button--${messageToEdit.id}"></button>
        `
    }
}

export default createForms