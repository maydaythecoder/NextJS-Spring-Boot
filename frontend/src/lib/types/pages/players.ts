import type { ErrorBoundaryProps } from "../errors";

export type PlayersPageSearchParams = {
  position?: string;
  q?: string;
};

export type PlayersPageProps = {
  searchParams: PlayersPageSearchParams;
};

export type PlayerDetailPageProps = {
  params: {
    id: string;
  };
};

export type PlayersErrorProps = ErrorBoundaryProps;

export type PlayerDetailErrorProps = ErrorBoundaryProps;

