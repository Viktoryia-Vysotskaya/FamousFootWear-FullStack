import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

import styles from './About.module.scss';

const About = () => {
  return (
    <div className={`rounded ${styles.container}`}>
      <div className="my-3">
        <Row className="justify-content-center">
          <Col md={8}>
            <Card>
              <Card.Body>
                <p>
                  Welcome to Famous FootWear, where we are passionate about
                  providing high-quality and stylish footwear for every
                  occasion.
                </p>
                <p className={styles.info}>
                  At Famous FootWear we believe that the right pair of shoes can
                  not only complement your outfit but also enhance your comfort
                  and confidence. That's why we curate a diverse collection of
                  shoes, ranging from casual sneakers to elegant heels, to meet
                  the unique preferences of our customers.
                </p>
                <p>
                  Our commitment to quality extends beyond just the products we
                  offer. We strive to create a seamless shopping experience for
                  our customers, from browsing our online catalog to receiving
                  your order at your doorstep.
                </p>
                <p className={styles.info}>
                  Whether you're looking for the latest trends, timeless
                  classics, or comfortable everyday shoes, Famous FootWear has
                  you covered. Our team is dedicated to staying on top of the
                  latest fashion and footwear trends to ensure that our
                  customers have access to the best and most stylish options.
                </p>
                <p>
                  Thank you for choosing Famous FootWear as your go-to online
                  destination for footwear. We look forward to serving you and
                  providing you with an exceptional shopping experience.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <img src="/images/Logo1.png" alt="Company Logo" className={styles.logo} />
    </div>
  );
};

export default About;
