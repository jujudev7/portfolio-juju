"use client";

import {
  EnvelopeClosedIcon,
  EnvelopeOpenIcon,
  RocketIcon,
} from "@radix-ui/react-icons";
import { Section } from "./Section";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import Image from "next/image";
// import { toast } from "@/components/ui/use-toast";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";

export function InputDemo() {
  return <Input className="bg-white" type="email" placeholder="Email" />;
}

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "* Lastname must be at least 2 characters.",
  }),
  subject: z.string().min(5, {
    message: "* Subject must be at least 5 characters.",
  }),
  message: z.string().min(50, {
    message: "* Message must be at least 50 characters.",
  }),
  email: z.string().email({
    message: "* Invalid email address",
  }),
});

export const ContactEN = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      subject: "",
      message: "",
      email: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // });
  }

  return (
    <Section className="flex flex-col items-center justify-center mt-10">
      <Card className="contact w-2/3 bg-primary mb-8 hover:shadow-[0_0_15px_rgba(124,58,237,1)]">
        <h2
          id="contact"
          className="mt-8 mb-4 text-white flex justify-center items-center h2-hover"
        >
          <span>Contact</span>{" "}
          <EnvelopeOpenIcon className="ml-4 mt-1 w-8 h-8 envelope-open-icon" />
          <EnvelopeClosedIcon className="ml-4 mt-1 w-8 h-8 envelope-closed-icon" />
        </h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-2/3 space-y-4 mx-auto md:w-3/4 lg:w-3/4"
          >
            <div className="flex flex-col md:flex-row md:space-x-4 w-full">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="flex-grow">
                    <FormLabel className="text-lg text-white">Name</FormLabel>
                    <FormControl>
                      <Input
                        className="bg-white"
                        placeholder="John Doe"
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
              className="submit p-6 text-lg bg-white text-primary hover:bg-gray-900 hover:text-white group"
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
          <Card className="mail bg-violet-600 hover:bg-black hover:border-white h-20 flex items-center justify-center">
            <Image
              src="/mailto.png"
              alt="mail Julien Penna"
              width={600}
              height={100}
              className="mailto-img pl-14 pr-14"
            />
          </Card>
        </Link>

        <Link
          href="https://www.linkedin.com/in/dev-web-front-end-julien-penna/"
          target="_blank"
          className="flex-grow"
        >
          <Card className="card-linkedin bg-violet-600 hover:bg-blue-700 hover:border-white flex justify-center h-20 pl-7 pr-7">
            <LinkedinIcon
              size={32}
              className="linkedin-icon m-6"
              aria-label="Linkedin Julien Penna"
            />
          </Card>
        </Link>
        <Link
          href="https://github.com/jujudev7"
          target="_blank"
          className="flex-grow"
        >
          <Card className="card-github bg-violet-600 hover:bg-black hover:border-white flex justify-center h-20 pl-7 pr-7">
            <GithubIcon
              size={32}
              className="github-icon m-6"
              aria-label="GitHub Julien Penna"
            />
          </Card>
        </Link>
      </div>
    </Section>
  );
};
