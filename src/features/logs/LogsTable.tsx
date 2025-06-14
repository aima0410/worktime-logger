// ---- Next ----
import Image from 'next/image';
// ---- Images ----
import threeDotsMenuIcon from '@/assets/icon/threeDotsMenuIcon.svg';
import editIcon from '@/assets/icon/editIcon.svg';
// ---- Components ----
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import {
  Card,
  // CardAction,
  CardContent,
  // CardDescription,
  // CardFooter,
  // CardHeader,
  // CardTitle,
} from '@/components/ui/card';

// ===== コンポーネント関数の宣言 =====
export default function LogsTable() {
  return (
    <Card>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="">
              <TableHead id="logs-date" className="w-[10%] pl-[10px]">
                Date
              </TableHead>
              <TableHead className="w-[15%] text-center">StartTime</TableHead>
              <TableHead className="w-[15%] text-center">EndTime</TableHead>
              <TableHead className="w-[15%] text-center">WorkingHours</TableHead>
              <TableHead className="w-[15%] pl-[5%]">Memo</TableHead>
              <TableHead className="w-[15%] text-center"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell headers="logs-date" className="w-[10%] tracking-[0.04em]">
                2025/10/01
              </TableCell>
              <TableCell className="w-[15%] text-center">00:00</TableCell>
              <TableCell className="w-[15%] text-center">00:00</TableCell>
              <TableCell className="w-[15%] text-center">00:00</TableCell>
              <TableCell className="w-[15%] pl-[5%] text-[#a6a6a6] text-[12px]">
                <span className="pr-[5px]">
                  文言打鍵 総打鍵数：30件<span>…</span>
                </span>
                <Image
                  src={editIcon}
                  alt="メモを編集する"
                  className="inline-block relative bottom-[1px]"
                  width={12}
                  height={12}
                />
              </TableCell>
              <TableCell className="w-[15%] text-right pr-[4%]">
                <Button variant="ghost" className="p-[5px] w-fit h-fit">
                  <Image src={threeDotsMenuIcon} alt="メニューを開く" width={13} height={13} />
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
          <TableCaption>A list of work time logs.</TableCaption>
        </Table>
      </CardContent>
    </Card>
  );
}
