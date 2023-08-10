# URL Shortener API using Node.js

Welcome to the documentation for the URL Shortener API built with Node.js! This API allows you to easily shorten long URLs into more manageable and shareable links. It's a simple and efficient way to make your links concise.

## Getting Started

Follow these instructions to set up the URL Shortener API on your local machine for development and testing purposes.

### Prerequisites

- Node.js (version X.X.X)
- npm (version X.X.X)
- MongoDB (version X.X.X)

### Installation

1. Clone the repository: `git clone https://github.com/your-username/url-shortener-api.git`
2. Navigate to the project directory: `cd url-shortener-api`
3. Install dependencies: `npm install`
4. Generate `.env` and update the following configuration values:

- DB
- DBUSER
- DBPASSWORD
- DBPORT
- DBHOST
- SECRET

5. Start the server: `npm start` or `npm run start:dev`


The API should now be running on `http://localhost:3000`.

## Usage

### Shorten a URL

**Endpoint:** `POST /shorten`

**Request:**
```json
{
  "url": "https://www.example.com/this-is-a-long-url-to-be-shortened"
}
```

**Response:**
```json
"host/i/random_id"
```
#### WHich will then redirect to the long url

## Error Handling
#### The API returns appropriate error codes and messages for common scenarios, such as invalid URLs or server errors.
