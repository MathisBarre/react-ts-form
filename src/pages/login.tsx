import Centered from "@/components/Centered";
import { SimpleForm } from "@/forms/SimpleForm";
import Link from "next/link";
import React from "react";
import { z } from "zod";

interface LoginPageProps {}

const LoginSchema = z.object({
  email: z.string().email("Enter a real email please.").describe("Email"),
  password: z.string().describe("Password"),
});

const LoginPage = ({}: LoginPageProps) => {
  return (
    <Centered>
      <h1>Login</h1>

      <Link style={{ display: "block", marginBottom: "2rem" }} href={"signup"}>
        S&apos;inscrire
      </Link>

      <SimpleForm
        schema={LoginSchema}
        onSubmit={(values) => {
          alert(JSON.stringify(values));
        }}
        formProps={{
          sendText: "Se connecter",
        }}
      />
    </Centered>
  );
};

export default LoginPage;
