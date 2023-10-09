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
    </ul>
</nav>
`

document.getElementById("idheader").innerHTML = header

let footer = `
<a class="redsoc" href="https://www.twitter.com" target="_blank"><i class="fa fa-twitter"
    aria-hidden="true"></i></a>
<a class="redsoc" href="https://www.facebook.com/" target="_blank"><i class="fa fa-facebook"
    aria-hidden="true"></i></a>
<a class="redsoc" href="https://ar.pinterest.com/" target="_blank"><i class="fa fa-pinterest"
    aria-hidden="true"></i></a>
<a class="redsoc" href="https://www.instagram.com/?hl=es" target="_blank"><i class="fa fa-instagram"
    aria-hidden="true"></i></a>
<a class="redsoc" href="https://www.linkedin.com/" target="_blank"><i
    class="fa fa-linkedin" aria-hidden="true"></i></a>
<p>Derechos reservados @2023 </p>
`
document.getElementById("idfooter").innerHTML = footer


