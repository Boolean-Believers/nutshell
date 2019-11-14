import formBuilder from "./formBuilderAndEditor.js"
import taskListHTMLBuilder from "./taskListHTMLBuilder.js"

const domRef = document.getElementById("container")

const renderToDom = {
     renderNewTaskForm: () => {
       return  domRef.innerHTML+=formBuilder.addFormBuilder()


    },
    renderNewTaskButton: () => {
        return domRef.innerHTML += formBuilder.newTaskButton()
    },
    renderEditFormBuilder: () => {
        return domRef.innerHTML += formBuilder.editFormBuilder()
    },
    rendertaskListHTMLBuilder: (taskListTEST) => {
        // console.log(taskListTEST)
        let buildHTML = ""
      taskListTEST.forEach(taskItem => {
        //   console.log(taskItem)
            buildHTML += taskListHTMLBuilder(taskItem)
        })
        // console.log(buildHTML)
        return domRef.innerHTML += buildHTML
    }
}
export default renderToDom