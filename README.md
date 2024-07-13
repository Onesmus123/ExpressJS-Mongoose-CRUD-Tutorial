Contact Management API with MongoDB and Mongoose.

This project implements a RESTful API for managing contacts using Node.js, Express, MongoDB, and Mongoose.


Features:

Create Contact: Add a new contact with validation for first name, last name, and unique email address.

Read Contacts: Retrieve all contacts or a specific contact by ID.

Update Contact: Modify an existing contact's information.

Delete Contact: Remove a contact from the database.

Search Contacts: Find contacts by first name, last name, or email address using regex search.

Setup:

1. Installation:
Clone the repository.
Install dependencies using npm install.

2. Environment Configuration:
Create a .env file and set MONGO_URI to your MongoDB connection string.

3. Run the Application:
Start the server using npm start.

4. Endpoints:

POST /api/contact: Create a new contact.

GET /api/contact: Retrieve all contacts.

GET /api/contact/:id: Retrieve a specific contact by ID.

GET /api/search?searchTerm=<term>: Search contacts by first name, last name, or email address.

PUT /api/contact/:id: Update a contact by ID.

DELETE /api/contact/:id: Delete a contact by ID.


Error Handling:

Proper error handling and validation are implemented for creating, updating, and deleting contacts.
Unique email address constraint is enforced to prevent duplicate entries.

Technologies Used:

Node.js
Express.js
MongoDB
Mongoose
JavaScript (ES6)

Author:

Onesmus Mutyauvyu.
