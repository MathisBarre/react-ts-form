import Centered from "@/components/Centered";
import { SimpleForm } from "@/forms/SimpleForm";
import Link from "next/link";
import React from "react";
import { z } from "zod";

interface SignupPageProps {}

const SignupSchema = z.object({
  email: z.string().email("Enter a real email please.").describe("Email"),
  password: z.string().describe("Password"),
  address: z.string().describe("Address"),
  age: z.number().min(18, "You must be 18 or older to sign up.").describe("Age"),
  acceptCgu: z.boolean().optional().describe("Accepter les CGU"),
  acceptNewsletter: z.boolean().optional().describe("Accepter la newsletter"),
});

const SignupPage = ({}: SignupPageProps) => {
  return (
    <Centered>
      <h1>Signup</h1>

      <Link style={{display: "block", marginBottom: "2rem"}} href={"login"}>Se connecter</Link>

      <SimpleForm
        schema={SignupSchema}
        onSubmit={(values) => {
          alert(JSON.stringify(values));
        }}
        formProps={{
          sendText: "S'inscrire",
        }}
      />
    </Centered>
  );
};

export default SignupPage;
