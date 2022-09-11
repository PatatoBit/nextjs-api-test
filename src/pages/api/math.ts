import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  answer: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ answer: 12 })
}
