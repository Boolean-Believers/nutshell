/*
    Import all the tools into main.js that are needed to display
    the initial UI to the user. Either the login form should appear
    or the dashboard should be rendered.
*/

import formBuilder from "./tasks/formBuilderAndEditor.js"
import displayOnDOM from "./messages/renderToDOM.js"
import taskListForm from "./tasks/taskListHTMLBuilder.js"
import chatMessagesManager from "./messages/chatMessagesManager.js"
import data from "./messages/apiManager.js"
import renderToDom from "./tasks/renderToDOM.js"
import searchFriendBuilder from "./friends/friendListHTMLBuilder.js"
import friendsOnTheDom from "./friends/renderDomFriends"
import friendsObject from "./friends/friendListHTMLBuilder.js"
import formBuilderAndEditor from "./events/formBuilderAndEditor.js"

console.log(formBuilderAndEditor);

sessionStorage.setItem("currentUser",1)
let i = sessionStorage.getItem("currentUser",1)
// console.log( i)

// console.log(formBuilder.addFormBuilder())
// console.log(formBuilder.newTaskButton())

// Chat Message Module

displayOnDOM.displayMessageMain()
displayOnDOM.displayCreateNewMessageForm()

const messageTEST = {
        content: "Here's some dummy text",
        id: 1
    }
    displayOnDOM.displayEditMessageForm(messageTEST)

    data.getAllMessages()
    .then(messages => {
        let messagesSection = document.querySelector("#messages-section")
        console.log(messages)
        console.log(chatMessagesManager.chatMessageArray(messages))
        messagesSection.innerHTML += `<h2>Messages</h2> ${chatMessagesManager.chatMessageArray(messages)}`
    })




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
    friendsOnTheDom.renderSearchFriend()
    friendsOnTheDom.editFriends()
    friendsOnTheDom.listOfFriends()