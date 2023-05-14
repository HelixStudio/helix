import { User } from "@prisma/client";
import { createServerData$, redirect } from "solid-start/server";
import { getUser, storage } from "./session";
import { getDB } from "./db";
import { loadUser, useUserStore } from "./stores/userStore";

const apiEndpoint = "http://localhost:4000";

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

  let response = await fetch(apiEndpoint + "/auth/encrypt", {
    method: "POST",
    body: JSON.stringify({
      password: credentials.password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  let encyrpted_data: { hash: string } = await response.json();

  return getDB()!.user.create({
    data: {
      username: credentials.username,
      email: credentials.email,
      password: encyrpted_data.hash,
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

  let response = await fetch(apiEndpoint + "/auth/check", {
    method: "POST",
    body: JSON.stringify({
      plain: credentials.password,
      hash: user.password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  let data: { ok: boolean } = await response.json();

  if (!data.ok) return { message: "Password is wrong!" };

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
  return res;
};

export const useUserSessionOrFail = () => {
  return createServerData$(async (_, { request }) => {
    const user = await getUser(getDB()!, request);
    return user;
  });
};
