import type { TransferStatus } from "@/lib";
import { STATUS_STYLES } from "@/lib/assets/StatusStyles";


export const TransferStatusBadge = ({ status }: { status: TransferStatus }) => {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ring-1 ${STATUS_STYLES[status]}`}
    >
      {status.toLowerCase()}
    </span>
  );
};

