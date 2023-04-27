import { PrismaClient, User } from "@prisma/client";
import { createServerData$, redirect } from "solid-start/server";
import { getUser, storage } from "./session";
import { getDB, isClient } from "./db";
import { loadUser, useUserStore } from "./stores/userStore";
import { loadTheme } from "~/routes/settings";

export type UserCredentials = {
  username: string;
  email: string;
  password: string;
};

export type AuthError = {
  message: string;
};

export const register = async (
  credentials: UserCredentials
): Promise<AuthError | User> => {
  const email_regex = /^\S+@\S+\.\S+$/;
  if (credentials.email == "" || !email_regex.test(credentials.email)) {
    return { message: "Email is wrong!" };
  }
  // TODO: hash password
  return getDB()!.user.create({
    data: {
      username: credentials.username,
      email: credentials.email,
      password: credentials.password, // TODO: fix
    },
  });
};

export const login = async (
  credentials: UserCredentials
): Promise<AuthError | User> => {
  const user = await getDB()!.user.findUnique({
    where: { username: credentials.username },
  });
  if (!user)
    return {
      message: "User not found!",
    };

  // TODO: fix
  if (credentials.password !== user.password)
    return { message: "Password is wrong!" };

  loadUser(user);
  return user;
};

export const logout = async (request: Request): Promise<Response> => {
  const session = await storage.getSession(request.headers.get("Cookie"));
  useUserStore.getState().setLoggedOut();
  return redirect("/login", {
    headers: {
      "Set-Cookie": await storage.destroySession(session),
    },
  });
};

export const useUserSessionIntern = async (request: Request): Promise<User> => {
  const user = await getUser(getDB()!, request);

  if (!user) {
    useUserStore.getState().setLoggedOut();
    throw redirect("/login");
  }

  loadUser(user);

  return user;
};

export const useUserSession = () => {
  const res = createServerData$(async (_, { request }) => {
    return await useUserSessionIntern(request);
  });
  // if (isClient()) {
  //   const theme = localStorage.getItem("theme");
  //   if (theme != null) loadTheme(theme);
  // }
  // TODO: check on every page, check user's db theme, fix loading theme
  return res;
};

export const useUserSessionOrFail = () => {
  return createServerData$(async (_, { request }) => {
    const user = await getUser(getDB()!, request);
    return user;
  });
};
