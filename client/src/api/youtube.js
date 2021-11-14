import axios from 'axios';

const Youtube = axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBXisLyQUHWBbx7ZuSHxPDvKY31UxkKof0&type=video`);

console.log(Youtube);


