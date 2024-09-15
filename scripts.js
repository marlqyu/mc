// Function to update the content
function updateContent(data) {
    // Update Google Classroom Code
    const classroomCodeElement = document.querySelector('.small-block p');
    classroomCodeElement.textContent = data.googleClassroomCode;
}

// Fetch the JSON data and call updateContent
fetch('content.json')
    .then(response => response.json())
    .then(data => {
        updateContent(data);
        updateLessonsContent(data);
    })
    .catch(error => console.error('Error fetching content:', error));

// Function to update the lessons content
function updateLessonsContent(data) {
    const lessonsList = document.getElementById('lessons-list');
    const lessonDetails = document.getElementById('lesson-details');

    data.lessons.forEach(lesson => {
        const lessonItem = document.createElement('li');
        const lessonLink = document.createElement('a');
        lessonLink.href = '#';
        lessonLink.textContent = lesson.title;
        lessonLink.addEventListener('click', () => {
            lessonDetails.innerHTML = `<h3>${lesson.title}</h3><p>${lesson.content}</p>`;
        });

        lessonItem.appendChild(lessonLink);
        lessonsList.appendChild(lessonItem);
    });
}

// Fetch the JSON data and call updateLessonsContent
fetch('content.json')
    .then(response => response.json())
    .then(data => updateLessonsContent(data))
    .catch(error => console.error('Error fetching lessons content:', error));



// Function to update the problems content
function updateProblemsContent(data) {
    const problemsList = document.getElementById('problems-list');
    const problemDetails = document.getElementById('problem-details');
    const problemContent = document.getElementById('problem-content');
    const submitButton = document.getElementById('submit-answer');
    let currentProblem = null;

    data.problems.forEach(problem => {
        const problemItem = document.createElement('li');
        const problemLink = document.createElement('a');
        problemLink.href = '#';
        problemLink.textContent = problem.title;
        problemLink.addEventListener('click', () => {
            currentProblem = problem;
            problemDetails.innerHTML = `<h3>${problem.title}</h3><p>${problem.content}</p>`;
            problemContent.innerHTML = '';
        });

        problemItem.appendChild(problemLink);
        problemsList.appendChild(problemItem);
    });

    // Create a div for feedback message
    const feedbackDiv = document.createElement('div');
    feedbackDiv.id = 'feedback-message';
    submitButton.parentNode.appendChild(feedbackDiv);

    submitButton.addEventListener('click', () => {
        const userAnswer = document.getElementById('problem-answer').value;
        if (currentProblem) {
            if (userAnswer === currentProblem.answer) {
                feedbackDiv.innerHTML = `<p>Your answer: ${userAnswer}</p><p>Correct!</p>`;
            } else {
                feedbackDiv.innerHTML = `<p>Your answer: ${userAnswer}</p><p>Incorrect. Try again.</p>`;
            }
        }
    });
}

// Fetch the JSON data and call updateProblemsContent
fetch('problems.json')
    .then(response => response.json())
    .then(data => updateProblemsContent(data))
    .catch(error => console.error('Error fetching problems content:', error));