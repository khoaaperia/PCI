// File: /company-site-editor/company-site-editor/src/js/edit.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('edit-form');
    const servicesInput = document.getElementById('services');
    const expertiseInput = document.getElementById('expertise');
    const caseStudiesInput = document.getElementById('case-studies');
    const technologiesInput = document.getElementById('technologies');
    const testimonialsInput = document.getElementById('testimonials');
    const contactInput = document.getElementById('contact');

    // Load existing data from site-data.json
    fetch('../data/site-data.json')
        .then(response => response.json())
        .then(data => {
            servicesInput.value = data.services.join('\n');
            expertiseInput.value = data.expertise;
            caseStudiesInput.value = data.caseStudies.join('\n');
            technologiesInput.value = data.technologies;
            testimonialsInput.value = data.testimonials;
            contactInput.value = `Email: ${data.contact.email}\nPhone: ${data.contact.phone}`;
        });

    // Save updated data back to site-data.json
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const updatedData = {
            services: servicesInput.value.split('\n'),
            expertise: expertiseInput.value,
            caseStudies: caseStudiesInput.value.split('\n'),
            technologies: technologiesInput.value,
            testimonials: testimonialsInput.value,
            contact: {
                email: contactInput.value.split('\n')[0].replace('Email: ', ''),
                phone: contactInput.value.split('\n')[1].replace('Phone: ', '')
            }
        };

        // Save updated data to site-data.json
        fetch('../data/site-data.json', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        })
        .then(response => {
            if (response.ok) {
                alert('Data updated successfully!');
            } else {
                alert('Error updating data.');
            }
        });
    });
});