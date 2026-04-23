import {
  DataTable,
  DataTableHeader,
  DataTableBody,
  DataTableRow,
  DataTableHead,
  DataTableCell,
} from "@/components/molecules/data-table/DataTable";
import { ActionStatus, ActionStatusValue } from "@/components/atoms/data-display/ActionStatus";

const ROWS: { name: string; email: string; date: string; status: ActionStatusValue }[] = [
  { name: "홍길동", email: "hong@biz.com", date: "2024-01-01", status: "Success" },
  { name: "김철수", email: "kim@biz.com",  date: "2024-02-15", status: "Waiting" },
  { name: "이영희", email: "lee@biz.com",  date: "2024-03-08", status: "Done"    },
];

export default function Showcase() {
  return (
    <div className="flex flex-col gap-lg">
      <DataTable>
        <DataTableHeader>
          <DataTableRow>
            <DataTableHead align="left">이름</DataTableHead>
            <DataTableHead align="left" sortable sortDirection="asc">이메일</DataTableHead>
            <DataTableHead>가입일</DataTableHead>
            <DataTableHead>상태</DataTableHead>
          </DataTableRow>
        </DataTableHeader>
        <DataTableBody>
          {ROWS.map((row, i) => (
            <DataTableRow key={i} hoverable striped selected={i === 1}>
              <DataTableCell>{row.name}</DataTableCell>
              <DataTableCell muted>{row.email}</DataTableCell>
              <DataTableCell align="center">{row.date}</DataTableCell>
              <DataTableCell align="center">
                <div className="flex justify-center">
                  <ActionStatus status={row.status} />
                </div>
              </DataTableCell>
            </DataTableRow>
          ))}
        </DataTableBody>
      </DataTable>
    </div>
  );
}
