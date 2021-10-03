import { API_URL } from '../consts';
import axios, { AxiosResponse } from 'axios';
import { Beer } from '../types/beer';

export const getBeersService = (page?: number): Promise<AxiosResponse<Beer[]>> => {
  let url = `${API_URL}beers`;

  if (page) {
    url += `?page=${page}`
  }

  return axios.get<Beer[]>(url);
};
