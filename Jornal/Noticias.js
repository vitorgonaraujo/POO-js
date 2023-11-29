class Noticias {
  constructor(title, body, author) {
    this.title = title;
    this.body = body;
    this.createdAt = new Date();
    this.publishDate = "";
    this.author = author;
  }
  publish(value) {
    return (this.value += value);
  }
}

module.exports = Noticias