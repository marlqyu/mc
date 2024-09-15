// scripts.js
let lessonDetails = {};
let problemDetails = {};

// Fetch the JSON data
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        lessonDetails = data.lessons;
        problemDetails = data.problems;
    })
    .catch(error => console.error('Error fetching data:', error));

function showLesson(lessonId) {
    const lesson = lessonDetails[lessonId];
    if (lesson) {
        document.getElementById('lesson-details').innerHTML = `
            <h3>${lesson.title}</h3>
            <p>${lesson.description}</p>
            <p><strong>Objectives:</strong> ${lesson.objectives}</p>
        `;
    } else {
        document.getElementById('lesson-details').innerHTML = '<p>Lesson not found.</p>';
    }
}

function showProblem(problemId) {
    const problem = problemDetails[problemId];
    if (problem) {
        document.getElementById('problem-details').innerHTML = `
            <h3>${problem.problem}</h3>
            <input type="text" id="answer" placeholder="Enter your answer">
            <button onclick="checkAnswer('${problem.answer}')">Submit</button>
            <p id="feedback"></p>
        `;
    } else {
        document.getElementById('problem-details').innerHTML = '<p>Problem not found.</p>';
    }
}

function checkAnswer(correctAnswer) {
    const userAnswer = document.getElementById('answer').value;
    const feedback = userAnswer === correctAnswer ? "Correct!" : "Incorrect, try again.";
    document.getElementById('feedback').innerText = feedback;
}

function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}
fetch('data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        lessonDetails = data.lessons;
        problemDetails = data.problems;
    })
    .catch(error => console.error('Error fetching data:', error));