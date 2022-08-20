const quizArray = {
    statement: 'Male lions do 90 percent of the hunting.',
    correctAnswer: 'false',
    moreInfo: {
        imgFile: 'url(../assets/images/lions.jpg)',
        textInfo: ' Lionesses, not male lions, do the majority of hunting for their pride. Lionesses hunt around 90 percent of the time, while the males protect their pride."', 
    },
}

document.getElementById('question').innerText = quizArray.statement;