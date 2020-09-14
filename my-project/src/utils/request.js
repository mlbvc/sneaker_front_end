import {get, post} from './server'

export function userLogin(params){
  return post('/api/user/login', params)
}

export function userRegister(params){
  return post('/api/user/register', params)
}

export function getProductList(params){
  return get('/api/data/product', params)
}

export function getCategoryList(){
  return get('/api/data/category')
}

export function getParentList(){
  return get('/api/data/parent')
}