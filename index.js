const inquirer = require('inquirer')

const generateIndex = require('./src/generateHTML')

const Employee =require('./lib/Employee')
const Engineer =require('./lib/Engineer')
const Intern =require('./lib/Intern')
const Manager =require('./lib/Manager')

//array to hold team members
const teamArray = [];
addMember();
function addMember() {
    inquirer.prompt([
        {
        type: 'list',
        name: 'addMember',
        message: 'Select a member type',
        choices: ['Manager', 'Engineer','Intern', 'Finish']
        }
    ]).then(function(data) {
        const memberRole = data.addMember;

        if (memberRole==='Manager') {
            console.log('Add Manager information');
            managerInformation();
        } else if(memberRole === 'Engineer') {
            //function for engineer
            engineerInformation();
        } else if (memberRole === 'Intern') {
            //function for intern
            internInformation();
        } else {
            //create the team
        }
    });
};

//manager prompts
function managerInformation() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter the manager's name",
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter your employee ID#',
        },
        {
            type: 'input',
            name: 'number',
            message: 'Enter your office number.'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address'
        }
    ]).then(function(data) {
        const manager = new Manager(
            data.name,
            data.id,
            data.number,
            data.email);
        teamArray.push(manager);
        addMember();
    });
};

//engineer prompts
function engineerInformation() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter the engineers's name",
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter your employee ID#',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your github profile username.'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter their email address'
        }
    ]).then(function(data) {
        const engineer = new Engineer(
            data.name,
            data.id,
            data.github,
            data.email);
        teamArray.push(engineer);
        addMember();
    });
};

//intern prompts
function internInformation() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter the intern's name",
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter their employee ID#',
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter the intern's school."
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'Enter their email address'
        }
    ]).then(function(data) {
        const engineer = new Engineer(
            data.name,
            data.id,
            data.school,
            data.email);
        teamArray.push(engineer);
        addMember();
    });
};