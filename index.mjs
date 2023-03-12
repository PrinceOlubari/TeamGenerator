// const Manager = require("./lib/Manager");
import Manager from "./lib/Manager.mjs";
// const Engineer = require("./lib/Engineer");
import Engineer from "./lib/Engineer.mjs";
// const Intern = require("./lib/Intern");
import Intern from "./lib/Intern.mjs";
// const inquirer = require("inquirer");
import inquirer from "inquirer";
// const path = require("path");
// const fs = require('fs/promises');
// import path from 'path';
// const fs = require("fs");
import fs from "fs/promises";

// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

// const render = require("./src/page-template.js");

import render from "./src/page-template.mjs";
// import { rename } from 'fs';

// TODO: Write Code to gather information about the development team members, and render the HTML file.

const teamMembersArray = [];

const askManagerQuestions = async () => {
  const ManagerQuestions = [
    {
      type: "input",
      name: "name",
      message: "What is your Team Manager's name? ",
    },
    {
      type: "input",
      name: "id",
      message: "What is your Team Manager's Id ",
    },
    {
      type: "input",
      name: "email",
      message: "What is your Team Manager's email address",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is your Team Manager's office number.",
    },
  ];

  const managerAnswers = await inquirer.prompt(ManagerQuestions);
  console.log(managerAnswers);

  const newManager = new Manager(
    managerAnswers.name,
    managerAnswers.id,
    managerAnswers.email,
    managerAnswers.officeNumber
  );

  teamMembersArray.push(newManager);
  await selectJobRole();
};
// inquirer.prompt(ManagerQuestions).then((managerAnswers) => {
//   console.log(managerAnswers);
// });

const askEngineerQuestions = async () => {
  const EngineerQuestions = [
    {
      type: "input",
      name: "name",
      message: "What is the name of the engineer ?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the Id of the engineer ?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the email address of the engineer ?",
    },
    {
      type: "input",
      name: "gitHubUserName",
      message: "What is the gitHubUsername ?",
    },
  ];
  const { name, id, email, gitHubUserName } = await inquirer.prompt(
    EngineerQuestions
  );
  const newEngineer = new Engineer(name, id, email, gitHubUserName);
  teamMembersArray.push(newEngineer);

  await selectJobRole();
};
const askInternQuestions = async () => {
  const InternQuestions = [
    {
      type: "input",
      name: "name",
      message: "What is the name of the intern ?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the Id of the intern",
    },
    {
      type: "input",
      name: "email",
      message: "What is the email address of the intern ?",
    },
    {
      type: "input",
      name: "school",
      message: "What is the name of the Intern's school ?",
    },
  ];

  const { name, id, email, school } = await inquirer.prompt(InternQuestions);
  const newIntern = new Intern(name, id, email, school);
  teamMembersArray.push(newIntern);
  await selectJobRole();
};

const selectJobRole = async () => {
  const question = {
    type: "list",
    name: "jobRole",
    message: "Who do you want to add to your team?",
    choices: ["Engineer", "Intern", "Complete"],
  };
  const { jobRole } = await inquirer.prompt(question);
  if (jobRole === "Engineer") {
    return askEngineerQuestions();
  }
  if (jobRole === "Intern") {
    return askInternQuestions();
  }

  fs.writeFile('myPage.html', render(teamMembersArray), (err) => {
    if (err) throw err;
    console.log('HTML file created successfully!');
  });
  //  render(teamMembersArray);
};

await askManagerQuestions();

inquirer
  .prompt([
    /* Pass your questions in here */
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
