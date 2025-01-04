# To-Do-Backend

A backend server created for To-Do List management using express & typescript.

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

## Screenshots

### POST REQUESTS 

- Task 1 added
![post 1](./screenshots/post%201.png)

- Task 2 added
![post2](./screenshots/post%202.png)

- Task 3 added
![post 3](./screenshots/post%203.png)

### GET REQUESTS 

- All tasks fetched
![get all](./screenshots/get%20all.png)

- Bad request handled on wrong id
![error 400](./screenshots/get%20error%20400.png)

- Out of the bounds error handled
![error 404](./screenshots/get%20error%20404.png)

- Fetched task by id
![task 1](./screenshots/get%20one.png)

#### PUT REQUEST

- Updated status of task 1
![status update](./screenshots/put%201.png)
![task 1 after put](./screenshots/put%201%20get.png)

#### DELETE REQUEST

- Deleted task 1
![task delete](./screenshots/delete%201.png)
![tasks after delete](./screenshots/delete%20get%20all.png)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)
