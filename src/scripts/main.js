/*
    Import all the tools into main.js that are needed to display
    the initial UI to the user. Either the login form should appear
    or the dashboard should be rendered.
*/

import formBuilder from "./tasks/formBuilderAndEditor.js"
import displayOnDOM from "./messages/renderToDOM.js"
import taskListForm from "./tasks/taskListHTMLBuilder.js"
import renderToDom from "./tasks/renderToDOM.js"
import formBuilderAndEditor from "./events/formBuilderAndEditor.js"

console.log(formBuilderAndEditor);

sessionStorage.setItem("currentUser",1)
let i = sessionStorage.getItem("currentUser",1)
// console.log( i)

// console.log(formBuilder.addFormBuilder())
// console.log(formBuilder.newTaskButton())

// Chat Message Module

displayOnDOM.displayCreateNewMessageForm()

const messageTEST = {
        content: "Here's some dummy text",
        id: 1
    }
    displayOnDOM.displayEditMessageForm(messageTEST)


    const taskListTEST = [{
        taskName: "I'm a task, nice to meet you",
        id: 1,
        completionDate:"2099/11/10"
    }]
    // console.log(taskListForm(taskListTEST))
    renderToDom.renderNewTaskForm()
    renderToDom.renderNewTaskButton()
    renderToDom.renderEditFormBuilder()
    renderToDom.rendertaskListHTMLBuilder(taskListTEST)