import React, { useEffect, useState } from 'react';
import contactService from '../services/ContactService.js';

const ContactsList = (props) => {

  const [mounted, setMounted] = useState(false);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContacts();
  }, [mounted])

  const getContacts = () => {

    if (!mounted) {
      contactService.getAll()
        .then(reponse => {
          setContacts(reponse.list)
          setMounted(true)
        });
    }
  }

  const handleUpdate = (event) => {

    const { value } = event.target;
    props.history.push('/add', { id: value });

  }

  const handleDelete = (event) => {
    const { value } = event.target;

    contactService.delete(value)
      .then(reponse => {
        if (reponse.status) {
          alert('Contact successfully removed');
          setMounted(() => false)
          getContacts();
        }
      });
  }

  return (
    <div >
      <h2>List of contacts</h2>
      <table class="styled-table">
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Last Name</td>
            <td>Phone</td>
            <td>Address</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {contacts.map(item =>
            <tr key={item.id}>
              <td>{item.id} </td>
              <td>{item.name} </td>
              <td>{item.lastName} </td>
              <td>{item.phone} </td>
              <td>{item.address} </td>
              <td>
                <button onClick={handleDelete} value={item.id}>Delete</button>
                &nbsp;&nbsp;&nbsp;
                <button onClick={handleUpdate} value={item.id}>Update</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>

  );
};

export default ContactsList;