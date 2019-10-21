import axios from 'axios';

let base = '/rapis';
// let base = '';
export const requestLogin = params => { return axios.post(`${base}/public/api/user/dashboardlogin`, params).then(res => res.data); };
export const getTotal = params => { return axios.get(`${base}/public/api/dashboard/total`, { params: params }); };
