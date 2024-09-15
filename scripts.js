async function fetchData() {
    const response = await fetch('info/data.json');
    const data = await response.json();
    return data;
}

function showLesson(lessonId) {
    fetchData().then(data => {
        const lesson = data.lessons.find(lesson => lesson.id === lessonId);
        document.getElementById('lesson-details').innerHTML = `
            <h3>${lesson.title}</h3>
            <p>${lesson.description}</p>
            <p><strong>Objectives:</strong> ${lesson.objectives}</p>
        `;
    });
}

function showProblem(problemId) {
    fetchData().then(data => {
        const problem = data.problems.find(problem => problem.id === problemId);
        document.getElementById('problem-details').innerHTML = `
            <h3>${problem.problem}</h3>
        `;
        document.getElementById('task-content').innerHTML = `
            <p>${problem.task}</p>
        `;
    });
}

function submitTaskAnswer() {
    fetchData().then(data => {
        const problem = data.problems.find(problem => problem.id === 'problem1');
        const userAnswer = document.getElementById('task-answer').value;
        const feedback = userAnswer === problem.answer ? "Correct!" : "Incorrect, try again.";
        document.getElementById('task-feedback').innerText = feedback;
    });
}

function updateFeaturedContent() {
    fetchData().then(data => {
        document.querySelector('.large-block:last-child p').innerText = data.featuredContent.events;
    });
}

function updateGoogleClassroomCode() {
    fetchData().then(data => {
        document.querySelector('.small-block p').innerText = `Join us with the code: ${data.googleClassroom.code}`;
    });
}

function loadLessons() {
    fetchData().then(data => {
        const lessonsList = document.getElementById('lessons-list');
        data.lessons.forEach(lesson => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<a href="#" onclick="showLesson('${lesson.id}')">${lesson.title}</a>`;
            lessonsList.appendChild(listItem);
        });
    });
}

function loadProblems() {
    fetchData().then(data => {
        const problemsList = document.getElementById('problems-list');
        data.problems.forEach(problem => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<a href="#" onclick="showProblem('${problem.id}')">${problem.problem}</a>`;
            problemsList.appendChild(listItem);
        });
    });
}

function checkAnswer(correctAnswer) {
    const userAnswer = document.getElementById('answer').value;
    const feedback = userAnswer === correctAnswer ? "Correct!" : "Incorrect, try again.";
    document.getElementById('feedback').innerText = feedback;
}

document.addEventListener('DOMContentLoaded', () => {
    updateFeaturedContent();
    updateGoogleClassroomCode();
    loadLessons();
    loadProblems();
});