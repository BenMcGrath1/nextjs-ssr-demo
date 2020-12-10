
export async function getAccessToken() {
  const tokenApiUrl = process.env.NEXT_PUBLIC_TOKEN_API_URL;
  const clientId = process.env.NEXT_PUBLIC_API_CLIENT_ID;
  const clientSecret = process.env.NEXT_PUBLIC_API_CLIENT_SECRET;


  const authBuffer = Buffer.from(`${clientId}:${clientSecret}`, 'utf-8');
  const authCode64 = authBuffer.toString('base64')


  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${authCode64}`
    },
     body: 'grant_type=client_credentials'
  };

  const response = await fetch(tokenApiUrl, options)
  return response.json();
}

export async function getAlbumsByArtistId(access_token, id) {
  const albumsByArtistUrl = `https://api.spotify.com/v1/artists/${id}/albums`;
  const options = {
    method: 'GET', 
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${access_token}`
    }
  };

  const response = await fetch(albumsByArtistUrl, options).then(res => res.json());
  return response;
}