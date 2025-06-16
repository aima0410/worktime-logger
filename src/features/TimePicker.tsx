// ---- Components ----
import { Input } from '@/components/ui/input';

export default function TimePicker() {
  return (
    <Input
      type="time"
      className="time-picker inline-block justify-between max-w-[250px] w-[100%] text-[#494949] font-normal"
    />
  );
}
