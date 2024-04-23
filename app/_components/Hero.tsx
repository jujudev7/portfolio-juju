import { Section } from "./Section";

export const Hero = () => {
  return (
    <Section className="heading my-10">
      <div className="flex-1">
        <h1>
          <span className="name">Julien Penna</span>
          <br />
          <span className="job">Front-end Developer React JS</span>
        </h1>
      </div>
      <div className="flex my-10">
        <div className="flex-[2]">
          <p>Salut 👋 moi c'est Julien,</p>
          <p>
            Je suis un développeur front-end français, spécialisé en{" "}
            <strong>React.js</strong>. Grâce à mes compétences, je peux intégrer
            vos maquettes et créer des{" "}
            <strong>applications interactives et réactives</strong>.
          </p>
          <p>
            Doté d’une <strong>forte capacité d'adaptation</strong> et d'un
            désir constant d'apprentissage, je suis prêt à relever de nouveaux
            défis !
          </p>
        </div>
        <div className="flex-1 ml-4">
          <img
            src="jujudev7.jpg"
            className="w-full h-auto rounded-xl"
            alt="portrait Julien Penna"
          />
        </div>
      </div>
    </Section>
  );
};
