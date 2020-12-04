import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://haowei-react-burger.firebaseio.com/'
});

export default instance;