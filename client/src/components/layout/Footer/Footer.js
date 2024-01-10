/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer
      style={{ background: '#ffffff', border: '1px solid black' }}
      className="rounded"
    >
      <div id={styles.footer} className={styles.footer}>
        <div className={`row no-gutters ${styles.iconComponent}`}>
          <div className={`col ${styles.connectComponent}`}>
            <div className={styles.connectComponentContent}>
              <p>
                <strong>CONNECT WITH US</strong>
              </p>
            </div>
          </div>

          <div className={`col ${styles.icon}`}>
            <div className={styles.socialComponentContent}>
              <a href="#" className={styles.facebookIcon}>
                <span className="fab fa-facebook"></span>
              </a>
            </div>
          </div>

          <div className={`col ${styles.icon}`}>
            <div className={styles.socialComponentContent}>
              <a href="#" className={styles.pinterestIcon}>
                <span className="fab fa-pinterest"></span>
              </a>
            </div>
          </div>

          <div className={`col ${styles.icon}`}>
            <div className={styles.socialComponentContent}>
              <a href="#" className={styles.instagramIcon}>
                <span className="fab fa-instagram"></span>
              </a>
            </div>
          </div>

          <div className={`col ${styles.icon}`}>
            <div className={styles.socialComponentContent}>
              <a href="#" className={styles.youtubeIcon}>
                <span className="fab fa-youtube"></span>
              </a>
            </div>
          </div>
        </div>

        <div className={`row no-gutters ${styles.listComponent}`}>
          <div className={`col ${styles.listColumn}`}>
            <div className={styles['list-block']}>
              <div>
                <p>
                  <strong>Popular Categories</strong>
                </p>
              </div>
              <ul className={styles['footer__link-list']}>
                <li className={styles['footer__link-list__item']}>
                  <div className="field-link">
                    <a href="#">Sneakers &amp; Athletic Shoes</a>
                  </div>
                </li>

                <li className={styles['footer__link-list__item']}>
                  <div className="field-link">
                    <a href="#">Boots</a>
                  </div>
                </li>

                <li className={styles['footer__link-list__item']}>
                  <div className="field-link">
                    <a href="#">Sandals</a>
                  </div>
                </li>

                <li className={styles['footer__link-list__item']}>
                  <div className="field-link">
                    <a href="#">Women's Heels</a>
                  </div>
                </li>

                <li className={styles['footer__link-list__item']}>
                  <div className="field-link">
                    <a href="#">Slip On Shoes</a>
                  </div>
                </li>

                <li className={styles['footer__link-list__item']}>
                  <div className="field-link">
                    <a href="#">Running Shoes</a>
                  </div>
                </li>

                <li className={styles['footer__link-list__item']}>
                  <div className="field-link">
                    <a href="#">Loafers &amp; Oxfords</a>
                  </div>
                </li>

                <li className={styles['footer__link-list__item']}>
                  <div className="field-link">
                    <a href="#">Kids</a>
                  </div>
                </li>

                <li className={styles['footer__link-list__item']}>
                  <div className="field-link">
                    <a href="#">Sale</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className={`col ${styles.listColumn}`}>
            <div className={styles['list-block']}>
              <div>
                <p>
                  <strong>Stores</strong>
                </p>
              </div>
              <ul className={styles['footer__link-list']}>
                <li className={styles['footer__link-list__item']}>
                  <div className="field-link">
                    <a href="#">Famously Fast Pickup</a>
                  </div>
                </li>
                <li className={styles['footer__link-list__item']}>
                  <div className="field-link">
                    <a href="#">Find A Store</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className={`col ${styles.listColumn}`}>
            <div className={styles['list-block']}>
              <div>
                <p>
                  <strong>Famously You</strong>
                </p>
              </div>
              <ul className={styles['footer__link-list']}>
                <li className={styles['footer__link-list__item']}>
                  <div className="field-link">
                    <a href="#">Sign In / Join Now</a>
                  </div>
                </li>
                <li className={styles['footer__link-list__item']}>
                  <div className="field-link">
                    <a href="#">Learn More</a>
                  </div>
                </li>
                <li className={styles['footer__link-list__item']}>
                  <div className="field-link">
                    <a href="#">Credit Card</a>
                  </div>
                </li>
                <li className={styles['footer__link-list__item']}>
                  <div className="field-link">
                    <a href="#">Mobile App</a>
                  </div>
                </li>
                <li className={styles['footer__link-list__item']}>
                  <div className="field-link">
                    <a href="#">Rewards Terms</a>
                  </div>
                </li>
                <li className={styles['footer__link-list__item']}>
                  <div className="field-link">
                    <a href="#">Wish List Giveaway</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className={`col ${styles.listColumn}`}>
            <div className={styles['list-block']}>
              <div>
                <p>
                  <strong>Help</strong>
                </p>
              </div>
              <ul className={styles['footer__link-list']}>
                <li className={styles['footer__link-list__item']}>
                  <div className="field-link">FAQ / Contact Us</div>
                </li>
                <li className={styles['footer__link-list__item']}>
                  <div className="field-link">
                    <a href="#">Shipping &amp; Returns</a>
                  </div>
                </li>
                <li className={styles['footer__link-list__item']}>
                  <div className="field-link">
                    <a href="#">Exclusions</a>
                  </div>
                </li>
                <li className={styles['footer__link-list__item']}>
                  <div className="field-link">
                    <a href="#">Track My Order</a>
                  </div>
                </li>
                <li className={styles['footer__link-list__item']}>
                  <div className="field-link">
                    <a href="#">Gift Cards</a>
                  </div>
                </li>
                <li className={styles['footer__link-list__item']}>
                  <div className="field-link">
                    <a href="#">Shoe Size Charts</a>
                  </div>
                </li>
                <li className={styles['footer__link-list__item']}>
                  <div className="field-link">
                    <a href="#">Zip</a>
                  </div>
                </li>
                <li className={styles['footer__link-list__item']}>
                  <div className="field-link">
                    <a href="#">Unsubscribe from Email</a>
                  </div>
                </li>
                <li className={styles['footer__link-list__item']}>
                  <div className="field-link">
                    <a href="#">Accessibility</a>
                  </div>
                </li>
                <li className={styles['footer__link-list__item']}>
                  <div className="field-link">
                    <a href="#">Do Not Sell or Share My Personal Information</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className={`col ${styles.listColumn}`}>
            <div className={styles['list-block']}>
              <div>
                <p>
                  <strong>About Us</strong>
                </p>
              </div>
              <ul className={styles['footer__link-list']}>
                <li className={styles['footer__link-list__item']}>
                  <div className="field-link">
                    <a href="#">About Us</a>
                  </div>
                </li>
                <li className={styles['footer__link-list__item']}>
                  <div className="field-link">
                    <a href="#">Careers</a>
                  </div>
                </li>
                <li className={styles['footer__link-list__item']}>
                  <div className="field-link">
                    <a href="#">Soles4Souls</a>
                  </div>
                </li>
                <li className={styles['footer__link-list__item']}>
                  <div className="field-link">
                    <a href="#">Ticket to Dream</a>
                  </div>
                </li>
                <li className={styles['footer__link-list__item']}>
                  <div className="field-link">
                    <a href="#">Site Map</a>
                  </div>
                </li>
                <li className={styles['footer__link-list__item']}>
                  <div className="field-link">
                    <a href="#">Eco-Conscious</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={`col-12 ${styles['disclaimer-text']}`}>
          <div>
            <span>Copyright &copy; FamousFootWear.App 2024</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
