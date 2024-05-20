import { Container } from './styles'

import reactIcon from '../../assets/react-icon.svg'
import linkedinIcon from '../../assets/linkedin.png'
import githubIcon from '../../assets/github.png'
import instagramIcon from '../../assets/instagram.png'
import discordIcon from '../../assets/discord.png'
import telegramIcon from '../../assets/telegram.svg'

export function Footer() {
  return (
    <Container className="footer">
      <div>
        <p>
        This website was made with <img src={reactIcon} alt="React" />.
        </p>
      </div>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/bigboykirusha/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a
          href="https://github.com/bigboykirusha"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>

        <a
          href="https://www.instagram.com/bigboykirusha/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>

        <a
          href="https://discord.com/bigboykirusha"
          target="_blank"
          rel="noreferrer"
        >
          <img src={discordIcon} alt="Discord" />
        </a>
        <a
          href="https://t.me/freebigboykirusha"
          target="_blank"
          rel="noreferrer"
        >
          <img src={telegramIcon} alt="Telegram" />
        </a>
      </div>
    </Container>
  )
}
