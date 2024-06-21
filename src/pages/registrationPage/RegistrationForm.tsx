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
import React, { FormEvent, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { NavLink, useNavigate } from "react-router-dom";

const RegistrationForm: React.FC<{ className?: string }> = ({ className }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(null);

  const onRegisterClick = (e: FormEvent) => {
    e.preventDefault();
    if (token === null) return;
    navigate("/");
  };

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Регистрация</CardTitle>
      </CardHeader>
      <CardContent>
        <form id="register_form" onSubmit={(e) => onRegisterClick(e)}>
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
        <ReCAPTCHA
          onChange={(token) => setToken(token)}
          className="mt-3"
          sitekey="6LdCOv4pAAAAANL1-hNs7D7d5pzjz2xNjbR2QbNj"
        />
      </CardContent>
      <CardFooter className="h-full flex-col  gap-3 justify-between md:flex-row">
        <Button form="register_form" className="w-full md:w-auto">
          Зарегистрироваться
        </Button>
        <div className="block text-sm opacity-50 hover:opacity-90 transition-opacity">
          <NavLink to={ROUTES.LOGIN}>Войти</NavLink>
        </div>
      </CardFooter>
    </Card>
  );
};

export default RegistrationForm;
