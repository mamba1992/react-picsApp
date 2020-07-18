import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID W_C81ufkgsN7ompgokzAZvFY3_FXHN2kh-QFjhrmlvY",
  },
});
