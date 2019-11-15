// Melody Stern

const createForms = {
    createNewMessageForm() {
        return `
        <article id="add-form-container">
        <h3>Write a New Message</h3>
        <section class="add-form form" id="newMessageForm">
            <input id="newChatMessage" type="text" value="Type your message here"></input>
            <button class="save-button button" id="submitNewMessage-button">Send Message</button>
        </section>
        </article>
        `
    },
    createEditMessageForm(messageToEdit) {
        return `
        <article class="edit-form form" id="editMessageForm">
        <h3>Edit Your Message</h3>
        <section>
            <label for="editChatMessage">Edit Message</label>
            <input id="editChatMessageTimestamp--${messageToEdit.id}" type="text" value="${messageToEdit.timestamp}" hidden></input>
            <input id="editChatMessageSender--${messageToEdit.id}" type="text" value="${messageToEdit.userId}" hidden></input>
            <input id="editChatMessage--${messageToEdit.id}" type="text" value="${messageToEdit.message}"></input>
            <button class="update-button button" id="saveEditedMessage-button--${messageToEdit.id}">Save Edits</button>
        </section>
        <article>
        `
    }
}

export default createForms