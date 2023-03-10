import axios from 'axios';

const BASE_URL = 'https://goit-project-petly-backend.onrender.com/';

const instance = axios.create({
  baseURL: BASE_URL,
});

const token = {
  set(token) {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    instance.defaults.headers.common.Authorization = '';
  },
};

export const register = async signupData => {
  const { data } = await instance.post('/api/users/register', signupData);
  return data;
};

export const login = async loginData => {
  const { data } = await instance.post('/api/users/login', loginData);
  token.set(data.token);
  return data;
};

export const logout = async () => {
  const { data } = await instance.get('/api/users/logout');
  token.unset();
  return data;
};

export const reset = async resetData => {
  const { data } = await instance.post('/api/users/recovery', resetData);
  return data;
};

export const resetPassword = async (token, resetData) => {
  const { data } = await instance.post(
    `/api/users/recovery/${token}`,
    resetData
  );
  return data;
};

export const getCurrentUser = async persistedToken => {
  token.set(persistedToken);
  const data = await instance.get('/api/users/current');
  return data;
};

export const updateUserData = async updateData => {
  const { data } = await instance.patch('/api/users/update', updateData);
  return data;
};

export const updateUserAvatar = async updateAvatar => {
  const { data } = await instance.patch('/api/users/avatar', updateAvatar, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return data;
};

export const addPet = async newPet => {
  const { data } = await instance.post('/api/pets', newPet, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return data;
};

export const deletePet = async id => {
  const { data } = await instance.delete(`/api/pets/${id}`);
  return data;
};

export default instance;
