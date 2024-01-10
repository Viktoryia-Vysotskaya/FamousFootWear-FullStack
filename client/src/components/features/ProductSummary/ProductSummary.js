import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { IMGS_URL } from '../../../config';
import styles from './ProductSummary.module.scss';

const ProductSummary = ({ id, title, photo, price }) => {
  const imageSrc = `${IMGS_URL}${photo}`;
  const targetUrl = `/products/${id}`;

  // Convert price to number and format with two decimal places
  const formattedPrice = parseFloat(price).toFixed(2);

  return (
    <div className={styles.cardContainer}>
      <Card
        style={{ background: '#ffffff', border: '1px solid black' }}
        className={`mb-4 mx-auto rounded ${styles.card}`}
      >
        <div className={styles.imgContainer}>
          <Card.Img src={`${imageSrc}.png`} alt={title} />
        </div>
        <Card.Body className={styles.cardBody}>
          <Card.Title className={styles.title}>{title}</Card.Title>
          <Card.Text className={styles.cardText}>
            <span className={styles.priceLabel}>Price:</span>
            <span className={styles.dollar}> $</span>
            <span className={styles.formattedPrice}>{formattedPrice}</span>
          </Card.Text>
          <Link to={targetUrl}>
            <Button className={styles.buttonView}>View Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

ProductSummary.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default ProductSummary;
