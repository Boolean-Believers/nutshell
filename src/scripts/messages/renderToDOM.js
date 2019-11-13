// Melody Stern

import createForms from "./addEditMessageFormBuilder"

const displayOnDOM = {
    displayCreateNewMessageForm() {
        document.querySelector("#container").innerHTML += `${createForms.createNewMessageForm()}`
    },
    displayEditMessageForm(messageToEdit) {
        document.querySelector("#container").innerHTML += `${createForms.createEditMessageForm(messageToEdit)}`
    }
}

export default displayOnDOM