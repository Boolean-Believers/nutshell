import data from "./apiManager"
import chatMessagesManager from "./chatMessagesManager"

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
        addEventListenerToContainer: () => {
            const container = document.querySelector("#container")
            const newChatMessageInput = document.querySelector("#newChatMessage")
            // console.log(newChatMessageInput.value)
            // console.log(container)
            const message = newChatMessageInput.value
            const timestamp = + new Date()
            console.log(timestamp)
            
            const post = {
                "message": message,
                "userId": 1,
                "timestamp": timestamp,
            }

            container.addEventListener("click", (event) => {
                console.log("hello")
                console.log(post)
                eventListenerManager.sendMessage(post)
            })
        }
    }


export default eventListenerManager