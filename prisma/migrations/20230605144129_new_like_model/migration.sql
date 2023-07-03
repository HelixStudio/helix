/*
  Warnings:

  - You are about to drop the column `dislikedBy` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `score` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "dislikedBy",
DROP COLUMN "score";
