//Ejercicio 2

const palindromo = (string = "") => {
  if (!string) return console.warn(`no se ha introducido ninguna palabra`);
  //palindromo
  const stringLowercase = string.toLocaleLowerCase();
  let reverse = stringLowercase.split("").reverse().join("");

  //numero de letras
  const leterNum = string.split("").length;

  return stringLowercase === reverse
    ? console.info(
        `${string} si es palindromo, ya que ${stringLowercase} es igual a ${reverse}. Tiene ${leterNum} letras`
      )
    : console.info(
        `${string} no es palindromo, ya que ${stringLowercase} no es igual a ${reverse}. Tiene ${leterNum} letras`
      );
};

palindromo("Maribel");
palindromo("Radar");
palindromo();
