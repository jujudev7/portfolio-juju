import { Section } from "./Section";
import {
  BookmarkFilledIcon,
  BookmarkIcon,
  CheckCircledIcon,
} from "@radix-ui/react-icons";

export const Certifs = () => {
  // Liste de certifications
  const certifications = [
    { id: 1, name: "Créez des pages web dynamiques avec JavaScript" },
    { id: 2, name: "Apprenez à programmer avec JavaScript" },
    { id: 3, name: "Découvrez le fonctionnement des algorithmes" },
    { id: 4, name: "Créez des animations CSS modernes" },
    { id: 5, name: "Concevez un contenu web accessible" },
    { id: 6, name: "Créez votre site web avec HTML5 et CSS3" },
    { id: 7, name: "Gérez du code avec Git et GitHub" },
  ];

  return (
    <Section className="certifs flex flex-col items-center justify-center mt-10 mb-20">
      <h2
        id="certifications"
        className="pb-4 flex justify-center items-center h2-hover mx-auto"
      >
        <span className="oc text-right mr-0">Mes Certifications OpenClassrooms</span>
        {/* <div className="certif-icon text-left"> */}
          <BookmarkIcon className="w-8 h-8 bookmark-icon" />
          <BookmarkFilledIcon className="w-8 h-8 bookmark-filled-icon" />
        {/* </div> */}
      </h2>

      <ul className="space-y-2">
        {certifications.map((certification) => (
          <li
            key={certification.id}
            className="flex items-center p-2 text-lg rounded-lg hover:bg-green-200"
          >
            <span className="mr-2 pr-2">{certification.name}</span>
            <CheckCircledIcon className="h-5 w-5 text-green-500" />
          </li>
        ))}
      </ul>
    </Section>
  );
};
