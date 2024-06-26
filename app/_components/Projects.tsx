import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { ArrowTopRightIcon, LightningBoltIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { Section } from "./Section";
import { LigthingboltFilledIcon } from "./icons/LightingBoltFilledIcon";

export const Projects = () => {
  return (
    <Section className="projects flex mb-20">
      <div>
        <h2
          id="projects"
          className="mb-10 text-center justify-center flex items-center h2-hover"
        >
          <span>Projets</span>
          <LightningBoltIcon className="ml-2 mt-1 w-8 h-8 lightingbolt-icon" />
          <LigthingboltFilledIcon className="ml-2 mt-1 w-8 h-8 lightingbolt-filled-icon" />
        </h2>
        <div className="cards-grid mx-auto grid gap-8 grid-cols-2">
          <Card className="card hover-project hover:scale-105 hover:bg-violet-100">
            <CardHeader>
              <CardTitle className="mb-4">Fisheye 📸</CardTitle>
              <div className="overflow-hidden rounded-md border-2 border-primary">
                <Link href="https://fisheye.julienpenna.com" target="_blank">
                  <Image
                    alt="Fisheye, le site internet"
                    loading="lazy"
                    width="600"
                    height="400"
                    decoding="async"
                    className="h-auto transition-all scale-101 rounded-none hover:scale-110"
                    src="/fisheye.gif"
                  />
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                <span className="text-primary font-bold">Fisheye</span> est un
                site web qui permet aux photographes indépendants de présenter
                leurs meilleurs travaux via un portfolio.
              </p>
              <p>
                <strong className="strong">Missions :</strong> Créer un site
                accessible pour une plateforme de photographes en Javascript.
              </p>
              <p>
                Récupérer et afficher des données JSON, créer une modale de
                contact, une LightBox pour les médias et gérer les likes.
              </p>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Link href="https://fisheye.julienpenna.com" target="_blank">
                <Button className="ml-auto group hover:bg-gray-900 see-more">
                  Voir le site{" "}
                  <ArrowTopRightIcon className="pl-1 h-5 w-5 group-hover:translate-x-2 transition duration-150 ease-in-out" />
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="card hover-project hover:scale-105 hover:bg-violet-100">
            <CardHeader>
              <CardTitle className="mb-4">GameOn 🕹️</CardTitle>
              <div className="overflow-hidden relative rounded-md border-2 border-primary">
                <Link href="https://gameon.julienpenna.com" target="_blank">
                  <Image
                    alt="GameOn, le site internet"
                    loading="lazy"
                    width="600"
                    height="400"
                    decoding="async"
                    className="h-auto object-cover transition-all rounded-none hover:scale-110"
                    src="/gameon.gif"
                  />
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                <span className="text-primary font-bold">GameOn</span> est une
                entreprise spécialisée dans les conférences et les concours de
                jeux vidéo.
              </p>
              <p>
                <strong className="strong">Missions :</strong> Créer une landing
                page avec Javascript.
              </p>
              <p>
                Réaliser un formulaire et gérer la validation des inputs pour
                garantir que les données saisies par les utilisateurs sont
                correctes.
              </p>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Link href="https://gameon.julienpenna.com" target="_blank">
                <Button className="ml-auto group hover:bg-gray-900 see-more">
                  Voir le site{" "}
                  <ArrowTopRightIcon className="pl-1 h-5 w-5 group-hover:translate-x-2 transition duration-150 ease-in-out" />
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="card hover-project hover:scale-105 hover:bg-violet-100">
            <CardHeader>
              <CardTitle className="mb-4">Ohmyfood 🍽️</CardTitle>
              <div className="overflow-hidden rounded-md border-2 border-primary">
                <Link href="https://ohmyfood.julienpenna.com" target="_blank">
                  <Image
                    alt="Ohmyfood, le site internet"
                    loading="lazy"
                    width="600"
                    height="400"
                    decoding="async"
                    className="h-auto object-cover transition-all rounded-none hover:scale-110"
                    src="/ohmyfood.gif"
                  />
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                <span className="text-primary font-bold">Ohmyfood!</span> est
                une jeune startup qui voudrait s&apos;imposer sur le marché de
                la restauration et la commande de repas en ligne.
              </p>
              <p>
                <strong className="strong">Missions : </strong>Dynamiser des
                pages web avec des animations CSS, utilisation de Sass.
              </p>
              <p>
                Développer un site “mobile first” qui répertorie les menus de
                restaurants gastronomiques.
              </p>
            </CardContent>

            <CardFooter className="flex justify-end">
              <Link href="https://ohmyfood.julienpenna.com" target="_blank">
                <Button className="ml-auto group hover:bg-gray-900 see-more">
                  Voir le site{" "}
                  <ArrowTopRightIcon className="pl-1 h-5 w-5 group-hover:translate-x-2 transition duration-150 ease-in-out" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
          <Card className="card hover-project hover:scale-105 hover:bg-violet-100">
            <CardHeader>
              <CardTitle className="mb-4">Booki 🏨</CardTitle>
              <div className="overflow-hidden rounded-md border-2 border-primary">
                <Link href="https://booki.julienpenna.com" target="_blank">
                  <Image
                    alt="Booki, le site Internet"
                    loading="lazy"
                    width="600"
                    height="400"
                    decoding="async"
                    className="h-auto object-cover transition-all rounded-none hover:scale-110"
                    src="/booki.gif"
                  />
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                <span className="text-primary font-bold">Booki</span> est une
                entreprise qui souhaite développer un site Internet pour
                permette aux usagers de trouver des hébergements et des
                activités dans la ville de leur choix.
              </p>
              <p>
                <strong className="strong">Missions : </strong>Transformer une
                maquette Figma en site web avec HTML & CSS.
              </p>
              <p>Développer une interface responsive.</p>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Link href="https://booki.julienpenna.com" target="_blank">
                <Button className="ml-auto group hover:bg-gray-900 see-more">
                  Voir le site{" "}
                  <ArrowTopRightIcon className="pl-1 h-5 w-5 group-hover:translate-x-2 transition duration-150 ease-in-out" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </Section>
  );
};
