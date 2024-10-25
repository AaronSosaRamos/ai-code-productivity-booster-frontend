import { z } from "zod";

export const refactorSchema = z.object({
  code_snippet: z.string().min(10, "El código debe tener al menos 10 caracteres"),
  language: z.string(),
  context: z.string().optional(),
});

export type RefactorFormValues = z.infer<typeof refactorSchema>;