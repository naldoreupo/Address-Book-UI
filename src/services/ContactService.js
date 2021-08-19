import axios from 'axios';


const baseUrl = 'https://localhost:44371/api/contact';

const contactService = {

  getAll: async function () {
    return await axios.get(`${baseUrl}/Getall`)
      .then(function (response) {
        return response.data;
      })
  },
  getById: async function (id) {
    return await axios.get(`${baseUrl}/${id}`)
      .then(function (response) {
        return response.data;
      })
  },
  create: async function (contact) {
    return await axios.post(`${baseUrl}`, contact)
      .then(function (response) {
        return response.data;
      });
  },
  update: async function (contact) {
    return await axios.put(`${baseUrl}/${contact.id}`, contact)
      .then(function (response) {
        return response.data;
      });
  },
  delete: async function (id) {
    return await axios.delete(`${baseUrl}/${id}`)
      .then(function (response) {
        return response.data;
      });
  }
}

export default contactService;