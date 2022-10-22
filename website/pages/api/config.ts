import type { NextApiRequest, NextApiResponse } from 'next';
import { isProd } from '@lib/utils';
import Sanity, { appConfigQuery } from '@lib/sanity';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (isProd && req.method !== 'GET') {
    return res.status(500).json({ status: 'ERROR' });
  }

  const SanityClient = Sanity.getClient();
  const response = await SanityClient.fetch(appConfigQuery);

  return (
    res
      // .setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59')
      .status(200)
      .json(response)
  );
}
