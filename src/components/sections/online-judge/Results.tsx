import { useAtomValue } from "jotai";
import { yourTestsResultsAtom } from "~/utils/atoms";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/Table";

export const Results = () => {
  const yourTestsResults = useAtomValue(yourTestsResultsAtom);

  return (
    <div className="h-full">
      {yourTestsResults.length == 0 ? (
        <div className="flex h-full items-center justify-center">
          <div className="flex w-fit flex-col gap-3">
            <p>No custom tests ran yet.</p>
          </div>
        </div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Index</TableHead>
              <TableHead>Input</TableHead>
              <TableHead>Output</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {yourTestsResults.map((test, index) => (
              <TableRow key={test.input}>
                <TableCell>{index}</TableCell>
                <TableCell>{test.input}</TableCell>
                <TableCell>{test.output}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};
