import React from 'react'
import { Container, Row, Col} from "react-bootstrap";
import apple from '../../Images/apple.png'
import google from '../../Images/google.png'
import shop from '../../Images/shop.png'
import { Link } from 'react-router-dom';


function Section4() {
  return (
    <>
        <section className="shop_section">
            <Container>
                <Row className='align-items-center'>
                <Col lg={6} className='text-center text-lg-start mb-5 mb-lg-0'>
                    <h4>Download Our Mobile App</h4>
                    <h2>Save up to 20%</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non aliquid nostrum porro quos cupiditate perferendis.</p>
                    <Link to='/' >
                        <img src={apple} alt='IOS' className='img-fluid me-3 store apple'></img>
                    </Link>
                    <Link to='/'>
                        <img src={google} alt="android" className='img-fluid me-3 store' />
                    </Link>
                </Col>

                <Col lg={6}>
                    <img src={shop} alt="shop" className='img-fluid' />
                </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Section4