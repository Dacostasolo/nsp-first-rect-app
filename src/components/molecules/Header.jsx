import { Text } from "../atoms/Text";
import { Button } from "../atoms/Button";
import { ProgressIndicator } from "./ProgressIndicator";

export function Header() {
  function formatDate() {
    return new Date().toLocaleDateString("en-GB", {
      weekday: "long",
      year: "numeric",
      day: "numeric",
      month: "long",
    });
  }

  return (
    <>
      <div className="flex justify-between p-2">
        <div className="flex flex-col">
          <Text variant="title">My Tasks</Text>
          <span className="text-slate-500 text-lg">

            {formatDate()}
          </span>
          {/* <Text variant="subtitle" className="text-slate-500"> */}
          {/* </Text> */}
        </div>
        <div>
          {" "}
          <ProgressIndicator completed={0} />
        </div>
      </div>
    </>
  );
}
