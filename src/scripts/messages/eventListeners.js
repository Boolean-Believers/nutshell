import data from "./apiManager"

const sendNewMessageButton = document.querySelector("#submitNewMessage-button")
const editMessageButton = document.querySelector("#editMessage-button")


const eventListenerManager = {
    sendMessage: (newMessage) => {
        data.addNewMessage(newMessage)
        .then(data.getAllMessages())
        .then(messages => {
            let messagesSection = document.querySelector("#messages-section")
            console.log(messages)
            console.log(chatMessagesManager.chatMessageArray(messages))
            messagesSection.innerHTML += `${chatMessagesManager.chatMessageArray(messages)}`
        })
    },
        addEventListenerToNewMessageContainer: () => {
            const messagingContainer = document.querySelector("#messaging-section")
            const newChatMessageInput = document.querySelector("#newChatMessage")
            console.log(newChatMessageInput.value)
            console.log(messagingContainer)
            messagingContainer.addEventListener("click", (event) => {

                console.log("hello")
                // console.log(newChatMessageInput.value)
            })
            // sendMessage(newChatMessageInput.value))
        }
    }


export default eventListenerManager