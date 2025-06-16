// ---- Components ----
import {
  // Table,
  // TableBody,
  // TableCaption,
  TableCell,
  // TableHead,
  // TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  // DialogContent,
  // DialogDescription,
  // DialogHeader,
  // DialogTitle,
  DialogTrigger,
  // DialogClose,
  // DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
// ---- Features ----
import LogsMenu from '@/features/logs/LogsMenu';
import LogsEditModal from '@/features/logs/LogsEditModal';

export default function LogsTableRow() {
  return (
    <Dialog>
      <DialogTrigger className="cursor-pointer" asChild>
        <TableRow>
          <TableCell>2025/06/14</TableCell>
          <TableCell>00:00</TableCell>
          <TableCell>00:00</TableCell>
          <TableCell>00:00</TableCell>
          <TableCell>00:00</TableCell>
          <TableCell>
            <LogsMenu />
          </TableCell>
        </TableRow>
      </DialogTrigger>
      <LogsEditModal />
    </Dialog>
  );
}
