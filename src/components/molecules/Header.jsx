import { Text } from "../atoms/Text";
import { Button } from "../atoms/Button";
import { ProgressIndicator } from "./ProgressIndicator";

export function Header() {

  function formatDate(date){
    return new Date().toLocalDateString('en-UK', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
  return (
    <div className='flex justify-between items-center p-4 border-b'>
        <div className='flex flex-col'>
          <Text variant="title">My Tasks</Text>
          <Text variant="subtitle">{formatDate()}</Text>
        </div>
        <ProgressIndicator completed={0} total={0} />
    </div>
  );
}
