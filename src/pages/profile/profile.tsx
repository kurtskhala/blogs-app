import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import AuthInput from "@/components/auth/AuthInput";
import { getProfileInfo } from "@/supabase/account";
import { useAtomValue } from "jotai";
import { userAtom } from "@/store/auth";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useProfileUpdate } from "@/hooks/profile/useProfilleUpdate";
import { ProfileFormData } from "@/types/profile";

const Profile = () => {
  const user = useAtomValue(userAtom);
  const { t } = useTranslation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      full_name_ka: "",
      full_name_en: "",
      avatar_url: "",
      phone: "",
    },
  });

  useEffect(() => {
    if (user) {
      getProfileInfo(user?.user.id).then((res) => res);
    }
  }, [user]);

  const { mutate: handleFillProfileInfo } = useProfileUpdate();

  const onSubmit = (fieldValues: ProfileFormData) => {
    handleFillProfileInfo({ ...fieldValues, id: user?.user?.id });
  };

  return (
    <Card className="mx-auto mt-8 w-full max-w-2xl">
      <CardHeader>
        <CardTitle>{t("profile-page.title")}</CardTitle>
        <CardDescription>{t("profile-page.description")}</CardDescription>
      </CardHeader>

      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Controller
              name="full_name_ka"
              control={control}
              rules={{
                required: t("profile-page.validation.full-name-ka-required"),
                minLength: {
                  value: 2,
                  message: t("profile-page.validation.full-name-ka-min-length"),
                },
                maxLength: {
                  value: 50,
                  message: t("profile-page.validation.full-name-ka-max-length"),
                },
                pattern: {
                  value: /^[ა-ჰ\s]+$/,
                  message: t("profile-page.validation.full-name-ka-pattern"),
                },
              }}
              render={({ field: { onChange, value } }) => {
                return (
                  <>
                    <AuthInput
                      label={t("profile-page.full-name-ka-label")}
                      name="full_name_ka"
                      value={value}
                      onChange={onChange}
                      placeholder={t("profile-page.full-name-ka-placeholder")}
                    />
                    {errors.full_name_ka && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.full_name_ka.message}
                      </p>
                    )}
                  </>
                );
              }}
            />
          </div>

          <div className="space-y-2">
            <Controller
              name="full_name_en"
              control={control}
              rules={{
                required: t("profile-page.validation.full-name-en-required"),
                minLength: {
                  value: 2,
                  message: t("profile-page.validation.full-name-en-min-length"),
                },
                maxLength: {
                  value: 50,
                  message: t("profile-page.validation.full-name-en-max-length"),
                },
                pattern: {
                  value: /^[a-zA-Z\s]+$/,
                  message: t("profile-page.validation.full-name-en-pattern"),
                },
              }}
              render={({ field: { onChange, value } }) => {
                return (
                  <>
                    <AuthInput
                      label={t("profile-page.full-name-en-label")}
                      name="full_name_en"
                      value={value}
                      onChange={onChange}
                      placeholder={t("profile-page.full-name-en-placeholder")}
                    />
                    {errors.full_name_en && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.full_name_en.message}
                      </p>
                    )}
                  </>
                );
              }}
            />
          </div>

          <div className="space-y-2">
            <Controller
              name="avatar_url"
              control={control}
              render={({ field: { onChange, value } }) => {
                return (
                  <AuthInput
                    label={t("profile-page.avatar-url-label")}
                    name="avatar_url"
                    value={value}
                    onChange={onChange}
                    placeholder={t("profile-page.avatar-url-placeholder")}
                  />
                );
              }}
            />
          </div>

          <div className="space-y-2">
            <Controller
              name="phone"
              control={control}
              rules={{
                required: t("profile-page.validation.full-name-en-required"),
              }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => {
                console.log(error);
                return (
                  <>
                    <AuthInput
                      label={t("profile-page.phone-label")}
                      name="phone"
                      value={value}
                      onChange={onChange}
                      placeholder={t("profile-page.phone-placeholder")}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.phone.message}
                      </p>
                    )}
                  </>
                );
              }}
            />
          </div>
        </CardContent>

        <CardFooter>
          <Button type="submit" className="w-full">
            {t("profile-page.update-button")}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default Profile;
