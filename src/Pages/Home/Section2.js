import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pizza from "../../Images/pizza .png";
import quality from "../../Images/quality.png";
import delivery from "../../Images/delivery.png";

function Section2() {
  const cardData = [
    {
      image: Pizza,
      title: "Original",
      paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
    },
    {
      image: quality,
      title: "Qualty Foods",
      paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
    },
    {
      image: delivery,
      title: "Fastest Delivery",
      paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
    },
  ];

  return (
    <>
      <section className="about_section">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center">
              <h2>The burger tastes better when you eat it with your family</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
                voluptate laboriosam odit vel nam veritatis dolores velit
                eligendi est adipisci!
              </p>
              <Link to="/" className="btn red_btn">
                Explore Menu
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="about_wrapper">
        <Container>
          <Row className="justify-content-md-center align-items-center">
            {cardData.map((item, index) => (
              <Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>
                <div className="about_box text-center">
                  <div className="about_icon">
                    <img
                      src={item.image}
                      className="img-fluid"
                      alt="icon"
                    />
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.paragraph}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Section2;
