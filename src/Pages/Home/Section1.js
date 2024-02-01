import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import burger from '../../Images/burger.png'
import { Link } from 'react-router-dom'

function Section1() {
  return (
    <>
    <section className="hero_section">
        <Container>
            <Row>
                <Col lg={7} className='mb-5 mb-lg-0'>
                    <div className="wrapper">
                        <img src={burger} alt="hero" className="img-fluid burger" />
                        <div className="price_badge">
                                <h4 className="h4_badge">
                                    Only
                                </h4>
                                <h4 className="h3_price"> ₹299</h4>
                        </div>
                    </div>
                </Col>
                <Col lg={5}>
                    <div className="hero_text text-center">
                        <h1 className="text-white">Amzing Burger</h1>
                        <h2 className="text-white">With onions</h2>
                        <p className="text-white pt-2 pb-4">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, sunt. Inventore ipsam cupiditate deleniti ex tenetur numquam doloremque esse voluptatum.
                        </p>
                        <Link to='/' className='btn order_btn'>Order Now</Link>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Section1