
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');



var myQuestions = [
    {
        question: "1. What burger would you get at Mcdonalds?",
        
        answers: {
            a: "Big Mac,",
            b: "Whopper,",
            c: "Dave's Big n Juicy,",
            d: "Jack's Classic"
        },
        correctAnswer: "a"
    },

    {
        question: "2. What restaurant has the Big Bo Box?",
        answers: {
            a: "McDonalds,",
            b: "KFC,",
            c: "Zaxby's,",
            d: "Bojangles,",
        },
        correctAnswer: "d" 
    },

    {
        question: "3. Who has the $2.99 Ultimate Jack's Breakfast Platter:",
        answers: {
            a: "Taco Bell,",
            b: "Hwy 55,",
            c: "Jack n the Box,",
            d: "Red Robbin",
        },
        correctAnswer: "c" 
    },

    {
        question: "4. Who incorporated Doritos into one of their menu items?",
        answers: {
            a: "Wendy's,",
            b: "Taco Bell,",
            c: "Mcdonalds,",
            d: "Burger King",
        },
        correctAnswer: "b" 
    },
 
    {
        question: "5. Who has the best customer service?",
        answers: {
            a: "Zaxby's,",
            b: "Chick Fila,",
            c: "Jack n the Box,",
            d: "Burger King",
        },
        correctAnswer: "b" 
    }
];


var questions;
var quizContainer;
var resultsContainer;




generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

    var count = 15;
    var counter = setInterval(timer, 1000);

    function timer() {
        count=count-1;
        $("#timer").text(count + " Seconds Remaining!");
        if (count <= 0) {
            showResults(questions, quizContainer, resultsContainer)
            clearInterval(counter);
            return;
        }
    }

      function showQuestions(questions, quizContainer) {
        var output = [];
        var answers;

        for (var i=0; i<questions.length; i++) {
            answers = [];

            for(letter in questions[i].answers) {
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                     //   + letter + ':'
                        + questions[i].answers[letter]
                    +'</label>'
                );
            }

            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
             );
        }
            quizContainer.innerHTML = output.join('');
    }



    function showResults(questions, quizContainer, resultsContainer) {


        


        var answerContainers = quizContainer.querySelectorAll('.answers');

        var userAnswer = '';
        var numCorrect = 0;
        console.log("This is userAnswer: "+ userAnswer);
        for (var i = 0; i < questions.length; i++) {
            userAnswer = (answerContainers[i].querySelector('input[name="question' +i+'"]:checked')||{}).value;
          
            if(userAnswer===questions[i].correctAnswer) {
                numCorrect++;
                console.log(numCorrect);      
            }
            
        }

            resultsContainer.innerHTML = numCorrect + ' out of ' +questions.length;
       

    }

    showQuestions(questions, quizContainer);



    submitButton.onclick = function() {
        showResults(questions, quizContainer, resultsContainer);

    }
}