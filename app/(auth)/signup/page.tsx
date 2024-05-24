"use client";
import { signUp } from "@/app/lib/action";
import CustomInput from "@/components/ui/CustomInput";
import FormBtn, { LinkBtn } from "@/components/ui/FormBtn";
import Link from "next/link";
import { useFormState } from "react-dom";

type Props = {};

const page = (props: Props) => {
  const [state, formAction] = useFormState(signUp, { success: false });

  return (
    <form
      className="max-w-sm mx-auto flex items-center flex-col justify-center h-screen"
      action={formAction}
    >
      <CustomInput
        name="name"
        placeholder="Mg Mg"
        type="text"
        label="Name"
        error={state.error?.name}
      />

      <CustomInput
        name="email"
        placeholder="mgmg@gmail.com"
        type="email"
        label="Email"
        error={state.error?.email}
      />
      {/* <FormError error={state.error?.email} /> */}
      <CustomInput
        name="password"
        placeholder="******"
        type="password"
        label="Password"
        error={state.error?.password}
      />
      <FormBtn />
      <LinkBtn href="/signin" text="Already have an account" />
    </form>
  );
};

export default page;
