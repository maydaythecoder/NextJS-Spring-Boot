export type ErrorBoundaryProps<T extends Error = Error> = {
  error: T & { digest?: string };
  reset: () => void;
};

