// Create the main container for the education section
const educationContainer = document.createElement('div');
educationContainer.id = 'education-container';

// Create a function to fetch data from the API and build the HTML structure
function fetchDataAndBuildHTML() {
    // Define the API URL for the "education" section data (replace with your actual API URL)
    const apiUrl = 'https://example.com/api.php';

    // Fetch data from the API
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Assuming the API returns JSON data
        })
        .then(data => {
            // Build the HTML structure based on the data
            data.forEach(item => {
                const educationItem = document.createElement('div');
                educationItem.classList.add('education-item');
                educationItem.innerHTML = `
                    <h2>${item.year}</h2>
                    <h3>${item.title} <span>in</span> ${item.school}</h3>
                    <p>${item.description}</p>
                `;
                educationContainer.appendChild(educationItem);
            });
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

// Call the function when the page loads
window.addEventListener('load', fetchDataAndBuildHTML);

// Append the educationContainer to the document body
document.body.appendChild(educationContainer);
