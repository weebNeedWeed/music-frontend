import axios from "axios";

class Api {
  constructor() {
    this.client = null;
    this.api_url = process.env.REACT_APP_API_ENDPOINT;
  }

  init = (authToken = null) => {
    let headers = {
      Accept: "application/json",
    };

    if (authToken) {
      headers.Authorization = `Bearer ${authToken}`;
    }

    this.client = axios.create({
      baseURL: this.api_url,
      timeout: 31000,
      headers: headers,
    });

    return this.client;
  };

  // HttpPost
  createUser = (payload) => {
    const { username, password, email, confirmPassword } = payload;
    return this.init().post("/users", {
      username,
      email,
      confirmPassword,
      password,
    });
  };
}

export default Api;
