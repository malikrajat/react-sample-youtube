import axios from 'axios';
const KEY = 'AIzaSyBlPoe_k_Erg66PdpUmmTxYpXVIL5tiOAM'; 
export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});