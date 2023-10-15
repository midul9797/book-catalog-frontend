import { instance as axiosInstance } from "@/helpers/axios/axiosInstance";
import { useGetUserQuery } from "@/redux/api/userApi";
import { decodedToken } from "@/utils/jwt";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";

export const storeUserInfo = (accessToken: string) => {
  console.log(accessToken);
  return setToLocalStorage("accessToken", accessToken as string);
};

export const getUserInfo = () => {
  const authToken = getFromLocalStorage("accessToken");
  if (authToken) {
    const decodedData: any = decodedToken(authToken);
    const data: any = useGetUserQuery(decodedData?.userId);
    return data;
  } else {
    return "";
  }
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage("accessToken");
  return !!authToken;
};

export const removeUserInfo = (key: string) => {
  return localStorage.removeItem(key);
};

export const getNewAccessToken = async () => {
  return await axiosInstance({
    url: `${process.env.BASE_API_URL}/auth/refresh-token`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  });
};
