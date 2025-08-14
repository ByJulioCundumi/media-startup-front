import axios from "axios";

/**
 * Instancia global de Axios para llamadas autenticadas.
 * Modifica VITE_BACKEND_URL en tu .env si tu backend corre
 * en otra URL distinta a http://localhost:4000
 */
const API = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL || "http://localhost:4000/api/auth",
  withCredentials: true, // importante para cookies JWT
});

/* -------------------------------------------------------------------------
   Tipos
---------------------------------------------------------------------------*/
export interface LoginDto {
  identifier: string; // email o userId
  password: string;
}

export interface RegisterDto {
  fullName: string;
  userId: string;
  email: string;
  password: string;
  dateOfBirth: string; // YYYY-MM-DD
  gender: "MALE" | "FEMALE" | "OTHER";
  termsAccepted: boolean;
  country: string;
}

export interface ForgotPasswordSendDto {
  email: string;
}

export interface ForgotPasswordResetDto {
  email: string;
  providedCode: string;
  newPassword: string;
}

/* -------------------------------------------------------------------------
   Endpoints
---------------------------------------------------------------------------*/
// ===== Auth =====
export const loginUser = (data: LoginDto) => API.post("/signin", data);
export const registerUser = (data: RegisterDto) => API.post("/signup", data);
export const signoutUser = () => API.post("/signout");
export const checkSession = () => API.get("/session");

// ===== Email verification =====
export const sendVerificationCode = (email: string) =>
  API.post("/verification/send", { email });

export const verifyVerificationCode = (data: {
  email: string;
  providedCode: string;
}) => API.post("/verification/verify", data);

// ===== Forgot Password =====
export const sendForgotPasswordCode = (email: string) =>
  API.post("/password/forgot/send", { email });

export const verifyForgotPasswordCode = (data: ForgotPasswordResetDto) =>
  API.post("/password/forgot/verify", data); // ya incluye newPassword

/* ----------- NUEVO: recuperar sesión ------------- */
export const getSession = () => API.get("/session"); // tu ruta en Express

export default API;