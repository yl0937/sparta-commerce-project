"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSignUpMutation } from "@/mutations/account-mutations";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

import { z } from "zod";

const formSchema = z
  .object({
    email: z.string(),
    password: z.string(),
    passwordConfirm: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords do not match",
    path: ["passwordConfirm"],
  });

const SignUpPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    mode: "onBlur",
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const { mutate } = useSignUpMutation();

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    mutate({
      email: data.email,
      password: data.password,
    });
  };

  return (
    <section className="flex items-center justify-center min-h-screen">
      <Card className="max-w-[420px] px-4 w-full border-0 shadow-none">
        <CardHeader className="items-center p-0 pb-10">
          <CardTitle className="text-4xl font-bold">Register</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col flex-1 justify-stretch items-center gap-6"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="self-stretch">
                    <FormControl>
                      <div className="flex flex-col gap-2">
                        <Label>email</Label>
                        <Input
                          className="rounded-sm border border-[--gray-02] p-3 h-auto"
                          placeholder="email"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="self-stretch rounded-xl">
                    <FormControl>
                      <div className="flex flex-col gap-2">
                        <Label>password</Label>
                        <Input
                          className="rounded-sm border border-[--gray-02] p-3 h-auto"
                          type="password"
                          placeholder="password"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="passwordConfirm"
                render={({ field }) => (
                  <FormItem className="self-stretch rounded-xl">
                    <FormControl>
                      <div className="flex flex-col gap-2">
                        <Label>password confirm</Label>
                        <Input
                          className="rounded-sm border border-[--gray-02] p-3 h-auto"
                          type="password"
                          placeholder="password confirm"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="self-stretch rounded-sm p-3text-lg font-bold h-auto"
              >
                Sign Up
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link className="text-sm underline" href={"/sign-in"}>
            Sign In
          </Link>
        </CardFooter>
      </Card>
    </section>
  );
};

export default SignUpPage;
