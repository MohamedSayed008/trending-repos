import type { NextApiRequest, NextApiResponse } from 'next';
import { axiosRequest } from '@util/http-client';

export interface DevelopersRes {
  rank: number;
  username: string;
  name: string;
  url: string;
  avatar: string;
  since: string;
  popularRepository: {
    repositoryName: string;
    description: string;
    url: string;
  };
}

export default async (req: NextApiRequest, res: NextApiResponse<DevelopersRes>) => {
  const { data = {} } = (await axiosRequest({ url: 'https://gh-trending-api.herokuapp.com/developers' })) ?? {};
  res.status(200).json(data);
};
