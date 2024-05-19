import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contato">
      <header>
        <h2>Contact me</h2>
        <p>If you recognize my potential or wish to connect, feel free to reach out.</p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:bigboykirusha@gmail.com">bigboykirusha@gmail.com</a>
        </div>
        <div>
          <img src={phoneIcon} alt="Email" />
          <a href="tel:+995599914935">(599) 91-49-35</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}