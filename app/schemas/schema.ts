import { z } from "zod";

export const formSchema = z.object({
	userName: z.string().min(2, "Имя слишком короткое"),
	phone: z.string().min(10, "Введите корректный номер"),
	email: z.string().email("Некорректный формат email"),
});

export type FormValues = z.infer<typeof formSchema>;
