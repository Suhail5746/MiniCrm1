Contact Management - Mini CRM Feature

This is a Contact Management feature for a CRM system, allowing users to add, view, update, and delete contact details. The application is built with a ReactJS frontend (using Material-UI components) 
and a Node.js backend with a MongoDB database for data persistence. It provides a clean, intuitive interface for managing contacts in one place, with features like sorting, pagination, and error handling.

-----------------------------------------------------------------

1. Backend Setup

Navigate to the server directory:
cd contact-management/server

Install dependencies:
npm install

Create a .env file in the server directory and add the following:
MONGO_URI=mongodb://localhost:27017/contacts
PORT=5000

Start the server:
npm start

------------------------------------------------------------------------
2. Frontend Setup

Navigate to the client directory:
cd contact-management/client


Install dependencies:
npm install


Start the development server:
npm start

---------------------------------------------------------------
Challenges and Solutions

1. Pagination and Sorting
Challenge: Implementing sorting and pagination in the table while maintaining a seamless user experience.
Solution: Used Material-UI’s TablePagination and TableSortLabel components to handle sorting and pagination efficiently. Adjusted the backend to accept query parameters for paginated responses.

2. Error Handling in API Requests
Challenge: Handling validation errors, duplicate entries, and connection issues.
Solution: Implemented validation middleware in Express to ensure required fields are provided.
Used MongoDB’s unique constraint on the email field to prevent duplicates.
Added error handling with descriptive messages for each failure scenario.

4. State Management in the Frontend
Challenge: Keeping the contact list updated across CRUD operations.
Solution: Used React’s useState and useEffect hooks to refresh the contact list after every successful operation.

6. Dynamic Editing
Challenge: Prefilling the form with existing data when editing a contact.
Solution: Passed the selected contact as a prop to the ContactForm component and used useEffect to prepopulate the form fields.

8. Styling Consistency
Challenge: Maintaining a consistent and professional UI.
Solution: Used Material-UI for all components to ensure uniform styling, with custom tweaks for responsiveness and usability.
