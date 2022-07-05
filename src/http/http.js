import {post,get} from './index'
export const login = data=>post('/user/login',data)