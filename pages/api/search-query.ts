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
    url: 'https://api.github.com/search/issues?q=is:issue+state:open+assignee:@me+'+`${req.query.query}`+' in:title',
    headers: { 
      'Accept': 'application/vnd.github+json', 
      'Cache-Control': 'no-store', 
      'Authorization': 'Bearer '+`${req.query.token}`, 
    }
  };
  axios.request(config)
.then((response) => {
  console.log('query'+`${req.query.query}`+'validated successfully');
  res.json(response.data);
})
.catch((error) => {
  console.log('query fail no action required');
});
  // Rest of the API logic
  // res.json({ message: 'Hello Everyone!' })
}
