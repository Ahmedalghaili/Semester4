
# SmartCity

**SmartCity** is a web-based application designed to enhance community engagement with local government. It enables community members to report public issues and track their resolution, facilitating transparent and accountable communication between citizens and government officials.

## Screenshots

### Homepage
![Homepage Screenshot](https://github.com/user-attachments/assets/bd7845e5-d8c4-4000-9ab5-83c27eea3124)

## Project Overview

- **Purpose**: SmartCity empowers citizens to report and monitor local issues, ensuring complaints reach the appropriate authorities and are publicly tracked. It promotes collaborative governance by fostering community involvement and improving resource allocation and infrastructure.
- **Goals**:
  - Improve communication between citizens and local government
  - Increase community engagement
  - Enhance infrastructure and quality of life by addressing public issues efficiently

## Stakeholders

- **Community Members**: Report issues, track progress, and engage with local governance.
- **Local Government Officials**: Address reported issues, provide status updates, and interact with citizens.
- **Community Leaders**: Oversee and encourage transparent, accountable issue resolution.

## Features

- **User Registration**: Citizens register to access reporting and tracking features.
- **Issue Reporting**: A user-friendly interface for submitting detailed complaints.
- **Issue Tracking**: Citizens track the status and progress of their reports.
- **Government Response**: Officials update issue status and interact with users to ensure accountability.
- **Statistics**: Insights on complaint trends and resolution times to monitor government response efficacy.
- **LLM-powered Chatbot**: Assistance for users navigating the platform and submitting reports.

## Project Structure

- **Backend**: Server and database management for processing reports and user data.
- **Frontend**: Interface for users to register, report issues, and monitor progress.
- **Chatbot Integration**: A Large Language Model (LLM) assists users with platform guidance.

## Installation

### Prerequisites

- **Node.js** (v14 or newer)
- **MySQL** (database for storing user and issue data)

### Steps

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Ahmedalghaili/SmartCity.git
   cd SmartCity
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Configure Database**:

   Set up a MySQL database using XAMPP or another MySQL service. Then, configure the `.env` file with your database credentials and OpenAI API key:

   ```plaintext
   OPENAI_API_KEY=your_openai_api_key_here
   DB_USER=your_db_username
   DB_PASS=your_db_password
   DB_NAME=your_db_name
   ```

4. **Run the Application**:

   Start the server with:

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5000`.

## Usage

1. **Register and Log In**: Create an account to access features.
2. **Report an Issue**: Submit complaints on local issues with details and attachments.
3. **Track Issues**: Monitor the status of your reports on the dashboard.
4. **Statistics**: View statistical insights on reported issues.
5. **Chatbot Assistance**: Use the chatbot for guidance on making reports or navigating the platform.

## Development Process

- **User Research**: Surveys and interviews with target users to guide design and functionality.
- **UI/UX Design**: Created in Figma, focusing on ease of use.
- **Frontend & Backend Development**: Built using Node.js, React, and Tailwind CSS.
- **LLM Integration**: AI-powered chatbot for improved user assistance.
- **Testing**: Comprehensive testing to ensure feature functionality and usability.

## Tools Used

- **Visual Studio Code**: Development environment
- **Figma**: UI/UX design
- **XAMPP**: MySQL database management
- **React & Tailwind CSS**: Frontend framework and styling

## Future Enhancements

- **Third-Party Integrations**: APIs for enhanced communication and functionality with external services.
- **Multimedia Support**: Allow users to submit reports with photos, videos, or audio.
- **Automated Issue Prioritization**: Machine learning for smarter categorization and prioritization.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
