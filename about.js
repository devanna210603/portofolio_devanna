// Create the main container for the about section
const aboutContainer = document.createElement('div');
aboutContainer.id = 'about-container';

// Create a function to fetch data from the API and build the HTML structure
function fetchDataAndBuildHTML() {
    // Define the API URL for the "about" section data (replace with your actual API URL)
    const apiUrl = 'https://example.com/about-api.php';

    // Fetch data from the API
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Assuming the API returns JSON data
        })
        .then(data => {
            // Create the HTML structure based on the data
            const aboutContent = document.createElement('div');
            aboutContent.classList.add('about-content');
            aboutContent.innerHTML = `
                <div class="row">
                    <div class="col-sm-6">
                        <div class="single-about-txt">
                            <h3>${data.description}</h3>
                            <p>${data.summary}</p>
                            <!-- Add your additional data here -->
                        </div>
                    </div>
                    <div class="col-sm-offset-1 col-sm-5">
                        <div class="single-about-img">
                            <img src="${data.imageSrc}" alt="${data.imageAlt}">
                            <div class="about-list-icon">
                                <ul>
                                    <!-- Add your social media links here -->
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            // Append the aboutContent to the aboutContainer
            aboutContainer.appendChild(aboutContent);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

// Call the fetchDataAndBuildHTML function when the page loads
window.addEventListener('load', fetchDataAndBuildHTML);

// Append the aboutContainer to the document body
document.body.appendChild(aboutContainer);
