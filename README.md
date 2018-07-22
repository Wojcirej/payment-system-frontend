# Payment system - frontend

Frontend application for payment system - see [backend repo](https://github.com/Wojcirej/payment-system) for any specification.

# Technologies
* Angular 6.0.9
* NodeJS 8.11.3
* Webpack 4.16.1

# Development setup
* After cloning repository fire up `npm install` in project directory.
* Prepare your own `.env` file in project root with following variables:
 - environment - set for `development` will disable production mode, which is recommended for development process;
 - PORT - nodejs port for server, 3001 by default
 - API_URL - url leading to the backend API
* After that you should run `npm run configure` script to place values from ENV variables in `/src/environments/environment.ts` file - however, do not push it to remote repository for security reasons, that's not a good practice to store potentially sensitive data in remote repos.

Project is overall not dependent on environment convention prepared by Angular due reasons prettily explained in [this article](https://medium.com/@natchiketa/angular-cli-and-os-environment-variables-4cfa3b849659).

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

# Development server
* You can use default Angular development server by using `ng serve` command - navigate to `http://localhost:4200` to see your webpage.
* You can also use NodeJS server by using `node server.js` command - remember to build version earlier with `npm run build:development`, as it serves application from `/dist` directory.
* Webpack server is also available via `npm run webpack-dev` script - it also serves application from `/dist` directory.

# Deploy
Make sure you have set up properly remotes:
```
git remote add staging https://git.heroku.com/payment-system-frontend-stg.git
git remote add production https://git.heroku.com/payment-system-frontend.git
```
Set configuration variables on heroku before deployment, so their values will be placed in `/src/environments/environment.ts` file during deployment on respective environment.

Then for staging deploy run command:
```
node deploy staging
```
Production deploy:
```
node deploy production
```
During deployment, scripts `npm run configure` and `npm run build:production` are run to serve application in production mode bundled with webpack.

# Live demo
* [Staging](https://payment-system-frontend-stg.herokuapp.com/)
* [Production](https://payment-system-frontend.herokuapp.com/)
