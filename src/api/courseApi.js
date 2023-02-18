import axiosClient from './axiosClient';
const productApi = {
  async getAll(params) {
    // Transform _page to _start
    const newParams = { ...params };
    newParams._start = !params._page || params._page <= 1 ? 0 : (params._page - 1) * (params._limit || 50);
    // Remove un-needed key
    delete newParams._page;
    // Fetch product list + count
    const productList = await axiosClient.get('/courses.json', { params: newParams });
    // const count = await axiosClient.get('/courses/count.json', { params: newParams });
    // Build response and return
    return {
      productList

    };
  },

  get(id) {
    const url = `/courses/${id}`;
    return axiosClient.get(url);
  },

  add(data) {
    const url = '/courses';
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/courses/${data.id}`;
    return axiosClient.patch(url, data);
  },
  remove(id) {
    const url = `/courses/${id}`;
    return axiosClient.delete(url);
  },
};
export default productApi;