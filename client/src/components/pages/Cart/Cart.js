import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';

import { getUser, isUserLoading } from '../../../redux/usersRedux';
import CartContent from '../../features/CartContent/CartContent';
import styles from './Cart.module.scss';

const Cart = () => {
  const user = useSelector(getUser);
  const loading = useSelector(isUserLoading);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/login');
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div
      style={{ background: '#ffffff', border: '1px solid black' }}
      className={`rounded ${styles.cart}`}
    >
      <h2 className="mb-3 text-center">Cart</h2>
      <CartContent />
    </div>
  );
};

export default Cart;
