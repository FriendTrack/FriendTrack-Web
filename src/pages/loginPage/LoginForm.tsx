import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ROUTES } from "@/lib/constants/router";
import { Label } from "@radix-ui/react-label";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const LoginForm: React.FC<{ className?: string }> = ({ className }) => {
  const navigate = useNavigate();
  const onLoginClick = () => {
    navigate("/");
  };
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Вход</CardTitle>
      </CardHeader>
      <CardContent>
        <form id="login_form" onSubmit={() => onLoginClick()}>
          <Label htmlFor="email">Email</Label>
          <Input type="email" placeholder="email" id="email" />
          <Label htmlFor="password" className="block mt-3">
            Пароль
          </Label>
          <Input type="password" placeholder="пароль" id="password" />
        </form>
      </CardContent>
      <CardFooter>
        <Button form="login_form" className="w-full md:w-auto">
          Войти
        </Button>
        <div className="text-sm opacity-50 ms-auto">
          <NavLink to={ROUTES.REGISTRATION}>Зарегистрироваться</NavLink>
        </div>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
