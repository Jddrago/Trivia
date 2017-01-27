var weatherData;
var request = new XMLHttpRequest();

loadData();

function loadData() {
  request.open('GET', 'https://opentdb.com/api.php?amount=1&type=multiple&category=20');
  request.onload = loadComplete;
  request.send();
}

function loadComplete(evt) {
    triviaData = JSON.parse(request.responseText);
    console.log(triviaData);
    document.getElementById("question").innerHTML = triviaData.results[0].question;
    
    document.getElementById("correct").value = triviaData.results[0].correct_answer;
    document.getElementById("incorrect1").value = triviaData.results[0].incorrect_answers[0];
    document.getElementById("incorrect2").value = triviaData.results[0].incorrect_answers[1];
    document.getElementById("incorrect3").value = triviaData.results[0].incorrect_answers[2];
    
}