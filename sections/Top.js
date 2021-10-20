
import { Container , Row , Col } from "react-bootstrap"
import Navb from "../components/Navb"

const Top = () => {
    return (
        <>
        <section id="home">
            <div className="bg-image">
            <Container className="bg-container">
            <Navb />
            <div className="main">
             <Row>
                 <Col >
                 <div className="title">
                 <h2>Mama's Bakery</h2>
                  <p>Every flavour has its own story.</p>

                 <button  className="btn btn-custom btn-lg">Explore</button>
                 </div>
                 </Col>
             </Row>
            </div>
            </Container>
            </div>
            
           
        </section>
        </>
    )
}

export default Top
