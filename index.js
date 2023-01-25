// Links to page generator
const generateHTML = require('./src/generateHTML');

// Links employee profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Inports node modules
const fs = require('fs');
const { default: Choices } = require('inquirer/lib/objects/choices');
const inquirer = ('inquirer');

// Empty team array
const teamArray = [];

// Inquirer manager questions

const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the team manager?',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Please enter the name of the team manager.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the manager's ID.",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter manager's ID.")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name:'email',
            message: 'Please enter your email address.',
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (vlaid) {
                    return true;
                } else {
                    console.log ('Please enter a valid email.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter manager's office number.",
            validate: nameInput => {
                if(isNaN(nameInput)) {
                    console.log ('Please enter an office number.')
                    return false;
                } else {
                    return true;
                }
            }
        }
    ])
.then(managerInput => {
    const  { name, id, email, officeNumber } = managerInput; 
    const manager = new Manager (name, id, email, officeNumber);

    teamArray.push(manager);
    console.log(manager);
})
};

const addEmployee = () => {
    console.log(`
    ---------------
    Adding team members
    ---------------`);

    return inquirer.prompt ([
      {
        type: 'list',
        name: 'role',
        message: 'Choose employee role.',
        Choices: ['Engineer', 'Intern']
      },
      {
        type: 'input',
        name: 'name',
        message: "What is the employee's name?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter a name.");
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: "Please enter the emplyee's ID.",
        validate: nameInput => {
            if  (isNaN(nameInput)) {
                console.log ("Please enter the employee's ID!")
                return false; 
            } else {
                return true;
            }
        }
    },

    
    ])
}