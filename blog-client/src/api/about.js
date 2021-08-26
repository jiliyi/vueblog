import instance from './request';

export async function fetchAbout(){
    return instance.get('/api/about')
} 