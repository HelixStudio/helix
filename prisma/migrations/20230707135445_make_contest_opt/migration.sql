-- DropForeignKey
ALTER TABLE "Problem" DROP CONSTRAINT "Problem_contestId_fkey";

-- AlterTable
ALTER TABLE "Problem" ALTER COLUMN "contestId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Problem" ADD CONSTRAINT "Problem_contestId_fkey" FOREIGN KEY ("contestId") REFERENCES "Contest"("id") ON DELETE SET NULL ON UPDATE CASCADE;
