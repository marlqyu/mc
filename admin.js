// admin.js
document.getElementById('lesson-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('lesson-title').value;
    const description = document.getElementById('lesson-description').value;
    const objectives = document.getElementById('lesson-objectives').value;

    fetch('/add-lesson', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description, objectives }),
    })
    .then(response => response.text())
    .then(data => alert(data))
    .catch(error => console.error('Error:', error));
});

document.getElementById('problem-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const problem = document.getElementById('problem-title').value;
    const answer = document.getElementById('problem-answer').value;

    fetch('/add-problem', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ problem, answer }),
    })
    .then(response => response.text())
    .then(data => alert(data))
    .catch(error => console.error('Error:', error));
});