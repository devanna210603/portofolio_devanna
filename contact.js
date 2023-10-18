// Create the main container for the contact section
const contactContainer = document.createElement('div');
contactContainer.id = 'contact-container';

// Create a function to fetch data from the API and build the HTML structure
function fetchDataAndBuildHTML() {
    // Define the API URL for the "contact" section data (replace with your actual API URL)
    const apiUrl = 'https://example.com/contact-api.php';

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
            const contactContent = document.createElement('div');
            contactContent.classList.add('contact-content');
            contactContent.innerHTML = `
                <div class="row">
                    <div class="col-md-offset-1 col-md-5 col-sm-6">
                        <div class="single-contact-box">
                            <div class="contact-form">
                                <form>
                                    <div class="row">
                                        <div class="col-sm-6 col-xs-12">
                                            <div class="form-group">
                                                <input type="text" class="form-control" id="name" placeholder="${data.nameLabel}" name="name">
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-xs-12">
                                            <div class="form-group">
                                                <input type="email" class="form-control" id="email" placeholder="${data.emailLabel}" name="email">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <input type="text" class="form-control" id="subject" placeholder="${data.subjectLabel}" name="subject">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <textarea class="form-control" rows="8" id="comment" placeholder="${data.messageLabel}"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <div class="single-contact-btn">
                                                <a class="contact-btn" href="#" role="button">${data.submitLabel}</a>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-offset-1 col-md-5 col-sm-6">
                        <div class="single-contact-box">
                            <div class="contact-adress">
                                <div class="contact-add-head">
                                    <h3>${data.name}</h3>
                                    <p>${data.designation}</p>
                                </div>
                                <div class="contact-add-info">
                                    <div class="single-contact-add-info">
                                        <h3>${data.phoneLabel}</h3>
                                        <p>${data.phone}</p>
                                    </div>
                                    <div class="single-contact-add-info">
                                        <h3>${data.emailLabel}</h3>
                                        <p>${data.email}</p>
                                    </div>
                                    <div class="single-contact-add-info">
                                        <h3>${data.websiteLabel}</h3>
                                        <p>${data.website}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="hm-foot-icon">
                                <ul>
                                    <!-- Add your social media links here -->
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            // Append the contactContent to the contactContainer
            contactContainer.appendChild(contactContent);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

// Call the fetchDataAndBuildHTML function when the page loads
window.addEventListener('load', fetchDataAndBuild)
