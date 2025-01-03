# To-Do-Backend

A backend server created for To-Do List management.

## Prerequisites

Before you start, ensure you have Node.js installed on your machine. If not, you can download and install it from [here](https://nodejs.org/).

## Installation

1. Clone the repository:

```bash
git clone https://github.com/avi074/To-Do-Backend.git
```

2. Navigate into the project directory:

```bash
cd To-Do-Backend
```

3. Install dependencies:

```bash
npm install
```

## Usage

To start the server

```bash
npm run dev
```

To convert the code into javascript

```bash
npm run convert
```

## Folder Structure

- `middleware/` : Contains middleware functions for api handling.

- `models/` : Contains task model & db functions

- `controllers/` : Contains controller functions for models

- `routes/` : Contains multiple routers based on models

- `app.ts` : server config file

- `db.ts` : sqlite db config file

- `logger.ts` : custom logger

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)
