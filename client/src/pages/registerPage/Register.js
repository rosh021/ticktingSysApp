import React from "react";
import { RegisterForm } from "../../components/registerForm/RegisterForm";
import { MainLayout } from "../../layout/MainLayout";

export const RegisterPage = () => {
  return (
    <MainLayout>
      <div className="d-flex justify-content-center">
        <RegisterForm />
      </div>
    </MainLayout>
  );
};
