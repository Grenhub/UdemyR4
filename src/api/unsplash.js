import axios from "axios";

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: "Client-ID smZE7LwlYAg9xJ2z25I7PyXLt__pkPuAA1w10qs9Mj0",
  },
})