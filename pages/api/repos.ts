import type { NextApiRequest, NextApiResponse } from 'next';
import { axiosRequest } from '@util/http-client';

export interface RepositoriesRes {
  rank: number;
  username: string;
  repositoryName: string;
  url: string;
  description?: string;
  language: string;
  languageColor: string;
  totalStars: number;
  forks: number;
  starsSince: number;
  since: string;
  builtBy: {
    username: string;
    url: string;
    avatar: string;
  }[];
}

export default async (req: NextApiRequest, res: NextApiResponse<RepositoriesRes>) => {
  const { data = {} } = (await axiosRequest({ url: 'https://gh-trending-api.herokuapp.com/repositories' })) ?? {};
  res.status(200).json(data);
};
