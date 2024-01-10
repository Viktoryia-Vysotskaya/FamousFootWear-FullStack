import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Alert, Spinner, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { FiEye, FiEyeOff } from 'react-icons/fi';

import { API_AUTH_URL } from '../../../config';
import { logIn, getUser } from '../../../redux/usersRedux';
import styles from './LoginForm.module.scss';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(getUser);

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: login, password }),
    };

    setStatus('loading');
    fetch(`${API_AUTH_URL}/login`, options)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((data) => {
        setStatus('success');
        dispatch(logIn(data));
        setTimeout(() => {
          navigate('/');
        }, 3000);
      })
      .catch((error) => {
        if (error.message === 'Bad Request') {
          setStatus('clientError');
        } else {
          setStatus('serverError');
        }
      });
  };

  if (user) {
    return (
      <Alert
        variant="success"
        className={styles.alert}
        style={{ border: '1px solid black' }}
      >
        <Alert.Heading>You're already logged in</Alert.Heading>
        <p style={{ color: 'red' }}>
          Hope your shopping brings you joy and satisfaction!
        </p>
      </Alert>
    );
  }

  return (
    <Form
      onSubmit={handleSubmit}
      className={`rounded ${styles.form}`}
      style={{ background: '#ffffff', border: '1px solid black' }}
    >
      {status === 'success' && (
        <Alert variant="success" className={styles.alert}>
          <Alert.Heading>Success!</Alert.Heading>
          <p>You have been successfully logged in!</p>
        </Alert>
      )}

      {status === 'serverError' && (
        <Alert variant="danger" className={styles.alert}>
          <Alert.Heading>Something went wrong...</Alert.Heading>
          <p>Unexpected error... Try again!</p>
        </Alert>
      )}

      {status === 'clientError' && (
        <Alert variant="danger" className={styles.alert}>
          <Alert.Heading>Incorrect data</Alert.Heading>
          <p>Login or password are incorrect...</p>
        </Alert>
      )}

      <h1 className={`m4 ${styles.title}`}>Login</h1>

      {status === 'loading' && (
        <Spinner animation="border" role="status" className="d-block mx-auto">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}

      <Form.Group className="mb-3" controlId="formLogin">
        <Form.Label className={styles.formLabel}>E-mail</Form.Label>
        <Form.Control
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          placeholder="Enter email..."
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label className={styles.formLabel}>Password</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password..."
          />
          <InputGroup.Text onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <FiEyeOff style={{ color: '#dc3545' }} />
            ) : (
              <FiEye style={{ color: '#dc3545' }} />
            )}
          </InputGroup.Text>
        </InputGroup>
      </Form.Group>

      <Button type="submit" className={styles.buttonSubmit}>
        Sign In
      </Button>
    </Form>
  );
};

export default LoginForm;
