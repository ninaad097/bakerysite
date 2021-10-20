import { Container , Row , Col } from "react-bootstrap"
import SectionHeading from "../components/SectionHeading"
import ReactPlayer from 'react-player/youtube'



const Feature = () => {
    return (
          <section id="features" >
           <div className="container-fluid">
           <SectionHeading
           slogan="Just like home"
           title="We know best food is homemade"
           />
           <Container className="main">
            <Row>
                <Col xs={12} md={6}>
                <ReactPlayer url='https://youtu.be/BN4ocGVWy88' 
                 light={true}
                 playing
                 controls 
                />

                </Col>
                <Col xs={12} md={6} className="sectionright">
                 <h1>What we offer!</h1>
                 <p>Cupcakes from Mamas Bakery offers a wide variety of unusual flavoured cupcakes, 
                   including:</p> 
                   <ul>
                     <li>Rainbow Cupcake</li>
                     <li>Gingerbread flavour</li>
                     <li>Banana Rum</li>
                     <li>Rose Petal</li>
                     <li>Red Velvet</li>
                     <li>Vanilla and Strawberry.</li>
                   </ul>
                   <button  className="btn btn-custom btn-lg formore">For More.</button>
                   
                </Col>
            </Row>
           </Container>


            </div>
            </section>

    )
}

export default Feature
