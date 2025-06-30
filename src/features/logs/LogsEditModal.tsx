'use client';

// ---- React ----
import { useState } from 'react';
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
import BreakTimeManagement from './BreakTimeManagement';

export default function LogsEditModal() {
  const [isBreakTimeIncluded, setIsBreakTimeIncluded] = useState<Boolean>(false);

  return (
    <DialogContent className="max-h-[80dvh] overflow-auto">
      <DialogHeader className="mb-[10px]">
        <DialogTitle className="text-[#4a4a4a] mb-[5px]">Edit Modal</DialogTitle>
        <DialogDescription className="text-[12px] bg-[#f7f7f7] p-[5px] rounded-[5px]">
          ログを編集するためのモーダルです。
        </DialogDescription>
      </DialogHeader>
      <div className="flex justify-between mb-[10px]">
        <Label className="flex flex-col items-start max-w-[250px] w-[calc(50%-6px)]">
          <span className="block mb-0 text-[12px] text-[var(--muted-foreground)]">日付</span>
          <DatePicker />
        </Label>
        <Label className="flex flex-col items-start max-w-[250px] w-[calc(50%-6px)]">
          <span className="block mb-0 text-[12px] text-[var(--muted-foreground)] tracking-[0.05em]">
            プロジェクト
          </span>
          <PickupProject />
        </Label>
      </div>
      <div className="flex justify-between mb-[10px]">
        <Label className="flex flex-col items-start max-w-[250px] w-[calc(50%-6px)]">
          <span className="block mb-0 text-[12px] text-[var(--muted-foreground)]">開始時刻</span>
          <TimePicker />
        </Label>
        <Label className="flex flex-col items-start max-w-[250px] w-[calc(50%-6px)]">
          <span className="block mb-0 text-[12px] text-[var(--muted-foreground)]">終了時刻</span>
          <TimePicker />
        </Label>
      </div>
      <Separator className="mb-[5px]" />
      <div>
        <div className="flex">
          <Label className="mb-[6px] text-[12px] text-[var(--muted-foreground)] mr-[10px]">
            <span>休憩時間</span>
            <Switch onClick={() => setIsBreakTimeIncluded(!isBreakTimeIncluded)} />
          </Label>
        </div>
        {isBreakTimeIncluded && <BreakTimeManagement />}
      </div>
      <Separator className="mb-[5px]" />
      <Label className="flex flex-col items-start mb-[10px]">
        <span className="block mb-[3px] text-[12px] text-[var(--muted-foreground)]">作業内容</span>
        <Textarea className="h-[100px]" />
      </Label>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="secondary">
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
