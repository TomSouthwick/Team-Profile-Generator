// ("use strict");

const employees = [];

const { Engineer, Manager, Intern } = require("./classes");
const renderHtml = require("./htmlgenerator");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const mainPrompt = () => {
  inquirer
    .prompt([
      {
        type: "text",
        name: "Name",
        message: "Enter the team managers name",
      },
      {
        type: "text",
        name: "Id",
        message: "Enter the team managers employee id",
      },
      {
        type: "text",
        name: "Email",
        message: "Enter the team managers email",
      },
      {
        type: "text",
        name: "OfficeNumber",
        message: "Enter the team managers office number",
      },
    ])
    .then((answers) => {
      const m = new Manager(
        answers.Name,
        answers.Id,
        answers.Email,
        answers.OfficeNumber
      );
      employees.push(m);
      console.log(m.getName());
      employeePrompt();
    });
};

mainPrompt();

const employeePrompt = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "What would you like to do",
        choices: ["Add an Engineer", "Add an Intern", "Finish building team"],
      },
    ])
    .then((answers) => {
      if (answers.action === "Add an Engineer") {
        engineerPrompt();
      } else if (answers.action === "Add an Intern") {
        internPrompt();
      } else if (answers.action === "Finish building team") {
        console.log(employees);
        const html = renderHtml(employees);

        fs.writeFileSync(path.join(__dirname, "output", "team.html"), html);
        console.log("Successfully wrote to team.html");
      }
    });
};

const engineerPrompt = () => {
  inquirer
    .prompt([
      {
        type: "text",
        name: "Name",
        message: "Enter the Engineer's name",
      },
      {
        type: "text",
        name: "Id",
        message: "Enter the Engineer's employee id",
      },
      {
        type: "text",
        name: "Email",
        message: "Enter the Engineer's email",
      },
      {
        type: "text",
        name: "github",
        message: "Enter the Engineer's github",
      },
    ])
    .then((answers) => {
      const m = new Engineer(
        answers.Name,
        answers.Id,
        answers.Email,
        answers.github
      );
      employees.push(m);
      employeePrompt();
    });
};
const internPrompt = () => {
  inquirer
    .prompt([
      {
        type: "text",
        name: "Name",
        message: "Enter the Intern's name",
      },
      {
        type: "text",
        name: "Id",
        message: "Enter the Intern's employee id",
      },
      {
        type: "text",
        name: "Email",
        message: "Enter the Intern's email",
      },
      {
        type: "text",
        name: "School",
        message: "Enter the Interns school",
      },
    ])
    .then((answers) => {
      const m = new Intern(
        answers.Name,
        answers.Id,
        answers.Email,
        answers.School
      );
      employees.push(m);
      employeePrompt();
    });
};
