import axios from 'axios';

interface User {
  id: number;
  name: string;
  email: string;
}

export const fetchMe = async (token: string): Promise<User> => {
  const response = await axios.get<User>(`https://api.agorafolk.local/api/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
