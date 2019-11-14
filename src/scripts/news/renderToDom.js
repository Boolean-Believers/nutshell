// Cassie Boyd

import newsFormBuilder from "./newsFormBuilder.js";

const domRef = document.getElementById("container");

const renderNewsToDom = {

  renderNewArticleButton: () => {
    return (domRef.innerHTML += newsFormBuilder.newArticleButton());
  },

  renderNewArticleForm: () => {
    return (domRef.innerHTML += newsFormBuilder.addArticleFormBuilder());
  },

  renderEditArticleForm: (articleToEdit) => {
    return (domRef.innerHTML += newsFormBuilder.editArticleFormBuilder(articleToEdit));
  }
};

export default renderNewsToDom