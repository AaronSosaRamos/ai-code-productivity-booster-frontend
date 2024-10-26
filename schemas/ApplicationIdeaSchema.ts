import { z } from 'zod';

export const applicationIdeaSchema = z.object({
  project_name: z.string().nonempty("Project name is required"),
  description: z.string().nonempty("Description is required"),
});

export type ApplicationIdeaFormValues = z.infer<typeof applicationIdeaSchema>;