// ---- Components ----
import {
  Table,
  TableBody,
  // TableCaption,
  // TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Card,
  // CardAction,
  CardContent,
  // CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
// ---- Features ----
import LogsTableRow from '@/features/logs/LogsTableRow';

// ===== コンポーネント関数の宣言 =====
export default function LogsTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>LOGS</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>StartTime</TableHead>
              <TableHead>EndTime</TableHead>
              <TableHead>BreakTime</TableHead>
              <TableHead>WorkingTime</TableHead>
              <TableHead>menu</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <LogsTableRow />
            <LogsTableRow />
            <LogsTableRow />
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>Total 00:00</CardFooter>
    </Card>
  );
}
