# Form Validation Project

This project is a simple form validation application built with React and Tailwind CSS. It includes user registration and deletion functionalities with toast notifications for user feedback.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Form Validations](#form-validations)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/form-validation.git
   cd form-validation
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Fill out the registration form to add a new user.
3. View the list of registered users.
4. Delete a user by clicking the "Delete" button next to their details.

## Features

- User registration with form validation.
- Display a list of registered users.
- Delete users with a confirmation toast notification.
- Responsive design using Tailwind CSS.

## Form Validations

The form includes the following validations:

- **Name**: Must be at least 3 characters long.
- **Email**: Must be a valid email address.
- **Password**: Must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number.
- **Confirm Password**: Must match the password field.

Validation checks are performed in real-time as the user types, providing immediate feedback.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.