import type { ErrorBoundaryProps } from "../errors";

export type UserDetailPageParams = {
  id: string;
};

export type UserDetailPageProps = {
  params: UserDetailPageParams;
};

export type UsersErrorProps = ErrorBoundaryProps;

export type UserDetailErrorProps = ErrorBoundaryProps;

