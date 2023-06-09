// Array de questões e alternativas
const questions = [
    {
      question: "Qual é a capital do Brasil?",
      choices: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
      correctAnswer: 2
    },
    {
      question: "Qual é o maior planeta do sistema solar?",
      choices: ["Júpiter", "Terra", "Saturno", "Marte"],
      correctAnswer: 0
    },
    // Adicione mais questões aqui
  ];
  
  // Variáveis
  let currentQuestion = 0;
  let score = 0;
  let answered = false;
  
  // Função para exibir a próxima pergunta
  function showNextQuestion() {
    const questionElement = document.getElementById("question");
    const choicesContainer = document.getElementById("choices");
    const resultElement = document.getElementById("result");
    const submitButton = document.getElementById("submit");
    const currentQuestionObj = questions[currentQuestion];
  
    questionElement.textContent = currentQuestionObj.question;
  
    // Limpar as opções de escolha anteriores
    choicesContainer.innerHTML = "";
  
    // Exibir as alternativas
    for (let i = 0; i < currentQuestionObj.choices.length; i++) {
      const choice = document.createElement("button");
      choice.textContent = currentQuestionObj.choices[i];
      choice.onclick = function() {
        if (!answered) {
          answered = true;
          checkAnswer(i);
        }
      };
      choicesContainer.appendChild(choice);
    }
  
    resultElement.textContent = "";
    submitButton.style.display = "none";
  }
  
  // Função para verificar a resposta
  function checkAnswer(choiceIndex) {
    const resultElement = document.getElementById("result");
    const currentQuestionObj = questions[currentQuestion];
  
    if (choiceIndex === currentQuestionObj.correctAnswer) {
      score++;
      resultElement.textContent = "Resposta correta!";
    } else {
      resultElement.textContent = "Resposta incorreta!";
    }
  
    currentQuestion++;
    answered = false;
  
    if (currentQuestion < questions.length) {
      setTimeout(showNextQuestion, 1000);
    } else {
      showFinalResult();
    }
  }
  
  // Função para exibir o resultado final
  function showFinalResult() {
    const questionContainer = document.getElementById("question-container");
    const resultElement = document.getElementById("result");
    const scorePercentage = (score / questions.length) * 100;
  
    questionContainer.style.display = "none";
    resultElement.textContent = `Você acertou ${score} de ${questions.length} questões (${scorePercentage}%).`;
  }
  
  // Iniciar o quiz
  showNextQuestion();
  