import { object, string, ref } from "yup";

export const registerSchema = object().shape({
  confirmPassword: string()
    .required("confirmacion requerida")
    .oneOf([ref("password"), null], "El password no coincide"),
  password: string()
    .required("La contraseña es requerida")
    .min(8, "Minimo 8 caracteres"),
  email: string()
    .required("El email es requerido")
    .email("No es un mail valido"),
  fullname: string().required("El nombre completo es requerido"),
});

export const editAccountSchema = object().shape({
  fullname: string().required("El nombre completo es requerido"),
});

export const loginSchema = object().shape({
  password: string()
    .required("La contraseña es requerida")
    .min(8, "Minimo 8 caracteres"),
  email: string()
    .required("El email es requerido")
    .email("No es un mail valido"),
});

export const recoverySchema = object().shape({
  email: string()
    .required("El email es requerido")
    .email("No es un mail valido"),
});
