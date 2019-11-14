// Melody Stern

import createForms from "./addEditMessageFormBuilder"

const displayOnDOM = {
    displayMessageMain() {
        document.querySelector("#container").innerHTML += "<section id='messaging-section'><h2>Chat Messaging</h2></section>"
    },
    displayCreateNewMessageForm() {
        document.querySelector("#messaging-section").innerHTML += `${createForms.createNewMessageForm()}`
    },
    displayEditMessageForm(messageToEdit) {
        document.querySelector("#messaging-section").innerHTML += `${createForms.createEditMessageForm(messageToEdit)}`
    }
}

export default displayOnDOM