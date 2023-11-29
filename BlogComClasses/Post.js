const Comment = require("./Comment.js");

class Post {
  constructor(title, body, Author) {
    this.title = title;
    this.body = body;
    this.Author = Author;
    this.comments = [];
    this.createdAt = new Date();
  }
  addComment(Author, comment) {
    this.comments.push(new Comment(Author, comment));
  }
}

module.exports = Post;
