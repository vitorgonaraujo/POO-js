class Jornalista {
  constructor(name, birthday, ID) {
    this.name = name;
    this.birthday = birthday;
    this.ID = ID;
    this.noticia = [];
  }
  addNoticia(title, body) {
    const noticia = new Noticiais(title, body, this);
    this.noticia.push(noticia);
    return noticia;
  }
}

module.exports = Jornalista;
