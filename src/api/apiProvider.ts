import axios from "axios";

const apiProvider = axios.create({});

apiProvider.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

export const getErrorMessage = (err: any) => {
  let errorMessage = "";
  if (!err.response) {
    errorMessage = "Could not connect. Please check your internet connection";
  } else {
    const responseData = err.response.data;
    if (responseData && responseData.error) {
      errorMessage = responseData.error;
    } else {
      errorMessage = `Something went wrong\n${err.message}`;
    }
  }
  return errorMessage;
};

export default apiProvider;
