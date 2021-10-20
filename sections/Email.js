import { Container , Row , Col , Form , Button } from "react-bootstrap"
import SectionHeading from "../components/SectionHeading"

const Email = () => {
    return (
        <div className="emailparent">
            <Container>
                <Row>
                    <Col sx={12} md={6}>
                     <SectionHeading 
                     slogan="Place your order!"
                     title="We love to serve you"
                     isWhite={true}
                     />
                    </Col>
                    <Col sx={12} md={6}>
                    <Form className="form">
                     <Form.Group className="mb-3" controlId="formBasicEmail">
                    
                       <Form.Control size="lg"  type="email" placeholder="Enter email" />
                      
                     </Form.Group>
                   <button  className="btn btn-custom btn-lg  emailbutton" type="submit">
                   Get Started
                     </button>
                  </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Email
