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
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import Link from "next/link";

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
      <Card className="w-2/3 bg-primary mb-8">
        <h2
          id="contact"
          className="mt-8 mb-4 justify-center text-white flex items-center"
        >
          <span>Contact</span>{" "}
          <EnvelopeOpenIcon className="ml-4 mt-1 w-8 h-8" />
        </h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-2/3 space-y-4 mx-auto"
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
      <div className="contacts flex items-center w-2/3 gap-4 mb-40">
        <Link
          href="mailto:penna.julien@gmail.com"
          target="_blank"
          className="flex-grow"
        >
          <Card className="bg-violet-600 hover:bg-gray-900 hover:border-white h-20 flex items-center justify-center">
            <img src="mailto.png" alt="mail Julien Penna" className="pl-14 pr-14"/>
          </Card>
        </Link>

        <Link
          href="https://www.linkedin.com/in/dev-web-front-end-julien-penna/"
          target="_blank"
          className="flex-grow"
        >
          <Card className="bg-violet-600 hover:bg-blue-700 hover:border-white flex justify-center h-20 pl-7 pr-7">
            <LinkedinIcon size={32} className="m-6" aria-label="Linkedin Julien Penna" />
          </Card>
        </Link>
        <Link
          href="https://github.com/jujudev7"
          target="_blank"
          className="flex-grow"
        >
          <Card className="bg-violet-600 hover:bg-gray-900 hover:border-white flex justify-center h-20 h-20 pl-7 pr-7">
            <GithubIcon size={32} className="m-6" aria-label="GitHub Julien Penna" />
          </Card>
        </Link>
      </div>
    </Section>
  );
};
