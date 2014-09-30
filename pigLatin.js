var pigLatin = function(word){
  var vowels = ['a','e','i','o','u'];
  var wordArray = word.split("");
  console.log(wordArray)

  // test to see if word begins with vowell
  for (var i = 0; i < vowels.length; i++){
    if (vowels[i] === wordArray[0]){
      var vowel = true;
    }
  }

  // translate to pig latin
  if (vowel === true) {
    var newWord = wordArray.join('') + 'way';
  } else {
    var newWord = wordArray.slice(1).join('') + wordArray[0] + 'ay';
  }

  return newWord;
}

console.log( pigLatin("mouse"))

console.log( pigLatin("apple"))



