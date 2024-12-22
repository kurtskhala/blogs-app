import { Button } from "@/components/ui/button";
import AuthCard from "@/components/auth/AuthCard";
import AuthInput from "@/components/auth/AuthInput";
import AuthButton from "@/components/auth/AuthButton";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Controller, useForm } from "react-hook-form";
import { useLogin } from "@/hooks/auth/useLogin";
import { AuthCredentials } from "@/types/auth";

export const Login = () => {
  const params = useParams();
  const lang = params.lang as string;
  const { t } = useTranslation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate: handleLogin } = useLogin();

  const onSubmit = (fieldValues: AuthCredentials) => {
    handleLogin(fieldValues);
  };
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <AuthCard
        title={t("login-page.header")}
        description={t("login-page.header-info")}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Controller
            name="email"
            control={control}
            rules={{
              required: t("register-page.validation.email-required"),
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: t("register-page.validation.email-invalid"),
              },
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              console.log(error);
              return (
                <>
                  <AuthInput
                    label={t("login-page.email-label")}
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={value}
                    onChange={onChange}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </>
              );
            }}
          />
          <Controller
            name="password"
            control={control}
            rules={{
              required: t("register-page.validation.password-required"),
              minLength: {
                value: 8,
                message: t("register-page.validation.password-min-length"),
              },
              maxLength: {
                value: 50,
                message: t("register-page.validation.password-max-length"),
              },
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              console.log(error);
              return (
                <>
                  <AuthInput
                    label={t("login-page.password-label")}
                    type="password"
                    name="password"
                    placeholder={t("login-page.password-placeholder")}
                    value={value}
                    onChange={onChange}
                  />
                  {errors.password && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.password.message}
                    </p>
                  )}
                </>
              );
            }}
          />
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            {t("login-page.button")}
          </Button>
          <div className="flex items-center justify-between pt-4">
            <Link
              to="/forgot-password"
              className="text-sm text-blue-500 hover:text-blue-400"
            >
              {t("login-page.forgot-password")}
            </Link>
            <AuthButton
              text={t("login-page.register-text")}
              linkText={t("login-page.register-Link")}
              href={`/${lang}/register`}
            />
          </div>
        </form>
      </AuthCard>
    </div>
  );
};

export default Login;
