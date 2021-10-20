import { Navbar ,  Container ,  Nav } from "react-bootstrap"
import Image from 'next/image'


const Navb = () => {
    return (
        <div className="navp">
        <Navbar fixed="top" bg="dark" variant="dark" collapseOnSelect expand="lg" >
       <Container className="nav">
    
      <Nav className="me-auto">
      <Nav.Link className="navitems" href="#home">Home</Nav.Link>
      <Nav.Link className="navitems" href="#features">We Offer</Nav.Link>
      <Navbar.Brand href="#home" className="navitems logo">
      <Image
        src="/logo.png"
        width="45"
        height="45"
        className="d-inline-block align-top shadow  logo"
        alt="React Bootstrap logo"
       />
    </Navbar.Brand>
      <Nav.Link className="navitems" href="#us">Know Us</Nav.Link>
      <Nav.Link className="navitems" href="#testimonial">Testimonial</Nav.Link>
    </Nav>
    </Container>
  </Navbar> 
        </div>
    )
}

export default Navb
