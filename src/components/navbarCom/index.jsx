import { Container } from "react-bootstrap";
import { MainNavbar } from "./element";
import Navbar from "react-bootstrap/Navbar";

function NavbarCom() {
  return (
    <MainNavbar>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand>Book App</Navbar.Brand>
        </Container>
      </Navbar>
    </MainNavbar>
  );
}

export default NavbarCom;
