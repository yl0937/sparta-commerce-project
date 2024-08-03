import { cookies } from "next/headers";

export type Context = {
  accessToken?: string;
  isLogin: boolean;
};

// should be used in server-side
export const context = (): Context => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  const isLogin = !!accessToken;
  console.log(isLogin);
  return {
    accessToken,
    isLogin,
  };
};

// should be used in server-side
export const removeCookie = () => {
  const cookieStore = cookies();
  cookieStore.set("accessToken", "", {
    maxAge: 0,
  });
};
