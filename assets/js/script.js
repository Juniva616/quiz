const quizArray = [
    
        {statement: 'Male lions do 90 percent of the hunting.',
    correctAnswer: 'false',
    imgFile: 'url(../assets/images/lions.jpg)',
    textInfo: ' Lionesses, not male lions, do the majority of hunting for their pride. Lionesses hunt around 90 percent of the time, while the males protect their pride."', 
    displayInfo: function() {
        return this.imgFile + " " + this.textInfo;
      }
    },
    

    {statement: 'Roses and apples belong to the same family.',
    correctAnswer: 'true',
    imgFile: '<img src="assets/images/rose.jpg" alt="Rose" aria-labelledby="Rose">',
    textInfo: ' The family of rose plants, in addition to giving us fragrant flowers, give us apples, pears, plums, cherries, almonds, peaches, and apricots."', 
    displayInfo: function() {
        return this.imgFile + " " + this.textInfo;
}
},
]

document.getElementById('question').innerText = quizArray[1].statement;
document.getElementById('left-images').innerHTML = quizArray[1].imgFile;

 

// Display data from the object:
//document.getElementById("demo").innerHTML = person.fullName();