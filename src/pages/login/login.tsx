import { Button } from "@/components/ui/button";
import AuthCard from "@/components/auth/AuthCard";
import AuthInput from "@/components/auth/AuthInput";
import AuthButton from "@/components/auth/AuthButton";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Login = () => {
  const params = useParams();
  const lang = params.lang as string;
  const {t} = useTranslation();
   
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign in:", formData);
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <AuthCard
        title={t("login-page.header")}
        description={t("login-page.header-info")}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <AuthInput
            label={t("login-page.email-label")}
            type="email"
            name="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
          />
          <AuthInput
            label={t("login-page.password-label")}
            type="password"
            name="password"
            placeholder={t("login-page.password-placeholder")}
            value={formData.password}
            onChange={handleChange}
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
