import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Section } from "./Section";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowTopRightIcon, LightningBoltIcon } from "@radix-ui/react-icons";

export const Projects = () => {
  return (
    <Section className="flex mb-20">
      <div>
        <h2 id="projects" className="mb-10 text-center justify-center flex items-center">
          <span>Projects</span>
          <LightningBoltIcon className="ml-4 mt-1 w-8 h-8" /></h2>
        <div className="grid gap-6 grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="mb-4">LesPetitsPlats 👨‍🍳</CardTitle>
              <div className="overflow-hidden rounded-md border-2 border-primary">
                <img
                  alt="React Rendezvous"
                  loading="lazy"
                  width="250"
                  height="330"
                  decoding="async"
                  data-nimg="1"
                  className="h-auto w-auto object-cover transition-all hover:scale-110"
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
              <Button className="ml-auto group hover:bg-gray-900 see-more">
                Voir le site{" "}
                <ArrowTopRightIcon className="pl-1 h-5 w-5 group-hover:translate-x-2 transition duration-150 ease-in-out" />
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="mb-4">Fisheye 📸</CardTitle>
              <div className="overflow-hidden rounded-md border-2 border-primary">
                <img
                  alt="React Rendezvous"
                  loading="lazy"
                  width="250"
                  height="330"
                  decoding="async"
                  data-nimg="1"
                  className="h-auto w-auto object-cover transition-all hover:scale-110"
                  src="fisheye.gif"
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
              <Button className="ml-auto group hover:bg-gray-900 see-more">
                Voir le site{" "}
                <ArrowTopRightIcon className="pl-1 h-5 w-5 group-hover:translate-x-2 transition duration-150 ease-in-out" />
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="mb-4">GameOn 🕹️</CardTitle>
              <div className="overflow-hidden relative rounded-md border-2 border-primary">
                <img
                  alt="React Rendezvous"
                  loading="lazy"
                  width="250"
                  height="330"
                  decoding="async"
                  data-nimg="1"
                  className="h-auto w-auto object-cover transition-all hover:scale-110"
                  src="gameon.gif"
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
              <Button className="ml-auto group hover:bg-gray-900 see-more">
                Voir le site{" "}
                <ArrowTopRightIcon className="pl-1 h-5 w-5 group-hover:translate-x-2 transition duration-150 ease-in-out" />
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="mb-4">Ohmyfood 🍽️</CardTitle>
              <div className="overflow-hidden rounded-md border-2 border-primary">
                <img
                  alt="React Rendezvous"
                  loading="lazy"
                  width="250"
                  height="330"
                  decoding="async"
                  data-nimg="1"
                  className="w-auto object-cover transition-all hover:scale-110"
                  src="ohmyfood.gif"
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
              <Button className="ml-auto group hover:bg-gray-900 see-more">
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
