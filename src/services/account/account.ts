"use server";

import { AUTH_BASE_URL } from "@/constants/api";
import { removeCookie } from "@/lib/context";

const signOut = async () => {
  try {
    const res = await fetch(`${AUTH_BASE_URL}/signOut`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    return { data };
  } catch (error) {
    console.error(error);
  } finally {
    removeCookie();
  }
};

export { signOut };
