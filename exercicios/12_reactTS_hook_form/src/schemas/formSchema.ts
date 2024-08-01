import { z } from 'zod';

export const formSchema = z.object({
    name: z.string().min(3, "O número de caracteres é 3."),
    lastname: z.string().min(3, "O número de caracteres é 3."),
    gender: z.string().refine((field) => field !== "select", {
        message: "Você precisa escolher um genero"
    }),
    email: z.string().min(1, "o campo é obrigatório").email("utilize um email válido"),
    password: z.string().min(6, "a senha precisa ter no mínimo 6 caracteres"),
    comfirmpassword: z.string().min(6, "a comfirmação precisa ter no mínimo 6 caracteres"),
    agree: z.boolean().refine((field) => field === true, {
        message: "você precisa concordar com os termos."
    }),
}).refine((field) => field.password === field.comfirmpassword, {
    message: "as senhas precisam ser iguais",
    path: ["comfirmpassword"],
});

export type FormSchema = z.infer<typeof formSchema>;