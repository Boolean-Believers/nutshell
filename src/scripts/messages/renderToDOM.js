// Melody Stern

import createForms from "./addEditMessageFormBuilder"

const displayOnDOM = {
    displayMessageMain() {
        document.querySelector("#messaging-container").innerHTML += "<section id='messaging-section'><h1>Chat Messaging</h1></section>"
    },
    displayCreateNewMessageForm() {
        document.querySelector("#messaging-section").innerHTML += `${createForms.createNewMessageForm()}`
    },
    displayEditMessageForm(messageToEdit) {
        return document.querySelector("#messaging-section").innerHTML += `${createForms.createEditMessageForm(messageToEdit)}`
    }
}

export default displayOnDOM