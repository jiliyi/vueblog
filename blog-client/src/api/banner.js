// import '../mock';
import instance from  './request'

export async function getBanner(){
   return instance.get('/api/banner');
}