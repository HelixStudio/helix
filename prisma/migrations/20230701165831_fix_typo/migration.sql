/*
  Warnings:

  - You are about to drop the column `diffuculty` on the `Problem` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Problem" DROP COLUMN "diffuculty",
ADD COLUMN     "difficulty" TEXT NOT NULL DEFAULT '';
