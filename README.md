# Lawyer Assistant
This is a web app built using Angular and Express.js to help lawyers with their work.

## Screenshots
![App Screenshot](./screenshot/home)
![App Screenshot](./screenshot/bloger)
![App Screenshot](./screenshot/login)
![App Screenshot](./screenshot/dashboard)
![App Screenshot](./screenshot/fileExplorer)


---

## Features

- Case management
- Client management
- Document management
- Task management
- Calendar management
- Billing management
- Bloger
- File Manger
- Chat 
- calculator




## Requirements

- Node.js v16 or higher
- Angular CLI
## Installation
-  Clone this repository:

```bash
  git clone https://github.com/mahmoudashraf-code/lawerAssistant.git
  cd lawerAssistant
```
- Install front dependencies:

```bash
  npm i
```

- Install server dependencies:

```bash
  cd server
  npm i
```

## Install using Docker Image
```bash
  docker pull mahmoudashraf2000/lawyer-assistant
```


## Usage
-  Start the server:
```bash
  cd server
  npm run start
```

-  Start frontend:

```bash
  npm run build
```

- Open a web browser and go to http://localhost:3000


## Run In Docker
- To build the Docker image:
```bash
  docker build -t lawyer-assistant .
```
- To start the Docker container:
```bash
  docker run -p 3000:3000 lawyer-assistant
```




## Security
This app does not store any of your personal information. All communication between the client and server is encrypted over HTTPS.


## Troubleshooting
If you are having any problems with this app, please open an issue on GitHub.


## License
This app is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License.


