import { Container , Col , Row  , Card} from "react-bootstrap"
import Image from 'next/image'
import  {teamData}  from "../public/assests/data/teamdata"
import SectionHeading from "../components/SectionHeading"

const Team = () => {
    return (
        <section id="us" >

        <div className="teamparent">
            <SectionHeading  
            slogan="Our Team"
           title="We are experts..Don't Worry"
            />
                    <Container >
                        <Row>
               { teamData.map((team) => (
                            <Col xs={12} md={6} lg={4} key="team.id">
                           <Card style={{ width: '18rem' , marginTop: '20px' }}  className="teami" >
                          <Image src={team.imgSrc} alt={team.altText}/>
                          <Card.Body>
                            <Card.Title>{team.title}</Card.Title>
                            <Card.Text>
                             {team.designation}
                            </Card.Text>
                            {
                            team.socialProfile.map((social) => (
                                <a href={social.path} className={social.name} key={social.id}>{social.icon}</a>
                            ))
                            }
                            
                          </Card.Body>
                          </Card>
                            
                            </Col>

                ))}
                        </Row>
                     </Container>
            
            
        </div>
        </section>
    )
}

export default Team



{/* <Image className="teamimg" src={team.imgSrc} alt={team.altText} />
<h3>{team.title}</h3>
 <p>{team.designation}</p> */}