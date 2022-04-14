import axios from 'axios';
import { channelIdVar, apiKeyVar } from './variables.js'


let apiKey = apiKeyVar;
let channelId = channelIdVar;

let response;

const a = async () => {
  response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${channelId}&key=${apiKey}`);
  console.log('RESPONSE', response.data)
}

a()
 