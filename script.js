var weatherData;
var request = new XMLHttpRequest();

loadData();

function loadData() {
  request.open('GET', 'https://opentdb.com/api.php?amount=10&type=multiple');
  request.onload = loadComplete;
  request.send();
}

function loadComplete(evt) {
    triviaData = JSON.parse(request.responseText);
    console.log(triviaData);
    document.getElementById("question").innerHTML = triviaData.results[0].question;
    
    document.getElementById("correct").innerHTML = triviaData.results[0].correct_answer;
    document.getElementById("incorrect1").innerHTML = triviaData.results[0].incorrect_answers[0];
    document.getElementById("incorrect2").innerHTML = triviaData.results[0].incorrect_answers[1];
    document.getElementById("incorrect3").innerHTML = triviaData.results[0].incorrect_answers[2];
    

}