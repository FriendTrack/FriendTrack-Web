import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import React from "react";
import { useNavigate } from "react-router-dom";

const RegistrationForm: React.FC<{ className?: string }> = ({ className }) => {
  const navigate = useNavigate();
  const onRegisterClick = () => {
    navigate("/");
  };

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Регистрация</CardTitle>
      </CardHeader>
      <CardContent>
        <form id="register_form" onSubmit={() => onRegisterClick()}>
          <Label htmlFor="email">Email</Label>
          <Input type="email" placeholder="email" id="email" />
          <Label htmlFor="password" className="block mt-3">
            Пароль
          </Label>
          <Input type="password" placeholder="пароль" id="password" />
          <Label htmlFor="confirm_password" className="block mt-3">
            Повторите пароль
          </Label>
          <Input
            type="password"
            placeholder="повторите пароль"
            id="confirm_password"
          />
        </form>
      </CardContent>
      <CardFooter>
        <Button form="register_form" className="w-full md:w-auto">
          Зарегистрироваться
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RegistrationForm;
