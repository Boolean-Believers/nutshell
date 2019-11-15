// Melody Stern

const createForms = {
    createNewMessageForm() {
        return `
        <h3>Write a New Message</h3>
        <section class="add-form form" id="newMessageForm">
            <label for="newChatMessage">New Message</label>
            <input id="newChatMessage" type="text" value="Type your message here"></input>
        </section>
        <button class="save-button button" id="submitNewMessage-button">Send Message</button>
        `
    },
    createEditMessageForm(messageToEdit) {
        return `
        <h3>Edit Your Message</h3>
        <section class="edit-form form" id="editMessageForm">
            <label for="editChatMessage">Edit Message</label>
            <input id="editChatMessageTimestamp--${messageToEdit.id}" type="text" value="${messageToEdit.timestamp}" hidden></input>
            <input id="editChatMessageSender--${messageToEdit.id}" type="text" value="${messageToEdit.userId}" hidden></input>
            <input id="editChatMessage--${messageToEdit.id}" type="text" value="${messageToEdit.message}"></input>
        </section>
        <button class="update-button button" id="saveEditedMessage-button--${messageToEdit.id}">Save Edits</button>
        `
    }
}

export default createForms