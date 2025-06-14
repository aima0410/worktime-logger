// ---- Components ----
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  // SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';


// ========== コンポーネントの宣言 ==========
export default function PickupProject() {
  return (
    <h2>
      <Select defaultValue="project1">
        <SelectTrigger>
          <SelectValue placeholder="すべて" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="project1">プロジェクト１</SelectItem>
            <SelectItem value="project2">プロジェクト２</SelectItem>
            <SelectItem value="project3">プロジェクト３</SelectItem>
            <SelectItem value="project4">プロジェクト４</SelectItem>
            <SelectItem value="project5">プロジェクト５</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </h2>
  );
}
// ----- 機能：表示プロジェクトを選択する -----