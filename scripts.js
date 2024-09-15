function fetchData() {
    return fetch('info/data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => console.error('Error loading data:', error));
}

// Function to load lessons into the lessons list
function loadLessons() {
    fetchData().then(data => {
        const lessonsList = document.getElementById('lessons-list');
        if (lessonsList) {
            lessonsList.innerHTML = ''; // Clear existing content
            data.lessons.forEach(lesson => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `<a href="#" onclick="showLesson('${lesson.id}')">${lesson.title}</a>`;
                lessonsList.appendChild(listItem);
            });
        }
    }).catch(error => console.error('Error loading lessons:', error));
}

// Function to load problems into the problems list
function loadProblems() {
    fetchData().then(data => {
        const problemsList = document.getElementById('problems-list');
        if (problemsList) {
            problemsList.innerHTML = ''; // Clear existing content
            data.problems.forEach(problem => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `<a href="#" onclick="showProblem('${problem.id}')">${problem.problem}</a>`;
                problemsList.appendChild(listItem);
            });
        }
    }).catch(error => console.error('Error loading problems:', error));
}

// Function to show lesson details
function showLesson(lessonId) {
    fetchData().then(data => {
        const lesson = data.lessons.find(lesson => lesson.id === lessonId);
        if (lesson) {
            document.getElementById('lesson-content').innerHTML = `
                <h3>${lesson.title}</h3>
                <p>${lesson.description}</p>
                <p>${lesson.objectives}</p>
            `;
        }
    }).catch(error => console.error('Error showing lesson:', error));
}

// Function to show problem details
function showProblem(problemId) {
    fetchData().then(data => {
        const problem = data.problems.find(problem => problem.id === problemId);
        if (problem) {
            document.getElementById('problem-content').innerHTML = `
                <h3>${problem.problem}</h3>
                <p>${problem.task}</p>
            `;
        }
    }).catch(error => console.error('Error showing problem:', error));
}

// Function to submit task answer
function submitTaskAnswer() {
    fetchData().then(data => {
        const problem = data.problems.find(problem => problem.id === 'problem1');
        if (problem) {
            const userAnswer = document.getElementById('task-answer').value;
            const feedback = userAnswer === problem.answer ? "Correct!" : "Incorrect, try again.";
            document.getElementById('task-feedback').innerText = feedback;
        }
    }).catch(error => console.error('Error submitting task answer:', error));
}

// Initialize the page when DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadLessons();
    loadProblems();
});