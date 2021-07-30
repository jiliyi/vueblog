import axios from 'axios';
import showMessage from '../utils/showMessage'

const instance = axios.create();
instance.interceptors.response.use(function(response){
    if(response.data.code === 0){
        return response.data.data;
    }
    showMessage({
        content : '不知道哪里出现了错误',
        type :'error',
        durtion : 2000
    })
    return null;
})
export default instance;