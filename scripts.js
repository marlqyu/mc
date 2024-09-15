// Function to fetch data from the JSON file
function fetchData() {
    return fetch('info/data.json')
        .then(response => response.json())
        .catch(error => console.error('Error loading data:', error));
}

// Function to load lessons into the lessons list
function loadLessons() {
    fetchData().then(data => {
        const lessonsList = document.getElementById('lessons-list');
        lessonsList.innerHTML = ''; // Clear existing content
        data.lessons.forEach(lesson => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<a href="#" onclick="showLesson('${lesson.id}')">${lesson.title}</a>`;
            lessonsList.appendChild(listItem);
        });
    });
}

// Function to load problems into the problems list
function loadProblems() {
    fetchData().then(data => {
        const problemsList = document.getElementById('problems-list');
        problemsList.innerHTML = ''; // Clear existing content
        data.problems.forEach(problem => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<a href="#" onclick="showProblem('${problem.id}')">${problem.problem}</a>`;
            problemsList.appendChild(listItem);
        });
    });
}

// Function to show lesson details
function showLesson(lessonId) {
    fetchData().then(data => {
        const lesson = data.lessons.find(lesson => lesson.id === lessonId);
        document.getElementById('lesson-content').innerHTML = `
            <h3>${lesson.title}</h3>
            <p>${lesson.description}</p>
            <p>${lesson.objectives}</p>
        `;
    });
}

// Function to show problem details
function showProblem(problemId) {
    fetchData().then(data => {
        const problem = data.problems.find(problem => problem.id === problemId);
        document.getElementById('problem-content').innerHTML = `
            <h3>${problem.problem}</h3>
            <p>${problem.task}</p>
        `;
    });
}

// Function to submit task answer
function submitTaskAnswer() {
    fetchData().then(data => {
        const problem = data.problems.find(problem => problem.id === 'problem1');
        const userAnswer = document.getElementById('task-answer').value;
        const feedback = userAnswer === problem.answer ? "Correct!" : "Incorrect, try again.";
        document.getElementById('task-feedback').innerText = feedback;
    });
}

// Initialize the page when DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadLessons();
    loadProblems();
});