import { type FC, type CSSProperties } from "react";
import { Callout } from "../../../Design";
import { ChapterPrelude, PageNavigation } from "../../components";
import { Illustration } from "../../../Illustration";
import picsouCar from "../../../../src/Design/img/picsou_car.jpg";
import picsouVilla from "../../../../src/Design/img/picsou_villa.jpg";

export const MondeBleu116Page: FC = () => {
  const pageContainerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    paddingLeft: "5rem",
    paddingRight: "5rem",
  };

  const titleStyle: CSSProperties = {
    fontSize: "2.5rem",
    lineHeight: "2.5rem",
    textAlign: "center",
    fontWeight: 400,
  };

  const sectionStyle: CSSProperties = {
    fontSize: "1rem",
    letterSpacing: "0.05rem",
    lineHeight: 1.625,
  };

  const illustrationsWrapperStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "2rem",
    width: "100%",
  };

  return (
    <div style={pageContainerStyle}>
      <header>
        <h1 style={titleStyle}>L'Inflation</h1>
      </header>
      <ChapterPrelude>
        <strong>L'essentiel de cette section </strong>: L'argent accumulé dans
        les actifs (Bourse, Immobilier) finit inévitablement par "fuir" vers
        l'économie réelle : c'est l'Effet de Richesse. Une masse de monnaie
        excessive se met alors à chasser une quantité limitée de biens. Résultat
        mathématique : les prix du quotidien explosent.
      </ChapterPrelude>
      <section>
        <p style={sectionStyle}>
          Vous pensiez que l'argent resterait sagement enfermé dans les actifs
          patrimoniaux ? Raté ! 😉
        </p>
        <p style={sectionStyle}>
          Tôt ou tard, l'argent brûle les doigts. C'est ce qu'on appelle l'
          <i>Effet de Richesse.</i>
        </p>
        <Callout title="Comment l'argent finit par arriver dans l'économie réelle ?">
          <p>
            Reprenons notre ami <i>M. Balthazar Picsou</i>. Grâce au crédit
            facile et à la hausse des marchés, son portefeuille d'actions a
            doublé de valeur. Il se sent... très riche. 😎
          </p>
          <p>
            Il décide alors de se faire plaisir, et c'est bien normal :<br />-
            il vend quelques actions <br /> - il achète une résidence secondaire
            au bord de la mer <br /> - et il commande une voiture de luxe.
          </p>
          <p>
            Disons-le clairement : Picsou a gagné pas mal d'argent et il se fait{" "}
            <strong>plaisir</strong> 😜
          </p>
          <div style={illustrationsWrapperStyle}>
            <Illustration
              src={picsouVilla}
              alt="Résidence secondaire de Picsou"
              width="30%"
              caption="Picsou devant sa nouvelle résidence secondaire"
            />
            <Illustration
              src={picsouCar}
              alt="Voiture de Picsou"
              width="30%"
              caption="Picsou au volant de sa belle voiture de collection"
            />
          </div>
          <p>
            Et voilà ! L'argent vient de sortir du circuit financier pour entrer
            dans l'économie réelle : le vendeur de la maison et le
            concessionnaire auto reçoivent tous deux l'argent.
          </p>
          <p>
            Ces gens-là vont à leur tour dépenser cet argent au restaurant, au
            supermarché, ou pour faire des travaux.
            <br />
            <strong>Le "ruissellement" commence pour de vrai.</strong>
          </p>
        </Callout>
        <p style={sectionStyle}>
          <strong>OK. L'argent afflue dans l'économie réelle</strong>. Mais je
          suis certain que vous percevez ici qu'il y a un <strong>GROS</strong>{" "}
          problème, n'est-ce pas ? 🤔
        </p>
        <p style={sectionStyle}>
          Et oui ! Les banques ont créé de la nouvelle monnaie en abondance,
          augmentant massivement la quantité d'argent en circulation. Mais
          est-ce que le nombre de baguettes de pain, de litres d'essence ou de
          maisons a explosé aussi vite ? Non ! 😉
        </p>
        <p style={sectionStyle}>
          Et ça, c'est la définition mécanique de l'inflation :{" "}
          <strong>
            si la quantité d'argent en circulation explose, mais que la quantité
            de produits reste à peu près la même, alors les prix finissent
            eux-aussi par exploser.
          </strong>
          Logique non ? 🤓
        </p>
        <p style={sectionStyle}>
          Je crois qu'il est temps de faire une petite synthèse de tout ce que
          l'on a vu jusqu'à présent. Vous allez voir, nous avons couvert
          beaucoup de notions et tout va s'éclairer. Prêt ? 😉
        </p>
      </section>
      <PageNavigation />
    </div>
  );
};
