import { useAtom } from "jotai";
import { MinusIcon } from "lucide-react";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import IconButton from "~/components/ui/IconButton";
import { Input } from "~/components/ui/Input";
import { yourTestsAtom } from "~/utils/atoms";

export const YourTests = () => {
  const [yourTests, setYourTests] = useAtom(yourTestsAtom);

  const [newTest, setNewTest] = useState<string>("");

  let tests = 0;

  return (
    <div>
      {yourTests.length > 0 && <p>Your custom tests:</p>}
      {yourTests.map((test, index) => {
        tests++;
        return (
          <div key={test} className="my-3 flex flex-row gap-3">
            <Input
              defaultValue={test}
              onChange={(newTest) => {
                yourTests[index] = newTest.target.value;
                setYourTests(yourTests);
              }}
              placeholder={`test #${index}`}
            />
            <IconButton
              icon={<MinusIcon />}
              label={"remove test"}
              onClick={() => {
                setYourTests(yourTests.filter((_, sindex) => sindex != index));
              }}
              variant={"outline"}
            />
          </div>
        );
      })}
      <p>Add a new test:</p>
      <div className="flex flex-row gap-3 pt-3">
        <Input
          value={newTest}
          onChange={(t) => setNewTest(t.target.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              setYourTests([...yourTests, newTest]);
              setNewTest("");
            }
          }}
          placeholder={`test #${tests}`}
        />
        <IconButton
          icon={<PlusIcon />}
          label={"add test"}
          onClick={() => {
            setYourTests([...yourTests, newTest]);
            setNewTest("");
          }}
          variant={"outline"}
        />
      </div>
    </div>
  );
};
