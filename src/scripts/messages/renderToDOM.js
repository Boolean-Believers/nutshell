// Melody Stern

import createForms from "./addEditMessageFormBuilder"

const displayOnDOM = {
    displayMessageMain() {
        document.querySelector("#container").innerHTML += "<section id='messages-section'><h2>Messages</h2></section>"
    },
    displayCreateNewMessageForm() {
        document.querySelector("#messages-section").innerHTML += `${createForms.createNewMessageForm()}`
    },
    displayEditMessageForm(messageToEdit) {
        document.querySelector("#messages-section").innerHTML += `${createForms.createEditMessageForm(messageToEdit)}`
    }
}

export default displayOnDOM