const baseUrl = "http://localhost:8088";

export default {
  postArticle: article =>
    fetch(`${baseUrl}/article`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(article)
    }),

    getAllArticles: () => fetch(`${baseUrl}/articles`)
    .then(response => response.json()),
  getSingleArticle: articleId => fetch(`${baseUrl}/memes/${articleId}`)
    .then(response => response.json()),
  putArticle: (articleId, article) => fetch(`${baseUrl}/articles/${articleId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(article)
  }),

  deleteArticle: articleId => fetch(`${baseUrl}/articles/${articleId}`, {
    method: "DELETE"
  })
    .then(response => response.json())

};
