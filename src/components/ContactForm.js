import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import contactService from '../services/ContactService.js';
import { useLocation, useHistory, useParams } from 'react-router-dom';

const ContactForm = props => {

  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    if (location.state != null) {
      contactService.getById(location.state.id).then(response => {
        if (response) {
          setContact(response);
        }
      });
    }
  }, []);

  const location = useLocation();

  const initialState = {
    id: 0,
    name: '',
    lastName: '',
    phone: "",
    address: ""
  }

  const [contact, setContact] = useState(initialState);
  const [errorMsg, setErrorMsg] = useState('');
  const { name, lastName, phone, address } = contact;

  const handleOnSubmit = (event) => {

    event.preventDefault();

    const values = [name, lastName, phone, address];

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (!allFieldsFilled) {
      setErrorMsg('Please fill out all the fields.');
      return;
    }

    const contact = {
      name,
      lastName,
      phone,
      address
    };

    if (id > 0) {
      contact.id = parseInt(id);
      contactService.update(contact)
        .then(response => {
          if (response) {
            alert('Contact update created successfully');
          };
        });
    }
    else {
      contactService.create(contact)
        .then(response => {
          if (response) {
            alert('Contact created created successfully');
          };
        });
    }

    history.push("/");

  };

  const handleInputChange = (event) => {

    const { name, value } = event.target;

    setContact((prevState) => ({
      ...prevState,
      [name]: value
    }));

  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="id">
          <Form.Control
            className="input-control"
            type="hidden"
            name="id"
            value={id}
          />
        </Form.Group>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="name"
            value={name}
            placeholder="Enter name of contact"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="lastName">
          <Form.Label>lastName</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="lastName"
            value={lastName}
            placeholder="Enter lastName of contact"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="phone">
          <Form.Label>phone</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="phone"
            value={phone}
            placeholder="Enter phone of contact"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="address"
            value={address}
            placeholder="Enter address of contact"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Save
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;