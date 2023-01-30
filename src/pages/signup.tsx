import Centered from "@/components/Centered";
import { SimpleForm } from "@/forms/SimpleForm";
import Link from "next/link";
import React from "react";
import { z } from "zod";

interface SignupPageProps {}

const SignupSchema = z.object({
  email: z.string().email("Enter a real email please."),
  password: z.string(),
  address: z.string(),
  age: z.number().min(18, "You must be 18 or older to sign up."),
  acceptCgu: z.boolean().optional(),
  acceptNewsletter: z.boolean().optional(),
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
        props={{
          email: {
            label: "Email",
          },
          password: {
            label: "Password",
          },
          address: {
            label: "Addresse",
          },
          age: {
            label: "Âge",
          },
          acceptCgu: {
            label: "Accepter les CGU",
          },
          acceptNewsletter: {
            label: "Accepter la newsletter",
          },
        }}
      />
    </Centered>
  );
};

export default SignupPage;
