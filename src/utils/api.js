import http from './http';

// 严选材沙发图片列表
// export function getRecommend(data) {
//   return http.post('/home/recommend', data)
// }
export function getClassifyList(data){
    return http.post('/classify',data)
}

