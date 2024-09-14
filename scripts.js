// scripts.js
function showLesson(lessonId) {
    const lessonDetails = {
        lesson1: {
            title: "Lesson 1",
            description: "Introduction to Algebra",
            objectives: "Understand basic algebraic concepts."
        },
        lesson2: {
            title: "Lesson 2",
            description: "Geometry Basics",
            objectives: "Learn about shapes and their properties."
        }
    };

    const lesson = lessonDetails[lessonId];
    document.getElementById('lesson-details').innerHTML = `
        <h3>${lesson.title}</h3>
        <p>${lesson.description}</p>
        <p><strong>Objectives:</strong> ${lesson.objectives}</p>
    `;
}

function showProblem(problemId) {
    const problemDetails = {
        problem1: {
            problem: "What is 2 + 2?",
            answer: "4"
        },
        problem2: {
            problem: "What is the square root of 16?",
            answer: "4"
        }
    };

    const problem = problemDetails[problemId];
    document.getElementById('problem-details').innerHTML = `
        <h3>${problem.problem}</h3>
        <input type="text" id="answer" placeholder="Enter your answer">
        <button onclick="checkAnswer('${problem.answer}')">Submit</button>
        <p id="feedback"></p>
    `;
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