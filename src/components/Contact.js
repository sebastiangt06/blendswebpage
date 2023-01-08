import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from '../assets/img/me.png'
import TrackVisibility from "react-on-screen";
import 'animate.css'
export const Contact = ()=>{
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});
    console.log(formDetails);
    const onFormUpdate =(category, value) =>{
        setFormDetails({
            ...formDetails,
            [category] : value
        })
    }
    const handleSubmit =( async(e) =>{
        e.preventDefault();
        setButtonText("Sending...");
        let response = await fetch("https://portfolio-api-0ce3.onrender.com/contact", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json;charset=utf-8"
            },
            body: JSON.stringify(formDetails),

        });
        setButtonText("Send");
        let result = await response.json();
        setFormDetails(formInitialDetails);
        console.log(result);
        if(result.code === 200){
            setStatus({success: true, message: "Message sent, i'll be in touch!"});
        } else{
            setStatus({success: false, message: 'Something went wrong, please try again later'})
        }
        
    })
    return (
        <section className="contact" id="connect">
            <Container>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }>
            
                <Row>
                    <Col md={6} className='imgContainer'>
                        <img src={contactImg} alt="Contact Us"/>
                    </Col>
                    <Col md={6}>
                        <h2>Get in touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col size={12} sm={6} className='px-1'>
                                    <input type='text' value={formDetails.firstName} placeholder="Name" onChange={(e) => onFormUpdate('firstName', e.target.value) }></input>
                                </Col>
                                <Col size={12} sm={6} className='px-1'>
                                    <input type='text' value={formDetails.lastName} placeholder="Last name" onChange={(e) => onFormUpdate('lastName', e.target.value) }></input>
                                </Col>                           
                                <Col size={12} sm={6} className='px-1'>
                                    <input type='email' value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value) }></input>
                                </Col>                               
                                <Col size={12} sm={6} className='px-1'>
                                    <input type='tel' value={formDetails.phone} placeholder="Phone" onChange={(e) => onFormUpdate('phone', e.target.value) }></input>
                                </Col>
                                <Col size={12} className="px-1">
                                    <textarea row="6" value={formDetails.message} placeholder="Message" onChange={(e)=> onFormUpdate('message', e.target.value)}></textarea>
                                    <button type="submit" ><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                    <p className={status.success === false ? "danger":"success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
                </div>
              )}
            </TrackVisibility>
            </Container>
        </section>

    )
}