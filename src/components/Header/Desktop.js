function Desktop() {
  return (
    <header>
      <nav class="navbar">
        <article class="logoBox">
          <h1>
            <img
              class="tree"
              src="./img/logo_horizontal_full-color.png"
              alt="treeLogo"
            />
          </h1>
          <h1>
            <img
              class="navSleep"
              id="navSleep"
              src="./img/Group 5.png"
              alt="sleeplesText"
            />
          </h1>
        </article>
        <ul class="nav-menu">
          <li class="nav-item">
            <a href="#home" class="nav-link">
              Our Mission
            </a>
          </li>
          <li class="nav-item">
            <a href="#work" class="nav-link">
              Services
            </a>
          </li>
          <li class="nav-item">
            <a href="#about" class="nav-link">
              Our Team
            </a>
          </li>
          <li class="nav-item">
            <a href="#contact" class="nav-link">
              New Patients
            </a>
          </li>
          <li class="nav-item">
            <a href="#contact" class="nav-link">
              Get In Touch
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Desktop;
