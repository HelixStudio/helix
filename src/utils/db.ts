import { PrismaClient } from "@prisma/client";

export const isClient = () => {
  return typeof window != "undefined" && window.document;
};

let db: PrismaClient | undefined = undefined;

export const getDB = () => {
  if (isClient()) {
    console.log("DB requested on client-side");
    return undefined;
  }
  if (db == undefined) db = new PrismaClient();
  return db;
};
