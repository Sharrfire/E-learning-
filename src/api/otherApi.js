import axiosClient from './axiosClient';
const otherApi = {
 
  
  getCategory() {
    const url = `/cate.json`;
    return axiosClient.get(url);
  },
  getLevel(id) {
    const url = `/level.json`;
    return axiosClient.get(url);
  },

};
export default otherApi;