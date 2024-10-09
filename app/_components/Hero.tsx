import Image from "next/image";
import { Section } from "./Section";

export const Hero = () => {
  return (
    <Section className="heading my-10">
      <div id="about" className="flex-1">
        <h1 className="text-center">
          <span className="name">Julien Penna</span>
          <br />
          <i>
            <span className="job">Développeur Front-end React JS</span>
          </i>
        </h1>
      </div>
      <div className="card-juju flex">
        <div className="flex-[2] pl-4">
          <p>Salut 👋 moi c&apos;est Julien,</p>
          <p>
            Je suis un développeur front-end français, spécialisé en{" "}
            <strong className="strong">React.js</strong>. Grâce à mes
            compétences, je peux intégrer vos maquettes et créer des{" "}
            <strong className="strong">
              applications interactives et réactives
            </strong>
            .
          </p>
          <p>
            Doté d&apos;une{" "}
            <strong className="strong">forte capacité d&apos;adaptation</strong>{" "}
            et d&apos;un désir constant d&apos;apprentissage, je suis prêt à
            relever de nouveaux défis !
          </p>
        </div>
        <div className="right-div-about flex-1">
          <div className="photo-container rounded-xl">
            <div className="back">
              <p>
                Basé en <span className="exergue">région parisienne</span>,
                j&apos;ai vécu quelque temps à Barcelone.
              </p>
              <p>
                Je suis beaucoup le sport, surtout le{" "}
                <span className="exergue">foot</span>. Supporter du PSG, bien
                avant l&apos;arrivée des Qataris.
              </p>
              <p>
                Je fais près de <span className="exergue">2 mètres</span>.
              </p>
              <p>
                J&apos;aime <span className="exergue">l&apos;humour</span>, la
                raclette, la pâte à tartiner...
              </p>
            </div>
            <div className="front">
              <div className="image">
                <Image
                  src="/jujudev7.jpg"
                  width={360}
                  height={240}
                  alt="portrait Julien Penna"
                  className="photo-juju"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
