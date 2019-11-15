import data from "./apiManager.js"
import chatMessagesManager from "./chatMessagesManager.js"
import displayOnDOM from "./renderToDOM.js"

const sendNewMessageButton = document.querySelector("#submitNewMessage-button")
const editMessageButton = document.querySelector("#editMessage-button")


const eventListenerManager = {
    sendMessage: (newMessage) => {
        data.addNewMessage(newMessage)
            .then(data.getAllMessages)
            .then(messages => {
                let messagesSection = document.querySelector("#messages-section")
                console.log(messages)
                messagesSection.innerHTML += `${chatMessagesManager.chatMessageArray(messages)}`
            })
    },
    addEventListenerToContainer: () => {
        const container = document.querySelector("#container")
        container.addEventListener("click", (event) => {
            if (event.target.id.startsWith("submitNewMessage-button")) {
                const newChatMessageInput = document.querySelector("#newChatMessage")
                console.log(newChatMessageInput.value)
                const message = newChatMessageInput.value
                newChatMessageInput.value = ""
                const timestamp = + new Date()
                console.log(timestamp)

                const post = {
                    "message": message,
                    "userId": 1,
                    "timestamp": timestamp,
                }
                console.log(post)
                eventListenerManager.sendMessage(post)
            } else if (event.target.id.startsWith("editMessage-button")) {
                const id = event.target.id.split("--")[1]
                data.getSingleMessage(id)
                .then(messageToEdit => displayOnDOM.displayEditMessageForm(messageToEdit))
            } else if (event.target.id.startsWith("saveEditedMessage-button")) {
                const id = event.target.id.split("--")[1]
                console.log(id)
                const message = document.querySelector(`#editChatMessage--${id}`).value
                const userId = document.querySelector(`#editChatMessageSender--${id}`).value
                const timestamp = document.querySelector(`#editChatMessageTimestamp--${id}`).value
                const editedInfo = {
                    "id": id,
                    "message": message,
                    "userId": userId,
                    "timestamp": timestamp,
                }
                console.log(editedInfo)
                data.updateMessage(editedInfo)
            }
        })
    }


}



export default eventListenerManager