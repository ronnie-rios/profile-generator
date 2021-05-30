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