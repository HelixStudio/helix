-- CreateTable
CREATE TABLE "SubmissionTest" (
    "id" TEXT NOT NULL,
    "passed" BOOLEAN NOT NULL,
    "points" INTEGER NOT NULL,
    "failReason" TEXT NOT NULL DEFAULT '',
    "submissionId" TEXT,

    CONSTRAINT "SubmissionTest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Submission" (
    "id" TEXT NOT NULL,
    "problemId" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "language" TEXT NOT NULL,

    CONSTRAINT "Submission_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SubmissionTest" ADD CONSTRAINT "SubmissionTest_submissionId_fkey" FOREIGN KEY ("submissionId") REFERENCES "Submission"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Submission" ADD CONSTRAINT "Submission_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "Problem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Submission" ADD CONSTRAINT "Submission_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
