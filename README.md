# URL Shortener API using Nest.js

Welcome to the documentation for the URL Shortener API built with Nest.js! This API allows you to easily shorten long URLs into more manageable and shareable links. It's a simple and efficient way to make your links concise.

## Getting Started

Follow these instructions to set up the URL Shortener API on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm
- Nest.js
- MySQL or Sqlite

### Installation

1. Clone the repository: `git clone https://github.com/Iremide-ds/url_shortener.git`
2. Navigate to the project directory: `cd url_shortener`
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
