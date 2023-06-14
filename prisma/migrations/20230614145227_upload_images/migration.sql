/*
  Warnings:

  - You are about to drop the column `images` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "images",
ADD COLUMN     "uploaded_images" TEXT[] DEFAULT ARRAY[]::TEXT[];
