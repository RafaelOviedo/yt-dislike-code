import axios from 'axios';
import { channelIdVar, apiKeyVar, playlistId } from './variables.js';

let scope = 'https://www.googleapis.com/auth/youtube.force-ssl';
let apiKey = apiKeyVar;
let channelId = channelIdVar;
let uploadsId = playlistId;

let response;

// const a = async () => {
//   response = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${uploadsId}&key=${apiKey}&part=snippet&maxResults=15`);
  
  
//   console.log('DATA', response.data.items)
// }

// a()
const a = async () => {
  response = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos/getRating?id=5K06BthMijw&key=AIzaSyBcapKagonajYAjyuuwEFHzJu1GaFmO_R8`);
  
  
  console.log('DATA', response.data)
}

a()