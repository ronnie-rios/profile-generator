//manager html
const generateManger = function(manager) {
  return `
  <div class-"col-3 mt-3">
    <div class = "card">
      <div class = 'header'>
        <h3>${manager.name}</h3>
      </div>

      <div class = 'card-body'>
        <ul>  
          <li class='detail'> Name: ${manager.name}</li>
          <li class='detail'> ID: ${manager.id}</li>
          <li class='detail> Office Number: ${manager.number}</li>
          <li class='detail'> Email: ${manager.email}</li>
        </ul>
      </div>

      </div>
  </div>
  `;
}

//engineer html
const generateEngineer = function(engineer) {
  return `
  <div class-"col-3 mt-3">
    <div class = "card">
      <div class = 'header'>
        <h3>${engineer.name}</h3>
      </div>

      <div class = 'card-body'>
        <ul>  
          <li class='detail'> Name: ${engineer.name}</li>
          <li class='detail'> ID: ${engineer.id}</li>
          <li class='detail'> GitHub: ${engineer.github}</li>
          <li class='detail'> Email: ${engineer.email}</li>
        </ul>
      </div>

      </div>
  </div>
  `;
}

//intern html
const generateIntern = function(intern) {
  return `
  <div class-"col-3 mt-3">
    <div class = "card">
      <div class = 'header'>
        <h3>${intern.name}</h3>
      </div>

      <div class = 'card-body'>
        <ul>  
          <li class='detail'> Name: ${intern.name}</li>
          <li class='detail'> ID: ${intern.id}</li>
          <li class='detail'> GitHub: ${intern.school}</li>
          <li class='detail'> Email: ${intern.email}</li>
        </ul>
      </div>

      </div>
  </div>
  `;
}

generateHTML = (data) => {

  // array for cards 
  htmlArray = []; 

  for (let i = 0; i < data.length; i++) {
      const employee = data[i];
      const role = employee.getRole(); 


      // call manager function
      if (role === 'Manager') {
          const managerCard = generateManager(employee);

          htmlArray.push(managerCard);
      }

      // call engineer function
      if (role === 'Engineer') {
          const engineerCard = generateEngineer(employee);

          htmlArray.push(engineerCard);
      }

      // call intern function 
      if (role === 'Intern') {
          const internCard = generateIntern(employee);

          htmlArray.push(internCard);
      }
      
  }

  // joining strings 
  const employeeCards = htmlArray.join('')

  // return to generated page
  const generateCards= generateTeamHtml(employeeCards); 
  return generateCards;

}

const generateTeamHtml = function(cards) {
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
                  ${cards}
              </div>
          </div>
      </main>
      
  </body>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src=src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js"integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc"crossorigin="anonymous></script>
  </html>
  `
}