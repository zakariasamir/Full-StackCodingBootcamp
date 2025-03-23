const sentence = "This dinner is not that bad ! You cook well"
const wordNot = sentence.indexOf("not")
const wordBad = sentence.indexOf("bad")

if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
  console.log(sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3))
}else {
  console.log(sentence)
}