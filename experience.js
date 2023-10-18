// Create the main container for the experience section
const experienceContainer = document.createElement('div');
experienceContainer.id = 'experience-container';

// Create a function to fetch data from the API and build the HTML structure
function fetchDataAndBuildHTML() {
    // Define the API URL for the "experience" section data (replace with your actual API URL)
    const apiUrl = 'https://example.com/experience-api.php';

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
            const experienceContent = document.createElement('div');
            experienceContent.classList.add('experience-content');

            data.forEach(item => {
                const timelineBox = document.createElement('div');
                timelineBox.classList.add('single-timeline-box', 'fix');

                const rowDiv = document.createElement('div');
                rowDiv.classList.add('row');

                const leftCol = document.createElement('div');
                leftCol.classList.add('col-md-5');

                const experienceTime = document.createElement('div');
                experienceTime.classList.add('experience-time', 'text-right');

                const titleH4 = document.createElement('h4');
                titleH4.classList.add('title');

                const circleIcon = document.createElement('span');
                circleIcon.innerHTML = `<i class="fa fa-circle" aria-hidden="true"></i>`;
                circleIcon.style.color = item.iconColor; // Set the circle color
                titleH4.appendChild(circleIcon);

                titleH4.innerHTML += item.organization;

                const dateH3 = document.createElement('h3');
                dateH3.textContent = item.date;

                const descriptionP = document.createElement('p');
                descriptionP.classList.add('description');
                descriptionP.textContent = item.description;

                experienceTime.appendChild(titleH4);
                experienceTime.appendChild(dateH3);
                experienceTime.appendChild(descriptionP);
                leftCol.appendChild(experienceTime);
                rowDiv.appendChild(leftCol);

                const rightCol = document.createElement('div');
                rightCol.classList.add('col-md-offset-1', 'col-md-5');

                const timeline = document.createElement('div');
                timeline.classList.add('timeline');

                const timelineContent = document.createElement('div');
                timelineContent.classList.add('timeline-content', 'text-right');

                const rightTitleH4 = document.createElement('h4');
                rightTitleH4.classList.add('title');

                const rightCircleIcon = document.createElement('span');
                rightCircleIcon.innerHTML = `<i class="fa fa-circle" aria-hidden="true"></i>`;
                rightTitleH4.appendChild(rightCircleIcon);

                rightTitleH4.innerHTML += item.rightTitle;

                const rightDateH5 = document.createElement('h5');
                rightDateH5.textContent = item.rightDate;

                const rightDescriptionP = document.createElement('p');
                rightDescriptionP.classList.add('description');
                rightDescriptionP.textContent = item.rightDescription;

                timelineContent.appendChild(rightTitleH4);
                timelineContent.appendChild(rightDateH5);
                timelineContent.appendChild(rightDescriptionP);
                timeline.appendChild(timelineContent);
                rightCol.appendChild(timeline);
                rowDiv.appendChild(rightCol);

                timelineBox.appendChild(rowDiv);
                experienceContent.appendChild(timelineBox);
            });

            experienceContainer.appendChild(experienceContent);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

// Call the function when the page loads
window.addEventListener('load', fetchDataAndBuildHTML);

// Append the experienceContainer to the document body
document.body.appendChild(experienceContainer);
