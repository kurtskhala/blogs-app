import { Button } from "@/components/ui/button";
import AuthInput from "@/components/auth/AuthInput";
import { useAtomValue } from "jotai";
import { userAtom } from "@/store/auth";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { supabase } from "@/supabase";

type FormData = {
  title_ka: string;
  title_en: string;
  description_ka: string;
  description_en: string;
  user_id: string;
  image_url: null | File;
};

const BlogCreate = () => {
  const user = useAtomValue(userAtom);
  const { t } = useTranslation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title_ka: "",
      title_en: "",
      description_ka: "",
      description_en: "",
      user_id: user.user.id,
      image_url: null,
    },
  });

  const onSubmit = (fieldValues: FormData) => {
    if (fieldValues?.image_url) {
      supabase.storage
        .from("blog_images")
        .upload(fieldValues?.image_url?.name, fieldValues?.image_url)
        .then((res) => {
          return supabase.from("blogs").insert({
            title_ka: fieldValues.title_ka,
            title_en: fieldValues.title_en,
            description_ka: fieldValues.description_ka,
            description_en: fieldValues.description_en,
            image_url: res.data?.fullPath,
            user_id: user?.user?.id,
          });
        })
        .then((res) => {
          console.log(res);
        });
    }
  };

  return (
    <Card className="mx-auto mt-8 w-full max-w-2xl">
      <CardHeader>
        <CardTitle>{t("create-blog-page.title")}</CardTitle>
      </CardHeader>

      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Controller
              name="title_ka"
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
                  value: /^[ა-ჰ0-9\s]+$/,
                  message: t("profile-page.validation.full-name-ka-pattern"),
                },
              }}
              render={({ field: { onChange, value } }) => {
                return (
                  <>
                    <AuthInput
                      label={t("create-blog-page.title-ka-label")}
                      name="title_ka"
                      value={value}
                      onChange={onChange}
                      placeholder={t("create-blog-page.title-ka-placeholder")}
                    />
                    {errors.title_ka && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.title_ka.message}
                      </p>
                    )}
                  </>
                );
              }}
            />
          </div>

          <div className="space-y-2">
            <Controller
              name="title_en"
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
                  value: /^[a-zA-Z0-9\s]+$/,
                  message: t("profile-page.validation.full-name-en-pattern"),
                },
              }}
              render={({ field: { onChange, value } }) => {
                return (
                  <>
                    <AuthInput
                      label={t("create-blog-page.title-en-label")}
                      name="title_en"
                      value={value}
                      onChange={onChange}
                      placeholder={t("create-blog-page.title-en-placeholder")}
                    />
                    {errors.title_en && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.title_en.message}
                      </p>
                    )}
                  </>
                );
              }}
            />
          </div>

          <div className="space-y-2">
            <Controller
              name="description_ka"
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
                  value: /^[ა-ჰ0-9\s]+$/,
                  message: t("profile-page.validation.full-name-ka-pattern"),
                },
              }}
              render={({ field: { onChange, value } }) => {
                return (
                  <>
                    <AuthInput
                      label={t("create-blog-page.description-ka-label")}
                      name="description_ka"
                      value={value}
                      onChange={onChange}
                      placeholder={t(
                        "create-blog-page.description-ka-placeholder",
                      )}
                    />
                    {errors.description_ka && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.description_ka.message}
                      </p>
                    )}
                  </>
                );
              }}
            />
          </div>

          <div className="space-y-2">
            <Controller
              name="description_en"
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
                  value: /^[a-zA-Z0-9\s]+$/,
                  message: t("profile-page.validation.full-name-en-pattern"),
                },
              }}
              render={({ field: { onChange, value } }) => {
                return (
                  <>
                    <AuthInput
                      label={t("create-blog-page.description-en-label")}
                      name="description_en"
                      value={value}
                      onChange={onChange}
                      placeholder={t(
                        "create-blog-page.description-en-placeholder",
                      )}
                    />
                    {errors.description_en && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.description_en.message}
                      </p>
                    )}
                  </>
                );
              }}
            />
          </div>

          <div className="space-y-2">
            <Controller
              name="image_url"
              control={control}
              render={({ field: { onChange } }) => {
                return (
                  <AuthInput
                    type="file"
                    label={t("create-blog-page.image-url-label")}
                    name="image_url"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      onChange(file);
                    }}
                  />
                );
              }}
            />
          </div>
        </CardContent>

        <CardFooter>
          <Button type="submit" className="w-full">
            {t("create-blog-page.create-button")}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default BlogCreate;
