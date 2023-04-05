import type { NextApiRequest, NextApiResponse } from 'next'
import { useRouter } from 'next/router'
const axios = require('axios');
const clientid = process.env.clientid;
const clientsecret = process.env.clientsecret;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Run the middleware
  // await runMiddleware(req, res, cors)
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://api.github.com/issues?sort='+`${req.query.sort}`+`${((req.query.tag!==undefined) && (req.query.tag!==""))?"&labels="+req.query.tag:""}`,
    headers: { 
      'Accept': 'application/vnd.github+json', 
      'Cache-Control': 'no-store', 
      'Authorization': 'Bearer '+`${req.query.token}`, 
    },
  };
  axios.request(config)
.then((response) => {
  console.log(config.url);
  console.log('get issues list successfully');
  res.json(response.data);
})
.catch((error) => {
  console.log('fail to get issues list');
});
  // Rest of the API logic
  // res.json({ message: 'Hello Everyone!' })
}
