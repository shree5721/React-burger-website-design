import React from "react";
import { Container, Row, Col,Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import image1 from "../../Images/image1.jpg";
import image2 from "../../Images/image2.jpg";
import image3 from "../../Images/image3.jpg";
import image4 from "../../Images/image4.jpg";
import image5 from "../../Images/image5.jpg";
import image6 from "../../Images/image6.jpg";
import image7 from "../../Images/image7.jpg";
import image8 from "../../Images/image8.jpg";

function Section3() {
  const mockData = [
    {
      id: "0001",
      image: image1,
      title: "Crispy Chicken",
      paragraph: "Chicken breast, chilli sauce, tomatoes, pickles, coleslaw",
      rating: 5,
      price: 150,
    },
    {
      id: "0002",
      image: image2,
      title: "Ultimate Bacon",
      paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
      rating: 4.5,
      price: 250,
    },
    {
      id: "0003",
      image: image3,
      title: "Black Sheep",
      paragraph: "American cheese, tomato relish, avocado, lettuce, red onion",
      rating: 4,
      price: 99,
    },
    {
      id: "0004",
      image: image4,
      title: "Vegan Burger",
      paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
      rating: 3.5,
      price: 200,
    },
    {
      id: "0005",
      image: image5,
      title: "Double Burger",
      paragraph: "2 patties, cheddar cheese, mustard, pickles, tomatoes",
      rating: 3.0,
      price: 350,
    },
    {
      id: "0006",
      image: image6,
      title: "Turkey Burger",
      paragraph: "Turkey, cheddar cheese, onion, lettuce, tomatoes, pickles",
      rating: 3,
      price: 270,
    },
    {
      id: "0007",
      image: image7,
      title: "Smokey House",
      paragraph: "patty, cheddar cheese, onion, lettuce, tomatoes, pickles",
      rating: 2.5,
      price: 199,
    },
    {
      id: "0008",
      image: image8,
      title: "Classic Burger",
      paragraph: "cheddar cheese, ketchup, mustard, pickles, onion",
      rating: 2.0,
      price: 150,
    },
  ];
  return (
    <>
      <section className="menu_section">
        <Container>
          <Row className="text-center">
            <Col lg={{ span: 8, offset: 2 }}className="mb-5">
              <h2>Our Special Bugers</h2>
              <p className="para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                architecto iure quibusdam vitae sunt aperiam saepe amet, vero
                voluptates cum.
              </p>
            </Col>
          </Row>

          <Row>
            {mockData.map((item, index) => (
              <Col sm={6} lg={4} xl={3} className="mb-4">
                <Card className="overflow-hidden">
                  <div className="card_img overflow-hidden">
                    <Card.Img variant="top" src={item.image} className="img-fluid"/>
                  </div>
                  <Card.Body>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="item_rating">
                      <i class="bi bi-star-fill"></i>                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star"></i>
                      </div>
                      <div className="wishlist">
                        <i class="bi bi-heart"></i>
                      </div>
                    </div>

                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.paragraph}</Card.Text>

                    <div className="d-flex align-items-center justify-content-between">
                      <div className="menu_price">
                        <h5 className="mb-0">₹ {item.price}</h5>
                      </div>
                      <div className="add_to_card">
                        <Link to="/">
                          <i class="bi bi-bag me-2"></i>
                          Add To Cart
                        </Link>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          
          <Row className="pt-5">

            <Col sm={6} lg={5} className="text-end">
                <div className="ads_box ads_img1 mb-5 mb-md-0 p-4">
                    <h4>Get Your Free</h4>
                    <h5>French Fries</h5>
                    <Link to='/' className="btn red_btn px-4 rounded-0">Know More</Link>
                </div>
            </Col>

            <Col sm={6} lg={7} className="text-end">
                <div className="ads_box ads_img2 p-4">
                    <h4>Get Your Free</h4>
                    <h5>Chicken Burger</h5>
                    <Link to='/' className="btn red_btn px-4 rounded-0">Know More</Link>
                </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Section3;
