// Cassie Boyd

import newsFormBuilder from "./newsFormBuilder.js";
import articlesHtmlBuilder from "./newsHTMLBuilder.js"

// const domRef = document.getElementById("news-container");

const renderNewsToDom = {
  renderNewArticleButton: () => {
    const domRef = document.getElementById("news-container");
    return (domRef.innerHTML += newsFormBuilder.newArticleButton());
  },

  renderNewArticleForm: () => {
    const domRef = document.getElementById("news-container");
    return (domRef.innerHTML += newsFormBuilder.addArticleFormBuilder());
  },

  renderEditArticleForm: articleToEdit => {
    const domRef = document.getElementById("news-container");
    return (domRef.innerHTML += newsFormBuilder.editArticleFormBuilder(
      articleToEdit
    ));
  },

  listArticlesHtml: articles => {
    const domRef = document.getElementById("news-container");
      articles.forEach(article => {
          articlesHtmlBuilder(article)
      })
  }
};

export default renderNewsToDom;
