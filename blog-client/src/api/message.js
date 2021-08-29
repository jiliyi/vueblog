import instance from './request';

export async function fetchMessage(limit=10,page =1){
    return await instance.get('/api/message',{
        params : {
            limit,
            page
        }
    });
}

export async function postMessage(message){
    return await instance.post('/api/message',{
        ...message
    })
}