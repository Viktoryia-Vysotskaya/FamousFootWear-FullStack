import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import React from 'react';
import { useEffect, useState } from 'react';
import {
  Row,
  Col,
  Button,
  Card,
  Spinner,
  Alert,
  Form,
  Modal,
} from 'react-bootstrap';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import Amount from '../../common/Amount/Amount';
import Picker from '../../common/Picker/Picker';
import {
  getProductById,
  loadProductsRequest,
} from '../../../redux/productsRedux';
import { getUser } from '../../../redux/usersRedux';
import { returnImgSrc } from '../../../utils/renderImgSrc';
import { API_URL } from '../../../config';
import styles from './ProductOverview.module.scss';

const ProductOverview = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const data = useSelector((state) => getProductById(state, id));
  const user = useSelector(getUser);

  const [productAmount, setProductAmount] = useState(1);
  const [color, setColor] = useState('Enigmatic Ember');
  const [size, setSize] = useState('10US');
  const [comment, setComment] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [validationError, setValidationError] = useState(null);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const formatPrice = (price) => parseFloat(price).toFixed(2);

  useEffect(() => {
    dispatch(loadProductsRequest());
  }, [dispatch, id]);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setLightboxOpen(true);
  };

  const handleAddToCart = async () => {
    if (!user) {
      navigate('/login');
      return;
    }

    if (!productAmount || productAmount < 1 || !color || !size) {
      setValidationError(
        'Please, ensure all fields are filled and amount is at least 1.',
      );
      return;
    }

    const cartData = {
      productId: id,
      amount: productAmount,
      color: color,
      size: size,
      comment: comment,
    };

    try {
      const response = await fetch(`${API_URL}/cart/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cartData),
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error(
          'Oops! Something went wrong while adding the item to your Cart. Please, try again later.',
        );
      }

      setValidationError(null);
      setShowModal(true);
    } catch (error) {
      console.error(error);
      setValidationError(
        <>
          We apologize, but the item couldn't be added to your Cart.
          <br />
          Please retry, and we appreciate your patience.
        </>,
      );
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const goToCart = () => {
    navigate('/cart');
  };

  const handleImageClick = (index) => {
    openLightbox(index);
  };

  const handleLightboxClose = () => {
    setLightboxOpen(false);
  };

  if (!data) {
    return (
      <Spinner animation="border" role="status" className="d-block mx-auto">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  const images = [
    returnImgSrc(data.photo),
    returnImgSrc(`${data.photo}.1`),
    returnImgSrc(`${data.photo}.2`),
    returnImgSrc(`${data.photo}.3`),
  ];

  return (
    <div className={styles.productOverview}>
      <Row>
        <Col xs={12} md={8} lg={6}>
          <Card
            style={{ background: '#ffffff', border: '1px solid black' }}
            className={`rounded ${styles.cardImg}`}
          >
            <h2 className={`pb-3 ${styles.title}`}>{data.title}</h2>
            <Row className={styles.rowImg1}>
              <Col onClick={() => handleImageClick(0)}>
                <div
                  className={`${styles.imageContainer} ${styles.imageContainer0}`}
                >
                  <Card.Img src={images[0]} />
                </div>
              </Col>
            </Row>
            <Row className={styles.rowImg2}>
              <Col onClick={() => handleImageClick(1)}>
                <div
                  className={`${styles.imageContainer} ${styles.imageContainer1}`}
                >
                  <Card.Img src={images[1]} />
                </div>
              </Col>
              <Col onClick={() => handleImageClick(2)}>
                <div
                  className={`${styles.imageContainer} ${styles.imageContainer2}`}
                >
                  <Card.Img src={images[2]} />
                </div>
              </Col>
              <Col onClick={() => handleImageClick(3)}>
                <div
                  className={`${styles.imageContainer} ${styles.imageContainer3}`}
                >
                  <Card.Img src={images[3]} />
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xs={12} md={4} lg={6} className={styles.descriptionCol}>
          <Row>
            <Col>
              <Card
                style={{ background: '#ffffff', border: '1px solid black' }}
                className={`rounded ${styles.cardDescription}`}
              >
                <h2 className={`py-3 pt-md-0 ${styles.cost}`}>
                  <span className={styles.dollar}>$</span>
                  <span className={styles.price}>
                    {formatPrice(data.price)}
                  </span>
                </h2>

                <Card.Body className={styles.bodyDescription}>
                  {data.description
                    .split('\n')
                    .map((paragraph, index, array) => (
                      <React.Fragment key={index}>
                        {paragraph}
                        {index < array.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                </Card.Body>
              </Card>

              <Picker
                title="Color"
                items={[
                  'Whispering Willow',
                  'Mystical Mirage',
                  'Enigmatic Ember',
                  'Celestial Serenity',
                  'Velvet Twilight',
                ]}
                onValueChange={setColor}
                defaultValue="Enigmatic Ember"
              />

              <Picker
                title="Size"
                items={['7US', '8US', '9US', '10US', '11US', '12US', '13US']}
                onValueChange={setSize}
                defaultValue="10US"
              />
              <Amount
                title="Amount"
                onAmountChange={setProductAmount}
                defaultValue={1}
                className={styles.amount}
              />
              {user && (
                <Card
                  style={{ background: '#ffffff', border: '1px solid black' }}
                  className={`rounded mb-3 ${styles.cardComment}`}
                >
                  <Card.Body>
                    <div>
                      <h4 className={styles.comTitle}>Comment</h4>
                      <p className={styles.comInfo}>
                        Here you can share your preferences and special wishes
                        for your order.
                      </p>
                    </div>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      onChange={(e) => setComment(e.target.value)}
                      className={styles.comment}
                    />
                  </Card.Body>
                </Card>
              )}
              {validationError && (
                <Alert variant="danger" className={styles.alert}>
                  {validationError}
                </Alert>
              )}
              <Button
                onClick={handleAddToCart}
                className={`mx-auto d-block my-5 p-2 ${styles.button}`}
              >
                Add To Cart
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>

      <Modal show={showModal} onHide={closeModal} className={styles.modal}>
        <Modal.Header closeButton>
          <Modal.Title className={styles.modalTitle}>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.modalBody}>
          <p>Product successfully was added to cart.</p>
        </Modal.Body>
        <Modal.Footer className={styles.modalFooter}>
          <Button onClick={closeModal} className={styles.button}>
            Stay On Page
          </Button>
          <Button onClick={goToCart} className={styles.button}>
            Go To Cart
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={handleLightboxClose}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
          imagePadding={200}
          enableZoom={true} // Allow image to enlarge on click
          clickOutsideToClose={true} // Close lightbox when clicking outside of it
        />
      )}
    </div>
  );
};

export default ProductOverview;
