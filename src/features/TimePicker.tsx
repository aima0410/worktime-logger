// ---- Components ----
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Clock } from 'lucide-react';

export default function TimePicker() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className="justify-between max-w-[250px] w-[calc(50%-6px)] tracking-[0.05em] text-[#494949] font-normal"
          variant="outline"
        >
          <span className="inline-block">00:00</span>
          <span className="inline-block">
            <Clock className="size-4 opacity-50" />
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent>aa</PopoverContent>
    </Popover>
  );
}

// ---- memo ----
// 入力欄のGapは12pxで統一。左右6pxずつ減らしてる。
