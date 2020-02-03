import axios from 'axios';

const KEY = 'AIzaSyBOZpjrB4ch_VKlcRxJHt2Kl1gfsw4pasU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY
    }
});