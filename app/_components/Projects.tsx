import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Section } from "./Section";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

export const Projects = () => {
  return (
    <Section className="flex">
      <div>
        <h2 className="mb-10">Projects</h2>
        <div className="grid gap-6 grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="mb-4">Ohmyfood 🍴</CardTitle>
              <div className="overflow-hidden rounded-md">
                <img
                  alt="React Rendezvous"
                  loading="lazy"
                  width="250"
                  height="330"
                  decoding="async"
                  data-nimg="1"
                  className="h-auto w-auto object-cover transition-all hover:scale-105 aspect"
                  src="jujudev7.jpg"
                ></img>
              </div>
            </CardHeader>
            <CardContent>
              <p>Ohmyfood! est une entreprise de commande de repas en ligne.</p>
              <p>
                <strong>Mission :</strong> Intégration des maquettes, animations
                CSS + loader.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="ml-auto group see-more">
                Voir le site{" "}
                <ArrowTopRightIcon className="pl-1 h-5 w-5 group-hover:translate-x-2 transition duration-150 ease-in-out" />
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="mb-4">Ohmyfood 🍴</CardTitle>
              <div className="overflow-hidden rounded-md">
                <img
                  alt="React Rendezvous"
                  loading="lazy"
                  width="250"
                  height="330"
                  decoding="async"
                  data-nimg="1"
                  className="h-auto w-auto object-cover transition-all hover:scale-105 aspect"
                  src="jujudev7.jpg"
                ></img>
              </div>
            </CardHeader>
            <CardContent>
              <p>Ohmyfood! est une entreprise de commande de repas en ligne.</p>
              <p>
                <strong>Mission :</strong> Intégration des maquettes, animations
                CSS + loader.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="ml-auto group see-more">
                Voir le site{" "}
                <ArrowTopRightIcon className="pl-1 h-5 w-5 group-hover:translate-x-2 transition duration-150 ease-in-out" />
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="mb-4">Ohmyfood 🍴</CardTitle>
              <div className="overflow-hidden rounded-md">
                <img
                  alt="React Rendezvous"
                  loading="lazy"
                  width="250"
                  height="330"
                  decoding="async"
                  data-nimg="1"
                  className="h-auto w-auto object-cover transition-all hover:scale-105 aspect"
                  src="jujudev7.jpg"
                ></img>
              </div>
            </CardHeader>
            <CardContent>
              <p>Ohmyfood! est une entreprise de commande de repas en ligne.</p>
              <p>
                <strong>Mission :</strong> Intégration des maquettes, animations
                CSS + loader.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="ml-auto group see-more">
                Voir le site{" "}
                <ArrowTopRightIcon className="pl-1 h-5 w-5 group-hover:translate-x-2 transition duration-150 ease-in-out" />
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="mb-4">Ohmyfood 🍴</CardTitle>
              <div className="overflow-hidden rounded-md">
                <img
                  alt="React Rendezvous"
                  loading="lazy"
                  width="250"
                  height="330"
                  decoding="async"
                  data-nimg="1"
                  className="h-auto w-auto object-cover transition-all hover:scale-105 aspect"
                  src="jujudev7.jpg"
                ></img>
              </div>
            </CardHeader>
            <CardContent>
              <p>Ohmyfood! est une entreprise de commande de repas en ligne.</p>
              <p>
                <strong>Mission :</strong> Intégration des maquettes, animations
                CSS + loader.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="ml-auto group see-more">
                Voir le site{" "}
                <ArrowTopRightIcon className="pl-1 h-5 w-5 group-hover:translate-x-2 transition duration-150 ease-in-out" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </Section>
  );
};
