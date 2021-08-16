import React, { useEffect, useState } from 'react';
import  contactService  from '../services/ContactService.js';

const ContactsList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    let mounted = true;
    contactService.getAll()
      .then(items => {
        if (mounted) {
          setList(items.list)
        }
      })
    return () => mounted = false;
  }, [])

  return (
    <div>
      <h2>List of contacts</h2>
      <table class="styled-table">
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Last Name</td>
            <td>Address</td>
            <td>Phone</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {list.map(item =>
            <tr key={item.id}>
              <td>{item.id} </td>
              <td>{item.name} </td>
              <td>{item.lastName} </td>
              <td>{item.phone} </td>
              <td>{item.address} </td>
              <td>
                <button>Update</button>
                <button>Delete</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>

  );
};

export default ContactsList;