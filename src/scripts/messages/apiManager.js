// Melody Stern

const baseURL = "http://localhost:8088"

const messageData = {
    getAllMessages: () => {
        return fetch(`${baseURL}/messages?_expand=user`)
        .then(messages => messages.json())
    },
    getSingleMessage: (messageToEditId) => {
        return fetch(`${baseURL}/messages/${messageToEditId}`)
        .then(messages => messages.json())
    },
    addNewMessage: (newMessage) => {
        return fetch(`${baseURL}/messages`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMessage)
        })
    },
    updateMessage: (editedMessage) => {
        return fetch(`${baseURL}/messages/${editedMessage.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedMessage)
        }
        )
    }
}

export default messageData