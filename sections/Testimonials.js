import { Carousel } from 'react-bootstrap'
import Img1 from "../public/assests/testimonials/avatar1.png"
import Avatar1 from "../public/bg2.jpg"
import Img2 from "../public/assests/testimonials/avatar2.png"
import Img3 from "../public/assests/testimonials/avatar3.png"



import Image from 'next/image'
import SectionHeading from '../components/SectionHeading'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


const [ data1 , data2 , data3 ] = [
    {
      id: 1,
      title: 'Modern Cupcakes.Old taste!',
      description:
        'Never disappointed when I stop at Mamas.The employees are friendly and helpful and the prices are very reasonable.',
      avatar: Img1,
      name: 'Denny Hilguston',
      designation: 'Texas',
      review: 4,
    },
    {
      id: 2,
      title: 'Yummm! Nothing else',
      description:
        'Everything in this place looks so good. Very clean, friendly atmosphere. ',
      avatar: Img2,
      name: 'John Kennedy',
      designation: 'Bhilad',
      review: 5,
    },
    {
      id: 3,
      title: 'The best tasting wedding cake I ever had! ',
      description:
        'The pastry names may be ordinary but the taste is far from it. Best cheese pastry I have ever tasted.',
      avatar: Img3,
      name: 'Modi Ji',
      designation: 'Shirpur',
      review: 5,
    },
]
const Testimonials = () => {

    return (
        <section id="testimonial" >

        <div className="testimonialparent">
            <SectionHeading slogan="What people say." isWhite={true} />
         
            <Carousel>
  <Carousel.Item>
    <Image
      width={900} 
      height={600}
      src={Avatar1}
      alt="First slide"
    />
    <Carousel.Caption className="testi1">
      <h3>{data1.title}</h3>
      <h5>{`${data1.name} from ${data1.designation}`}</h5>
      <p>{data1.description}</p>
      <Image
       width={100} 
      height={100} src={data1.avatar} alt="" className="testimg" />
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <Image
       width={900} 
       height={600}
      src={Avatar1}
      alt="Second slide"
    />

    <Carousel.Caption className="testi1">
    <h3>{data2.title}</h3>
      <h5>{`${data2.name} from ${data2.designation}`}</h5>
      <p>{data2.description}</p>
      <Image
       width={100} 
       height={100}  src={data2.avatar} alt=""  className="testimg"/>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <Image
     width={900} 
     height={600}
      src={Avatar1}
      alt="Third slide"
    />

    <Carousel.Caption className="testi1">
    <h3>{data3.title}</h3>
      <h5>{`${data3.name} from ${data3.designation}`}</h5>
      <p>{data3.description}</p>
      <Image 
       width={100} 
       height={100} src={data3.avatar} alt=""  className="testimg"/>
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
        </section>
    )
}

export default Testimonials
