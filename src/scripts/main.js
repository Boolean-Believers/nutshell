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
import newsFormBuilder from "./news/newsFormBuilder.js"
import formBuilderAndEditor from "./events/formBuilderAndEditor.js"
import eventApiManager from "./events/apiManager.js"
import eventListenerManager from "./messages/eventListeners.js"
import renderNewsToDom from "./news/renderToDom.js"
import eventListHTMLBuilder from "./events/eventListHTMLBuilder.js"
import handleAddArticleEvent from "./news/eventListeners.js"


// eventApiManager.then(response => {
//     const memeListRef = document.querySelector(".meme-list")
//     memeListRef.innerHTML = memeBuilder.listMemesHtml(response)
//   })
// eventListHTMLBuilder.listEventsHTML(eventApiManager.getAllEvents);

sessionStorage.setItem("currentUser", 1)
let i = sessionStorage.getItem("currentUser", 1)
// console.log( i)

// console.log(formBuilder.addFormBuilder())
// console.log(formBuilder.newTaskButton())

//////////////////////////////////////////

// Page containers setup

const mainContainer = document.querySelector("#container")
const mainHeadingContainer = document.createElement("div")
mainHeadingContainer.id = "main-heading-container"
const messagingContainer = document.createElement("div")
messagingContainer.id = "messaging-container"
const eventsContainer = document.createElement("div")
eventsContainer.id = "events-container"
const friendsContainer = document.createElement("div")
friendsContainer.id = "friends-container"
const newsContainer = document.createElement("div")
newsContainer.id = "news-container"
const tasksContainer = document.createElement("div")
tasksContainer.id = "tasks-container"
const loginContainer = document.createElement("div")
loginContainer.id = "login-container"

// Add containers to DOM

mainContainer.appendChild(mainHeadingContainer)
mainContainer.appendChild(messagingContainer)
mainContainer.appendChild(eventsContainer)
mainContainer.appendChild(friendsContainer)
mainContainer.appendChild(newsContainer)
mainContainer.appendChild(tasksContainer)
mainContainer.appendChild(loginContainer)

/////////////////////////////////////////

// Chat Message Module

displayOnDOM.displayMessageMain()
displayOnDOM.displayCreateNewMessageForm()
data.getAllMessages()
    .then(messages => {
        let messagingSection = document.querySelector("#messaging-section")
        console.log(messages)
        const sortedMessages = messages.sort((a, b) => {
            return a.timestamp - b.timestamp
        })
        console.log(sortedMessages)
        console.log(chatMessagesManager.chatMessageArray(messages))
        messagingSection.innerHTML += `<section id="messages-section"><h2>Messages</h2> ${chatMessagesManager.chatMessageArray(messages)}</section>`
        messagingContainer.appendChild(messagingSection)
    })

eventListenerManager.addEventListenerToContainer()



// ///////////////////////////////////////

    const taskListTEST = [{
        taskName: "I'm a task, nice to meet you",
        id: 1,
        completionDate:"2099/11/10"
    }]

   
    friendsOnTheDom.renderSearchFriend()
    friendsOnTheDom.editFriends()
    friendsOnTheDom.listOfFriends()

renderToDom.renderNewTaskForm()
renderToDom.renderNewTaskButton()
renderToDom.renderEditFormBuilder()
renderToDom.rendertaskListHTMLBuilder(taskListTEST)

    const articleTest = {
        id: 0,
        name: "JavaScript",
        synopsis:"Leave me alone to die.",
        url: "http://www.alinkgoeshere.com"
    }




/*

Event list reference

*/

eventApiManager.getAllEvents()
    .then(events => {
        const eventListRef = document.querySelector("#events-container");
        eventListRef.innerHTML = eventListHTMLBuilder.listEventsHTML(events);

    })

renderNewsToDom.renderNewArticleButton()
renderNewsToDom.renderNewArticleForm()
renderNewsToDom.renderEditArticleForm(articleTest)
// console.log(newsFormBuilder.editArticleFormBuilder(articleTest))

//handleAddArticleEvent()