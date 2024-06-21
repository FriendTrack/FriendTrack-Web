import { AxiosResponse } from "axios";
import $api from "../instance";

interface Register {
  email: string;
  login: string;
  password: string;
  username: string;
}

interface RegisterResponse {
  userId: string;
  accessToken: string;
  refreshToken: string;
}

const register = async (
  data: Register
): Promise<AxiosResponse<RegisterResponse>> => {
  return $api.post<RegisterResponse>("/user/register", data);
};

export default register;
