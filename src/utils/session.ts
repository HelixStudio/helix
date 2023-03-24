import { PrismaClient, User } from "@prisma/client";
import { redirect } from "solid-start/server";
import { createCookieSessionStorage } from "solid-start/session";
import { Session } from "solid-start/session/sessions";
import { logout } from "./auth";

export const storage = createCookieSessionStorage({
  cookie: {
    name: "session",
    secure: true,
    secrets: ["hello"], // TODO: fix
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true,
  },
});

export const getUserSession = async (request: Request): Promise<Session> => {
  return storage.getSession(request.headers.get("Cookie"));
};

export const getUserId = async (request: Request): Promise<string | null> => {
  const session = await getUserSession(request);
  const userId = session.get("userId");
  if (!userId || typeof userId !== "string") return null;
  return userId;
};

export const requireUserId = async (
  request: Request,
  redirectTo: string = new URL(request.url).pathname
): Promise<Response | string> => {
  const session = await getUserSession(request);
  const userId = session.get("userId");
  if (!userId || typeof userId !== "string") {
    const searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw redirect(`/login?${searchParams}`);
  }
  return userId;
};

export const getUser = async (
  db: PrismaClient,
  request: Request
): Promise<User | null> => {
  const userId = await getUserId(request);
  if (typeof userId !== "string") {
    return null;
  }

  try {
    const user = await db.user.findUnique({ where: { id: userId } });
    return user;
  } catch {
    throw logout(request);
  }
};

export const createUserSession = async (
  userId: string,
  redirectTo: string
): Promise<Response> => {
  const session = await storage.getSession();
  session.set("userId", userId);
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session),
    },
  });
};
