// 1.1 Gradering av frukter (3p)
// Skriv en funktion gradeFruit som tar en frukt (som en sträng)
// och returnerar dess kvalitetsbetyg enligt följande kriterier:

// "Utmärkt" om frukten är "Mango" eller "Jordgubbe"
// "Bra" om frukten är "Äpple" eller "Apelsin"
// "Acceptabel" om frukten är "Kiwi" eller "Ananas"
// "Dålig" om frukten är "Citron" eller "Lime"
// "Okänd" för alla andra frukter

function gradeFruit(fruit) {
  if ("Mango" || "Jordgubbe") {
    return "utmärkt";
  } else if ("Äpple" || "Apelsin") {
    return "Bra";
  } else if ("Kiwi" || "Ananas") {
    return "Acceptabel";
  } else if ("Citron" || "Lime") {
    return "Dålig";
  } else {
    return "Okänd";
  }
}
console.log(gradeFruit("Mango"));
