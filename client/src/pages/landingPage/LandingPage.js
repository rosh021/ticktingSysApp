import React from "react";
import { LoginForm } from "../../components/loginForm/LoginForm";
import { Header } from "../../layout/header/Header";
import { MainLayout } from "../../layout/MainLayout";

export const LandingPage = () => {
  return (
    <MainLayout>
      <div className="d-flex justify-content-center">
        <LoginForm />
      </div>
    </MainLayout>
  );
};
