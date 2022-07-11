
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
// Don't touch the above code

// Write your MCQs here --- Start --- --------------------

  const myQuestions = [
    {
      question: "The method which is Not suitable for the determination of In-situ density of natural soil is ________. ",
      answers: {
        a: "Sand replacement",
        b: "Oven dry",
        c: "Core cutter",
        d: "Displacement of water"
      },
      correctAnswer: "b"
    },
    {
      question: "Core cutter method is suitable for _____ .",
      answers: {
        a: "Soft soil",
        b: "Hard soil ",
        c: "Cohesive soil",
        d: "Adhesive soil"
      },
      correctAnswer: "a"
    },
    {
      question: "The soil dry density can be defined as",
      answers: {
        a: "The ratio of the weight of soil to the volume of soil",
        b: "The ratio of the weight of solids to volume of soil",
        c: "The ratio of unit weight of soil to unit weight of water",
        d: "None of the above"
      },
      correctAnswer: "a"
    },
    {
        question: "The codebook referred for conducting the core cutter method is",
        answers: {
          a: "IS : 2720 part 29 1975",
          b: "IS : 2720 part 28 1975",
          c: "IS : 2720 part 27 1975",
          d: "IS : 2720 part 26 1975"
        },
        correctAnswer: "a"
      },
      {
        question: "The core cutter method of determining the dry density of  soil is the in-situ test.",
        answers: {
          a: "True",
          b: "False",
        },
        correctAnswer: "a"
      },
  ];

// ---------------------------- End -------------------------------

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
