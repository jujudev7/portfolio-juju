"use client";

import { Section } from "./Section";
import { EnvelopeOpenIcon, RocketIcon } from "@radix-ui/react-icons";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { toast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

export function InputDemo() {
  return <Input className="bg-white" type="email" placeholder="Email" />;
}

const FormSchema = z.object({
  firstname: z.string().min(2, {
    message: "* Firstname must be at least 2 characters.",
  }),
  lastname: z.string().min(2, {
    message: "* Lastname must be at least 2 characters.",
  }),
  subject: z.string().min(5, {
    message: "* Lastname must be at least 5 characters.",
  }),
  message: z.string().min(50, {
    message: "* Lastname must be at least 50 characters.",
  }),
  email: z.string().email({
    message: "* Invalid email address",
  }),
});

export const ContactEN = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      subject: "",
      message: "",
      email: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Section className="flex flex-col items-center justify-center mt-10">
      <Card className="w-2/3 mb-10 bg-primary mb-40">
        <h2 id="contact" className="m-8 justify-center text-white flex items-center">
          <span>Contact</span>{" "}
          <EnvelopeOpenIcon className="ml-4 mt-1 w-8 h-8" />
        </h2>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-2/3 space-y-6 mx-auto"
          >
            <div className="flex flex-col md:flex-row md:space-x-4 w-full">
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem className="flex-grow">
                    <FormLabel className="text-lg text-white">
                      Firstname
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="bg-white"
                        placeholder="John"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem className="flex-grow">
                    <FormLabel className="text-lg text-white">
                      Lastname
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="bg-white"
                        placeholder="Doe"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg text-white">Email</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-white"
                      placeholder="blabla.blabla@blabla.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg text-white">Subject</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-white"
                      placeholder="Subject..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg text-white">Message</FormLabel>
                  <FormControl>
                    <Textarea
                      className="min-h-[140px] bg-white"
                      placeholder="My message..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="p-6 text-lg bg-white text-primary hover:bg-gray-900 hover:text-white group submit"
            >
              Submit
              <RocketIcon className="ml-3 h-4 w-4 mt-1 group-hover:translate-x-2 group-hover:-translate-y-2" />
            </Button>
          </form>
        </Form>
      </Card>
    </Section>
  );
};
