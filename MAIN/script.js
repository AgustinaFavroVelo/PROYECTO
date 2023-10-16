//HEADER AND FOOTER QUE SON IGUALES EN TODOS LOS HTML
let header = `
<h1> BE STRONG BOXING </h1>
<nav class="navbar navbar-expand-md bg-dark navbar-dark">
  <a class="navbar-brand" href="index.html">Home</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="nosotros.html">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="contacto.html">Contact</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="sedes.html">Sedes</a>
      </li>
      <!-- Add the Dark Mode Toggle Button here -->
      <li class="nav-item">
        <button id="dark-mode-button">Toggle Dark Mode</button>
      </li>
    </ul>
</nav>
`

document.getElementById("idheader").innerHTML = header

let footer = `
<a class="redsoc" href="https://www.twitter.com" target="_blank">
  <img class="twitter" src="/main/imagenes/Twitter-X-Logo-Vector-01-2.jpg">
</a>
<a class="redsoc" href="https://www.facebook.com" target="_blank"> 
  <img class="face" src="/main/imagenes/facebook.png"> 
</a>
<a class="redsoc" href="https://www.instagram.com/?hl=es" target="_blank">
  <img class="insta" src="/main/imagenes/instagram.png"> 
</a>
<p>Derechos reservados @2023</p>
`;

document.getElementById("idfooter").innerHTML = footer

//USO DE API PARA COMMENTS

//opcion 1: NO FUNCIONO , CONSULTAR PORQUE!!
// async function fetchRandomUser () {
//   try {
//       const resPost = await fetch('https://randomuser.me/api/')
//       const post = await resPost.json()
//       //las card de comentarios tmb como constante
//       const commentCard = document.querySelector('.comentario-card');
//       //si esta la data y el comentario todo OK, hace estas constantes uniendo a clases de html
//       if (userData && commentCard) {
//         const commenterName = commentCard.querySelector('.comentador-name');
//         const commenterPicture = commentCard.querySelector('.comentador-picture');
//         const commentText = commentCard.querySelector('.comentario-text');
//         //para despues agregarle la data de la API
//         commenterName.textContent = `${userData.results[0].name.first} ${userData.results[0].name.last}:`;
//         commenterPicture.src = userData.results[0].picture.thumbnail;
//         commentText.innerHTML = `<i>"${userData.results[0].email}"</i>`;
//       } else {  //si no la encuentra, se produce el error 
//         console.log('Error: commentCard not found or no user data');
//       }
//     } catch (error) {
//       console.log('An error occurred:', error);
//     } //y lo muestro en consola
//   }

//  // llamada a la función
//  fetchRandomUser()

//Opcion 2: FUNCIONO!
async function fetchRandomUserData() {
  try {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json(); //lo convierto en objeto de js
    return data.results[0]; // Extraigo el primer random user de la API
  } catch (error) {
    console.error('Error fetching data:', error);
    return null; //ni idea esto, pero funcionó
  }
}

// Function para mostrar eso que agarré con fetch
async function populateCommentCard(commentCard) {
  const userData = await fetchRandomUserData();
  if (userData) {
    const commenterName = commentCard.querySelector('.comentador-name');
    const commenterPicture = commentCard.querySelector('.comentador-picture');
    const commentText = commentCard.querySelector('.comentario-text');

    commenterName.textContent = `${userData.name.first} ${userData.name.last}:`;
    commenterPicture.src = userData.picture.thumbnail; // la pic del user
    commentText.innerHTML = `<i>"${userData.email}"</i>`;
  }
}

// Aca se juntan las comment cards con la data 
const commentCards = document.querySelectorAll('.comentario-card');
commentCards.forEach((commentCard) => {
  populateCommentCard(commentCard);
});

// //ACA HAGO LO DE MODO CLARO Y OSCURO
// let boton = document.getElementById ('boton-modo');
// let body = document.body;
// let darkMode = localStorage.getItem ('darkMode') == 'enabled';

// if (darkMode) {
//   body.classList.add('modo-oscuro');
//   boton.checked = true;
// } 

// boton.addEventListener('change', () => {
//   if (boton.checked) {
//     body.classList.add('modo-oscuro') ;
//     localStorage.setItem ('darkMode','enabled');
//   } else {
//   body.classList.remove('modo-oscuro');
//   localStorage.setItem ('darkMode','disabled');
//   }
// })

// Obtengo button y body (elementos html)
let darkModeButton = document.getElementById('dark-mode-button');
let body = document.body;

// Function to toggle dark mode
function toggleDarkMode() {
  body.classList.toggle('modo-oscuro'); //le agrego modo oscuro al body a traves de la clase 
  // You can also update the button text
  if (body.classList.contains('modo-oscuro')) { 
    darkModeButton.textContent = 'Claro'; //si es modo oscuro, cambiar a claro
  } else {
    darkModeButton.textContent = 'Oscuro'; //sino cambiar a modo oscuro
  }
}

// Agrego click event listener al button
darkModeButton.addEventListener('click', toggleDarkMode); //click -> llamo a la función 

