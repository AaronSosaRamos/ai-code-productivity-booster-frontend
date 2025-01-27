import { z } from 'zod';

export const debuggingSchema = z.object({
  code_snippet: z.string().nonempty("Code snippet is required"),
  language: z.enum(["python", "javascript", "typescript", "java"]).default("python"),
  context: z.string().optional(),
});

export type DebuggingFormValues = z.infer<typeof debuggingSchema>;