import { Container } from "./styles";
import githubIcon from "../../assets/github-icon.svg"
import externalLinkIcon from "../../assets/external-link-icon.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Portfolio() {
  return (
    <Container id="portfolio">
      <h2>My portfolio</h2>

      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/bigboykirusha/greenhouse_react" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <a href="https://greenhouse-react.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLinkIcon} alt="Visitar site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Smart Greenhouse</h3>
              <p>"Smart Greenhouse" is a commercial project, serving as a landing page for a startup from Thailand, developed on React. This website is designed for a startup specializing in smart greenhouses, providing detailed information about the product and its advantages.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>TypeScript</li>
                <li>Lottie</li>
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
                <a href="https://github.com/bigboykirusha/git-stats" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <a href="https://git-stats-sigma.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLinkIcon} alt="Visitar site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Git Stats</h3>
              <p>"Git-Stats" is my personal project that utilizes the GitHub API to analyze user activity on GitHub. With it, you can browse top users based on various metrics, compare profiles, and even employ a Tinder-like functionality for GitHub to find users with similar interests and skills.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Rest API</li>
                <li>TypeScript</li>
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

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/bigboykirusha/portfolio" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visitar site" />
                </a>
                <a href="https://portfolio-omega-dun-62.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLinkIcon} alt="Visitar site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>This portfolio</h3>
              <p>This is a digital showcase of my skills and creative potential in web development. Here, I've compiled my best works and projects that reflect my professionalism and style. From sleek websites to interactive web applications, each project in my portfolio demonstrates my ability to create quality and innovative solutions for clients.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>TypeScript</li>
                <li>Animation</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
              </div>
            </header>
            <div className="body">
              <h3>Your project</h3>
              <p>This card opens the door to your very own digital project. Together, we'll bring your ideas to life, crafting unique and innovative solutions. Whether it's developing a personal website, an interactive web application, or anything else, your project will reflect your goals and ambitions.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>TypeScript</li>
                <li>Redux</li>
                <li>Rest API</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}