// ---- CSS ----
import './globals.css';
// ---- Components ----
import PickupProject from '@/features/PickupProject';
import LogsTable from '@/features/logs/LogsTable';

export default function Home() {
  return (
    <div className="py-[10px] px-[2dvw]">
      <header className="mb-[14px]">
        <h1 className="text-[12px]">稼働時間管理アプリ</h1>
        <PickupProject />
      </header>
      <main>
        <LogsTable />
      </main>
    </div>
  );
}
