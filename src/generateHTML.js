// const teamArray = require('index.js')
// function createHtml() {
//   const cardArray = [];
// //manager html
// function generateManger(data) {
//   return `
//   <div class="col-3 mt-3">
//     <div class = "card">
//       <div class = 'header'>
//         <h3>${name}</h3>
//       </div>

//       <div class = 'card-body'>
//         <ul>  
//           <li class='detail'> ID: ${data.id}</li>
//           <li class='detail'> Office Number: ${data.number}</li>
//           <li class='detail'> Email: ${data.email}</li>
//         </ul>
//       </div>

//       </div>
//   </div>`
// }
  
// //engineer html
// function generateEngineer(data) {
//      return `
//   <div class="col-3 mt-3">
//     <div class = "card">
//       <div class = 'header'>
//         <h3>${data.name}</h3>
//       </div>

//       <div class = 'card-body'>
//         <ul>  
//           <li class='detail'> ID: ${data.id}</li>
//           <li class='detail'> Github: ${data.github}</li>
//           <li class='detail'> Email: ${data.email}</li>
//         </ul>
//       </div>

//       </div>
//   </div>
//   `;
// }


// //intern html

// function generateIntern(data) {
//     return `
//   <div class="col-3 mt-3">
//     <div class = "card">
//       <div class = 'header'>
//         <h3>${data.name}</h3>
//       </div>

//       <div class = 'card-body'>
//         <ul>  
//           <li class='detail'> ID: ${data.id}</li>
//           <li class='detail'> School: ${data.school}</li>
//           <li class='detail'> Email: ${data.email}</li>
//         </ul>
//       </div>

//       </div>
//   </div>
//   `;
// }
// for (i = 0; i < teamArray.length; i++) {
//   let teamMember = teamArray[i] 
//   if (teamMember.getRole() === 'Manager') {
//       cardArray.push(generateManger(teamMember))
//   } else if (teamMember.getRole() === 'Engineer') {
//       cardArray.push(generateEngineer(teamMember))
//   } else {
//       cardArray.push(generateIntern(teamMember))
//   }
// }; 
// return html.join('');
// }

// // //manager html
// // const generateManger = manager => {
 
// //   return `
// //   ${manager.map(({ name, id, email, number }) => {
// //     return `
// //   <div class="col-3 mt-3">
// //     <div class = "card">
// //       <div class = 'header'>
// //         <h3>${name}</h3>
// //       </div>

// //       <div class = 'card-body'>
// //         <ul>  
// //           <li class='detail'> ID: ${id}</li>
// //           <li class='detail'> Office Number: ${number}</li>
// //           <li class='detail'> Email: ${email}</li>
// //         </ul>
// //       </div>

// //       </div>
// //   </div>
// //   `;}).join('')
// // }`;
// // }



// // //engineer html
// // const generateEngineer = engineer => {
 
// //   return `
// //   ${engineer.map(({ name, id, email, github }) => {
// //     return `
// //   <div class="col-3 mt-3">
// //     <div class = "card">
// //       <div class = 'header'>
// //         <h3>${name}</h3>
// //       </div>

// //       <div class = 'card-body'>
// //         <ul>  
// //           <li class='detail'> ID: ${id}</li>
// //           <li class='detail'> Github: ${github}</li>
// //           <li class='detail'> Email: ${email}</li>
// //         </ul>
// //       </div>

// //       </div>
// //   </div>
// //   `;}).join('')
// // }`;
// // }


// // //intern html

// // const generateIntern = intern => {
 
// //   return `
// //   ${intern.map(({ name, id, email, school }) => {
// //     return `
// //   <div class="col-3 mt-3">
// //     <div class = "card">
// //       <div class = 'header'>
// //         <h3>${name}</h3>
// //       </div>

// //       <div class = 'card-body'>
// //         <ul>  
// //           <li class='detail'> ID: ${id}</li>
// //           <li class='detail'> School: ${school}</li>
// //           <li class='detail'> Email: ${email}</li>
// //         </ul>
// //       </div>

// //       </div>
// //   </div>
// //   `;}).join('')
// // }`;
// // }



// function createPage() {
//   return `
//   <!DOCTYPE html>
//   <html lang="en">
//   <head>
//       <meta charset="UTF-8">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <title>Team Profile</title>
//       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" />
//       <link rel="stylesheet"  href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/themes/base/jquery-ui.min.css"/>
//           <link rel="stylesheet" href="style.css"/>
//   </head>
//   <body>
//       <header>
//           <nav class="navbar" id="navbar">
//               <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
//           </nav>
//       </header>
//       <main>
//           <div class="container">
//               <div class="row justify-content-center" id="team-cards">
//                   <!--Team Cards-->
//                   ${createHtml()}
                 
//               </div>
//           </div>
//       </main>
      
//   </body>
//   <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
//   <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js"integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc"crossorigin="anonymous></script>
//   </html>
//   `
// }
// module.exports = createPage()

