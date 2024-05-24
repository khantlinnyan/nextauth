"use client";
import { signInAuth } from "@/app/lib/action";
import CustomInput from "@/components/ui/CustomInput";
import FormBtn, { LinkBtn } from "@/components/ui/FormBtn";
import React from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner";
type Props = {};

const page = (props: Props) => {
  const [state, formAction] = useFormState(signInAuth, { success: false });
  return (
    <form
      className="max-w-sm mx-auto flex items-center flex-col justify-center h-screen"
      action={formAction}
    >
      <CustomInput
        name="email"
        placeholder="mgmg@gmail.com"
        type="email"
        label="Email"
        error={state?.error?.email}
      />
      <CustomInput
        name="password"
        placeholder="******"
        type="password"
        label="Password"
        error={state?.error?.password}
      />

      <FormBtn />
      <LinkBtn href="/signup" text="Create an account" />
    </form>
  );
};

export default page;
