import axios from 'axios'
const base_url = process.env.NODE_ENV === 'development' ? 'http://localhost:8080/api' : 'http://47.90.122.238/api';
const instance = axios.create({
  timeout: 5000,
  baseURL: base_url,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  }
});
/*携带token*/
instance.interceptors.request.use(function (config) {
  config.headers['token'] = localStorage.getItem('token');
  return config;
}, function (error) {
  return Promise.reject(error);
});
/*判断Error设置拦截器*/
instance.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (error.response.status === 401) {
    message.error('您未经授权,请重新登录');
    this.$router.push('/');
  }
});
/*
 * @description 用户登录
 * @param {Object} userinf0 用戶信息
 * @return {Promise}
 */
export const getList = function () {
  return instance.request({
    method: 'GET',
    url: '/v1/products/predictions2'
  })
};



