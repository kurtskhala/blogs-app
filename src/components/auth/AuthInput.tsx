import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

interface AuthInputProps {
  label: string;
  type?: string;
  placeholder?: string;
  name: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AuthInput: React.FC<AuthInputProps> = ({
  label,
  type = "text",
  placeholder,
  name,
  value,
  onChange,
}) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="dark:text-white">
        {label}
      </Label>
      <Input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border-gray-700 dark:bg-gray-800 dark:text-white placeholder:text-gray-500"
      />
    </div>
  );
};

export default AuthInput;