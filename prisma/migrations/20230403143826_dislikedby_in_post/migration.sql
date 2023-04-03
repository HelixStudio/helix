-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "dislikedBy" TEXT[] DEFAULT ARRAY[]::TEXT[];
