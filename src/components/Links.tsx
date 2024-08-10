import styled from "styled-components";

const Box = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 1.5em;

  width: 70%;

  background-color: #2c3333;
  padding: 2em 1em;
  border-radius: 8px;
  margin: 1em 0;
`;

const LinkItem = styled.li`
  border: 1px solid #d9d9d9;

  padding: 8px 15px;
  border-radius: 10px;

  background-color: #ebebeb;
  cursor: pointer;
`;

const Link = styled.a`
  font-size: 30px;
  font-weight: 700;
  color: grey;
`;

const Links = () => {
  return (
    <Box>
        <h1 style={{fontSize: '30px', color: 'white'}}>Nossas redes sociais:</h1>
      <LinkItem>
        <Link href="https://www.instagram.com/blurry_clothes/">Instagram</Link>
      </LinkItem>

      <LinkItem>
        <Link href="https://www.tiktok.com/@blurry_clothes/">TikTok</Link>
      </LinkItem>

      {/* <LinkItem>
        <Link href="">Site</Link>
      </LinkItem>

      <LinkItem>
        <Link href="">YouTube</Link>
      </LinkItem> */}
    </Box>
  );
};

export default Links;
