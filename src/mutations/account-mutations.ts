import { AUTH_BASE_URL } from "@/constants/api";
import { Credentials } from "@/type/account";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useSignInMutation = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: async (credentials: Credentials) => {
      const res = await fetch(`/api/sign-in`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const data = await res.json();
      return { data };
    },
    onSuccess: () => {
      router.replace("/");
      router.refresh();
    },
  });
};

export const useSignUpMutation = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: async (credentials: Credentials) => {
      const res = await fetch(`${AUTH_BASE_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const data = await res.json();
      return { data };
    },
    onSuccess: () => {
      router.replace("/sign-in");
    },
  });
};
