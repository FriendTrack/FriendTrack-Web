import { AxiosResponse } from "axios";
import $api from "../instance";

interface Register {
  email: string;
  password: string;
  confirmPassword: string;
}

interface RegisterResponse {
  accessToken: string;
  refreshToken: string;
}

const register = async ({
  email,
  password,
  confirmPassword,
}: Register): Promise<AxiosResponse<RegisterResponse>> => {
  return $api.post<RegisterResponse>("/auth/register", {
    email,
    password,
    confirmPassword,
  });
};

export default register;
