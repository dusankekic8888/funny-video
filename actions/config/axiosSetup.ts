import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';

const initialization = (config: AxiosRequestConfig): AxiosInstance => {
  const axiosInstance = axios.create(config);

  axiosInstance.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

  axiosInstance.interceptors.request.use(
    (config) => {
      const accessToken = localStorage.getItem('accessToken');
      // if (accessToken) {
      //   config.headers.common['Authorization'] = `Bearer ${accessToken}`;
      // }
      return config;
    },
    (error) => Promise.reject(error)
  );

  axiosInstance.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      switch (
        error?.response?.status
        // case 401:
        //   window.location.href = '/login';
        //   ToastMessage('error', error.response.data.message);
        //   localStorage.removeItem('accessToken');
        //   break;
        // case 400:
        //   ToastMessage('error', error?.response?.data?.message || error.response.data);
        //   break;
        // case 422:
        //   ToastMessage('error', error?.response?.data?.message || error.response.data);
        //   break;
        // case 500:
        //   ToastMessage('error', error.response.data.message);
        //   break;
        // default:
        //   ToastMessage('error', error?.response?.data?.message || 'error');
      ) {
      }

      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default initialization;
