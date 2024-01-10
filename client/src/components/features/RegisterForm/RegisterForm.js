import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Form,
  Button,
  Alert,
  Spinner,
  InputGroup,
  Row,
  Col,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { FiEye, FiEyeOff } from 'react-icons/fi';

import { getUser } from '../../../redux/usersRedux';
import validatePassword from '../../../utils/validatePassword';
import { API_AUTH_URL } from '../../../config';
import styles from './RegisterForm.module.scss';

const RegisterForm = () => {
  const user = useSelector(getUser);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    passwordRepeat: '',
    name: '',
    address: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Password verification
    const passwordError = validatePassword(formData.password);
    if (passwordError) {
      // Setting up a password error
      setErrors({ password: passwordError });
      // Set the status to "clientError"
      setStatus('clientError');
      return;
    }

    const newErrors = {};

    if (!formData.name) newErrors.name = 'Name is required!';
    if (!formData.email) newErrors.email = 'Email is required!';
    if (!formData.password) newErrors.password = 'Password is required!';
    if (!formData.passwordRepeat)
      newErrors.passwordRepeat = 'Please, confirm your password!';
    if (formData.password !== formData.passwordRepeat)
      newErrors.passwordMismatch = 'Passwords do not match!';
    if (!formData.address) newErrors.address = 'Address is required!';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const data = {
        ...formData,
      };

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      };

      setStatus('loading');

      fetch(`${API_AUTH_URL}/register`, options)
        .then((res) => {
          let status = res.status;
          return res.json().then((data) => ({ ...data, status }));
        })
        .then((data) => {
          if (data.status === 201) {
            setStatus('success');
            setTimeout(() => {
              navigate('/login');
            }, 5000);
          } else if (data.status === 400) {
            setStatus('clientError');
          } else if (data.status === 409) {
            setStatus('loginError');
          } else {
            setStatus('serverError');
          }
        });
    }
  };

  const handleChangePassword = (e) => {
    const newPassword = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      password: newPassword,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  if (user) {
    return (
      <Alert
        variant="success"
        className={styles.alert}
        style={{ border: '1px solid black' }}
      >
        <Alert.Heading>Account Already Active</Alert.Heading>
        <p>
          Your account is already active. If you want to create a new one,
          please log out first.
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
          <p>You have been registered! You can now log in...</p>
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
          <Alert.Heading>No enough data!</Alert.Heading>
          <p>You have to fill all the fields!</p>
        </Alert>
      )}

      {status === 'loginError' && (
        <Alert variant="warning" className={styles.alert}>
          <Alert.Heading>Login is already in use!</Alert.Heading>
          <p>You have to use other login!</p>
        </Alert>
      )}

      {status === 'loading' && (
        <Spinner animation="border" role="status" className="d-block mx-auto">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}

      <Row className="mb-3">
        <Col xs={6}>
          <h1 className={`m4 ${styles.title}`}>Register</h1>
        </Col>
        <Col xs={6} className="text-end">
          <p className={`mb-0 ${styles.info}`}>
            For demonstration purposes, you can sign in with the following
            credentials:
            <br />
            <b>Login:</b> dawidko@example.com
            <br />
            <b>Password:</b> 789Test
          </p>
        </Col>
      </Row>

      <Form.Group className="mb-3" controlId="formName">
        <Form.Label className={styles.formLabel}>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter name..."
          isInvalid={errors.name}
        />
        <Form.Control.Feedback type="invalid">
          {errors.name}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label className={styles.formLabel}>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email..."
          isInvalid={errors.email}
        />
        <Form.Control.Feedback type="invalid">
          {errors.email}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label className={styles.formLabel}>Password</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={handleChangePassword}
            placeholder="Enter password..."
            isInvalid={errors.password}
          />
          <InputGroup.Text onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <FiEyeOff style={{ color: '#dc3545' }} />
            ) : (
              <FiEye style={{ color: '#dc3545' }} />
            )}
          </InputGroup.Text>
        </InputGroup>
        <Form.Control.Feedback type="invalid">
          {errors.password}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPasswordRepeat">
        <Form.Label className={styles.formLabel}>Repeat Password</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control
            type={showRepeatPassword ? 'text' : 'password'}
            name="passwordRepeat"
            value={formData.passwordRepeat}
            onChange={handleChange}
            placeholder="Repeat password..."
            isInvalid={errors.passwordRepeat || errors.passwordMismatch}
          />
          <InputGroup.Text
            onClick={() => setShowRepeatPassword(!showRepeatPassword)}
          >
            {showRepeatPassword ? (
              <FiEyeOff style={{ color: '#dc3545' }} />
            ) : (
              <FiEye style={{ color: '#dc3545' }} />
            )}
          </InputGroup.Text>
        </InputGroup>
        <Form.Control.Feedback type="invalid">
          {errors.passwordRepeat || errors.passwordMismatch}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formAddress">
        <Form.Label className={styles.formLabel}>Address</Form.Label>
        <Form.Control
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter address..."
          isInvalid={errors.address}
        />
        <Form.Control.Feedback type="invalid">
          {errors.address}
        </Form.Control.Feedback>
      </Form.Group>

      <Button type="submit" className={styles.buttonSubmit}>
        Submit
      </Button>
    </Form>
  );
};

export default RegisterForm;
