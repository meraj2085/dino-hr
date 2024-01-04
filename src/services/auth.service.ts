import { authKey } from "@/constants/storageKey";
import { decodedToken } from "@/utils/jwt";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/localStorage";

export const removeUserInfo = (key: string) => {
  return localStorage.removeItem(key);
};

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setToLocalStorage(authKey, accessToken as string);
};

export const getUserInfo = () => {
  const authToken = getFromLocalStorage(authKey);
  if (authToken) {
    const decodedData = decodedToken(authToken);
    return decodedData;
  } else {
    return "";
  }
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(authKey);
  const decodedData = authToken ? decodedToken(authToken) : null;
  if (decodedData) {
    const exp = (decodedData as { exp: number })?.exp * 1000;
    const currentTime = new Date().getTime();
    if (currentTime > exp) {
      removeUserInfo(authKey);
    }
  }
  return !!authToken;
};
