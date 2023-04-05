import type { NextApiRequest, NextApiResponse } from 'next'
import { useRouter } from 'next/router'
const axios = require('axios');
const clientid = process.env.clientid;
const clientsecret = process.env.clientsecret;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

    let data = JSON.stringify({
        "labels": [
          "bug",
          "enhancement"
        ]
      });
      
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://api.github.com/repos/ChickenLamb/B1/issues/1/labels',
        headers: { 
          'Accept': 'application/vnd.github+json', 
          'Cache-Control': 'no-store', 
          'Authorization': 'Bearer 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', 
          'Content-Type': 'application/json', 
          'Cookie': '_octo=GH1.1.1929348507.1679046023; logged_in=no'
        },
        data : data
      };
  axios.request(config)
.then((response) => {
  console.log('add tag successfully');
  res.json(response.data);
})
.catch((error) => {
  console.log('fail to add tag');
});
  // Rest of the API logic
  // res.json({ message: 'Hello Everyone!' })
}
