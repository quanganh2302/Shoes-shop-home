"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  username: z.string().min(2).max(50),
});
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import styles from "@/app/main.module.scss";
import LoginImage from "@/components/svg/undraw_login_re_4vu2.svg";
interface Props {
  className?: string;
}

const Login: React.FC<Props> = ({ className }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
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
          <h2 className={cn(styles.h2)}>Log in to Exclusive</h2>
          <p className={cn(styles.subTitle, "mt-6")}>
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
                  <FormLabel>Email</FormLabel>
                  <FormControl className="">
                    <Input
                      className="w-full space-y-0 bg-transparent rounded-none border-x-0 border-t-0 border-b border-b-primary"
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
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl className="">
                    <Input
                      className="w-full space-y-0 bg-transparent rounded-none border-x-0 border-t-0 border-b border-b-primary"
                      placeholder="Password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center justify-between">
              <Button
                className={cn("h-12 ", styles.textButton)}
                size={"lg"}
                type="submit"
              >
                Log in
              </Button>
              <p
                className={cn(
                  styles.underlineTrans3,
                  styles.navLink,
                  " text-destructive"
                )}
              >
                Forget Password?
              </p>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Login;
