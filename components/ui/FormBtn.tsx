"use client";
import { useFormStatus } from "react-dom";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import Link from "next/link";
const FormBtn = ({ className }: { className?: string }) => {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <p>Loading...</p>
      ) : (
        <Button
          className={cn(`text-start text-base self-start w-full`, className)}
          type="submit"
        >
          Submit
        </Button>
      )}
    </>
  );
};
export default FormBtn;

export const LinkBtn = ({ href, text }: { href: string; text: string }) => {
  return (
    <Link
      href={href}
      className="text-zinc-700 underline underline-offset-3 font-medium text-base text-start w-full mt-4"
    >
      {text}
    </Link>
  );
};
