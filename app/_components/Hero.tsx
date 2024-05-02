import { Section } from "./Section";
import Image from "next/image";

export const Hero = () => {
  return (
    <Section className="heading my-10">
      <div id="about" className="flex-1">
        <h1>
          <span className="name">Julien Penna</span>
          <br />
          <i>
            <span className="job">Front-end Developer React JS</span>
          </i>
        </h1>
      </div>
      <div className="flex my-10">
        <div className="flex-[2]">
          <p>Salut 👋 moi c&apos;est Julien,</p>
          <p>
            Je suis un développeur front-end français, spécialisé en{" "}
            <strong>React.js</strong>. Grâce à mes compétences, je peux intégrer
            vos maquettes et créer des{" "}
            <strong>applications interactives et réactives</strong>.
          </p>
          <p>
            Doté d&apos;une <strong>forte capacité d&apos;adaptation</strong> et d&apos;un
            désir constant d&apos;apprentissage, je suis prêt à relever de nouveaux
            défis !
          </p>
        </div>
        <div className="flex-1 ml-4">
          <div
            className="flip-container"
          >
            <div className="flipper">
              <div className="front">
                <Image
                  src="/jujudev7.jpg"
                  width={600} height={400}
                  className="w-full h-auto rounded-xl"
                  alt="portrait Julien Penna"
                />
              </div>
              <div className="back">
                <Image src="/yo.png" alt="Image 2" width={600} height={400} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
