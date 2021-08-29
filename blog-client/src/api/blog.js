import instance from './request';
/**
 * 获取博客类型
 */
export async function getBlogCategories(){ 
    return await instance.get('/api/blogtype')
}

/**
 * 分页获取博客
 */
export async function getBlog(page=1,limit=10,categoryId=-1,keyword=''){
    return await instance.get(`/api/blog?page=${page}&limit=${limit}&categoryId=${categoryId}&keyword=${keyword}`)
}

/**
 * 获取单个博客
 * @param {*} blogid 博客id 
 */
export async function getSingleBlog(blogid){
    return await instance.get(`/api/blog/${blogid}`)
}


/**
 * 提交评论
 * @param {Object} comment 评论对象
 */
export async function  postComment(comment){
    return await instance.post(`/api/comment`,comment)
}

/**
 * 分页获取评论
 * @param {*} blogid 
 * @param {*} page 
 * @param {*} limit 
 */
export async function getComment(blogid,page=1,limit=10){
    return await instance.get('/api/comment',{
        params : {
            blogid,
            page,
            limit
        }
    })
}