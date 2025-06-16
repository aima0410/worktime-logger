// ---- Next ----
import Image from 'next/image';
// ---- Images ----
import EditIcon from '@/assets/icon/editIcon.svg';
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
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
// ---- Features ----
import PickupProject from '@/features/PickupProject';
import DatePicker from '@/features/DatePicker';
import TimePicker from '@/features/TimePicker';

export default function LogsEditModal() {
  return (
    <DialogContent className="max-h-[80dvh] overflow-auto">
      <DialogHeader>
        <DialogTitle className="text-[#4a4a4a]">Edit Modal</DialogTitle>
        <DialogDescription className="text-[12px] bg-[#f7f7f7] p-[5px] rounded-[5px]">
          ログを編集するためのモーダルです。
        </DialogDescription>
      </DialogHeader>
      <div className="flex justify-between">
        <div className="flex flex-col w-[calc(50%-6px)]">
          <Label className="mb-[3px] text-[12px] text-[var(--muted-foreground)]">日付</Label>
          <DatePicker />
        </div>
        <div className="flex flex-col w-[calc(50%-6px)]">
          <Label className="mb-[3px] text-[12px] text-[var(--muted-foreground)]">プロジェクト</Label>
          <PickupProject />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col w-[calc(50%-6px)]">
          <Label className="mb-[3px] text-[12px] text-[var(--muted-foreground)]">開始時刻</Label>
          <TimePicker />
        </div>
        <div className="flex flex-col w-[calc(50%-6px)]">
          <Label className="mb-[3px] text-[12px] text-[var(--muted-foreground)]">終了時刻</Label>
          <TimePicker />
        </div>
      </div>
      <Separator />
      <div className="flex">
        <div>
          <div className="flex">
            <Label className="mb-[6px] text-[12px] text-[var(--muted-foreground)] mr-[10px]">
              休憩時間
            </Label>
            <Switch />
          </div>
          <Button
            className="flex justify-between w-[220px] text-[14px] px-[12px] py-[0] text-[#535353] font-normal"
            variant="ghost"
          >
            <span>01:00</span>
            <span>12:00 - 13:00</span>
            <Image className="opacity-[0.8]" src={EditIcon} alt="" width={14} height={14} />
          </Button>
          <Button className="mt-[2px] text-[#7f9ab2] text-[13px]" variant="link" size="sm">
            ＋ 新規追加
          </Button>
        </div>
      </div>
      <Separator />
      <div>
        <Label className="mb-[3px] text-[12px] text-[var(--muted-foreground)]">作業内容</Label>
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
