import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import meter1 from '../assets/img/react.svg'
import meter2 from '../assets/img/bootstrap_logo.png'
import meter3 from '../assets/img/css.svg'
import meter4 from '../assets/img/javascript.svg'
import meter5 from '../assets/img/node.svg'
import meter6 from '../assets/img/html.svg'



import colorSharp from '../assets/img/color-sharp-copia.png'

export const Skills = () =>{
    const responsive = {
        superLargeDesktop: {
          
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return(
        <section className="skill" id="skills">
        <Container>
            <Row>
                <Col>
                <div className="skill-box">
                <h2>Skills</h2>
                <p>I've had the opportunity to work with these technologies for full stack applications and web pages. SCRUM methodology was
                      one of the crucial parts to develop some projects with a team so i'm very
                      familiar with this agile methodology and also with the teamwork
                      that this entails.</p>
                <Carousel autoPlaySpeed={1000} autoPlay={true} responsive={responsive} infinite={true} className="skill-slider">
                    <div className="item">
                        <img src={meter1} alt="image"></img>
                        <h5></h5>
                    </div>
                    <div className="item2">
                        <img src={meter2} alt="image"></img>
                        <h5></h5>
                    </div>
                    <div className="item">
                        <img src={meter3} alt="image"></img>
                        <h5></h5>
                    </div>
                    <div className="item">
                        <img src={meter4} alt="image"></img>
                        <h5></h5>
                    </div>
                    <div className="item">
                        <img src={meter6} alt="image"></img>
                        <h5></h5>
                    </div>                  
                    <div className="item">
                        <img src={meter5} alt="image"></img>
                        <h5></h5>
                    </div>
                </Carousel>
                </div>
                </Col>
            </Row>
        </Container>
        <img className="background-image-left" src={colorSharp}/>
        </section>
      )
}