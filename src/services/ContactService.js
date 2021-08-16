import axios from 'axios';

const contactService = {

  getAll: function () {
    return axios.get('https://localhost:44371/api/contact/Getall')
      .then(function (response) {
        return response.data;
      })
  },
  save: function (contact) {
    return axios.post('https://localhost:44371/api/contact', contact)
      .then(function (response) {
        return response.data;
      });
  },
  delete: function (id) {
    return axios.delete(`https://localhost:44371/api/contact/${id}`)
      .then(function (response) {
        return response.data;
      });
  },
  update: function (id,contact) {
    return axios.put(`https://localhost:44371/api/contact/${id}`, contact)
      .then(function (response) {
        return response.data;
      });
  }
}

export default contactService;