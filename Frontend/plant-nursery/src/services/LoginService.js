import { apiHelper } from "./apiHelper";

export const userLogin = async (data) => {
    try{
    const response = await apiHelper.post(`/login`, data);
    return Promise.resolve(response.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

  export const userRegister = async (data) => {
    try{
    const response = await apiHelper.post(`/register`, data);
    return Promise.resolve(response.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  