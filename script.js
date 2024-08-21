const questionContainer = document.getElementById('question')
const optionsContainer = document.getElementById('options')
const submitButton = document.getElementById('submit-answer')
const buttonContainer = document.getElementById('button-container')

const apiKey = 'c8NVsuj4eYyKCxx9FEB4173BOqKNQzshH0NsoqOx';

const url = `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&difficulty=hard&limit=2`

let apiResult=''
const getQuestions = async () => {
    try {
        const res = await fetch(url, {
            method: 'GET',
        })
        apiResult = await res.json()
        console.log(apiResult)
    } catch (e) {
        console.log("Error", e)
    }
}

document.addEventListener('DOMContentLoaded', getQuestions)