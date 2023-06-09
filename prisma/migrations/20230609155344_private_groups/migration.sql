/*
  Warnings:

  - Added the required column `private` to the `Group` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Group" ADD COLUMN     "joined" TEXT[],
ADD COLUMN     "private" BOOLEAN NOT NULL;
