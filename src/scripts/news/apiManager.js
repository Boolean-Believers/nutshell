const baseUrl = "http://localhost:8088";

export default {
  postArticle: article =>
    fetch(`${baseUrl}/article`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(meme)
    })
};
