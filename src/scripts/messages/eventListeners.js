import data from "./apiManager"
import chatMessagesManager from "./chatMessagesManager"

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
            }
        })
    }


}



export default eventListenerManager