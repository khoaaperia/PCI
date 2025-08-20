# Company Site Editor

## Overview
The Company Site Editor is a web-based application designed to facilitate the editing of content for the Acme Payment Solutions website. This project allows users to update various sections of the website easily, including services, expertise, case studies, technologies, testimonials, and contact information.

## Project Structure
```
company-site-editor
├── src
│   ├── index.html          # Main HTML structure for the website
│   ├── edit.html           # Editing interface for the website data
│   ├── js
│   │   ├── main.js         # Handles functionality for the main website
│   │   └── edit.js         # Manages editing functionality
│   └── css
│       └── styles.css      # Styles for the website and edit page
├── data
│   └── site-data.json      # Stores editable data in JSON format
├── package.json             # Configuration file for npm
└── README.md                # Documentation for the project
```

## Setup Instructions
1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd company-site-editor
   ```

2. **Install Dependencies**
   Ensure you have Node.js installed. Then run:
   ```bash
   npm install
   ```

3. **Run the Application**
   You can open `src/index.html` in your web browser to view the main website. To access the editing interface, open `src/edit.html`.

## Usage Guidelines
- **Editing Content**: Navigate to `edit.html` to modify the content. The forms will be pre-filled with the current data from `site-data.json`. After making changes, click the save button to update the JSON file.
- **Viewing Changes**: After saving changes in the edit interface, refresh `index.html` to see the updated content.

## File Descriptions
- **src/index.html**: Contains the main structure of the Acme Payment Solutions website.
- **src/edit.html**: Provides an interface for editing the website's content.
- **src/js/main.js**: Loads data from `site-data.json` and populates `index.html`.
- **src/js/edit.js**: Loads current data into the edit forms and saves updates back to `site-data.json`.
- **src/css/styles.css**: Contains styles for both the main website and the edit page.
- **data/site-data.json**: Stores the editable content in a structured JSON format.
- **package.json**: Lists project dependencies and scripts for easy management.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.