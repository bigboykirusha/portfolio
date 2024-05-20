import { Container } from "./styles";
import githubIcon from "../../assets/github-icon.svg"
import externalLinkIcon from "../../assets/external-link-icon.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Portfolio(){
  return(
    <Container id="portfolio">
      <h2>My portfolio</h2>

      <div className="projects">

      <ScrollAnimation animateIn="flipInX">
        <div className="project">
          <header>
          <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
          <div className="project-links">
            <a href="https://github.com/joaotuliojt/fc-squad43" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
          </div>
          </header>
          <div className="body">
            <h3>Sushi Shop</h3>
            <p>Uma aplicação Web realizada durante o Hackathon do programa de formação da <a href="https://www.fcamara.com.br/"> FCamara</a>. Esta aplicação serve para ajudar na volta do trabalho remoto para o presencial.
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>Node</li>
              <li>Express</li>
              <li>MySql</li>
              <li>Ejs</li>
            </ul>
          </footer>
        </div>
      </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/bigboykirusha/react-shop" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a href="https://bigboykirusha.github.io/react-shop" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visitar site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>Sushi Shop</h3>
              <p>Web application that allows users to search, sort, and add to cart sushi. Implemented pagination, saving the cart to local storage and lazy loading.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Redux</li>
                <li>Typescript</li>
                <li>Rest API</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://joaotuliojt.github.io/sunnyside-agency/" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visitar site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>Sunnyside agency</h3>
              <p>Uma lading page de uma empresa fictícia proposta pelo <a href="https://www.frontendmentor.io/">Frontend Mentor.</a>
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Html</li>
                <li>Css</li>
                <li>JavaScript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://joaotulio.vercel.app/" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visitar site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>Portfólio V1</h3>
              <p>Uma versão alternativa de meu portfólio, utilizando VueJs.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>VueJs</li>
                <li>JavaScript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/joaotuliojt/dtmoney-trilha-reactjs" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="Visitar site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>Dtmoney</h3>
              <p>Um gerenciador de finanças para analisar seus ganhos, gastos e ter um controle maior de suas finanças.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>VueJs</li>
                <li>JavaScript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/bigboykirusha/react-fitness-app" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="Visitar site" />
              </a>
              <a href="https://3d6ef129.react-fitness-app-byg.pages.dev/" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visitar site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>Fitness App</h3>
              <p>Web application that allows users to see the best Github repositories sorted by programming languages and compare their Github profile with those of other users.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>TypeScript</li>
                <li>React</li>
                <li>Tailwind CSS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>



      </div>
    </Container>
  );
}