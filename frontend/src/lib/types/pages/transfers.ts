import type { ErrorBoundaryProps } from "../errors";

export type TransfersPageSearchParams = {
  status?: string;
};

export type TransfersPageProps = {
  searchParams: TransfersPageSearchParams;
};

export type TransfersErrorProps = ErrorBoundaryProps;

