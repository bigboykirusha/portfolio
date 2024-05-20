import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  height: 100vh;
  padding-top: 15rem;

  .hard-skills{
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
  }
  .hability{
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
      width: 3.4rem;
    }
  }

  h2{
    display: inline-block;
    margin-bottom: 2rem;
    border-bottom: 0.2rem solid var(--blue);
  }

  h3{
    margin-top: 2rem;
    color: var(--green);
  }

  p{
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }
  
  

  .about-image {
    width: 500px; /* Ширина контейнера */
    height: 500px; /* Высота контейнера */
    position: relative;
    margin-right: auto;
    margin-left: auto;
    border-radius: 50%; /* Закругление контейнера */
    overflow: hidden;
  }
  
  .about-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%; /* Закругление изображения */
    transition: transform 0.5s ease, filter 0.5s ease;
    filter: grayscale(1);
  }
  
  .about-image:hover img {
    filter: grayscale(0);
    transform: scale(1.1); /* Увеличение при наведении */
  }
  

  @media only screen and (max-width: 480px) {
    .about-image {
      width: 100%;
      height: 100%;
      
    }
    .about-image img {
      margin-top: 4rem;
      width: 90%;
      height: 90%;
    }
  }

  @media (max-width: 960px){
    display: flex;
    height: auto;
    padding-top: 0;
    flex-direction: column;
    text-align: center;
    margin-bottom: 10rem;
    h2{
      font-size: 4rem;
      margin-bottom: 4rem;
    }
    .about-image {
      width: 100%;
      height: 100%;
    }
    .about-image img {
      margin-top: 4rem;
    }
    .hard-skills{
      justify-content: center;
    }
    
  }

`