# GalaDevs

GalaDevs is a portfolio website showcasing projects, skills, and contact information. The website is built using HTML, CSS, JavaScript, and PHP, and it includes dynamic functionality such as database interactions.

## Features

- **Portfolio Showcase**: Highlights past projects and work.
- **Contact Form**: Allows users to reach out via a functional contact form.
- **Database Integration**: Handles CRUD operations for user reviews or other data (e.g., `create.php`, `delete.php`, etc.).
- **Responsive Design**: Optimized for both desktop and mobile devices.

## File Structure

### **Folders**
- `css/`: Contains CSS files for styling the website.
- `image/` and `images/`: Stores image assets (consider merging these folders for clarity).
- `js/`: Contains JavaScript files for interactivity.

### **Important Files**
- `.DS_Store`: System file (can be ignored).
- `.gitattributes`: Configuration for repository-specific settings.
- `README.md`: This documentation file.
- PHP Files:
  - `about.php`: About page.
  - `contact.php`: Contact page for reaching out.
  - `create.php`, `delete.php`, `update.php`, `read.php`: CRUD operations for database records.
  - `db_config.php`: Contains database connection settings (ensure sensitive data is secured).
  - `index.php`: Main entry point of the website.
  - `portfolio.php`: Portfolio page showcasing work.
- SQL File:
  - `reviews1.sql`: Database schema or data for reviews.

## Deployment

The website is deployed using **GitHub Pages**. You can access the live site at:

**[galadevs.software](http://galadevs.software)**

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/RheyVic/GalaDevs.git
   ```
2. Set up a local server (e.g., XAMPP, WAMP, or MAMP).
3. Import the database:
   - Use the `reviews1.sql` file to set up the database schema.
4. Update `db_config.php` with your database credentials.
5. Access the site via `http://localhost`.

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact

For any inquiries, please contact:
- **Name**: Rhey Victor Macayran
- **Email**: rvsmacayran@gmail.com
- **Website**: [galadevs.software](http://galadevs.software)
