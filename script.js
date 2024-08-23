const questionContainer = document.getElementById('question')
const optionsContainer = document.getElementById('options')
const submitButton = document.getElementById('submit-answer')
const buttonContainer = document.getElementById('button-container')

const apiKey = 'c8NVsuj4eYyKCxx9FEB4173BOqKNQzshH0NsoqOx';

const url = `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&difficulty=hard&limit=2`

let correctAnswer = ''
let userScore=0;
let index = 0;
let apiResult = ''

const getQuestions = async () => {
    try {
        const res = await fetch(url, {
            method: 'GET',
        })
        apiResult = await res.json()
        console.log(apiResult)
        userScore=0;
        index=0;
        displayQuestion()
    } catch (e) {
        console.log("Error", e)
    }
}

const displayQuestion = () => {

    if (apiResult && index < apiResult.length) {

        questionContainer.textContent = '';
        optionsContainer.innerHTML = ''

        questionContainer.textContent = apiResult[index].question

        submitButton.disabled = false;

        Object.entries(apiResult[index].answers).forEach(([key, option]) => {
            if (option !== null) {

                const radioElement = document.createElement('input')
                radioElement.type = 'radio'
                radioElement.name = 'options'
                radioElement.id = key

                const radioLabel = document.createElement('label')
                radioLabel.setAttribute('for', key)
                radioLabel.textContent = option

                optionsContainer.append(radioElement, radioLabel)
                optionsContainer.append(document.createElement('br'))
            }
        })
    } else {
        displayResult()
    }
}

const displayResult = () => {
    questionContainer.textContent = 'Quiz Complete!';
    optionsContainer.innerHTML = `Your score: ${userScore}/${apiResult.length}<br>`;
    submitButton.disabled = true;
    submitButton.style.display = 'none'
    const resetButton = document.createElement('button')
    resetButton.innerText = 'Reset'
    resetButton.classList.add('button')
    buttonContainer.appendChild(resetButton)
    resetButton.addEventListener('click', () => {
        getQuestion()
        resetButton.remove()
    })
}

const checkRightAnswer = () => {
    const userAnswer = document.querySelector('input[name="options"]:checked')

    let correctAnswerKey;
    Object.keys(apiResult[index].correct_answers).forEach(key => {
        if (apiResult[index].correct_answers[key] === 'true') {
            correctAnswerKey = key.replace('_correct', '')
        }
    })
    correctAnswer = apiResult[index].answers[correctAnswerKey]

    if (userAnswer) {

        const selectedAnswer = userAnswer.nextElementSibling.innerText;

        if (selectedAnswer == correctAnswer) {
            console.log("Correct")
            userScore++;
        } else {
            console.log("Incorrect")
        }
        index++;
    }else{
        alert('Please select any option to proceed')
    }
}

submitButton.addEventListener('click', checkRightAnswer)

document.addEventListener('DOMContentLoaded', getQuestions)