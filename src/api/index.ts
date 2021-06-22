import apiProvider, { getErrorMessage } from "./apiProvider";

export const GET = async (
  url: string,
  params?: any,
  headers: any = {}
): Promise<any> => {
  try {
    const response = await apiProvider.get(url, {
      params,
      headers,
    });
    const dataToReturn = {
      ...response.data,
      isSuccess: true,
      data: response?.data?.data,
      status: response.status,
    };
    return dataToReturn;
  } catch (err) {
    const errorMessage = getErrorMessage(err);
    return {
      errorMessage,
      isSuccess: false,
      status: err && err.response && err.response.status,
    };
  }
};

export const POST = async (
  url: string,
  body: any,
  headers: any = {}
): Promise<any> => {
  try {
    const meta = {
      headers,
    };

    const response = await apiProvider.post(url, body, meta);
    const dataToReturn = {
      ...response.data,
      isSuccess: true,
      data: response?.data?.data,
    };

    return dataToReturn;
  } catch (err) {
    const errorMessage = getErrorMessage(err);
    return {
      errorMessage,
      isSuccess: false,
    };
  }
};
