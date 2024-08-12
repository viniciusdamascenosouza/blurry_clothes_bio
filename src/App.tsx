import styled from "styled-components";
import Links from "./components/Links";

function App() {
  const MainBox = styled.div`
    background-image: url("/public/wp2631964.jpg");
    background-size: cover;
    background-repeat: repeat;
    font-size: 1.5rem;

    width: 100%;
    height: 120vh;

    text-align: center;
    margin: 0;
    padding: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  `;

  const LogoBox = styled.div`
    background-color: #2c3333;
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const Logo = styled.img`
    max-width: 100%;
    height: 200px;
    object-fit: contain;
  `;

  const Footer = styled.footer`
    background-color: #808080;
    text-align: center;
    width: 100%;
  `;

  return (
    <>
      <MainBox>
        <LogoBox>
          <Logo
            src="/public/blurryclothes02.png"
            alt="Logo da Blurry Clothes"
          />
        </LogoBox>
        <Links />
        <Footer>
          <p>&copy; 2024 Blurry Clothes. Todos os direitos reservados.</p>
          <p>Desenvolvidos por Vinícius Damasceno</p>
        </Footer>
      </MainBox>
    </>
  );
}

export default App;
