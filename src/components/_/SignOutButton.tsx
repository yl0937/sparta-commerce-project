"use client";

import { signOut } from "@/services/account/account";
import { Button } from "../ui/button";

export const SignOutButton = () => {
  return (
    <Button
      onClick={() => {
        signOut();
      }}
      className="h-9 flex text-white items-center py-1 px-4 rounded-md bg-gray-800"
    >
      Sign Out
    </Button>
  );
};
