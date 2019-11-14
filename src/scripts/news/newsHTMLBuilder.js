// Cassie Boyd

const articlesHTMLBuilder = (article) =>
    `
    <section id="eventID--${article.id}">
        <label for="completedTask">Mark Complete</label>
        <input id="completedTask--${article.id}" type="checkbox">
        <h1>${article.taskName}</h1>
        <h2>${article.completionDate}</h2>
        <button id="taskEditButton--${article.id}">EDIT</button>
        <button id="taskDeleteButton--${article.id}">DELETE</button>
    </section>
    `;

  export default eventListHTMLBuilder;