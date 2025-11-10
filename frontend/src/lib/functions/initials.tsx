import { CreateUserPayload } from "../types";

export const getInitials = (name: string): string => {
  if (!name?.trim()) return '';
  
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map(segment => segment.charAt(0).toUpperCase())
    .join('');
};

export const INITIAL_FORM: CreateUserPayload = {
    name: "",
    email: "",
  };

