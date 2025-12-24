import "./App.css";
import Perfil from "./assets/perfil2.jpg";
import Rings from "./assets/pattern-rings.svg";
import Circle from "./assets/pattern-circle.svg";
import GithubIcon from "./assets/icon-github.svg";
import LinkedinIcon from "./assets/icon-linkedin.svg";

function App() {
  return (
    <div className="container">
      <div className="content">
        <img className="perfil cursorDefault" src={Perfil} alt="Perfil" />

        <img className="rings ring1 cursorDefault" src={Rings} alt="Rings 1" />
        <img className="rings ring2 cursorDefault" src={Rings} alt="Rings 2" />
        <img className="rings ring3 cursorDefault" src={Circle} alt="Circle" />

        <nav>
          <h6>Ruan Valença</h6>
        </nav>
        <section className="introduction">
          <p className="title">
            Seja bem-vindo!
            <br /> Sou <span id="name">Ruan Carlos.</span>
          </p>
          <p className="description">
            Morando em Belo Horizonte, sou um desenvolvedor Front End focado em
            construir websites com boas práticas e visual atrativo.
          </p>
          <br />
          <a
            href="https://www.linkedin.com/in/ruanvalenca/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <span className="contactRequest">Converse Comigo</span>
          </a>
        </section>
        <hr className="divider" />
        <section className="experience">
          <p className="title">Experiência</p>
          <div className="experienceItem">
            <div className="expHeader">
              <div className="expCompany">
                <h4>Faculdade Famart</h4>
                <p className="expRole">Desenvolvedor Front-End Júnior</p>
              </div>
              <span className="expDate">Out 2024 – Atualmente</span>
            </div>
            <ul className="expDescription">
              <li>
                Interfaces dinâmicas com <strong>React e TypeScript</strong>{" "}
                integradas a APIs REST.
              </li>
              <li>
                Gerenciamento de estado global eficiente com{" "}
                <strong>Zustand, Redux e Context API</strong>.
              </li>
              <li>
                Desenvolvimento do Portal Internos e Portal do Aluno,
                automatizando processos de RH e deixando a usabilidade mais
                eficiente.
              </li>
              <li>
                Foco em <strong>performance e otimização</strong> (Clean Code e
                Refatoração).
              </li>
            </ul>
          </div>
        </section>
        <hr className="divider" />
        <section className="skills">
          <div className="skill-box">
            <h3>HTML & CSS</h3>
            <p>Responsividade, Flexbox, Grid e Styled Components</p>
          </div>

          <div className="skill-box">
            <h3>JAVASCRIPT</h3>
            <p>ES6+, Manipulação de DOM e Async/Await</p>
          </div>

          <div className="skill-box">
            <h3>TYPESCRIPT</h3>
            <p>Desenvolvimento tipado, Interfaces e Escalabilidade</p>
          </div>

          <div className="skill-box">
            <h3>REACT</h3>
            <p>Hooks, Context API, Zustand e React Router</p>
          </div>

          <div className="skill-box">
            <h3>NODE & BACKEND</h3>
            <p>Criação de APIs REST, Express e integrações SQL</p>
          </div>

          <div className="skill-box">
            <h3>VERSIONAMENTO</h3>
            <p>Git, GitHub e GitLab com foco em trabalho ágil</p>
          </div>
        </section>
        <hr className="divider" />

        <div className="titleProjects">
          <p className="title">Projetos</p>

          <a
            href="https://www.linkedin.com/in/ruanvalenca/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          ></a>
        </div>
        <div className="projectsGrid">
          <div className="projectCardContainer">
            <div className="projectCardInner">
              <div className="projectCardFront img3"></div>
              <div className="projectCardBack img3">
                <h3>Delishare</h3>
                <p>Plataforma de receitas com API REST própria.</p>
                <div className="projectTechs">
                  <span>REACT</span> <span>NODE.JS</span> <span>SQL</span>
                </div>
                <a
                  href="https://delishare-app.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VER PROJETO <span>→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Projeto 2 */}
          <div className="projectCardContainer">
            <div className="projectCardInner">
              <div className="projectCardFront img4"></div>
              <div className="projectCardBack img4">
                <h3>Absolute Cinema</h3>
                <p>Catálogo dinâmico consumindo API externa (TMDB).</p>
                <div className="projectTechs">
                  <span>REACT</span> <span>AXIOS</span> <span>CSS MODULES</span>
                </div>
                <a
                  href="https://absolute-cinema-six.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VER PROJETO <span>→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Projeto 3 */}
          <div className="projectCardContainer">
            <div className="projectCardInner">
              <div className="projectCardFront img1"></div>
              <div className="projectCardBack img1">
                <h3>Throwdown</h3>
                <p>Interface interativa e lógica de duelo contra bot.</p>
                <div className="projectTechs">
                  <span>JAVASCRIPT</span> <span>DOM</span>{" "}
                  <span>ANIMATIONS</span>
                </div>
                <a
                  href="https://throwdown-two.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VER PROJETO <span>→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Projeto 4 */}
          <div className="projectCardContainer">
            <div className="projectCardInner">
              <div className="projectCardFront img2"></div>
              <div className="projectCardBack img2">
                <h3>IP Tracker</h3>
                <p>Rastreador com mapa dinâmico e Geolocation API.</p>
                <div className="projectTechs">
                  <span>REACT</span> <span>LEAFLET</span>{" "}
                  <span>TYPESCRIPT</span>
                </div>
                <a
                  href="https://ip-tracker-delta-self.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VER PROJETO <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="viewMoreContainer">
          <p>Deseja ver mais projetos ou analisar meu código?</p>
          <a
            href="https://github.com/RuanValenca"
            target="_blank"
            rel="noopener noreferrer"
            className="githubBtn"
          >
            <span>ACESSAR REPOSITÓRIO COMPLETO</span>
            <img src={GithubIcon} alt="Github" className="btnIcon" />
          </a>
        </div>
      </div>
      <footer>
        <div className="footerContent">
          <div className="footerText">
            <h1>Contato</h1>
            <p>
              Atualmente baseado em <strong>Belo Horizonte/MG</strong>, estou
              disponível para projetos e oportunidades que busquem um
              desenvolvedor focado em <strong>qualidade de código</strong>.
            </p>
            <a href="mailto:ruangobira@gmail.com" className="emailLink">
              ruangobira@gmail.com
            </a>
          </div>

          <hr className="divider footerDivider" />

          <div className="linkForm">
            <h6>Ruan Valença</h6>
            <div className="iconsNavFooter">
              <a
                href="https://github.com/RuanValenca"
                target="_blank"
                rel="noopener noreferrer"
                title="Github"
              >
                <img src={GithubIcon} alt="Github" />
              </a>
              <a
                href="https://www.linkedin.com/in/ruanvalenca/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <img src={LinkedinIcon} alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
