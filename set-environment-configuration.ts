import { writeFile, mkdir } from 'fs';
require('dotenv').config();

const environment = process.env.environment;
const isProd = environment !== 'development';
const targetPath = `./src/environments/environment.ts`;

const envConfigFile = `export const environment = {
  production: ${isProd},
  API_URL: "${process.env.API_URL}",
};`

mkdir("./src/environments", function(err) {
  if(err) {
    console.log(err);
  }
  else {
    console.log("Environments catalog has been created.");
  };
});

writeFile(targetPath, envConfigFile, function(err){
  if(err){
    console.log(err);
  }
  else {
    console.log(`Configuration has been set in ${targetPath}.`);
  };
});
