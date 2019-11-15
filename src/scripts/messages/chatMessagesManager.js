// Melody Stern
// Builds html for each chat message to display on the DOM and iterates through the results array, plugging each message into the single chat message html builder function

const chatMessagesManager = {
    buildChatMessageHTML: (message) => {
        return `
    <section id="chatMessage--${message.id}">
    <div id="chatMessageSender--${message.user.id}">Author: ${message.user.username}</div>
    <p>Message: ${message.message}</p>
    <button class="edit-button button" id="editMessage-button--${message.id}">Edit Message</button>
    </section>
    `
    },
    chatMessageArray: (messages) => {
        let messagesHTML = ""
        console.log("This is what we're trying to figure out", messages)
        for (let message of messages) {
            messagesHTML += chatMessagesManager.buildChatMessageHTML(message)
        }
        console.log(messagesHTML)
        return messagesHTML
    }
}

export default chatMessagesManager