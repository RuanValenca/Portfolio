import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import portrait from "./assets/perfil2.jpg";
import { projects, skills, experience } from "./data";
import "./App.css";
gsap.registerPlugin(ScrollTrigger);
const links = [
  ["Home", "home"],
  ["Sobre", "sobre"],
  ["Experiência", "experiencia"],
  ["Conhecimentos", "conhecimentos"],
  ["Projetos", "projetos"],
  ["Contato", "contato"],
];
function App() {
  const root = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const experienceStage = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState("home");
  const [menu, setMenu] = useState(false);
  const [copied, setCopied] = useState(false);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".scroll-progress", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: { start: 0, end: "max", scrub: true },
      });
      links.forEach(([, id]) =>
        ScrollTrigger.create({
          trigger: "#" + id,
          refreshPriority: -1,
          start: "top 45%",
          end: "bottom 45%",
          onToggle: (self) => {
            if (self.isActive) setActive(id);
          },
        }),
      );
    }, root);
    const mm = gsap.matchMedia();
    mm.add(
      "(prefers-reduced-motion: no-preference)",
      () => {
        gsap.from(".name-line span", {
          yPercent: 105,
          rotate: 4,
          duration: 1.1,
          stagger: 0.12,
          ease: "power4.out",
        });
        gsap.to(".ticker-track", {
          xPercent: -50,
          duration: 28,
          ease: "none",
          repeat: -1,
        });
        gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) =>
          gsap.from(el, {
            opacity: 0,
            y: 35,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 92%", once: true },
          }),
        );
        gsap.utils.toArray<HTMLElement>(".word").forEach((el, i, all) =>
          gsap.fromTo(
            el,
            { color: "#44443e" },
            {
              color: "#eae7dd",
              ease: "none",
              scrollTrigger: {
                trigger: ".about-text",
                start: `top ${90 - (i / all.length) * 60}%`,
                end: `bottom ${85 - (i / all.length) * 60}%`,
                scrub: true,
              },
            },
          ),
        );

      },
      root,
    );
    mm.add(
      "(min-width: 1000px) and (prefers-reduced-motion: no-preference)",
      () => {
        const stage = experienceStage.current;
        if (stage) {
          const panels = gsap.utils.toArray<HTMLElement>(
            ".experience-item",
            stage,
          );
          if (panels.length > 1) {
            gsap.set(panels.slice(1), { autoAlpha: 0, y: 24 });
            const timeline = gsap.timeline({
              scrollTrigger: {
                trigger: stage,
                start: "top 58px",
                end: () => `+=${window.innerHeight * (panels.length - 1)}`,
                pin: true,
                scrub: 0.6,
                invalidateOnRefresh: true,
                refreshPriority: 2,
              },
            });
            panels.slice(1).forEach((panel, index) => {
              const position = index + 0.5;
              timeline.to(
                panels[index],
                { autoAlpha: 0, y: -24, duration: 0.35 },
                position,
              );
              timeline.fromTo(
                panel,
                { autoAlpha: 0, y: 24 },
                { autoAlpha: 1, y: 0, duration: 0.35 },
                position + 0.1,
              );
            });
          }
        }

        const cards = track.current;
        if (!cards) return;
        const distance = () =>
          Math.max(0, cards.scrollWidth - cards.clientWidth);
        gsap.to(cards, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: ".projects-stage",
            refreshPriority: 1,
            start: "top 58px",
            end: () => "+=" + distance(),
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      },
      root,
    );
    const onLoad = () => {
      ScrollTrigger.sort();
      ScrollTrigger.refresh();
    };
    window.addEventListener("load", onLoad);
    const refreshTimer = window.setTimeout(onLoad, 1000);
    return () => {
      window.clearTimeout(refreshTimer);
      window.removeEventListener("load", onLoad);
      mm.revert();
      ctx.revert();
    };
  }, []);
  async function copy() {
    try {
      await navigator.clipboard.writeText("ruangobira@gmail.com");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      location.href = "mailto:ruangobira@gmail.com";
    }
  }
  const about =
    "Sou Ruan Carlos, desenvolvedor Front-end em Belo Horizonte. Construo interfaces com React e TypeScript, integradas a APIs e pensadas para funcionar bem em qualquer tela.";
  return (
    <div ref={root}>
      <a className="skip" href="#main">
        Pular para conteúdo
      </a>
      <header className="header">
        <a className="logo" href="#home" aria-label="Ruan Carlos, início">
          RC<sup>®</sup>
        </a>
        <button
          className="menu"
          onClick={() => setMenu(!menu)}
          aria-controls="navigation"
          aria-expanded={menu}
        >
          {menu ? "Fechar −" : "Menu +"}
        </button>
        <nav
          className={menu ? "navigation open" : "navigation"}
          id="navigation"
          aria-label="Principal"
        >
          {links.map(([text, id]) => (
            <a
              key={id}
              className={active === id ? "active" : ""}
              href={"#" + id}
              aria-current={active === id ? "location" : undefined}
              onClick={() => setMenu(false)}
            >
              {text}
            </a>
          ))}
        </nav>
        <div className="scroll-progress" aria-hidden="true" />
      </header>
      <main id="main">
        <section id="home" className="hero grid-background">
          <h1 aria-label="Ruan Carlos">
            <span className="name-line first" aria-hidden="true">
              <span>RUAN</span>
            </span>
            <span className="name-line last" aria-hidden="true">
              <span>CARLOS</span>
            </span>
          </h1>
          <div className="hero-foot">
            <p>Desenvolvedor Front-end</p>
            <a href="#sobre" aria-label="Descer para a seção sobre">
              SOBRE <span aria-hidden="true">↘</span>
            </a>
          </div>
          <div className="ticker" aria-hidden="true">
            <div className="ticker-track">
              {Array.from({ length: 4 }, (_, i) => (
                <span key={i}>
                  REACT ✶ TYPESCRIPT ✶ JAVASCRIPT ✶ UX ✶ UI ✶ GSAP ✶ WORDPRESS ✶
                  ELEMENTOR ✶ PHP ✶{" "}
                </span>
              ))}
            </div>
          </div>
        </section>
        <section id="sobre" className="about section">
          <div className="section-side">
            <div className="portrait reveal">
              <img
                src={portrait}
                alt="Retrato de Ruan Carlos"
                loading="lazy"
                width="600"
                height="750"
              />
            </div>
          </div>
          <div className="about-copy">
            <p className="about-text">
              {about.split(" ").map((word, i) => (
                <span className="word" key={i}>
                  {word}{" "}
                </span>
              ))}
            </p>
            <a
              className="inline-link reveal"
              href="https://www.linkedin.com/in/ruanvalenca/"
              target="_blank"
              rel="noreferrer"
            >
              LINKEDIN <span>↗</span>
            </a>
          </div>
        </section>
        <section id="experiencia" className="experience-section section">
          <div className="experience-stage" ref={experienceStage}>
            <div className="experience-panels">
              <article className="experience-item">
                <div className="year" aria-hidden="true">
                  2022
                </div>
                <div className="experience-copy">
                  <p className="job-meta">INÍCIO NA ÁREA · SERVCOM</p>
                  <h3>Estágio em Help Desk</h3>
                  <ul className="experience-list">
                    <li>
                      Meu início na área de tecnologia, dando os primeiros
                      passos em suporte e atendimento de Help Desk.
                    </li>
                  </ul>
                </div>
              </article>
              <article className="experience-item">
                <div className="year" aria-hidden="true">
                  2024
                </div>
                <div className="experience-copy">
                  <p className="job-meta">
                    OUT 2024 — JAN 2025 · FACULDADE FAMART
                  </p>
                  <h3>
                    Desenvolvedor
                    <br />
                    Front-end Júnior
                  </h3>
                  <ul className="experience-list">
                    {experience.map((e) => (
                      <li key={e}>{e}</li>
                    ))}
                  </ul>
                  <ul className="tags">
                    {[
                      "React",
                      "TypeScript",
                      "Zustand",
                      "Redux",
                      "Context API",
                      "REST",
                    ].map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              </article>
              <article className="experience-item">
                <div className="year" aria-hidden="true">
                  2026
                </div>
                <div className="experience-copy">
                  <p className="job-meta">MAI 2026 — ATUALMENTE · VIDEOBRAX</p>
                  <h3>Desenvolvedor Front-End Júnior</h3>
                  <ul className="experience-list">
                    <li>
                      Desenvolvimento de páginas e landing pages utilizando
                      React e Next.js, voltadas para sites comerciais e
                      institucionais.
                    </li>
                    <li>
                      Desenvolvimento e manutenção de sites em WordPress com
                      Elementor, criando interfaces responsivas e componentes
                      personalizados.
                    </li>
                    <li>
                      Criação de shortcodes e funcionalidades customizadas em
                      PHP e JavaScript, além da utilização de custom fields para
                      conteúdos dinâmicos.
                    </li>
                    <li>
                      Participação na criação e evolução dos sites, desde a
                      implementação de layouts até reuniões de definição e
                      tomada de decisões sobre soluções, estrutura e experiência
                      do usuário.
                    </li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section id="conhecimentos" className="skills-section section">
          <div className="skill-list">
            {skills.map((s) => (
              <article className="skill-row" key={s.title}>
                <div className="skill-name">
                  <span>{s.title}</span>
                  <span className="skill-star" aria-hidden="true">
                    ✳
                  </span>
                </div>
                <p>{s.detail}</p>
              </article>
            ))}
          </div>
        </section>
        <section id="projetos" className="projects-section">
          <div className="projects-stage">
            <div className="projects-title">
              <div className="projects-intro">
                <h2>
                  Ideias que viraram experiência
                  <span className="accent">.</span>
                </h2>
                <p>
                  Projetos autorais que unem interfaces cuidadas e tecnologia
                </p>
                <ul
                  className="projects-stack"
                  aria-label="Tecnologias utilizadas"
                >
                  {["React", "TypeScript", "JavaScript", "Node.js", "SQL"].map(
                    (item) => (
                      <li key={item}>{item}</li>
                    ),
                  )}
                </ul>
              </div>
              <div className="project-controls">
                <button
                  aria-label="Projeto anterior"
                  onClick={() => {
                    track.current?.scrollBy({
                      left: -track.current.clientWidth,
                      behavior: matchMedia("(prefers-reduced-motion: reduce)")
                        .matches
                        ? "instant"
                        : "smooth",
                    });
                  }}
                >
                  ←
                </button>
                <button
                  aria-label="Próximo projeto"
                  onClick={() => {
                    track.current?.scrollBy({
                      left: track.current.clientWidth,
                      behavior: matchMedia("(prefers-reduced-motion: reduce)")
                        .matches
                        ? "instant"
                        : "smooth",
                    });
                  }}
                >
                  →
                </button>
              </div>
            </div>
            <div className="project-window">
              <div
                className="project-track"
                ref={track}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (
                    (e.key === "ArrowRight" || e.key === "ArrowLeft") &&
                    matchMedia(
                      "(min-width: 1000px) and (prefers-reduced-motion: no-preference)",
                    ).matches
                  ) {
                    e.preventDefault();
                    window.scrollBy({
                      top:
                        (e.key === "ArrowRight" ? 1 : -1) *
                        (window.innerWidth * 0.53 + 32),
                      behavior: "smooth",
                    });
                  }
                }}
                aria-label="Projetos; use as setas para navegar"
              >
                {projects.map((p) => (
                  <a
                    className="project-card"
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    key={p.name}
                  >
                    <div className="project-top">
                      <span>{p.stack.join(" / ")}</span>
                      <span aria-hidden="true">↗</span>
                    </div>
                    <div className="project-image">
                      <img
                        src={p.image}
                        alt={`Interface do ${p.name}`}
                        loading="lazy"
                        width="1100"
                        height="700"
                      />
                    </div>
                    <div className="project-info">
                      <h3>{p.name}</h3>
                      <p>{p.description}</p>
                      <ul className="project-tags">
                        {p.stack.map((s) => (
                          <li key={s}>#{s}</li>
                        ))}
                      </ul>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <a
            className="repository-link"
            href="https://github.com/RuanValenca"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB <span>↗</span>
          </a>
        </section>
        <section id="contato" className="contact section">
          <h2 className="sr-only">Contato</h2>
          <a className="contact-heading" href="mailto:ruangobira@gmail.com">
            Vamos
            <br />
            conversar<span className="accent">?</span>
            <span className="contact-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
          <div className="contact-links">
            <div className="email-wrap">
              <a href="mailto:ruangobira@gmail.com">RUANGOBIRA@GMAIL.COM ↗</a>
              <button
                aria-label="Copiar e-mail"
                aria-live="polite"
                onClick={copy}
              >
                {copied ? "COPIADO ✓" : "COPIAR"}
              </button>
            </div>
            <a
              href="https://github.com/RuanValenca"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB ↗
            </a>
            <a
              href="https://www.linkedin.com/in/ruanvalenca/"
              target="_blank"
              rel="noreferrer"
            >
              LINKEDIN ↗
            </a>
          </div>
          <footer>
            <span>© {new Date().getFullYear()} RUAN CARLOS — BH</span>
            <a href="#home">VOLTAR AO TOPO ↑</a>
          </footer>
        </section>
      </main>
    </div>
  );
}
export default App;
