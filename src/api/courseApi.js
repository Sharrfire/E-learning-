import axiosClient from './axiosClient';
const productApi = {
  async getAll(params) {
    const newParams = { ...params, };
    newParams._page > 0 ? newParams._page = newParams._page - 1 : newParams._page = 0
    const productList = await axiosClient.get(`/courseList/page/${newParams._page}.json `);
    const totalPage = await axiosClient.get('/courseList.json', { params: newParams });
    // Build response and return
    return {
      data: productList.data.items,
      pagination: {
        page: params._page,
        limit: params._limit,
        totalPage: totalPage.data.page.length
      }
    };
  },

  get(id) {
    id > 0 ? id = id - 1 : id = 0
    const url = `/coursesList/${id}.json`;
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