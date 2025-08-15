/* ────────────────────────────────────────────────────────────
   File: src/components/AuthPopup/AuthPopup.tsx
   AuthPopup actualizado para incluir selección de país
   ──────────────────────────────────────────────────────────── */

import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  loginUser,
  registerUser,
  sendForgotPasswordCode,
  verifyForgotPasswordCode,
} from "../../api/AuthApi";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { IoMdClose } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { RiEyeCloseLine } from "react-icons/ri";
import {
  FaMoneyBillWaveAlt,
  FaRocket,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";

import logo from "../../assets/icons/logo.svg";
import "./authpopup.scss";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import { useForm, type FieldValues, type Path, type RegisterOptions, type UseFormRegister } from "react-hook-form";
import type { IAdminAuth, IUserAuth } from "../../interfaces/IAuthData";
import { setAdminAuth, setUserAuth } from "../../reducers/authSlice";
import { setAuthPopupStatus } from "../../reducers/popupStatusSlice";

countries.registerLocale(enLocale);

export type AuthMode = "login" | "register" | "forgot" | "reset";

interface LoginForm {
  email: string;
  password: string;
}
interface RegisterForm extends LoginForm {
  fullName: string;
  username: string;
  gender: string;
  dateOfBirth: string;
  terms: boolean;
  country: string;
}
interface ForgotForm {
  email: string;
}
interface ResetForm {
  code: string;
  newPassword: string;
}

interface PwFieldProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  name: Path<T>;
  placeholder: string;
  rules?: RegisterOptions<T, Path<T>>;
}

function PasswordField<T extends FieldValues>({
  register,
  name,
  placeholder,
  rules,
}: PwFieldProps<T>) {
  const [visible, setVisible] = useState(false);
  return (
    <div className="auth-page__input-wrapper">
      <input
        {...register(name, rules)}
        type={visible ? "text" : "password"}
        placeholder={placeholder}
        className="auth-page__input"
      />
      {visible ? (
        <IoEyeOutline className="auth-page__eye" onClick={() => setVisible(false)} />
      ) : (
        <RiEyeCloseLine className="auth-page__eye" onClick={() => setVisible(true)} />
      )}
    </div>
  );
}

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const strongPwRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d.-]{8,35}$/;

const isAdult = (iso: string) => {
  const dob = new Date(iso);
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const m = today.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) age--;
  return age >= 18;
};

function isAdminAuth(account: IUserAuth | IAdminAuth): account is IAdminAuth {
  return account.role === "ADMIN";
}

export default function AuthPopup() {
  const dispatch = useDispatch();
  const closePopup = () => dispatch(setAuthPopupStatus("closed"));

  const [authMode, setAuthMode] = useState<AuthMode>("login");
  const [recoveryEmail, setRecoveryEmail] = useState<string>("");

  const loginForm = useForm<LoginForm>({ mode: "onTouched" });
  const registerForm = useForm<RegisterForm>({ mode: "onTouched" });
  const forgotForm = useForm<ForgotForm>({ mode: "onTouched" });
  const resetForm = useForm<ResetForm>({ mode: "onTouched" });

  const countryOptions = useMemo(() => {
    const names = countries.getNames("en", { select: "official" });
    return Object.entries(names).map(([code, name]) => ({
      label: name,
      value: code,
    }));
  }, []);

  const onLogin = async (data: LoginForm) => {
    try {
      const res = await loginUser({ identifier: data.email, password: data.password });
      const { scope, account, message } = res.data as {
        scope: "ADMIN" | "USER";
        account: IUserAuth | IAdminAuth;
        message?: string;
      };
      if (scope === "ADMIN" && isAdminAuth(account)) {
  dispatch(setAdminAuth({
    id: account.id,
    fullName: account.fullName,
    email: account.email,
    role: account.role,
  }));
} else {
  const {
    id,
    fullName,
    userId,
    email,
    role,
    verified,
    dateOfBirth,
    gender,
    termsAccepted,
    lastEmailChangeAt,
    lastUserIdChangeAt,
    country,
    profileImageUrl,
    profilePresentation,
    emailCodeExpiresAt,
    emailCodeHash,
    subscriptionPrice,
    affiliateEnabled,
    affiliateCommission,
    subscriptionMessage,
    stripeAccountId,
    stripeConnectedAt,
  } = account as IUserAuth;

  dispatch(setUserAuth({
    id,
    fullName,
    userId,
    email,
    role,
    verified,
    dateOfBirth,
    gender,
    termsAccepted,
    lastEmailChangeAt,
    lastUserIdChangeAt,
    country,
    profileImageUrl,
    profilePresentation,
    emailCodeExpiresAt,
    emailCodeHash,
    subscriptionPrice,
    affiliateEnabled,
    affiliateCommission,
    subscriptionMessage,
    stripeAccountId,
    stripeConnectedAt,
  }));
}
      toast.success(message || "Inicio de sesión exitoso");
      closePopup();
    } catch (err: any) {
      const msg = err.response?.data?.message || "Login failed";
      toast.error(msg);
      loginForm.setError("password", { type: "server", message: msg });
    }
  };

  const onRegister = async (data: RegisterForm) => {
    try {
      const res = await registerUser({
        fullName: data.fullName.trim(),
        userId: data.username.trim(),
        email: data.email.trim(),
        password: data.password,
        dateOfBirth: data.dateOfBirth,
        gender: data.gender.toUpperCase() as any,
        termsAccepted: data.terms,
        country: data.country,
      });
      const u = res.data?.user as IUserAuth;
      if (u) dispatch(setUserAuth(u));
      toast.success(res.data?.message || "Cuenta creada");
      setAuthMode("login");
    } catch (err: any) {
      const msg = err.response?.data?.message || "Registration failed";
      toast.error(msg);
      registerForm.setError("username", { type: "server", message: msg });
    }
  };

  const onForgot = async (d: ForgotForm) => {
    try {
      const res = await sendForgotPasswordCode(d.email);
      toast.success(res.data?.message || "Código enviado");
      setRecoveryEmail(d.email);
      setAuthMode("reset");
    } catch (err: any) {
      const msg = err.response?.data?.message || "Could not send code";
      toast.error(msg);
      forgotForm.setError("email", { type: "server", message: msg });
    }
  };

  const resetPassword = async (d: ResetForm) => {
    try {
      const res = await verifyForgotPasswordCode({
        email: recoveryEmail,
        providedCode: d.code,
        newPassword: d.newPassword,
      });
      toast.success(res.data?.message || "Contraseña actualizada");
      resetForm.reset();
      setAuthMode("login");
    } catch (err: any) {
      const msg = err.response?.data?.message || "Something went wrong";
      toast.error(msg);
      resetForm.setError("newPassword", { type: "server", message: msg });
    }
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) closePopup();
  };

  return (
    <section className="auth-page">
      <ToastContainer position="top-right" autoClose={4000} hideProgressBar theme="colored" />

      <div className="auth-page__overlay" onClick={handleOverlayClick}>
        <div className="auth-page__container" onClick={(e) => e.stopPropagation()}>
          {/* ───── Left branding panel ───── */}
          <div className="auth-page__left">
            <div className="auth-page__branding">
              <img src={logo} alt="ChallengeMarket Logo" className="auth-page__logo" />
              <h1 className="auth-page__headline">Challenge Clips</h1>
              <p className="auth-page__subtitle">
                The secure challenge marketplace that rewards creativity & results.
              </p>
              <ul className="auth-page__bullets">
                <li><FaShieldAlt /> Legally compliant SaaS (Colombia)</li>
                <li><FaMoneyBillWaveAlt /> Automated USDC & PayPal payouts</li>
                <li><FaUsers /> Affiliate commissions up to 80 %</li>
                <li><FaRocket /> Built on Polygon & next-gen fintech</li>
              </ul>
            </div>
            <footer className="auth-page__footer">© 2025 ChallengeMarket — Monetize your talent</footer>
          </div>

          {/* ───── Right forms panel ───── */}
          <div className="auth-page__right">
            <IoMdClose className="auth-page__close" onClick={closePopup} />
            <div className="auth-page__form-container">
              {/* LOGIN */}
              {authMode === "login" && (
                <form className="auth-page__form" onSubmit={loginForm.handleSubmit(onLogin)}>
                  <h2 className="auth-page__form-title">Login</h2>

                  <input
                    {...loginForm.register("email", {
                      required: "Email is required",
                      pattern: { value: emailRegex, message: "Invalid email" },
                    })}
                    type="email"
                    placeholder="Email or User ID"
                    className="auth-page__input"
                  />
                  {loginForm.formState.errors.email && (
                    <span className="auth-page__error">{loginForm.formState.errors.email.message}</span>
                  )}

                  <PasswordField<LoginForm>
                    register={loginForm.register}
                    name="password"
                    placeholder="Password"
                    rules={{ required: "Password is required" }}
                  />
                  {loginForm.formState.errors.password && (
                    <span className="auth-page__error">{loginForm.formState.errors.password.message}</span>
                  )}

                  <button className="auth-page__btn" disabled={loginForm.formState.isSubmitting}>
                    Login
                  </button>

                  <p className="auth-page__terms">
                    By logging in you accept our&nbsp;
                    <Link to="/terms">Terms</Link>&nbsp;and&nbsp;
                    <Link to="/privacy">Privacy Policy</Link>.
                  </p>

                  <div className="auth-page__actions">
                    <p className="auth-page__action" onClick={() => setAuthMode("forgot")}>
                      Forgot your password?
                    </p>
                    <p className="auth-page__action" onClick={() => setAuthMode("register")}>
                      Create an account
                    </p>
                  </div>
                </form>
              )}

              {/* REGISTER */}
              {authMode === "register" && (
                <form className="auth-page__form" onSubmit={registerForm.handleSubmit(onRegister)} noValidate>
                  <h2 className="auth-page__form-title">Register Account</h2>

                  <input
                    {...registerForm.register("fullName", {
                      required: "Full name is required",
                      minLength: { value: 3, message: "At least 3 characters" },
                    })}
                    type="text"
                    placeholder="Full Name"
                    className="auth-page__input"
                  />
                  {registerForm.formState.errors.fullName && (
                    <span className="auth-page__error">{registerForm.formState.errors.fullName.message}</span>
                  )}

                  <input
                    {...registerForm.register("username", {
                      required: "Username is required",
                      minLength: { value: 3, message: "Min 3 characters" },
                    })}
                    type="text"
                    placeholder="User ID"
                    className="auth-page__input"
                  />
                  {registerForm.formState.errors.username && (
                    <span className="auth-page__error">{registerForm.formState.errors.username.message}</span>
                  )}

                  <input
                    {...registerForm.register("email", {
                      required: "Email is required",
                      pattern: { value: emailRegex, message: "Invalid email" },
                    })}
                    type="email"
                    placeholder="Email"
                    className="auth-page__input"
                  />
                  {registerForm.formState.errors.email && (
                    <span className="auth-page__error">{registerForm.formState.errors.email.message}</span>
                  )}

                  <input
                    {...registerForm.register("dateOfBirth", {
                      required: "Date of birth is required",
                      validate: (v) => isAdult(v) || "You must be at least 18 years old",
                    })}
                    type="date"
                    className="auth-page__input"
                    max={new Date().toISOString().split("T")[0]}
                  />
                  {registerForm.formState.errors.dateOfBirth && (
                    <span className="auth-page__error">{registerForm.formState.errors.dateOfBirth.message}</span>
                  )}

                  <PasswordField<RegisterForm>
                    register={registerForm.register}
                    name="password"
                    placeholder="Password"
                    rules={{
                      required: "Password is required",
                      pattern: { value: strongPwRegex, message: "8-35 chars, 1 upper, 1 lower, 1 number" },
                    }}
                  />
                  {registerForm.formState.errors.password && (
                    <span className="auth-page__error">{registerForm.formState.errors.password.message}</span>
                  )}

                  <div className="auth-page__gender">
                    <label className="auth-page__gender-label">Gender</label>
                    <select
                      {...registerForm.register("gender", { required: "Select gender" })}
                      className="auth-page__select"
                    >
                      <option value="">Choose…</option>
                      <option value="MALE">Male</option>
                      <option value="FEMALE">Female</option>
                      <option value="OTHER">Other</option>
                    </select>
                  </div>

                  {registerForm.formState.errors.gender && (
                    <span className="auth-page__error">{registerForm.formState.errors.gender.message}</span>
                  )}

                  <div className="auth-page__gender auth-page__country">
                    <label className="auth-page__gender-label">Country</label>
                    <select
                      {...registerForm.register("country", {
                        required: "Country is required",
                      })}
                      className="auth-page__select"
                    >
                      <option value="">Select country</option>
                      {countryOptions.map((opt:any) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                    {registerForm.formState.errors.country && (
                      <span className="auth-page__error">{registerForm.formState.errors.country.message}</span>
                    )}

                  <label className="auth-page__checkbox">
                    <input type="checkbox" {...registerForm.register("terms", { required: "Accept the terms" })} />
                    I accept the&nbsp;
                    <Link to="/terms">terms and conditions</Link>
                  </label>
                  {registerForm.formState.errors.terms && (
                    <span className="auth-page__error">{registerForm.formState.errors.terms.message}</span>
                  )}

                  <button className="auth-page__btn" disabled={registerForm.formState.isSubmitting}>
                    Register Account
                  </button>

                  <p className="auth-page__terms">
                    Already have an account?{" "}
                    <span className="auth-page__action" onClick={() => setAuthMode("login")}>
                      Login here
                    </span>
                  </p>
                </form>
              )}

              {/* FORGOT PASSWORD */}
              {authMode === "forgot" && (
                <form className="auth-page__form" onSubmit={forgotForm.handleSubmit(onForgot)}>
                  <h2 className="auth-page__form-title">Password Recovery</h2>

                  <input
                    {...forgotForm.register("email", {
                      required: "Email required",
                      pattern: { value: emailRegex, message: "Invalid email" },
                    })}
                    type="email"
                    placeholder="Your registered email"
                    className="auth-page__input"
                  />
                  {forgotForm.formState.errors.email && (
                    <span className="auth-page__error">{forgotForm.formState.errors.email.message}</span>
                  )}

                  <button className="auth-page__btn" disabled={forgotForm.formState.isSubmitting}>
                    Send Verification Code
                  </button>

                  <div className="auth-page__actions">
                    <p className="auth-page__action" onClick={() => setAuthMode("login")}>
                      Back to Login
                    </p>
                  </div>
                </form>
              )}

              {/* RESET PASSWORD */}
              {authMode === "reset" && (
                <form className="auth-page__form" onSubmit={resetForm.handleSubmit(resetPassword)}>
                  <h2 className="auth-page__form-title">Reset Password</h2>

                  <input
                    {...resetForm.register("code", {
                      required: "Code required",
                      minLength: { value: 6, message: "6 digits" },
                      maxLength: { value: 6, message: "6 digits" },
                    })}
                    type="text"
                    placeholder="6-digit code"
                    className="auth-page__input"
                  />
                  {resetForm.formState.errors.code && (
                    <span className="auth-page__error">{resetForm.formState.errors.code.message}</span>
                  )}

                  <PasswordField<ResetForm>
                    register={resetForm.register}
                    name="newPassword"
                    placeholder="New password"
                    rules={{
                      required: "Password is required",
                      pattern: { value: strongPwRegex, message: "8-35 chars, 1 upper, 1 lower, 1 number" },
                    }}
                  />
                  {resetForm.formState.errors.newPassword && (
                    <span className="auth-page__error">{resetForm.formState.errors.newPassword.message}</span>
                  )}

                  <button className="auth-page__btn" disabled={resetForm.formState.isSubmitting}>
                    Update Password
                  </button>

                  <div className="auth-page__actions">
                    <p className="auth-page__action" onClick={() => setAuthMode("login")}>
                      Back to Login
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}