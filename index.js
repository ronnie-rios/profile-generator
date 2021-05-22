const inquirer = require('inquirer')

const generateIndex = require('./src/generateHTML')

const Employee =require('./lib/Employee')
const Engineer =require('./lib/Engineer')
const Intern =require('./lib/Intern')
const Manager =require('./lib/Manager')

//parent class
class User {
    constructor() {
    this.employeesArray = [];
    }
    addEmployee() {
        return inquirer.prompt([{
            message: 'Please enter a name.',
            name: 'name',
            validate: (input) => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter a name.')
                }
            }
        }])
    }
}