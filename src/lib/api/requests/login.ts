import { AxiosResponse } from "axios";
import $api from "../instance";

interface Login {
  email: string;
  password: string;
}

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

const login = async ({
  email,
  password,
}: Login): Promise<AxiosResponse<LoginResponse>> => {
  return $api.post<LoginResponse>("/auth/login", {
    email,
    password,
  });
};

export default login;
