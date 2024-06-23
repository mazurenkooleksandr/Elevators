import { FormEvent } from "react";

export const getFormData =
  <T>(event: FormEvent<HTMLFormElement>): T => Object.fromEntries(new FormData(event.currentTarget)) as T;
