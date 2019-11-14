import newsFormBuilder from "./newsFormBuilder.js"

const domRef = document.getElementById("container")

const renderNewsToDom = {
    renderNewArticleButton: () => {
        return domRef.innerHTML += newsFormBuilder.newArticleButton()
    },
    renderNewTaskForm: () => {
        return  domRef.innerHTML+=newsFormBuilder.addArticleFormBuilder()
 }
}