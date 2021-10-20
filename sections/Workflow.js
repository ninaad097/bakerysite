import { Container , Row , Col } from "react-bootstrap"
import SectionHeading from "../components/SectionHeading"
import Image from 'next/image'
import bg from "../public/assests/w1.png"
import bg1 from "../public/assests/w2.png"
import bg2 from "../public/assests/w3.png"
import bg3 from "../public/assests/w4.png"



const Workflow = () => {
    return (
        <div className="workflow">

            <Container >
                <SectionHeading 
                 slogan="Our Promise" 
                 title=''
                   />
                <Row >
                    <Col xs={12} md={6} lg={3}>
                        
                     <Image src={bg} alt="workflow1" />
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                    <Image src={bg1} alt="workflow" />


                    </Col>
                    <Col xs={12} md={6} lg={3} >
                    <Image src={bg2} alt="workflow2" />


                    </Col>
                    <Col xs={12} md={6} lg={3}>
                    <Image src={bg3} alt="workflow3" />

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Workflow
