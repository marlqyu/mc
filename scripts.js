// Function to update the content
function updateContent(data) {
    // Update Google Classroom Code
    const classroomCodeElement = document.querySelector('.small-block p');
    classroomCodeElement.textContent = data.googleClassroomCode;
}

// Fetch the JSON data and call updateContent
fetch('content.json')
    .then(response => response.json())
    .then(data => updateContent(data))
    .catch(error => console.error('Error fetching content:', error));