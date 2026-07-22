import { z } from "zod";

import { isValidPhoneNumber } from "libphonenumber-js";

/**
 * Zod schema for Contact Form validation.
 * Shared between client (if used with react-hook-form) and Server Actions.
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "El nombre debe tener al menos 2 caracteres" })
    .max(100, { message: "El nombre no puede exceder 100 caracteres" }),
  
  email: z
    .string()
    .email({ message: "Debe ser un correo electrónico válido" }),
  
  phone: z
    .string()
    .refine((val) => !val || isValidPhoneNumber(val), {
      message: "Debe ser un número de teléfono válido para el país seleccionado",
    })
    .optional()
    .or(z.literal("")),
  
  address: z
    .string()
    .optional(),
    
  services: z
    .string()
    .min(1, { message: "Debes seleccionar un servicio" }),
    
  message: z
    .string()
    .min(10, { message: "El mensaje debe tener al menos 10 caracteres" })
    .max(1000, { message: "El mensaje es demasiado largo (máx 1000)" }),
});

/** @typedef {z.infer<typeof contactFormSchema>} ContactFormData */
