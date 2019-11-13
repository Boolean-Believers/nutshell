baseURL = "http://localhost:8088"

const messageData = {
    getAllMessages: () => {
        return fetch(`${baseURL}/messages`)
        .then(messages => messages.json)
    },
    getSingleMessage: (messageToEdit) => {
        return fetch(`${baseURL}/messages/${messageToEdit.id}`)
        .then(messages => messages.json)
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