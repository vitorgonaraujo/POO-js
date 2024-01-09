const Post = require("./Post.js");

class Author {
  constructor(name) {
    this.name = name;
    this.posts = [];
  }
  addPosts(title, body) {
    const posts = new Post(title, body, this);
    this.posts.push(posts);
    return posts;
  }
}

module.exports = Author;
//teste