  // Obtener el URL path
  const currentPath = window.location.pathname;

  // Obtener el ID del link del path
  let linkId;
  switch (currentPath) {
    case '/nosotros.html':
      linkId = 'about-link';
      break;
    case '/contacto.html':
      linkId = 'contact-link';
      break;
    case '/sedes.html':
      linkId = 'sedes-link';
      break;
    default:
      linkId = 'home-link'; // Default to Home
      break;
  }

  // Add a class 'active-page' to the current page's link for styling
  document.getElementById(linkId).classList.add('active-page');
