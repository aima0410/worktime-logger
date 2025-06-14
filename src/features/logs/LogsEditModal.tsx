// ---- Components ----
import {
  // Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  // DialogTrigger,
  DialogClose,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
// ---- Features ----
import PickupProject from '@/features/PickupProject';
import DatePicker from '@/features/DatePicker';
import TimePicker from '@/features/TimePicker';

export default function LogsEditModal() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Edit Modal</DialogTitle>
        <DialogDescription className="text-[12px]">
          ログを編集するためのモーダルです。
        </DialogDescription>
      </DialogHeader>
      <div className="flex justify-between">
        <DatePicker />
        <PickupProject />
      </div>
      <div className="flex justify-between">
        <TimePicker />
        <TimePicker />
      </div>
      <div>
        <Textarea />
      </div>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="secondary" className="cursor-pointer">
            Cancel
          </Button>
        </DialogClose>
        <Button variant="default" className="cursor-pointer" type="submit">
          Update
        </Button>
      </DialogFooter>
    </DialogContent>
  );
}
