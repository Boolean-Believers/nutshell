// Cassie Boyd

import newsFormBuilder from "./newsFormBuilder.js";
import articlesHtmlBuilder from "./newsHTMLBuilder.js"

const domRef = document.getElementById("container");

const renderNewsToDom = {
  renderNewArticleButton: () => {
    return (domRef.innerHTML += newsFormBuilder.newArticleButton());
  },

  renderNewArticleForm: () => {
    return (domRef.innerHTML += newsFormBuilder.addArticleFormBuilder());
  },

  renderEditArticleForm: articleToEdit => {
    return (domRef.innerHTML += newsFormBuilder.editArticleFormBuilder(
      articleToEdit
    ));
  },

  listArticlesHtml: articles => {
      articles.forEach(article => {
          articlesHtmlBuilder(article)
      })
  }
};

export default renderNewsToDom;
