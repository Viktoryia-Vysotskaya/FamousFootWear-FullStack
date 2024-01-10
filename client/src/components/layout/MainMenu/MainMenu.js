import { Navbar, Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaUser, FaUserPlus } from 'react-icons/fa';

import { getUser } from '../../../redux/usersRedux';
import styles from './MainMenu.module.scss';

const MainMenu = () => {
  const user = useSelector(getUser);

  return (
    <div>
      <Navbar
        style={{ background: '#ffffff', border: '1px solid black' }}
        expand="lg"
        className={`rounded my-3 my-lg-4 px-3 px-lg-5 ${styles.navBar}`}
      >
        <Navbar.Brand href="/">
          <img
            src="/images/Logo2.png"
            alt="logo"
            className={styles.navBrandImage}
            width={'120px'}
          ></img>
        </Navbar.Brand>
        <Navbar.Brand as={Link} to="/" className={styles.navBrand}>
          Home
        </Navbar.Brand>
        <Navbar.Brand
          as={Link}
          to={user ? '/cart' : '/login'}
          className={styles.navBrand}
        >
          Cart
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end pt-2 pt-lg-3"
        >
          <Nav className={styles.nav}>
            {user && (
              <div className={`mb-2 mb-lg-3 ${styles.loggedInfo}`}>
                <FaUser /> {user.login || user.email}
              </div>
            )}
            {user && (
              <Nav.Link
                as={Link}
                to="/orders"
                className={`mb-2 mb-lg-3 mr-lg-2 ${styles.navLink}`}
              >
                Orders
              </Nav.Link>
            )}
            {!user && (
              <Nav.Link
                as={Link}
                to="/login"
                className={`mb-2 mb-lg-3 mr-lg-2 ${styles.navLink}`}
              >
                <FaUser /> Sign In
              </Nav.Link>
            )}
            {user && (
              <Nav.Link
                as={Link}
                to="/logout"
                className={`mb-2 mb-lg-3 mr-lg-2 ${styles.navLink}`}
              >
                Sign Out
              </Nav.Link>
            )}
            {!user && (
              <Nav.Link
                as={Link}
                to="/register"
                className={`mb-2 mb-lg-3 mr-lg-2 ${styles.navLink}`}
              >
                <FaUserPlus /> Sign Up
              </Nav.Link>
            )}

            <Nav.Link
              href="/about"
              className={`mb-2 mb-lg-3 mr-lg-2 ${styles.navLink}`}
            >
              About us
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/contact"
              className={`mb-2 mb-lg-3 mr-lg-2 ${styles.navLink}`}
            >
              Contact us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default MainMenu;
