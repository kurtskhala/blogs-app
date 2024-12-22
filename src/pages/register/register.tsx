import { Button } from "@/components/ui/button";
import AuthCard from "@/components/auth/AuthCard";
import AuthInput from "@/components/auth/AuthInput";
import AuthButton from "@/components/auth/AuthButton";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Controller, useForm } from "react-hook-form";
import { useRegister } from "@/hooks/auth/useRegister";
import { RegisterCredentials } from "@/types/auth";


export const Register = () => {
  const params = useParams();
  const lang = params.lang as string;
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const { t } = useTranslation();

  const { mutate: handleRegister } = useRegister();

  const onSubmit = (fieldValues: RegisterCredentials) => {
    if (fieldValues.password !== fieldValues.confirmPassword) {
      console.log("Passwords do not match");
      return;
    }
    handleRegister(fieldValues);
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <AuthCard
        title={t("register-page.header")}
        description={t("register-page.header-info")}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Controller
            name="name"
            control={control}
            rules={{
              required: t("register-page.validation.name-required"),
              minLength: {
                value: 2,
                message: t("register-page.validation.name-min-length"),
              },
              maxLength: {
                value: 50,
                message: t("register-page.validation.name-max-length"),
              },
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              console.log(error);
              return (
                <>
                  <AuthInput
                    label={t("register-page.name-label")}
                    name="name"
                    placeholder={t("register-page.name-placeholder")}
                    value={value}
                    onChange={onChange}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </>
              );
            }}
          />
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
                    label={t("register-page.email-label")}
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
                    label={t("register-page.password-label")}
                    type="password"
                    name="password"
                    placeholder={t("register-page.password-placeholder")}
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
          <Controller
            name="confirmPassword"
            control={control}
            rules={{
              required: t("register-page.validation.confirm-password-required"),
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              console.log(error);
              return (
                <>
                  <AuthInput
                    label={t("register-page.confirm-password-label")}
                    type="password"
                    name="confirmPassword"
                    placeholder={t(
                      "register-page.confirm-password-placeholder",
                    )}
                    value={value}
                    onChange={onChange}
                  />
                  {errors.confirmPassword && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.confirmPassword.message}
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
            {t("register-page.button")}
          </Button>
          <AuthButton
            text={t("register-page.login-text")}
            linkText={t("register-page.login-Link")}
            href={`/${lang}/login`}
          />
        </form>
      </AuthCard>
    </div>
  );
};

export default Register;
