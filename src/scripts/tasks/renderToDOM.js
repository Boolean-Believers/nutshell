import formBuilder from "./formBuilderAndEditor.js"
import taskListHTMLBuilder from "./taskListHTMLBuilder.js"


const renderToDom = {
    renderNewTaskForm: () => {
       const domRef = document.getElementById("tasks-container")
       return  domRef.innerHTML+=formBuilder.addFormBuilder()


    },
    renderNewTaskButton: () => {
        const domRef = document.getElementById("tasks-container")
        return domRef.innerHTML += formBuilder.newTaskButton()
    },
    renderEditFormBuilder: () => {
        const domRef = document.getElementById("tasks-container")
        return domRef.innerHTML += formBuilder.editFormBuilder()
    },
    rendertaskListHTMLBuilder: (taskListTEST) => {
        // console.log(taskListTEST)
        let buildHTML = ""
      taskListTEST.forEach(taskItem => {
        //   console.log(taskItem)
            buildHTML += taskListHTMLBuilder(taskItem)
        })
        const domRef = document.getElementById("tasks-container")
        // console.log(buildHTML)
        return domRef.innerHTML += buildHTML
    }
}
export default renderToDom