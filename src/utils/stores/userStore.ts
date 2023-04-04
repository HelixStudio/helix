import { User } from "@prisma/client";
import create from "solid-zustand";
import { persist } from "zustand/middleware";

export interface UserState {
  user: User | null;
  setLoggedInUser: (user: User) => void;
  setLoggedOut: () => void;
}

export const useUserStore = create<UserState>((set, _get) => ({
  user: null,
  setLoggedInUser: (newUser: User) =>
    set(() => ({
      user: newUser,
    })),
  setLoggedOut: () =>
    set(() => ({
      user: null,
    })),
}));

export const loadUser = async (user: User) => {
  if (user == null) {
    console.error("Tried to load null user!");
    return;
  }
  useUserStore.getState().setLoggedInUser(user);
};
