import React from 'react';
import ContactForm from './ContactForm';

const AddContact = () => {
  const handleOnSubmit = (Contact) => {
    console.log(Contact);
  };

  return (
    <React.Fragment>
      <ContactForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddContact;