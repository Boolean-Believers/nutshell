// Melody Stern

const createForms = {
    createNewMessageForm() {
        return `
        <h3>Write a New Message</h3>
        <section class="add-form form" id="newMessageForm">
        <label for="newChatMessage">New Message</label>
        <input id="newChatMessage" type="text" default="Type your message here"></input>
        </section>
        <button class="save-button button" id="submitNewMessage-Button">Send Message</button>
        `
    },
    createEditMessageForm(messageToEdit) {
        return `
        <h3>Edit Your Message</h3>
        <section class="edit-form form" id="editMessageForm">
        <label for="editChatMessage">Edit Message</label>
        <input id="editChatMessage" type="text" value="${messageToEdit.content}"></input>
        </section>
        <button class="edit-button button" id="submitEditedMessage-Button--${messageToEdit.id}">Save Changes</button>
        `
    }
}

export default createForms