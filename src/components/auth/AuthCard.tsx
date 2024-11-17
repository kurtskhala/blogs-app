import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import React from "react";

interface AuthCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const AuthCard: React.FC<AuthCardProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <Card className="w-full max-w-md border-gray-800 dark:bg-gray-900">
      <CardHeader className="space-y-2">
        <CardTitle className="text-center text-2xl dark:text-white">
          {title}
        </CardTitle>
        <CardDescription className="text-center dark:text-gray-400">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default AuthCard;