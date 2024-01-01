# SnapShort - URL Shortener

SnapShort is a URL shortening service that allows users to create short and shareable links.


## Features

- Shorten long URLs to concise, easy-to-share links.
- User authentication for link management.
- Analytics to track link clicks.
- Custom short URL creation.
- QR code generation.
- Expiration handling.
- Rate limiting and security measures.

## Tech Stack

This project utilizes the following technologies and libraries:

- **Node.js:** A JavaScript runtime built on the V8 JavaScript engine for building server-side applications.

- **Express:** A fast, unopinionated, minimalist web framework for Node.js.

- **MySQL2:** A Node.js-based MySQL library for interacting with the MySQL database.

- **Sequelize:** A promise-based ORM (Object-Relational Mapping) for Node.js that supports multiple database dialects, including MySQL.

- **Passport:** Authentication middleware for Node.js. In this project, it is used for user authentication.

- **Passport-JWT:** Passport strategy for authenticating with JSON Web Tokens (JWT).

- **JSON Web Token (jsonwebtoken):** A library for generating and verifying JSON web tokens. Used for secure communication between the client and server.

- **Axios:** A promise-based HTTP client for making HTTP requests. It's used for making HTTP requests to external services or APIs.

- **bcrypt:** A library for hashing passwords. Used for securely storing user passwords.

- **Body Parser:** Middleware for parsing incoming request bodies. Used for parsing JSON and URL-encoded request bodies.

- **Crypto:** A library for cryptographic operations. It can be used for generating random strings or hashes.

- **Dotenv:** A zero-dependency module for loading environment variables from a .env file into process.env.

- **Morgan:** HTTP request logger middleware for Node.js. Used for logging HTTP requests.

- **Nodemon:** A utility that monitors for changes in files and automatically restarts the server. It is used for development to enhance the development workflow.

- **dotenv:** A zero-dependency module for loading environment variables from a .env file into process.env.


### Installation

1. Clone the repository.
    git clone  https://github.com/jsndz/Snapshort.git
2. Install dependencies using `npm install`.
3. Set up your database and configure the connection in the `.env` file.
4. Run the application using `npm start` or `nodemon` for development.
5. Access the application in your browser at the specified port.
   


# Implementatiom


- [x] **Database Creation:**
  - Set up a MySQL database to store user information, short URLs, and related data.

- [x] **Model Definition:**
  - Define Sequelize models for entities like `User` and `Url`.

- [x] **User Authentication:**
  - Implement user authentication using Passport.js or similar library.

- [x] **URL Shortening Logic:**
  - Create a function to generate short URLs from long URLs.
  - Ensure short URLs are unique and securely generated.

- [x] **API Endpoints:**
  - Implement basic API endpoints for creating short URLs, retrieving original URLs, and handling redirects.

- [x] **Logging:**
  - Set up logging to keep track of URL shortening activities for debugging and analytics.

- [ ] **User Dashboard:**
  - Create a user dashboard where users can manage their shortened URLs.

- [ ] **Expiration Handling:**
  - Implement a mechanism to handle URL expirations or define expiration policies for short URLs.

- [ ] **Analytics:**
  - Add basic analytics to track the number of clicks on each short URL.

- [ ] **Rate Limiting:**
  - Implement rate limiting to prevent abuse or misuse of the URL shortening service.

- [ ] **Custom Short URLs:**
  - Allow users to create custom short URLs if available.

- [ ] **Link Management:**
  - Implement features for editing or deleting short URLs.

- [ ] **QR Code Generation:**
  - Integrate QR code generation for each short URL.

- [ ] **Link Preview:**
  - Provide a preview feature for users to see the destination URL before clicking.

- [ ] **Security Measures:**
  - Implement security measures to validate and sanitize input URLs.
  - Check for malicious URLs to ensure the safety of users.

- [ ] **Scaling:**
  - Optimize the database schema and queries for performance.
  - Consider implementing caching mechanisms for improved scalability.

- [ ] **Webhooks:**
  - Integrate webhooks for notifications or external system integration.

- [ ] **Internationalization:**
  - Support multiple languages for the user interface.

- [ ] **API Documentation:**
  - Generate and maintain clear API documentation for developers.

- [ ] **Testing:**
  - Write comprehensive unit tests and integration tests for the backend functionality.

---
