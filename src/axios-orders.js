import axios from "axios";

const instance = axios.create({
   baseURL: 'https://react-burger-app-7cf4c.firebaseio.com/'
});

export default instance;