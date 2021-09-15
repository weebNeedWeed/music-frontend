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

  login = (payload) => {
    const { email, password } = payload;
    return this.init().post("/auth", {
      email,
      password,
    });
  };

  checkUser = (payload) => {
    const { authToken } = payload;
    return this.init(authToken).get("/users");
  };

  searchYoutube = (payload) => {
    const { keyword, limit } = payload;
    return this.init().get(`/musics/youtube?search=${keyword}&limit=${limit}`);
  };
}

export default Api;
