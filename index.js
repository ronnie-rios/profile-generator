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
        } else {
            //create the team
        }
    });
};

//manager creation and prompts
function managerInformation() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "Enter the manager's name",
        },
        {
            type: 'input',
            name: 'managerID',
            message: 'Enter your employee ID#',
        },
        {
            type: 'input',
            name: 'managerNumber',
            message: 'Emter your office number.'
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'Enter your email address'
        }
    ]).then(function(data) {
        const manager = new Manager(
            data.managerName,
            data.managerId,
            data.managerNumber,
            data.managerEmail);
        teamArray.push(manager);
        addMember();
    });
};

//engineer creation and prompts
function engineerInformation() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: "Enter the engineers's name",
        },
        {
            type: 'input',
            name: 'engineerID',
            message: 'Enter your employee ID#',
        },
        {
            type: 'input',
            name: 'engineerProfile',
            message: 'Emter your github profile username.'
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'Enter your email address'
        }
    ]).then(function(data) {
        const engineer = new Engineer(
            data.engineerName,
            data.engineerId,
            data.engineerProfile,
            data.engineerEmail);
        teamArray.push(engineer);
        addMember();
    });
};