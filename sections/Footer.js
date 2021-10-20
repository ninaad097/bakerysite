import { Container, Row , Col} from "react-bootstrap"
import Contact from "../components/Contact"
import { FaFacebookF, FaTwitter, FaInstagram , FaLinkedin, FaYoutube } from 'react-icons/fa';


const Footer = () => {
    return (
        <div>
                    
            <Container className="footer" >
                <Row>
                    <Col sx={12} md={6} lg={4}>
                        <div className="parentlink">

                    <ul style={{ marginRight:'45px'}} className="linkf">
                        <li style={{ textDecoration:'underline' }}>Quick link</li>
                       <li><a href="#home">Home</a></li> 
                       <li><a href="#features">Features</a> </li> 
                       <li> <a href="#us">Know us</a></li> 
                       <li> <a href="#home">Contact</a></li> 
                    </ul>
                    <ul className="moref">
                        <li style={{ textDecoration:'underline'}}>Know More</li>
                       <li><a href="#">Funding</a></li> 
                       <li><a href="#">Our Mission</a> </li> 
                       <li> <a href="#">Policies</a></li> 
                       <li> <a href="#">Upcoming Offers</a></li> 
                    </ul>
                        </div>
                   
                    </Col>
                    <Col sx={12} md={6} lg={4}>
                        <div className="addressf">
                        <h6 style={{ textDecoration:'underline' , textAlign:'center'}}>Address</h6>
                    <p >Sector 3, A-44 / 101 flat , Shop No4, Mira Road , Mumbai Call us at	02228106709</p>
                    
            

                        </div>
                        <div className="followf">

                        <h6 style={{ textDecoration:'underline' ,  textAlign:'center'}}>Follow Us:</h6>
                    <ul className="socialf">
                    {/* <li style={{ textDecoration:'underline'}}>Follow Us:</li> */}
                       <li><a href="#">< FaFacebookF /></a></li> 
                       <li><a href="#">< FaTwitter /></a> </li> 
                       <li> <a href="#"><FaInstagram /></a></li> 
                       <li> <a href="#"><FaLinkedin /></a></li> 
                       <li> <a href="#"><FaYoutube /></a></li>
                    </ul>
                        </div>
                  
                    </Col>
                    <Col sx={12} md={6} lg={4}>
                    <Contact />
                    </Col>
                </Row>
            </Container>
            <Container>
                <div className="copyright">
                 <h3 style={{ textAlign: 'center' , padding:'8px auto' , fontFamily:'"Klee One", cursive '}}>Copyright {new Date().getFullYear()} By  Ninad Sonawane ❤️  </h3>
                </div>
            </Container>
        </div>
     
    );
}

export default Footer

