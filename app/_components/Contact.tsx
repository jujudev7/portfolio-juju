"use client";
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
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  EnvelopeClosedIcon,
  EnvelopeOpenIcon,
  RocketIcon,
} from "@radix-ui/react-icons";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { Section } from "./Section";

// Schéma de validation du formulaire avec Zod
const FormSchema = z.object({
  name: z.string().min(2, {
    message: "* Votre nom doit contenir au moins 2 caractères.",
  }),
  subject: z.string().min(5, {
    message: "* Le sujet doit contenir au moins 5 caractères.",
  }),
  message: z.string().min(50, {
    message: "* Votre message doit contenir au moins 50 caractères.",
  }),
  email: z.string().email({
    message: "* Adresse email invalide !",
  }),
});

export const Contact = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      subject: "",
      message: "",
      email: "",
    },
  });

  // Fonction de soumission du formulaire
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    console.log("API URL ENV:", process.env.NEXT_PUBLIC_API_URL);

    try {
      console.log("Soumission du formulaire en cours");
      // Appel de l'API avec les données du formulaire
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/submit-form`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        setSubmitStatus("Formulaire soumis avec succès");
        console.log("Données soumises :", data);
        form.reset();
      } else {
        setSubmitStatus("Erreur lors de la soumission");
        console.log("Erreur lors de la soumission !");
      }
    } catch (error) {
      setSubmitStatus("Erreur lors de l'appel à l'API");
      console.log("Erreur lors de l'appel à l'API :", error);
    }
  };

  return (
    <Section className="section-contact flex flex-col items-center justify-center mt-10">
      <Card className="contact w-2/3 bg-primary mb-8 hover:shadow-[0_0_15px_rgba(124,58,237,1)]">
        <h2
          id="contact"
          className="mt-8 mb-4 text-white flex justify-center items-center h2-hover"
        >
          <span>Contact</span>{" "}
          <EnvelopeOpenIcon className="ml-4 mt-1 w-8 h-8 envelope-open-icon" />
          <EnvelopeClosedIcon className="ml-4 mt-1 w-8 h-8 envelope-closed-icon" />
        </h2>

        {/* Utilisation du hook form pour gérer le formulaire */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)} // Utiliser handleSubmit
            className="w-2/3 space-y-4 mx-auto md:w-3/4 lg:w-3/4"
          >
            <div className="flex flex-col md:flex-row md:space-x-4 w-full">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="flex-grow">
                    <FormLabel className="text-lg text-white">Nom</FormLabel>
                    <FormControl>
                      <Input
                        className="bg-white"
                        placeholder="Martin Dupont"
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
                  <FormLabel className="text-lg text-white">Sujet</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-white"
                      placeholder="Sujet..."
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
                      placeholder="Mon message..."
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
              Envoyer
              <RocketIcon className="ml-3 h-4 w-4 mt-1 group-hover:translate-x-2 group-hover:-translate-y-2" />
            </Button>
          </form>
        </Form>
      </Card>

      <div className="contacts flex items-center w-2/3 gap-4 mb-40">
        <Link
          href="mailto:penna.julien@gmail.com"
          target="_blank"
          className="email-link flex-grow"
        >
          <Card className="mail bg-violet-600 hover:bg-black hover:border-white h-20 flex items-center justify-center">
            <Image
              src="/mailto.png"
              alt="mail Julien Penna"
              width={600}
              height={100}
              className="mailto-img w-50 pl-8 pr-8"
            />
          </Card>
        </Link>
        <Link
          href="https://www.linkedin.com/in/dev-web-front-end-julien-penna/"
          target="_blank"
          className="linkedin-link flex-grow"
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
          className="github-link flex-grow"
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
