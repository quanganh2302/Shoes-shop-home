"use client";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { useFormStatus, useFormState } from "react-dom";
// import bcrypt from 'bcrypt';
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import styles from "@/app/main.module.scss";
import textStyle from "@/lib/styles";
import LoginImage from "@/components/svg/undraw_login_re_4vu2.svg";
import Link from "next/link";
import { createUser } from "@/actions/auth/auth-service";

const formSchema = z.object({
  username: z.string().min(2).max(50),
  roleKey: z.string().min(1),
  email: z.string().email({ message: "Please enter a valid email." }).trim(),
  password: z
    .string()
    .min(8, { message: "Be at least 8 characters long" })
    .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
    .regex(/[0-9]/, { message: "Contain at least one number." })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Contain at least one special character.",
    })
    .trim(),
  // .refine(async (e) => {
  //   // Where checkIfEmailIsValid makes a request to the backend
  //   // to see if the email is valid.
  //   return await checkIfEmailIsValid(e),
});

interface Props {
  className?: string;
}

const SignUp: React.FC<Props> = ({ className }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
      roleKey: "R3",
      email: "",
    },
  });

  const { pending } = useFormStatus();
  const [loading, setLoading] = useState<boolean>(false);

  // const hashedPassword = await bcrypt.hash(password, 10)

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    await createUser(data, setLoading);
  };
  return (
    <div
      className={cn(
        "flex items-start justify-center md:my-20 my-12",
        className
      )}
    >
      <div className="w-7/12 sm:block hidden">
        <img src={LoginImage.src} alt="" />
      </div>
      <div className="sm:w-5/12 w-full ">
        <div className="mb-12">
          <h2 className={cn(textStyle.h2)}>Create an account</h2>
          <p className={cn(textStyle.subTitle, "mt-6")}>
            Enter your details below
          </p>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 sm:w-[500px]"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={textStyle.base}>Name</FormLabel>
                  <FormControl className="">
                    <Input
                      className="w-full space-y-0 bg-transparent rounded-none border-x-0 border-t-0 border-b border-b-primary font-futura"
                      placeholder="Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={textStyle.base}>Email</FormLabel>
                  <FormControl className="">
                    <Input
                      className="w-full space-y-0 bg-transparent rounded-none border-x-0 border-t-0 border-b border-b-primary font-futura"
                      placeholder="Email or PhoneNumber"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={textStyle.base}>Password</FormLabel>
                  <FormControl className="">
                    <Input
                      className="w-full space-y-0 bg-transparent rounded-none border-x-0 border-t-0 border-b border-b-primary font-futura"
                      placeholder="Password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              disabled={loading}
              className={cn("w-full h-12 ", textStyle.textButton)}
              size={"lg"}
              type="submit"
            >
              {loading ? "Submitting..." : "Sign up"}
            </Button>
          </form>
        </Form>
        <div className="mt-4 sm:w-[500px] flex flex-row items-center justify-center gap-4">
          <p className={cn(textStyle.base, "text-gray")}>
            Already have account?
          </p>
          <Link
            href={"/login"}
            className={cn(
              styles.underlineTrans,
              textStyle.navLink,
              "text-gray"
            )}
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
