import clientPromise from '../../lib/mongodb';
import { verifyAuth } from '../../middleware/auth';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  try {
    const user = verifyAuth(req);
    if (!user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const { channel, token } = req.body;

    const client = await clientPromise;
    const db = client.db();

    await db.collection('settings').updateOne(
      { key: 'telegram' },
      { $set: { channel, token } },
      { upsert: true }
    );

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
}
