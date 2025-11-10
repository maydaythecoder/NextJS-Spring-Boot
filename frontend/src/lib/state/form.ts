"use client";
import { useCallback, useState } from "react";
import { INITIAL_FORM } from "../functions";
import type { CreateUserPayload } from "../types";

export const useFormState = () => {
  const [formState, setFormState] = useState<CreateUserPayload>(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const resetForm = useCallback(() => setFormState(INITIAL_FORM), []);

  return {
    formState,
    setFormState,
    isSubmitting,
    setIsSubmitting,
    error,
    setError,
    resetForm,
  };
};