const API_BASE_URL = 'http://localhost:3000';

async function getBooks() {
    try {
        const response = await fetch(`${API_BASE_URL}/books`);
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

async function getBookByISBN() {
    const isbn = prompt('Enter ISBN:');
    try {
        const response = await fetch(`${API_BASE_URL}/books/isbn/${isbn}`);
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

async function getBooksByAuthor() {
    const author = prompt('Enter Author:');
    try {
        const response = await fetch(`${API_BASE_URL}/books/author/${author}`);
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

async function getBooksByTitle() {
    const title = prompt('Enter Title:');
    try {
        const response = await fetch(`${API_BASE_URL}/books/title/${title}`);
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

async function getBookReview() {
    const isbn = prompt('Enter ISBN:');
    try {
        const response = await fetch(`${API_BASE_URL}/books/review/${isbn}`);
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

async function registerUser() {
    const username = prompt('Enter Username:');
    const password = prompt('Enter Password:');
    try {
        const response = await fetch(`${API_BASE_URL}/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

async function loginUser() {
    const username = prompt('Enter Username:');
    const password = prompt('Enter Password:');
    try {
        const response = await fetch(`${API_BASE_URL}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

async function addBookReview() {
    const isbn = prompt('Enter ISBN:');
    const review = prompt('Enter Review:');
    try {
        const response = await fetch(`${API_BASE_URL}/books/review/${isbn}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ review })
        });
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

async function deleteBookReview() {
    const isbn = prompt('Enter ISBN:');
    try {
        const response = await fetch(`${API_BASE_URL}/books/review/${isbn}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        });
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

function displayData(data) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
}