import {Text} from "../atoms/Text";
import{Button} from "../atoms/Button";
import{ProgressIndicator} from "./ProgressIndicator";
export function Header({ children, className = "" }) {
  return (
    <div
      className={`
        ${className}
      `}
    > <div >
      <div> <Text variant="title">My Tasks</Text>
      </div>
      <ProgressIndicator completed={0} total={0}/>
      {children}
      </div>


    </div>
  );
}
