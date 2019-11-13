/*
    Import all the tools into main.js that are needed to display
    the initial UI to the user. Either the login form should appear
    or the dashboard should be rendered.
*/

import formBuilder from "./tasks/formBuilderAndEditor.js"
import createForms from "./messages/addEditMessageFormBuilder.js"

const message = "Time to build an application that gives you all the information you need in a Nutshell"

document.querySelector("#container").innerHTML = `<h1>${message}</h1>`

sessionStorage.setItem("currentUser",1)
console.log(message)
let i = sessionStorage.getItem("currentUser",1)
console.log( i)
console.log( i)

console.log(formBuilder.addFormBuilder())
console.log(formBuilder.newTaskButton())
console.log(createForms.createNewMessageForm())

const messageTEST = {
    content: "Here's some dummy text",
    id: 1
}
console.log(createForms.createEditMessageForm(messageTEST))