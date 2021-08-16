import React, {  useState   } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import  contactService  from '../services/ContactService.js';

const ContactForm = (props) => {

  const [contact, setContact] = useState({
    name: props.contact ? props.contact.name : '',
    lastname: props.contact ? props.contact.lastname : ''
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { name, lastname } = contact;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [name, lastname];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const contact = {
        name,
        lastname
      };
      props.handleOnSubmit(contact);
      contactService.save(contact)
        .then(data => {
          alert('Contact created created successfully');
        })

    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
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
        <Form.Group controlId="lastname">
          <Form.Label>Lastname</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="lastname"
            value={lastname}
            placeholder="Enter lastname of contact"
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