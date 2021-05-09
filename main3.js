// Ejercicio 3
const arrayVowels = ["a", "e", "i", "o", "u"];
const sufijoAleman = "ujem";
const sufijoBulgaro = "kov";

function translateWord(string = "", language = undefined) {
  //Validaciones
  if (language === undefined && !string) {
    return console.warn(
      `no has introducido ningun lenguaje al que traducir, ni ninguna palabra que traducir`
    );
  }
  if (!string) {
    return console.warn(`no has introducido ninguna palabra que traducir`);
  }
  if (language === undefined) {
    return console.warn(`no has introducido ningun lenguaje al que traducir`);
  }
  // Si hay string, evaluar si acaba en vocal o consonante. (si indexOf devuelve -1 acaba en consonante, si devuelve 0 es la posicion , con lo cual acaba en vocal)
  const lastLetter = string[string.length - 1].toLowerCase();
  const vowelOrConsonant = arrayVowels.indexOf(lastLetter);

  // hacemos la logica en funcion de ello
  //ALEMAN
  if (language === 1) {
    if (vowelOrConsonant === 0) {
      //PARA VOCAL (Quitar vocal y añadir sufijo "ujem")
      const subStringVowel = string.substring(0, string.length - 1);
      const translateAlemanV = subStringVowel.concat(sufijoAleman);
      console.log(`La palabra ${string} en aleman es ${translateAlemanV}`);
    } else {
      //PARA CONSONANTE (quitar los dos ultimos caracteres y añadir sufijo "ujem")
      const subStringConsonant = string.substring(0, string.length - 2);
      const translateAlemanC = subStringConsonant.concat(sufijoAleman);

      console.log(`La palabra ${string} en aleman es ${translateAlemanC}`);
    }
  }

  if (language === 2) {
    if (vowelOrConsonant === 0) {
      //PARA VOCAL  añadir sufijo "kov")
      const translateBulgaroV = string.concat(sufijoBulgaro);
      console.log(`La palabra ${string} en bulgaro es ${translateBulgaroV}`);
    } else {
      //PARA CONSONANTE (quitar la ultima letra y añadir sufijo "kov")
      const subStringLastLetter = string.substring(0, string.length - 1);
      const translateBulgaroC = subStringLastLetter.concat(sufijoBulgaro);

      console.log(`La palabra ${string} en bulgaro es ${translateBulgaroC}`);
    }
  }
}

translateWord("camion", 1);
translateWord("silla", 1);

translateWord("camion", 2);
translateWord("silla", 2);

translateWord();
translateWord("", 1);
translateWord("ordenador");
