const Jornalista = require("./Jornalista.js");
const Noticias = require("./Noticias.js");

const junior = new Jornalista("Junior Goulart", "10/09/1989", 12345);
const News1 = new Noticias(
  "A queda de Robert Del Miro",
  "Robert Del Miro, abre no teu cu e atiro, tentou atirar mas não resistiu e morreu.",
  junior
);
