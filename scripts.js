// Function to update the content
function updateContent(data) {
    const classroomCodeElement = document.querySelector('.small-block p');
    if (classroomCodeElement) {
        classroomCodeElement.textContent = data.googleClassroomCode;
    }
}

// Function to update the lessons content
function updateLessonsContent(data) {
    const lessonsList = document.getElementById('lessons-list');
    const lessonDetails = document.getElementById('lesson-details');

    if (lessonsList && lessonDetails) {
        lessonsList.innerHTML = '';

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
}

// Function to update the problems content
function updateProblemsContent(data) {
    const problemsList = document.getElementById('problems-list');
    const problemDetails = document.getElementById('problem-details');
    const problemContent = document.getElementById('problem-content');
    let currentProblem = null;

    if (problemsList && problemDetails && problemContent) {
        problemsList.innerHTML = '';

        data.problems.forEach(problem => {
            const problemItem = document.createElement('li');
            const problemLink = document.createElement('a');
            problemLink.href = '#';
            problemLink.textContent = problem.title;
            problemLink.addEventListener('click', () => {
                currentProblem = problem;
                problemDetails.innerHTML = `<h3>${problem.title}</h3><p>${problem.content}</p>`;
                problemContent.innerHTML = '';
                MathJax.typeset();
            });

            problemItem.appendChild(problemLink);
            problemsList.appendChild(problemItem);
        });
    }
}

// Function to update the resources content
function updateResourcesContent(data) {
    const resourcesList = document.getElementById('resources-list');

    if (resourcesList) {
        resourcesList.innerHTML = '';

        data.resources.forEach(resource => {
            const resourceItem = document.createElement('li');
            resourceItem.className = 'resource-block'; // Add the CSS class

            const resourceLink = document.createElement('a');
            resourceLink.href = resource.link;
            resourceLink.textContent = resource.title;
            resourceLink.target = '_blank';

            const resourceDescription = document.createElement('p');
            resourceDescription.textContent = resource.description;

            resourceItem.appendChild(resourceLink);
            resourceItem.appendChild(resourceDescription);
            resourcesList.appendChild(resourceItem);
        });
    }
}

// Fetch the JSON data and call updateContent, updateLessonsContent, updateProblemsContent, and updateResourcesContent
fetch('content.json')
    .then(response => response.json())
    .then(data => {
        updateContent(data);
        updateLessonsContent(data);
        updateProblemsContent(data);
        updateResourcesContent(data);
    })
    .catch(error => console.error('Error fetching content:', error));