import { axiosRequest } from '@util/http-client';
import { AxiosResponse } from 'axios';
import { RepositoriesRes } from '@pages/api/repos';

export function getTrendingRepos(): Promise<AxiosResponse<RepositoriesRes>> {
  return axiosRequest({ url: '/repos' });
}
