// This file will handle the functionality for the main website, including loading data from site-data.json and populating the index.html with that data.

document.addEventListener("DOMContentLoaded", function() {
    fetch('../data/site-data.json')
        .then(response => response.json())
        .then(data => {
            document.querySelector('#services ul').innerHTML = data.services.map(service => `<li>${service}</li>`).join('');
            document.querySelector('#expertise p').textContent = data.expertise;
            document.querySelector('#case-studies ul').innerHTML = data.caseStudies.map(caseStudy => `<li>${caseStudy}</li>`).join('');
            document.querySelector('#technologies p').textContent = data.technologies;
            document.querySelector('#testimonials blockquote').textContent = data.testimonials;
            document.querySelector('#contact p').innerHTML = `Email: ${data.contact.email}<br>Phone: ${data.contact.phone}`;
        })
        .catch(error => console.error('Error loading data:', error));
});