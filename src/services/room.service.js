import HttpService from "./http-service";

class RoomService {
  constructor() {
    this.httpService = new HttpService();
  }

  async getAvailableRooms(expectedCheckIn, expectedCheckOut, num, type) {
    console.log(expectedCheckIn, expectedCheckOut, num, type);
    console.log();
    return await this.httpService.request(
      "GET",
      `${process.env.REACT_APP_API_URL}/api/v1/room/available`,
      {
        params: {
          checkin: expectedCheckIn,
          checkout: expectedCheckOut,
          maxNum: num,
          roomType: type,
          // roomType: "",
        },
      }
      // ?checkin=${expectedCheckIn}&checkout=${expectedCheckOut}&roomType=${type}&maxNum=${num}
    );
  }

  async getRooms() {
    return await this.httpService.request(
      "GET",
      `${process.env.REACT_APP_API_URL}/api/v1/room`
    );
  }

  async createRoom(roomCreateDTO) {
    return await this.httpService.request(
      "POST",
      `${process.env.REACT_APP_API_URL}/api/v1/room/create`,
      { body: roomCreateDTO },
      false
    );
  }

  async getRoomById(roomId) {
    return await this.httpService.request(
      "GET",
      `${process.env.REACT_APP_API_URL}/api/v1/room/${roomId}`
    );
  }

  async updateRoomById(roomId, updateRoomDto) {
    return await this.httpService.request(
      "PUT",
      `${process.env.REACT_APP_API_URL}/api/v1/room/update/${roomId}`,
      { body: updateRoomDto },
      false
    );
  }

  async deleteRoomById(roomId) {
    return await this.httpService.request(
      "DELETE",
      `${process.env.REACT_APP_API_URL}/api/v1/room/delete/${roomId}`
    );
  }
}

export default RoomService;
