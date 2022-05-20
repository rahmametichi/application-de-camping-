import React from "react";
import Carousel from "../components/Carousel";
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
    return (
        <>
            <Carousel />
            <Container className="my-5">
                <Row>
                    <Col data-aos="fade-up" className="m-4 default">
                        <h1>What is Let's Camp?</h1>
                        <p>
                        We are an online platform that connects campers with campgrounds. 
                        If you’re a camper, it’s a handy tool to find and book with your favorite campground. 
                        If you’re a campground owner, it’s a full reservation system that lets you upload all of your individual site and park info, 
                        and then manage all of your bookings.</p>

                            <li>Let’s Camp allows the camper to create, edit and cancel their reservations which allowed our staff to focus on other duties. Love it! </li>
                            <li>Keep up the hard work with the Let’s Camp App. I can tell you that our park numbers are up about 400% from last year and I account it to using the Let’s Camp app! Please share this with your team… great job!</li>
                            
                        <hr />
                        <h6>Let’s Camp is a very useful program and it has made my job as a campground manager much easier! Their tech support is awesome!</h6>
                    </Col >
                </Row>
            </Container>

        </>
    );
};

export default Home;