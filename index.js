
//team lib
const Employee =require('./lib/Employee')
const Engineer =require('./lib/Engineer')
const Intern =require('./lib/Intern')
const Manager =require('./lib/Manager')

//node packages
const fs = require('fs')
const inquirer = require('inquirer')

//array to hold team members
const teamArray = [];
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
            fs.writeFile('./dist/team.html', createPage(), err => {
                if (err) throw  Error (err);
                console.log('Your team profile has been created. Checkout team.html to view your results')
            })
            
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
            name: 'email',
            message: 'Enter your email address'
        },
        {
            type: 'input',
            name: 'number',
            message: 'Enter your office number.'
        }
        
    ]).then(function(data) {
        const manager = new Manager(
            data.name,
            data.id,
            data.email,
            data.number);
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
            message: 'Enter their employee ID#',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter their email address'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter their github profile username.'
        }
    ]).then(function(data) {
        const engineer = new Engineer(
            data.name,
            data.id,
            data.email,
            data.github,);
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
            name: 'email',
            message: 'Enter their email address'
        } ,
        {
            type: 'input',
            name: 'school',
            message: "Enter the intern's school."
        }
    ]).then(function(data) {
        const intern = new Intern(
            data.name,
            data.id,
            data.email,
            data.school);
        teamArray.push(intern);
        addMember();
    });
};
function createCards() {
    const cardArray = [];
  //manager html
  function generateManger(data) {
    return `
    <div class="col-3 mt-3">
      <div class = "card">
        <div class = 'header'>
          <h3>${data.name}</h3>
        </div>
  
        <div class = 'card-body'>
          <ul>  
            <li class='detail'> ID: ${data.id}</li>
            <li class='detail'> Office Number: ${data.number}</li>
            <li class='detail'> Email: ${data.email}</li>
          </ul>
        </div>
  
        </div>
    </div>`
  }
    
  //engineer html
  function generateEngineer(data) {
       return `
    <div class="col-3 mt-3">
      <div class = "card">
        <div class = 'header'>
          <h3>${data.name}</h3>
        </div>
  
        <div class = 'card-body'>
          <ul>  
            <li class='detail'> ID: ${data.id}</li>
            <li class='detail'> Github: ${data.github}</li>
            <li class='detail'> Email: ${data.email}</li>
          </ul>
        </div>
  
        </div>
    </div>
    `;
  }
  
  //intern html
  
  function generateIntern(data) {
      return `
    <div class="col-3 mt-3">
      <div class = "card">
        <div class = 'header'>
          <h3>${data.name}</h3>
        </div>
  
        <div class = 'card-body'>
          <ul>  
            <li class='detail'> ID: ${data.id}</li>
            <li class='detail'> School: ${data.school}</li>
            <li class='detail'> Email: ${data.email}</li>
          </ul>
        </div>
  
        </div>
    </div>
    `;
  }
  for (i = 0; i < teamArray.length; i++) {
    let teamMember = teamArray[i] 
    if (teamMember.getRole() === 'Manager') {
        cardArray.push(generateManger(teamMember))
    } else if (teamMember.getRole() === 'Engineer') {
        cardArray.push(generateEngineer(teamMember))
    } else {
        cardArray.push(generateIntern(teamMember))
    }
  }; 
  return cardArray.join('');
  }
  
 
  function createPage() {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" />
        <link rel="stylesheet"  href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/themes/base/jquery-ui.min.css"/>
            <link rel="stylesheet" href="style.css"/>
    </head>
    <body>
        <header>
            <nav class="navbar" id="navbar">
                <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
            </nav>
        </header>
        <main>
            <div class="container">
                <div class="row justify-content-center" id="team-cards">
                    <!--Team Cards-->
                    ${createCards()}
                   
                </div>
            </div>
        </main>
        
    </body>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js"integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc"crossorigin="anonymous></script>
    </html>
    `
  }

addMember();

