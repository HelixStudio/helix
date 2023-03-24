import { PrismaClient, User } from "@prisma/client";
import { createServerData$, redirect } from "solid-start/server";
import { db } from "./db";
import { getUser, storage } from "./session";

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
  // TODO: fix
  return db.user.create({
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
  const user = await db.user.findUnique({
    where: { username: credentials.username },
  });
  if (!user)
    return {
      message: "User not found!",
    };

  // TODO: fix
  if (credentials.password !== user.password)
    return { message: "Password is wrong!" };

  return user;
};

export const logout = async (request: Request): Promise<Response> => {
  const session = await storage.getSession(request.headers.get("Cookie"));
  return redirect("/login", {
    headers: {
      "Set-Cookie": await storage.destroySession(session),
    },
  });
};

export const useUserSession = () =>
  createServerData$(async (_, { request }) => {
    const user = await getUser(db, request);

    if (!user) {
      throw redirect("/login");
    }

    return user;
  });
