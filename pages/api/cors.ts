import type { NextApiRequest, NextApiResponse } from 'next'
import { useRouter } from 'next/router'
import Cors from 'cors'
const axios = require('axios');
const clientid = "9413d76463c0af53a8a0";
const clientsecret = "8e1ec6daf8bd3e5725f09e637d65e17288b40f43";
// Initializing the cors middleware
// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
const cors = Cors({
  methods: ['POST', 'GET', 'HEAD'],
})


// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Run the middleware
  // await runMiddleware(req, res, cors)
  let params = "https://github.com/login/oauth/access_token?client_id="+`${clientid}`+"&client_secret="+`${clientsecret}`+"&code="+req.query.code;
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: params,
    headers: { 
      'Accept': 'application/json'
    }
    
  };
  axios.request(config)
.then((response) => {
  console.log(response.data);
  res.json(response.data);
})
.catch((error) => {
  console.log(error);
});
  // Rest of the API logic
  // res.json({ message: 'Hello Everyone!' })
}
