import { Button } from "@/components/ui/button";
import AuthCard from "@/components/auth/AuthCard";
import AuthInput from "@/components/auth/AuthInput";
import AuthButton from "@/components/auth/AuthButton";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";


export const Register = () => {
  const params = useParams();
  const lang = params.lang as string;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const {t} = useTranslation();


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign up:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 ">
      <AuthCard
        title={t("register-page.header")}
        description={t("register-page.header-info")}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <AuthInput
            label={t("register-page.name-label")}
            name="name"
            placeholder={t("register-page.name-placeholder")}
            value={formData.name}
            onChange={handleChange}
          />
          <AuthInput
            label={t("register-page.email-label")}
            type="email"
            name="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
          />
          <AuthInput
            label={t("register-page.password-label")}
            type="password"
            name="password"
            placeholder={t("register-page.password-placeholder")}
            value={formData.password}
            onChange={handleChange}
          />
          <AuthInput
            label={t("register-page.confirm-password-label")}
            type="password"
            name="confirmPassword"
            placeholder={t("register-page.confirm-password-placeholder")}
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
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
