import apiManager from "./apiManager.js"
import newsFormBuilder from "./newsFormBuilder.js"
import renderNewsToDom from "./renderToDom.js"

const handleAddArticleEvent = event => {
    // console.log("Add button clicked")
  
    const nameInputRef = document.querySelector("#articleTitle-input")
    const synopsisInputRef = document.querySelector("#synopsis-input")
    const urlInputRef = document.querySelector("#url-input")
  
    const newArticle = {
      name: nameInputRef.value,
      synopsis: synopsisInputRef.value,
      url: urlInputRef.value,
    }
    // console.log(newArticle)
  
    apiManager.postArticle(newArticle)
      .then(() => apiManager.getAllArticles())
      .then(response => {
        const articleListRef = document.querySelector(".article-list")
        articleListRef.innerHTML = renderNewsToDom.listArticlesHtml(response)
  
        nameInputRef.value = ""
        synopsisInputRef.value = ""
        urlInputRef.value = ""
      })
  }
  
//   const handleMemeListEvent = event => {
//     const idAttribute = event.target.id
//     const memeId = idAttribute.split("-meme-")[1]
//     if (idAttribute.includes("edit-meme-")) {
  
//       apiManager.getSingleMeme(memeId)
//         .then(response => {
//           const memeSectionRef = document.querySelector(`.meme-section-${memeId}`)
//           memeSectionRef.innerHTML = formBuilder.buildEditForm(response)
//         })
//     }
//     else if (idAttribute.includes("update-meme-")) {
//       const updatedMeme = {
//         name: document.querySelector("#name-edit").value,
//         synopsis: document.querySelector("#synopsis-edit").value,
//         url: document.querySelector("#url-edit").value,
//         imageUrl: document.querySelector("#image-edit").value
//       }
  
//       apiManager.putMeme(memeId, updatedMeme)
//         .then(() => apiManager.getAllMemes())
//         .then(response => {
//           const memeListRef = document.querySelector(".meme-list")
//           memeListRef.innerHTML = memeBuilder.listMemesHtml(response)
//         })
//     } else if (idAttribute.includes("delete-meme-")) {
//       apiManager.deleteMeme(memeId)
//         .then(() => apiManager.getAllMemes())
//         .then(response => {
//           const memeListRef = document.querySelector(".meme-list")
//           memeListRef.innerHTML = memeBuilder.listMemesHtml(response)
//         })
//     }
//   }
  
//   const eventManager = {
//     attachEventListenerToAddButton() {
//       document.getElementById("add-meme-btn").addEventListener("click", handleAddButtonEvent)
//     },
//     attachEventListenerToMemeList() {
//       document.querySelector(".meme-list").addEventListener("click", handleMemeListEvent)
//     }
  
//   }
  
  export default handleAddArticleEvent