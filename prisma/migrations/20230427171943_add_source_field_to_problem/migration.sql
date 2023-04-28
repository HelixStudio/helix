/*
  Warnings:

  - Added the required column `source` to the `Problem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sourceLink` to the `Problem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Problem" ADD COLUMN     "source" TEXT NOT NULL,
ADD COLUMN     "sourceLink" TEXT NOT NULL;
