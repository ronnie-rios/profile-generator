const generateManger = function(manager) {
  return `
  <div class-"col-3 mt-3">
    <div class = "card">
      <div class = 'header'>
        <h3>${manager.name}</h3>
      </div>

      <div class = 'card-body'>
        <ul>  
          <li class='name'> Name: ${manager.name}</li>
          <li class='id'> ID: ${manager.id}</li>
          <li class='office-num'> Office Number: ${manager.number}</li>
          <li class='email'> Email: ${manager.email}</li>
        </ul>
      </div>

      </div>
  </div>
  `;
}