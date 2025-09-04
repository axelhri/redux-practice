import axios from 'axios';

interface LoginCredentials {
  email: string;
  password: string;
}

interface LoginResponse {
  user: {
    id: string;
    email: string;
  };
  token: string;
}

export const login = async (
  credentials: LoginCredentials,
): Promise<LoginResponse> => {
  const response = await axios.post<LoginResponse>(
    `https://api.agorafolk.local/authenticate`,
    credentials,
  );
  return response.data;
};
