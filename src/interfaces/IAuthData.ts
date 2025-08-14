export type Gender = "MALE" | "FEMALE" | "OTHER";

/* ---------- Datos de usuario (role USER) ---------- */
export interface IUserAuth {
  id: string;
  fullName: string;
  userId: string;
  email: string;
  role: "USER" | "";
  verified: boolean;
  dateOfBirth: string;
  gender: "MALE" | "FEMALE" | "OTHER";
  termsAccepted: boolean;
  lastEmailChangeAt: string | null;
  lastUserIdChangeAt: string | null;
  country: string;
  currency: string;
  profileImageUrl: string;
  profilePresentation: string;
  emailCodeExpiresAt: string;
  emailCodeHash: string;
  subscriptionPrice: number;
  subscriptionMessage: string;

  // Nuevos campos
  stripeCustomerId: string | null;
  stripeAccountId: string | null;
  stripeConnectedAt: string | null;
  stripeChargesEnabled: boolean | null,
  stripeDetailsSubmitted: boolean | null,
  stripePayoutsEnabled: boolean | null
}

/* ---------- Datos de administrador (role ADMIN) ---------- */
export interface IAdminAuth {
  id: string;
  fullName: string;
  email: string;
  role: "ADMIN" | ""; // "" si no está autenticado
}

/* ---------- Estado completo del slice ---------- */
export interface IAuthData {
  user: IUserAuth;
  admin: IAdminAuth;
  loading: boolean;
}