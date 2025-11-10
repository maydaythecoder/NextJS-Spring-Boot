import type {
  Dispatch,
  SetStateAction,
  FormEvent,
  ChangeEvent,
} from "react";
import type { CreateUserPayload } from "../types";
import { createUser } from "../api";

type SetFormState = Dispatch<SetStateAction<CreateUserPayload>>;

type SubmitUserFormArgs = {
  event: FormEvent<HTMLFormElement>;
  formState: CreateUserPayload;
  setIsSubmitting: (value: boolean) => void;
  setError: (value: string | null) => void;
  onSuccess: () => void;
};

export const updateField =
  (setFormState: SetFormState) =>
  (field: keyof CreateUserPayload) =>
  (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setFormState((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

export async function submitUserForm({
  event,
  formState,
  setIsSubmitting,
  setError,
  onSuccess,
}: SubmitUserFormArgs) {
  event.preventDefault();
  setIsSubmitting(true);
  setError(null);

  try {
    await createUser(formState);
    onSuccess();
  } catch (err) {
    setError((err as Error).message);
  } finally {
    setIsSubmitting(false);
  }
}