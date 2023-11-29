class Comment {
  constructor(user, comment) {
    this.user = user;
    this.comment = comment;
    this.createdAt = new Date();
  }
}

module.exports = Comment;
