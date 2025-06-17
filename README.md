# Role-Based-Access-FMS
For this project we are going to use monorepo approach we write fronted/backend in single repo as of now.

## Frontend Architecture And Flow:-

## Tech Stack:-
- Webpack, 
- Tailwind, 
- React.js

## Backend Architecture And Flow:-

## Tech Stack:-
- Node.js, 
- Express.js, 
- MongoDB




## Docker setup Structure:-

For managing our application Depedency we are going to use Docker. but the Question comes here is Why ??? 
- consistency all accross the machine 
- get rid of node/modules
- No need to configure or install while hosting just run dockerfile thats it

### Frontend
- Dockerfile - for production
- Dockerfile.dev - for development

### Backend
- Dockerfile - for production
- Dockerfile.dev - for development

docker-compose.yml- for production
docker-compose.dev.yml - for development
