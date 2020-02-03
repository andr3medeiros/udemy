import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID b55848b77687bdc48b9c2212858b337b25cfe7865eaf044f5a481f1253778bda'
    }
})