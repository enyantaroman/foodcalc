import { Container } from "@mui/material";
import Logo from "../components/molecules/Logo";

const Home = () => {
  return (
    <>
      <Container maxWidth="md">
        <h1>ホーム</h1>
        <Logo />
      </Container>
    </>
  );
};

export default Home;