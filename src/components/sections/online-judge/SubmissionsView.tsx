/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { type SubmissionTest, type Submission } from "@prisma/client";
import dayjs from "dayjs";
import { Button } from "~/components/ui/Button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/Dialog";
import { LoadingSpinner } from "~/components/ui/Loading";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/Table";
import { api } from "~/utils/api";

type CompleteSubmission = Submission & {
  user: {
    id: string;
    name: string | null;
  };
  problem: {
    id: number;
    title: string;
  };
  tests: SubmissionTest[];
};

const SubmissionsView = ({ problemId }: { problemId: number }) => {
  const submissions = api.problem.getSubmissions.useQuery({
    problemId: problemId,
  });

  if (submissions.isLoading) return <LoadingSpinner />;

  const data = submissions.data as CompleteSubmission[];

  return (
    <div className="h-full overflow-y-scroll">
      {data.length > 0 ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Problem</TableHead>
              <TableHead>Time</TableHead>
              <TableHead className="pl-8">Status</TableHead>
              <TableHead>Points</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((submission) => (
              <TableRow key={submission.id}>
                <TableCell>{submission.user.name}</TableCell>
                <TableCell>{submission.problem.title}</TableCell>
                <TableCell>
                  {dayjs(submission.createdAt.toISOString()).format(
                    "DD.MM.YYYY HH:MM"
                  )}
                </TableCell>
                <TableCell>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="link">Status</Button>
                    </DialogTrigger>
                    <DialogContent className="h-max min-w-max">
                      <DialogHeader>
                        <DialogTitle>Submission status</DialogTitle>
                      </DialogHeader>
                      <div className="flex flex-row gap-5 py-4">
                        <Table>
                          <TableCaption>
                            Total:{" "}
                            {submission.tests.reduce(
                              (partSum, test) => partSum + test.points,
                              0
                            )}{" "}
                            points
                          </TableCaption>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Test</TableHead>
                              <TableHead>Points</TableHead>
                              <TableHead>Passed</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {submission.tests.map((test, index) => (
                              <TableRow key={test.id}>
                                <TableCell className="font-medium">
                                  {index}
                                </TableCell>
                                <TableCell className="font-medium">
                                  {test.points}
                                </TableCell>
                                <TableCell className="font-medium">
                                  {test.passed ? "true" : "false"}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                        <div>
                          <p className="mb-2 text-lg">
                            Language: {submission.language}
                          </p>
                          <div className="overflow-auto">
                            <pre>{submission.source}</pre>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </TableCell>
                <TableCell>
                  {submission.tests.reduce(
                    (partSum, test) => partSum + test.points,
                    0
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <p>No solutions submitted yet.</p>
      )}
    </div>
  );
};

export default SubmissionsView;
