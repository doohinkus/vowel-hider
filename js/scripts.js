var hideVowels = function (sentence){
  var sentenceSplit = sentence.split("");
  var vowels = ["a", "e", "i", "o", "u"];

  for(var x = 0; x <= sentenceSplit.length - 1; x++){
    for(var i = 0; i <= vowels.length -1; i++){
      if(sentenceSplit[x] === vowels[i]){
        sentenceSplit[x] = "-";
      }
    }
  }
return sentenceSplit.join("");

}





$(document).ready(function(){
  $("form#word-puzzle").submit(function(event){
  var answer = hideVowels($("#sentence").val());
  $("#answer").text(answer);

  event.preventDefault();

  });
});
