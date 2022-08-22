let i = 0;
const quizArray = [

  {
    statement: 'Male lions do 90 percent of the hunting.',
    correctAnswer: false,
    imgFile: '<img src="assets/images/lions.jpg" alt="Lions" aria-labelledby="Lions">',
    textInfo: ' Lionesses, not male lions, do the majority of hunting for their pride. Lionesses hunt around 90 percent of the time, while the males protect their pride.',
  },

  {
    statement: 'Roses and apples belong to the same family.',
    correctAnswer: true,
    imgFile: '<img src="assets/images/rose.jpg" alt="Rose" aria-labelledby="Rose">',
    textInfo: ' The family of rose plants, in addition to giving us fragrant flowers, give us apples, pears, plums, cherries, almonds, peaches, and apricots.',
  },

  {
    statement: 'Crabs cannot growl.',
    correctAnswer: false,
    imgFile: '<img src="assets/images/crab.jpg" alt=" A Crab" aria-labelledby="A crab ">',
    textInfo: "Crabs may be able to intimidate other creatures with their claws, but if that's not enough, ghost crabs will growl at their enemies like a dog. However, unlike our canine friends, crabs make these fearsome noises using teeth located in their stomachs.",

  },
  {
    statement: "The baobab tree can store  up to 120,000 liters of water in its trunk.",
    correctAnswer: true,
    imgFile: '<img src="assets/images/baobab.jpg" alt=" Baobab" aria-labelledby="Baobab ">',
    textInfo: "The baobab tree found in Africa can store 1,000 to 120,000 liters of water in its swollen trunk!",
  },
  {
    statement: "Tulips caused an economic crisis.",
    correctAnswer: true,
    imgFile: '<img src="assets/images/tulips.jpg" alt="Tulips " aria-labelledby=" Tulips">',
    textInfo: "During the 1600s, tulips were so valuable in Holland that their bulbs were worth more than gold. The craze was called tulip mania and caused the crash of the Dutch economy.",
  },

  {
    statement: "Tigers have striped skin.",
    correctAnswer: true,
    imgFile: '<img src="assets/images/tiger.jpg" alt="Tiger " aria-labelledby="Tiger ">',
    textInfo: "You might think it is just their fur, but no, tigers have striped skin. And speaking of those stripes, much like our fingerprints, they are unique to every tiger.",
  },

  {
    statement: "Dandelion is poisonous.",
    correctAnswer: false,
    imgFile: '<img src="assets/images/dandelion.jpg" alt=" Dandelion" aria-labelledby="Dandelion ">',
    textInfo: "The eye-catchy Dandelion is edible! Yes, from the petals and leaves to the roots, it is completely palatable.",
  },

  {
    statement: "An octopus has three hearts.",
    correctAnswer: true,
    imgFile: '<img src="assets/images/octopus.jpg" alt=" An octopus" aria-labelledby=" An octopus">',
    textInfo: "Octopuses have two more hearts than you do. Two hearts are used to pump blood to their gills, while the third brings blood to the rest of their body. If that's not enough, they also have nine brains.",
  },

  {
    statement: "Black tea and white tea are made of different plants.",
    correctAnswer: false,
    imgFile: '<img src="assets/images/tea.jpg" alt="Tea leaves on palms " aria-labelledby="Tea leaves on human palms ">',
    textInfo: "All teas (black, green, white) come from the plant of Camellia Sinensis. Different processing methods give them their unique characteristics.",
  },

  {
    statement: "A female rhinoceros is called a cow.",
    correctAnswer: true,
    imgFile: '<img src="assets/images/rhino.jpg" alt="Rhinoceroses " aria-labelledby="Rhinoceroses ">',
    textInfo: "A group of rhinos is called a crash. Individual male rhinos are referred to as bulls, and females as cows.",
  },

  {
    statement: " Peanuts are not nuts.",
    correctAnswer: true,
    imgFile: '<img src="assets/images/peanuts.jpg" alt="Peanuts and a squirrel" aria-labelledby=" Peanuts and a squirrel">',
    textInfo: " Peanuts are not actually a true nut; they are legumes (in the same family as peas and lentils).",
  },

  {
    statement: "Dolphins have names for one another.",
    correctAnswer: true,
    imgFile: '<img src="assets/images/dolphin.jpg" alt=" Dolphins in the sea" aria-labelledby=" Dolphins in the sea ">',
    textInfo: "You  know that dolphins are smart. But do you know that they even have their own names? Scientists found that bottlenose dolphins develop specific whistles for one another.",
  },

  {
    statement: "A cluster of bananas is called a hand.",
    correctAnswer: true,
    imgFile: '<img src="assets/images/bananas.jpg" alt=" A cluster of bananas " aria-labelledby=" A cluster of bananas ">',
    textInfo: "A cluster of bananas is called a hand and consists of 10 to 20 bananas known as fingers!",
  },

  {
    statement: "Koalas sleep very little.",
    correctAnswer: false,
    imgFile: '<img src="assets/images/koala.jpg" alt=" Koala" aria-labelledby="Koala ">',
    textInfo: " These cuties sleep between 18 and 22 hours a day. The diet of koalas requires a lot of energy to digest, which is why they've got to nap so much.",
  },

  {
    statement: "A pineapple is a berry.",
    correctAnswer: true,
    imgFile: '<img src="assets/images/pineapple.jpg" alt=" pineapple" aria-labelledby=" pineapple">',
    textInfo: "Pineapple “fruit” is technically a mass of individuals berries fused to a central stalk. So, technically speaking, pineapples are actually considered a berry!",
  },

  {
    statement: "The seeds of sweet peas are toxic.",
    correctAnswer: true,
    imgFile: '<img src="assets/images/sweetpeas.jpg" alt="Sweet peas " aria-labelledby=" Sweet peas">',
    textInfo: "The seeds of sweet peas are toxic,  if ingested, they can cause a condition called Lathyrus. Symptoms of Lathyrus are paralysis, labored breathing and convulsions.",
  },

  {
    statement: "Sea otters are adept at using tools.",
    correctAnswer: true,
    imgFile: '<img src="assets/images/otters.jpg" alt=" Sea otters " aria-labelledby="Sea otters  ">',
    textInfo: "Scientists  suggests that otters may have been using tools for millions of years. Sea otters frequently use rocks to break open well-armored prey, such as snails.",
  },

  {
    statement: "Bamboo is a grass.",
    correctAnswer: true,
    imgFile: '<img src="assets/images/bamboo.jpg" alt="Bamboo" aria-labelledby=" Bamboo">',
    textInfo: "bamboos are the largest members of the grass family. Bamboo is the fastest growing woody plant in the world; it can grow upto 35 inches in a single day.",
  },

  {
    statement: "Slow lorises are the only venomous primates.",
    correctAnswer: true,
    imgFile: '<img src="assets/images/loris.jpg" alt=" Slow loris" aria-labelledby="Slow loris ">',
    textInfo: "Slow lorises are cute, but their bite can kill. These adorable animals secrete toxins from a gland in the crook of their inner arms. Their bites have caused anaphylactic shock and even death in humans.",
  },

  {
    statement: "Cucumber is a fruit and not a vegetable.",
    correctAnswer: true,
    imgFile: '<img src="assets/images/cucumber.jpg" alt="Cucumber " aria-labelledby=" Cucumber ">',
    textInfo: "Cucumber is a fruit because it grows from flowers and contains seeds inside, so  it is botanically a fruit.",
  },

  {
    statement: "Cats lived with people before A.D. started.",
    correctAnswer: true,
    imgFile: '<img src="assets/images/cat.jpg" alt="A cat " aria-labelledby="A cat ">',
    textInfo: "Cats have  been hanging around humans for thousands of years.  The oldest evidence of domesticated cats dates back 9,500 years.",
  },

  {
    statement: "Zebra stripes only for the beauty.",
    correctAnswer: false,
    imgFile: '<img src="assets/images/zebra.jpg" alt="A zebra " aria-labelledby="A zebra ">',
    textInfo: " Zebra stripes are as unique as fingerprints. Their stripes help camouflage them to confuse large predators, act as an identification signal for other zebras, and act as a sort of portable air conditioner. Also, zebra stripes are the best fly repellant, and the narrower the stripes, the better.",
  },

]

//Waits for the DOM to finish loading before starting the quiz, listens to click on START button and runs function runQuiz().

document.addEventListener("DOMContentLoaded", function startQuiz() {

      let startButton = document.getElementById("start-button");
      startButton.addEventListener('click', showQuestion);
 });
   
    
//Replaces the welcoming message and the Start button with the Quiz.statement and True and False buttons
//in index.html and calls for checkAnswers(); 

    function showQuestion() {
  
        document.getElementById('question').innerText = quizArray[i].statement;
        document.getElementById('left-images').innerHTML = quizArray[i].imgFile;

        document.getElementById('button-area').innerHTML =
          `<input class="button" id="true-button" type="submit" value = "True">
  </span>
  <span>
      <input class="button" id="false-button" type="submit" value = "False">
  </span>`;
 
      checkAnswers();
       
    }

// Adds EventListeners to buttons True and False 
    function checkAnswers() {
      let userAnswer = true;
      
//If true button is clicked, show message, then show textInfo

      document.getElementById('true-button').addEventListener('click', function () {
       
      let message = quizArray[i].correctAnswer === userAnswer ? "You are right!" : "Sorry, you are wrong!";
      alert(message);

      let correctScore = parseInt(document.getElementById("correct").innerText) + 1;
      document.getElementById("correct").innerText = correctScore;

      //Replace statement to textInfo in html
      document.getElementById('question').innerText = quizArray[i].textInfo;

      //Replace buttons True and False to the button Next
      document.getElementById('button-area').innerHTML =
      `<input class="button" id="next-button" type="submit" value = "Next">
</span>`;

document.getElementById('next-button').addEventListener('click', function () {
  if (i < quizArray.length)  {
    i++;
    showQuestion(i);
  } else {
    document.getElementById('question').innerText = `Congratulations! You answered correctly to ${correctScore} questions out of 22! Well done! Game is Over!`;

  }
  
 });
       });

//If false button is clicked, show message, then show textInfo

      document.getElementById('false-button').addEventListener('click', function () {
         userAnswer = false;
        let message = quizArray[i].correctAnswer === userAnswer ? "You are right!" : "Sorry, you are wrong!";
      alert(message);

      let wrongScore = parseInt(document.getElementById("wrong").innerText) + 1;
      document.getElementById("wrong").innerText = wrongScore;

      //Replace statement to textInfo in html
      document.getElementById('question').innerText = quizArray[i].textInfo;
      //Replace buttons True and False to the button Next
      document.getElementById('button-area').innerHTML =
      `<input class="button" id="next-button" type="submit" value = "Next">
</span>`;

document.getElementById('next-button').addEventListener('click', function () {
  if (i < quizArray.length)  {
    i++;
    showQuestion(i);
  } else {
    document.getElementById('question').innerText = `Congratulations! You answered correctly to ${correctScore} questions out of 22! Well done! Game is Over!`;

  }
  
 });
      });
      
      

      }