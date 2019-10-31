import axios from "axios";
const url = "http://localhost:8080";
// const url = "https://<APP_NAME>.herokuapp.com",

export default {
  // Gets all books
  getCards: function() {
    return axios.get(`${url}/cards`);
  },
  // Gets the cards with the given id
  getCards: function(id) {
    return axios.get(`${url}/cards/` + id);
  },

};
