import './App.css';
import seriesImage from './assets/series.png';
import modImage from './assets/perezoso.jpg';
import aboutImage from './assets/ErizoSobre.jpg';
import serverImage from './assets/service-server.jpg';
import logoImage from './assets/logo_desle.png';
function App() {
  return (

    <div>
      <header className="bg-primary text-white text-center py-5 header-bg">
        {/*HEADER*/}
        <div className="container-header">
        <div className="bubbles">
            <span style={{ '--i': 11 }}></span>
            <span style={{ '--i': 12 }}></span>
            <span style={{ '--i': 24 }}></span>
            <span style={{ '--i': 10 }}></span>
            <span style={{ '--i': 14 }}></span>
            <span style={{ '--i': 16 }}></span>
            <span style={{ '--i': 17 }}></span>
            <span style={{ '--i': 13 }}></span>
            <span style={{ '--i': 15 }}></span>
            <span style={{ '--i': 22 }}></span>
            <span style={{ '--i': 23 }}></span>
            <span style={{ '--i': 25 }}></span>
            <span style={{ '--i': 18 }}></span>
            <span style={{ '--i': 16 }}></span>
            <span style={{ '--i': 27 }}></span>
            <span style={{ '--i': 15 }}></span>
            <span style={{ '--i': 13 }}></span>
            <span style={{ '--i': 16 }}></span>
          </div>
          <h1 className="display-4 animate__animated animate__fadeInDown">Recrafters</h1>
          <p className="lead animate__animated animate__fadeInUp">
            Series y servidores de Minecraft, mods y torneos de videojuegos
          </p>
          <a href="#services" className="btn btn-outline-light mt-4 animate__animated animate__fadeInUp">
            Descubre Más
          </a>
        </div>
      </header>
      {/* BARRA DE NAVEGACIÓN*/}
      <nav className="navbar navbar-expand-lg bg-dark sticky-top">
        <div className="container">
          <a className="navbar-brand" href="#Inicio"><i className="fas fa-cube"></i> Recrafters</a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className='container-logo'>
            <img src={logoImage} className="logo-desktop" alt="Series de Minecraft" />
          </div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#Inicio">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Servicios
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  Nosotros
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* SERVICIOS*/}
      <section id="services" className="service">
        <div className="container">
          <h2 className="text-center mb-4">Servicios</h2>
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow">
                <img src={seriesImage} className="card-img-top" alt="Series de Minecraft" />
                <div className="card-body">
                  <h5 className="card-title">Series de Minecraft</h5>
                  <p className="card-text">
                    Descubre nuestras emocionantes series de Minecraft con los mejores creadores de contenido.
                  </p>
                  <button className="btn btn-primary">
                    Ver más
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow">
                <img src={serverImage} className="card-img-top" alt="Servidores de Minecraft" />
                <div className="card-body">
                  <h5 className="card-title">Servidores de Minecraft</h5>
                  <p className="card-text">
                    Únete a nuestros servidores personalizados y disfruta de una experiencia única.
                  </p>
                  <button className="btn btn-primary">
                    Ver más
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow">
                <img src={modImage} className="card-img-top" alt="Mods para Minecraft" />
                <div className="card-body">
                  <h5 className="card-title">Mods para Minecraft</h5>
                  <p className="card-text">
                    Explora nuestros mods exclusivos que llevan tu experiencia de juego al siguiente nivel.
                  </p>
                  <button className="btn btn-primary">
                    Ver más
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SOBRE NOSOTROS*/}
      <section id="about" className="about-us ">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4">
              <h2 className="animate__animated animate__fadeInLeft">Sobre Nosotros</h2>
              <p>
                Recrafters es una empresa dedicada a ofrecer experiencias únicas en el mundo de Minecraft. Con
                servidores personalizados, mods exclusivos y emocionantes torneos, nos esforzamos por brindar lo
                mejor a nuestra comunidad.
              </p>
              <p>
                Nuestro equipo está formado por apasionados jugadores y desarrolladores que entienden lo que hace
                que Minecraft sea especial. Únete a nosotros y sé parte de esta increíble aventura.
              </p>
            </div>
            <div className="col-md-6">
              <div className="image-about">
                <img
                  src={aboutImage}
                  className="img-fluid rounded shadow animate__animated animate__fadeInRight"
                  alt="Sobre Nosotros"
                />
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* CONTACTOS*/}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="text-center mb-4">Contacto</h2>
          <div className="row">
            <div className="col-md-8 mx-auto">
              <form action="https://formsubmit.co/09fe8d44cc1930032dac535a8ff115b9" method="POST">
                <div className="form-group">
                  <label htmlFor="name">Nombre</label>
                  <input type="text" name="name" className="form-control" id="name" placeholder="Tu Nombre" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Correo Electrónico</label>
                  <input type="email" name="email" className="form-control" id="email" placeholder="Tu Correo Electrónico" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Mensaje</label>
                  <textarea name="subject"
                    className="form-control"
                    id="message"
                    rows="5"
                    placeholder="Tu Mensaje"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* FOOTER REDES SOCIALES*/}
      <footer className="bg-dark text-white text-center py-4">
        <div className="container">
          <p className="mb-0">© 2024 Recrafters. Todos los derechos reservados.</p>
          <p>
            Síguenos en:
            <a href="https://facebook.com" className="text-white ml-2" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com" className="text-white ml-2" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" className="text-white ml-2" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
