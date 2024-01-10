import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Spinner, Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import {
  getCartProducts,
  loadCartProductsRequest,
} from '../../../redux/cartRedux';
import CartTable from '../CartTable/CartTable';
import styles from './CartContent.module.scss';

const CartContent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [cartProducts, setCartProducts] = useState(null);
  const reduxCartProducts = useSelector(getCartProducts);
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  useEffect(() => {
    if (reduxCartProducts) {
      setCartProducts(reduxCartProducts);
    }
  }, [reduxCartProducts]);

  useEffect(() => {
    dispatch(loadCartProductsRequest());
  }, [dispatch]);

  if (!cartProducts) {
    return (
      <Spinner animation="border" role="status" className="d-block mx-auto">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <>
      {cartProducts.cartItems.length === 0 ? (
        <p className="text-center" style={{ color: 'red' }}>
          Looks like your Cart is empty.
        </p>
      ) : (
        <>
          <div className={styles.proceed}>
            <CartTable items={cartProducts.cartItems} />
            <Button
              onClick={handleShow}
              className={`mx-auto d-block my-3 p-3 ${styles.button}`}
            >
              Proceed Order
            </Button>
          </div>
        </>
      )}

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className={styles.modalTitle}>Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.modalBody}>
          <p>Are you sure you want to confirm your order?</p>
        </Modal.Body>
        <Modal.Footer className={styles.modalFooter}>
          <Button
            className={styles.button}
            onClick={() => {
              handleClose();
              navigate('/');
            }}
          >
            Continue product review
          </Button>
          <Button
            className={styles.button}
            onClick={() => {
              handleClose();
              navigate('/proceed-order');
              window.location.reload();
            }}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CartContent;
