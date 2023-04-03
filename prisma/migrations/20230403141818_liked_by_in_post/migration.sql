-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "likedBy" TEXT[] DEFAULT ARRAY[]::TEXT[];
