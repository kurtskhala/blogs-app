import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import AuthInput from "@/components/auth/AuthInput";
import { useMutation } from "@tanstack/react-query";
import { fillProfileInfo, getProfileInfo } from "@/supabase/account";
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

export const Profile = () => {
  const [formData, setFormData] = useState({
    username: "",
    full_name_ka: "",
    full_name_en: "",
    avatar_url: "",
  });

  const user = useAtomValue(userAtom);

  useEffect(() => {
    if (user) {
      getProfileInfo(user?.user.id).then((res) => console.log(res));
    }
  }, [user]);

  const { mutate: handleFillProfileInfo } = useMutation({
    mutationKey: ["fill-profile-info"],
    mutationFn: fillProfileInfo,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleFillProfileInfo({ ...formData, id: user?.user?.id });
    setFormData({
      username: "",
      full_name_ka: "",
      full_name_en: "",
      avatar_url: "",
    });
  };

  return (
    <Card className="mx-auto mt-8 w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Profile Settings</CardTitle>
        <CardDescription>Update your profile information</CardDescription>
      </CardHeader>

      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <AuthInput
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter username"
            />
          </div>

          <div className="space-y-2">
            <AuthInput
              label="Full Name (Georgian)"
              name="full_name_ka"
              value={formData.full_name_ka}
              onChange={handleChange}
              placeholder="სრული სახელი"
            />
          </div>

          <div className="space-y-2">
            <AuthInput
              label="Full Name (English)"
              name="full_name_en"
              value={formData.full_name_en}
              onChange={handleChange}
              placeholder="Full name"
            />
          </div>

          <div className="space-y-2">
            <AuthInput
              label="Avatar URL"
              name="avatar_url"
              value={formData.avatar_url}
              onChange={handleChange}
              placeholder="https://example.com/avatar.jpg"
            />
          </div>
        </CardContent>

        <CardFooter>
          <Button type="submit" className="w-full">
            Update Profile
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default Profile;
