// ---- Components ----
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalenderIcon } from 'lucide-react';

export default function DatePicker() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className="justify-between max-w-[250px] w-[calc(50%-6px)] tracking-[0.05em] text-[#494949] font-normal"
          variant="outline"
        >
          <span>
            2025
            <span className="inline-block text-[12px] relative bottom-[1px] mx-[1.6px]">/</span>
            06
            <span className="inline-block text-[12px] relative bottom-[1px] mx-[1.6px]">/</span>
            26
          </span>
          <span>
            <CalenderIcon className="size-4 opacity-50" />
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <Calendar mode="single" captionLayout="dropdown" />
      </PopoverContent>
    </Popover>
  );
}
