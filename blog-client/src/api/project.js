import instance from './request';

export async function fetchProject(){
    return instance.get('/api/project')
}