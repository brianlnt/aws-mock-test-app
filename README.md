# AWS Certification Mock Test Web App

A web application for practicing AWS certification exams with timed tests, progress tracking, and result analysis.

## Features

- **Authentication System**: Register, login, and user profile management
- **Test Taking Interface**: Timed and untimed mock tests
- **Dashboard**: View test history, performance metrics, and recommended tests
- **Admin Panel**: Manage questions, tests, and users
- **Responsive Design**: Mobile-friendly interface

## Technology Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **State Management**: React Context API
- **Routing**: React Router
- **UI Components**: Custom components with Tailwind CSS
- **Mock Database**: JavaScript in-memory data store

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/aws-mock-test-app.git
   cd aws-mock-test-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

### User Accounts

- **Regular User**: Register with any email not containing "admin"
- **Admin User**: Register with an email containing "admin" (e.g., admin@example.com)

### Taking Tests

1. Login to your account
2. Navigate to the Tests section
3. Choose a test to take
4. Complete the test within the time limit (if applicable)
5. View your results and explanations

### Admin Features

1. Login with an admin account
2. Access the admin panel from the dashboard
3. Manage questions, tests, and user accounts

## Project Structure

- `/src/components`: UI components
  - `/ui`: Reusable UI components
  - `/layout`: Layout components
  - `/user`: User-specific components
  - `/admin`: Admin-specific components
- `/src/pages`: Page components
- `/src/context`: React context providers
- `/src/services`: Service layer for data handling
- `/src/types`: TypeScript type definitions
- `/src/utils`: Utility functions
- `/src/data`: Mock data

## License

MIT

## Acknowledgments

- AWS for providing great certification programs
- React team for the amazing framework
- Tailwind CSS for the styling utilities 