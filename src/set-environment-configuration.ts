import { writeFile } from 'fs';
require('dotenv').config();

const environment = process.env.environment;
const isProd = environment !== 'development';
const targetPath = `./src/environments/environment.ts`;

const envConfigFile = `export const environment = {
  production: ${isProd},
  API_URL: "${process.env.API_URL}",
};`

writeFile(targetPath, envConfigFile, function (err) {
  if (err) {
    console.log(err);
  };
  console.log(`Configuration ${targetPath} updated.`);
});
