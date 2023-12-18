// 9. Hitta den längsta strängen (3p)
// Skriv en funktion findLongestString som tar en array av
// strängar som input och returnerar den längsta strängen från arrayen.

function findLongestString(strings) {
  let longestWord = 0;

  for (let i = 0; i < words.length; i++){
    if (words [i].length >longestWord){
      longestWord = words[i].length;
    }
  }
  
  return longestWord;

}

console.log(findLongestString(["apple", "banana", "orange", "kiwi"]));
// Ska logga: "banana"
console.log(findLongestString(["dog", "cat", "elephant", "lion"]));
// Ska logga: "elephant"
