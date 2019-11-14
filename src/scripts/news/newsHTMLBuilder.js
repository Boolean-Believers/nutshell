// Cassie Boyd

const articlesHTMLBuilder = (article) =>
    `
    <section id="articleID--${article.id}">
        <h1>${article.name}</h1>
        <h2>${article.url}</h2>
        <p>${article.synopsis}</p>
        <button id="articleEditButton--${article.id}">EDIT</button>
        <button id="articleDeleteButton--${article.id}">DELETE</button>
    </section>
    `;

  export default eventListHTMLBuilder;