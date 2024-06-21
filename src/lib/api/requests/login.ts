import { AxiosResponse } from "axios";
import $api from "../instance";

interface Login {
  login: string;
  password: string;
}

interface LoginResponse {
  userId: string;
  accessToken: string;
  refreshToken: string;
}

const login = async (data: Login): Promise<AxiosResponse<LoginResponse>> => {
  return $api.post<LoginResponse>("/user/login", data);
};

export default login;
