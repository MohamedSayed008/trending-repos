import { axiosRequest } from '@util/http-client';
import { DevelopersRes } from '@pages/api/devs';
import { AxiosResponse } from 'axios';

export function getTrendingDevs(): Promise<AxiosResponse<DevelopersRes>> {
  return axiosRequest({ url: '/devs' });
}
