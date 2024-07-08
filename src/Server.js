import express from 'express'
import fetch from 'node-fetch'
const app = express();
const port = 3001;

const personalAccessToken = 'rKyAEXMpXhtYiahLgyMOSCdLlhtkgLxdCaeSlwid';
const UserAgent = 'MyDiscogsClient/1.0 +http://mydiscogsclient.org';

app.get('/api/search', async (req, res) => {
  const albumName = req.query.q;
  const url = `https://api.discogs.com/database/search?q=${encodeURIComponent(albumName)}&type=release`;
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': UserAgent,
        'Authorization': `Discogs token=${personalAccessToken}`
      }
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching album data", error);
    res.status(500).json({ error: 'Failed to fetch album data' });
  }
});

app.listen(port, () => {
  console.log(`Proxy server running at http://localhost:${port}`);
});
