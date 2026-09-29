const github = "https://github.com/JohanSarmientoCH23";

const projects = [
  {
    number: "01",
    title: "Avicola ERP",
    category: "FULL STACK",
    description:
      "Sistema de gestión orientado al control de producción avícola, con módulos para registrar información operativa y visualizar resultados.",
    stack: ["Next.js", "React", "Node.js", "NestJS", "PostgreSQL"],
    github: "https://github.com/JohanSarmientoCH23/Avicola_ERP",
    featured: true,
  },
  {
    number: "02",
    title: "EDUAI",
    category: "WEB APP",
    description:
      "Proyecto web desarrollado con JavaScript como parte de la exploración de soluciones digitales para el entorno educativo.",
    stack: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/JohanSarmientoCH23/EDUAI",
    featured: false,
  },
  {
    number: "03",
    title: "Nexce Pro",
    category: "FRONTEND",
    description:
      "Proyecto web enfocado en la construcción de una interfaz funcional utilizando tecnologías web fundamentales.",
    stack: ["HTML", "CSS"],
    github: "https://github.com/JohanSarmientoCH23/nexce-pro",
    featured: false,
  },
];

const skills = {
  Frontend: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  Backend: ["Node.js", "NestJS", "PHP", "Laravel", "REST APIs"],
  "Bases de datos": ["PostgreSQL", "MySQL", "MongoDB"],
  Herramientas: ["Git", "GitHub", "Docker", "Vercel"],
};

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 .7A11.3 11.3 0 0 0 8.43 22.1c.56.1.77-.24.77-.54v-2.1c-3.14.68-3.8-1.33-3.8-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 1.72 2.61 1.22 3.25.93.1-.72.39-1.22.71-1.5-2.5-.28-5.13-1.25-5.13-5.57 0-1.23.44-2.24 1.16-3.03-.12-.29-.5-1.44.11-2.99 0 0 .95-.3 3.11 1.16a10.8 10.8 0 0 1 5.66 0c2.16-1.46 3.1-1.16 3.1-1.16.62 1.55.23 2.7.12 2.99.72.79 1.15 1.8 1.15 3.03 0 4.33-2.63 5.29-5.14 5.57.4.34.76 1 .76 2.02v2.99c0 .3.2.65.78.54A11.3 11.3 0 0 0 12 .7Z"/>
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#inicio">JS<span>.</span></a>
        <div className="navLinks">
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#skills">Skills</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
        </div>
        <a className="navGithub" href={github} target="_blank" rel="noreferrer">
          <GithubIcon /> GitHub
        </a>
      </nav>

      <section className="hero" id="inicio">
        <div className="gridGlow" />
        <div className="heroContent">
          <p className="eyebrow"><span className="pulse" /> DISPONIBLE PARA NUEVOS PROYECTOS</p>
          <h1>Johan<br /><span>Sarmiento.</span></h1>
          <p className="heroText">
            Desarrollador de software enfocado en construir experiencias web
            modernas y soluciones que conectan <b>frontend + backend</b>.
          </p>
          <div className="heroActions">
            <a className="button primary" href="#proyectos">Ver proyectos <Arrow /></a>
            <a className="button ghost" href="#contacto">Contactarme</a>
          </div>
        </div>
        <div className="heroCode" aria-hidden="true">
          <div className="codeTop"><span>●</span><span>●</span><span>●</span><small>developer.js</small></div>
          <pre>{`const developer = {
  name: "Johan Sarmiento",
  role: "Software Developer",
  focus: [
    "Frontend",
    "Backend",
    "Web Apps"
  ],
  mindset: "build & learn"
};`}</pre>
          <div className="codeStatus"><span>✓</span> system.ready()</div>
        </div>
      </section>

      <section className="ticker" aria-label="Tecnologías">
        <div>JAVASCRIPT</div><i>✦</i><div>REACT</div><i>✦</i><div>NEXT.JS</div><i>✦</i>
        <div>NODE.JS</div><i>✦</i><div>NESTJS</div><i>✦</i><div>POSTGRESQL</div><i>✦</i>
      </section>

      <section className="section about" id="sobre-mi">
        <div className="sectionLabel">01 / SOBRE MÍ</div>
        <div className="aboutGrid">
          <div>
            <h2>Creo soluciones,<br /><em>no solo código.</em></h2>
          </div>
          <div className="aboutText">
            <p>
              Soy Johan Sarmiento, estudiante de Ingeniería de Sistemas y
              desarrollador de software en formación. Me interesa transformar
              necesidades reales en aplicaciones web funcionales, claras y
              fáciles de usar.
            </p>
            <p>
              He trabajado en proyectos académicos y personales explorando
              frontend, backend, bases de datos, APIs y despliegue de
              aplicaciones. Mi objetivo es seguir creciendo como desarrollador
              y participar en proyectos donde pueda aprender y aportar.
            </p>
            <div className="miniStats">
              <div><strong>01</strong><span>Frontend</span></div>
              <div><strong>02</strong><span>Backend</span></div>
              <div><strong>03</strong><span>Database</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section skillsSection" id="skills">
        <div className="sectionLabel">02 / STACK</div>
        <div className="skillsHeader">
          <h2>Mi <span>stack</span><br />de desarrollo.</h2>
          <p>Tecnologías que he utilizado durante mi formación y en proyectos prácticos.</p>
        </div>
        <div className="skillGrid">
          {Object.entries(skills).map(([group, items], index) => (
            <article className="skillCard" key={group}>
              <span className="skillNumber">0{index + 1}</span>
              <h3>{group}</h3>
              <div className="chips">
                {items.map((item) => <span key={item}>{item}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section projectsSection" id="proyectos">
        <div className="sectionLabel">03 / PROYECTOS</div>
        <div className="projectsHeader">
          <h2>Trabajo<br /><span>seleccionado.</span></h2>
          <a className="textLink" href={github} target="_blank" rel="noreferrer">Ver GitHub <Arrow /></a>
        </div>

        <div className="projects">
          {projects.map((project) => (
            <article className={`project ${project.featured ? "featured" : ""}`} key={project.title}>
              <div className="projectVisual">
                <span className="projectNo">{project.number}</span>
                <div className="visualLines"><span /><span /><span /></div>
                <div className="projectSymbol">&lt;/&gt;</div>
              </div>
              <div className="projectInfo">
                <p className="projectCategory">{project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="projectStack">
                  {project.stack.map((item) => <span key={item}>{item}</span>)}
                </div>
                <a className="projectLink" href={project.github} target="_blank" rel="noreferrer">
                  Ver repositorio <Arrow />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section workflow">
        <div className="sectionLabel">04 / WORKFLOW</div>
        <div className="workflowGrid">
          <div><span>01</span><h3>Analizar</h3><p>Entender el problema, los requisitos y el objetivo.</p></div>
          <div><span>02</span><h3>Construir</h3><p>Desarrollar interfaces, lógica y servicios.</p></div>
          <div><span>03</span><h3>Integrar</h3><p>Conectar frontend, backend y bases de datos.</p></div>
          <div><span>04</span><h3>Desplegar</h3><p>Publicar, probar y mejorar la solución.</p></div>
        </div>
      </section>

      <section className="contact" id="contacto">
        <div className="contactGlow" />
        <p className="sectionLabel">05 / CONTACTO</p>
        <h2>¿Construimos algo<br /><span>interesante?</span></h2>
        <p className="contactText">Estoy abierto a oportunidades, proyectos y nuevos retos de desarrollo.</p>
        <div className="contactActions">
          <a className="button primary" href={github} target="_blank" rel="noreferrer"><GithubIcon /> GitHub</a>
          <a className="button ghost" href="mailto:chagor04@gmail.com">Enviar email <Arrow /></a>
        </div>
      </section>

      <footer>
        <span>© 2026 Johan Sarmiento</span>
        <span>BUCARAMANGA · COLOMBIA</span>
        <a href="#inicio">VOLVER ARRIBA ↑</a>
      </footer>
    </main>
  );
}