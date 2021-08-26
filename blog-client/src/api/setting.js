import instance from './request';


export async function getSetting() {
   return await instance.get('/api/setting');
}