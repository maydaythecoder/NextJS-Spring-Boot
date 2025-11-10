"use client";
import { useMemo, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { submitUserForm, updateField } from "../functions";
import { useFormState } from "../state";

export function useCreateUserForm() {
  const router = useRouter();
  const {
    formState,
    setFormState,
    isSubmitting,
    setIsSubmitting,
    error,
    setError,
    resetForm,
  } = useFormState();

  const fieldUpdater = useMemo(
    () => updateField(setFormState),
    [setFormState],
  );

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    await submitUserForm({
      event,
      formState,
      setIsSubmitting,
      setError,
      onSuccess: () => {
        resetForm();
        router.push("/users");
        router.refresh();
      },
    });
  };

  const dismissError = () => setError(null);
  const handleCancel = () => {
    resetForm();
    router.back();
  };

  return {
    formState,
    fieldUpdater,
    handleSubmit,
    isSubmitting,
    error,
    dismissError,
    handleCancel,
  };
}

