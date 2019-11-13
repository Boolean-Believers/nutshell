// Cassie Boyd

const newsFormBuilder = {
  newArticleButton() {
    return `
        <button id="newArticle">New Article</button>
        `;
  },

  addFormBuilder() {
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
  }
};

export default newsFormBuilder
