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
            <input type="text" id="synopsis">
        </section>
    
        <section>
        <label for="url">Article URL</label>
        <input type="text" id="url">
        </section>
        <button id="saveArticle">Save Article</button>
        </article>
        `;
  },

  editArticleFormBuilder() {
      return `
      <article id="editArticleForm"><h1>Edit Article</h1>
        <section>
            <label for="editArticleTitle">News Article</label>
            <input type="text" id="editArticleTitle">
        </section>
    
        <section>
            <label for="editSynopsis">Synopsis</label>
            <input type="text" id="editSynopsis">
        </section>
    
        <section>
        <label for="editUrl">Article URL</label>
        <input type="text" id="editUrl">
        </section>
        <button id="saveEditedArticle">Save Edited Article</button>
        </article>
      `
  }
};

export default newsFormBuilder
