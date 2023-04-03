import type { NextApiRequest, NextApiResponse } from 'next'
import { useRouter } from 'next/router'
const axios = require('axios');
const clientid = process.env.clientid;
const clientsecret = process.env.clientsecret;
// Initializing the cors middleware
// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options


// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Run the middleware
  // await runMiddleware(req, res, cors)
 
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://api.github.com/octocat',
    headers: { 
      'Accept': 'application/vnd.github+json', 
      'Cache-Control': 'no-store', 
      'Authorization': 'Bearer '+`${req.query.key}`, 
    },
  };
  axios.request(config)
.then((response) => {
  console.log('token'+`${req.query.key}`+'validated successfully');
  res.json(response.data);
})
.catch((error) => {
  console.log('validate fail no action required');
});
  // Rest of the API logic
  // res.json({ message: 'Hello Everyone!' })
}
