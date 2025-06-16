// ---- Next ----
import Image from 'next/image';
// ---- Images ----
import EditIcon from '@/assets/icon/editIcon.svg';
// ---- Components ----
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
// ---- Features ----
import TimePicker from '@/features/TimePicker';

export default function BreakTimeManagement() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className="flex justify-between w-[220px] text-[14px] px-[12px] py-[0] text-[#535353] font-normal"
            variant="ghost"
          >
            <span>01:00</span>
            <span>12:00 - 13:00</span>
            <Image className="opacity-[0.8]" src={EditIcon} alt="" width={14} height={14} />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>BreakTime</DialogTitle>
            <DialogDescription>休憩時間を編集できます。</DialogDescription>
          </DialogHeader>
          <div className="flex justify-between">
            <Label className="flex flex-col items-start max-w-[250px] w-[calc(50%-6px)]">
              <span className="block mb-0 text-[12px] text-[var(--muted-foreground)]">
                開始時刻
              </span>
              <TimePicker />
            </Label>
            <Label className="flex flex-col items-start max-w-[250px] w-[calc(50%-6px)]">
              <span className="block mb-0 text-[12px] text-[var(--muted-foreground)]">
                終了時刻
              </span>
              <TimePicker />
            </Label>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button className="cursor-pointer" variant="secondary">
                Cancel
              </Button>
            </DialogClose>
            <Button className="cursor-pointer">Update</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Button className="mt-[2px] text-[#7f9ab2] text-[12px]" variant="link" size="sm">
        ＋ 新規追加
      </Button>
    </div>
  );
}
