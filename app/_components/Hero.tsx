import { Section } from "./Section";

export const Hero = () => {
  return (
    <Section className="flex mt-10">
      <div className="flex-[2]">
        <h2>Julien Penna</h2>
        <h3>Front-end Developer React JS</h3>
        <div className="description">
        <p >Salut 👋 moi c'est Julien,</p>
        <p>
          Je suis un développeur front-end français, spécialisé en <strong>React.js</strong>.
          Grâce à mes compétences, je peux intégrer vos maquettes et créer des <strong>applications interactives
          et réactives</strong>. 
        </p>
          <p>Doté d’une <strong>forte capacité d'adaptation</strong> et d'un désir constant d'apprentissage, je suis
          prêt à relever de nouveaux défis !</p>
        </div>
      
      </div>
      <div className="flex-1">
        <img
          src="jujudev7.jpg"
          className="w-full h-auto rounded-xl"
          alt="portrait Julien Penna"
        />
      </div>
    </Section>
  );
};
