import HttpService from "./http-service";

class UserService {
  constructor() {
    this.httpService = new HttpService();
  }

  async getCurrentUser() {
    return await this.httpService.request(
      "GET",
      `${process.env.REACT_APP_API_URL}/api/v1/user/current`
    );
  }

  async getUsers() {
    return await this.httpService.request(
      "GET",
      `${process.env.REACT_APP_API_URL}/api/v1/user`
    );
  }

  async register(authCredential) {
    return await this.httpService.request(
      "POST",
      `${process.env.REACT_APP_API_URL}/api/v1/auth/signup`,
      { body: authCredential }
    );
  }
}

export default UserService;
