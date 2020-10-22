import axios from "axios";

class Auth {
  constructor() {
    this.url = "http://localhost:8080";
  }

  // Login API

  async login(payload) {
    const actionUrl = "/sign_in";
    const urlRequest = `${this.url}${actionUrl}`;

    return await axios.post(urlRequest, payload);
  }

  async registerUser(payload) {
    const actionUrl = "/sign_up";
    const urlRequest = `${this.url}${actionUrl}`;

    return await axios.post(urlRequest, payload);
  }
}

export default Auth;
