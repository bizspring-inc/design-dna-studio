/**
 * DataTable — 테이블 컴포넌트 패밀리
 *  - DataTable / DataTableRoot / DataTableHeader / DataTableBody
 *  - DataTableRow / DataTableHead / DataTableCell / DataTableEmpty
 */
import {
  forwardRef,
  HTMLAttributes,
  ReactNode,
  TdHTMLAttributes,
  ThHTMLAttributes,
} from "react";
import { cn } from "@/lib/utils";

const TABLE_BORDER = "border-border";
const PAD = "px-sm py-sm";

// ── DataTable ─────────────────────────────────────────────
export interface DataTableProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const DataTable = forwardRef<HTMLDivElement, DataTableProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("w-full overflow-x-auto", className)} {...props}>
      <table
        className={cn(
          "w-full border-collapse font-sans",
          "border-t border-l border-r",
          TABLE_BORDER,
        )}
      >
        {children}
      </table>
    </div>
  ),
);
DataTable.displayName = "DataTable";

export const DataTableRoot = forwardRef<
  HTMLTableElement,
  HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <table
    ref={ref}
    className={cn(
      "w-full border-collapse font-sans border-t border-l border-r",
      TABLE_BORDER,
      className,
    )}
    {...props}
  />
));
DataTableRoot.displayName = "DataTableRoot";

export const DataTableHeader = forwardRef<
  HTMLTableSectionElement,
  HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn(className)} {...props} />
));
DataTableHeader.displayName = "DataTableHeader";

export const DataTableBody = forwardRef<
  HTMLTableSectionElement,
  HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody ref={ref} className={cn(className)} {...props} />
));
DataTableBody.displayName = "DataTableBody";

// ── Row ───────────────────────────────────────────────────
export interface DataTableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  hoverable?: boolean;
  selected?: boolean;
  striped?: boolean;
}

export const DataTableRow = forwardRef<HTMLTableRowElement, DataTableRowProps>(
  ({ hoverable = false, selected = false, striped = false, className, ...props }, ref) => (
    <tr
      ref={ref}
      className={cn(
        "transition-colors duration-100",
        hoverable && "hover:bg-surface-body",
        selected && "bg-surface-sky",
        striped && "even:bg-surface-gray-light",
        className,
      )}
      {...props}
    />
  ),
);
DataTableRow.displayName = "DataTableRow";

// ── Head ──────────────────────────────────────────────────
export interface DataTableHeadProps extends ThHTMLAttributes<HTMLTableCellElement> {
  align?: "left" | "center" | "right";
  sortable?: boolean;
  sortDirection?: "asc" | "desc" | "none";
}

export const DataTableHead = forwardRef<HTMLTableCellElement, DataTableHeadProps>(
  (
    { align = "center", sortable = false, sortDirection = "none", className, children, ...props },
    ref,
  ) => (
    <th
      ref={ref}
      className={cn(
        "bg-surface-gray text-body-sm text-foreground font-semibold whitespace-nowrap",
        PAD,
        "border-b", TABLE_BORDER,
        align === "center" && "text-center",
        align === "right" && "text-right",
        align === "left" && "text-left",
        sortable && "cursor-pointer select-none hover:bg-surface-body transition-colors",
        className,
      )}
      {...props}
    >
      {sortable ? (
        <span className="inline-flex items-center gap-1">
          {children}
          <span className="inline-flex flex-col leading-none text-[10px] text-grayscale-400">
            <span className={sortDirection === "asc" ? "text-sky" : ""}>▲</span>
            <span className={sortDirection === "desc" ? "text-sky" : ""}>▼</span>
          </span>
        </span>
      ) : (
        children
      )}
    </th>
  ),
);
DataTableHead.displayName = "DataTableHead";

// ── Cell ──────────────────────────────────────────────────
export interface DataTableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {
  align?: "left" | "center" | "right";
  muted?: boolean;
  truncate?: boolean;
}

export const DataTableCell = forwardRef<HTMLTableCellElement, DataTableCellProps>(
  ({ align = "left", muted = false, truncate = false, className, children, ...props }, ref) => (
    <td
      ref={ref}
      className={cn(
        PAD,
        "text-body-sm font-sans border-b", TABLE_BORDER,
        muted ? "text-font-mute-dark" : "text-foreground",
        align === "center" && "text-center",
        align === "right" && "text-right",
        align === "left" && "text-left",
        truncate && "max-w-0 overflow-hidden text-ellipsis whitespace-nowrap",
        className,
      )}
      {...props}
    >
      {children}
    </td>
  ),
);
DataTableCell.displayName = "DataTableCell";

// ── Empty ─────────────────────────────────────────────────
export interface DataTableEmptyProps {
  colSpan?: number;
  message?: string;
  className?: string;
}

export const DataTableEmpty = ({
  colSpan = 1,
  message = "데이터가 없습니다.",
  className,
}: DataTableEmptyProps) => (
  <tr>
    <td
      colSpan={colSpan}
      className={cn(
        "py-2xl text-center text-body-sm font-sans text-font-mute-dark",
        "border-b", TABLE_BORDER,
        className,
      )}
    >
      {message}
    </td>
  </tr>
);
DataTableEmpty.displayName = "DataTableEmpty";
