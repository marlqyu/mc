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