// Cassie Boyd

const newsFormBuilder = {
  newArticleButton() {
    return `
        <button id="newArticle">New Article</button>
        `;
  },

  addArticleFormBuilder() {
    return `
        <article id="newArticleForm"><h1>Add New Article</h1>
        <section>
            <label for="articleTitle">News Article</label>
            <input type="text" id="articleTitle">
        </section>
    
        <section>
            <label for="synopsis">Synopsis</label>
            <textarea type="text" id="synopsis" rows="4"></textarea>
        </section>
    
        <section>
        <label for="url">Article URL</label>
        <input type="text" id="url">
        </section>
        <button id="saveArticle">Save Article</button>
        </article>
        `;
  },

  editArticleFormBuilder(articleToEdit) {
      return `
      <article id="editArticleForm"><h1>Edit Article</h1>
        <section>
            <label for="editArticleTitle">News Article</label>
            <input type="text" id="editArticleTitle" value="${articleToEdit.name}">
        </section>
    
        <section>
            <label for="editSynopsis">Synopsis</label>
            <input type="text" id="editSynopsis" value="${articleToEdit.synopsis}">
        </section>
    
        <section>
        <label for="editUrl">Article URL</label>
        <input type="text" id="editUrl" value ="${articleToEdit.url}">
        </section>
        <button id="--${articleToEdit.id}">Save Edited Article</button>
        </article>
      `
  }
};

export default newsFormBuilder
