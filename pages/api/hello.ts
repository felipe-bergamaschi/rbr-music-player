import type { NextApiRequest, NextApiResponse } from 'next'

import axios from 'axios'
import oauth from 'axios-oauth-client'

type Data = {
  name: string,
  access_token: string,
  data: any,
}

var client_id = '9df473887dfd46a38cac94ab4fd7ccf2'; // Your client id
var client_secret = 'c286e7ad86bc4afc9cdcff17b546506a'; // Your secret

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const getAuthorizationCode = oauth.client(axios.create(), {
    url: 'https://accounts.spotify.com/api/token',
    grant_type: 'client_credentials',
    client_id: client_id,
    client_secret: client_secret,
  });

  const auth = await getAuthorizationCode();

  // const { data } = await axios.get('https://api.spotify.com/v1/tracks/2TpxZ7JUBn3uw46aR7qd6V', {
  //   headers: {
  //     Authorization: 'Bearer ' + auth.access_token
  //   }
  // })

  const { data } = await axios.get('https://api.spotify.com/v1/users/4ej0p3k2uw7q4rpylsrwg3jvn', {
    headers: {
      Authorization: 'Bearer ' + auth.access_token
    }
  })

  res.status(200).json({ name: 'John Doe', access_token: auth.access_token, data })
}
