const Author = require("./Author.js");

const vitor = new Author("Vitor Gonçalves");
const carlos = new Author("Carlos");
const roberto = new Author("Roberto");

const post = vitor.addPosts("Primeiro post", "Texte de Post", vitor);
const post2 = vitor.addPosts("Primeiro post", "Texte de Post", vitor);

post.addComment(carlos.name, "Excelente post!");
post.addComment(roberto.name, "LOL");

console.log(post);
console.log(post2);
console.log(vitor);
