import { type FC, type CSSProperties } from "react";
import { Callout, IdentityCard } from "../../../Design";
import { ChapterPrelude, PageNavigation } from "../../components";
import gyroGearlooseImg from "../../../../src/Design/img/Gyro_Gearloose.png";
import picsouImg from "../../../../src/Design/img/picsou.webp";
import cantillonEffectImg from "../../../../src/Design/img/Cantillon_Effect.jpg";
import { Quiz, quizDataProfileChoice } from "../../../Quizz";
import { useMondeBleu115Page } from "../hooks";
import { Illustration } from "../../../Illustration";

export const MondeBleu115Page: FC = () => {
  const { isQuizSolved, setIsQuizSolved } = useMondeBleu115Page();
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

  const cardsContainerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "3rem",
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: "2rem",
    marginBottom: "4rem",
  };

  const cardWrapperStyle: CSSProperties = {
    flex: "1 1 300px",
    maxWidth: "25rem",
    minWidth: "17.5rem",
  };

  return (
    <div style={pageContainerStyle}>
      <header>
        <h1 style={titleStyle}>L'Effet Cantillon</h1>
      </header>
      <ChapterPrelude>
        <strong>L'essentiel de cette section </strong>: Débordant de liquidités
        (M0), les banques commerciales ouvrent les vannes du crédit (M2). Mais
        pour éviter les risques, elles dirigent cet argent vers les actifs
        patrimoniaux plutôt que vers l'économie productive. L'argent profite
        donc en premier à ceux qui possèdent déjà du capital : c'est l'Effet
        Cantillon.
      </ChapterPrelude>
      <section>
        <p style={sectionStyle}>
          Les marges sont écrasées, mais les coffres débordent de M0. L'équation
          de survie pour la banque commerciale est simple :{" "}
          <strong>faire du volume avec zéro risque</strong>.
        </p>
        <p style={sectionStyle}>
          C'est l'heure du tri sélectif : en tant que banquier, voici vos deux
          prochains rendez-vous.
        </p>
        <Callout title="Les deux types de clients : l'entrepreneur et l'Investisseur">
          <p>
            Je vous présente deux nouveaux personnages :{" "}
            <i>M. Balthazar Picsou</i> et <i>M. Géo Trouve-Tout</i>. 😉
          </p>
          <div style={cardsContainerStyle}>
            <div style={cardWrapperStyle}>
              <IdentityCard
                profilePicture={
                  <img
                    src={gyroGearlooseImg}
                    alt="M. Géo Trouvetout"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                }
                name="Géo Trouve-Tout"
                profile="L'Entrepreneur"
                project="Créer une machine révolutionnaire pour les boulangers 🥖"
                guarantees="Rien d'autre que sa bonne volonté 😅"
              />
            </div>
            <div style={cardWrapperStyle}>
              <IdentityCard
                profilePicture={
                  <img
                    src={picsouImg}
                    alt="Picsou"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                }
                name="M. Balthazar Picsou"
                profile="L'Investisseur"
                project="Diversifier son portefeuille d'actions (Apple, Tesla et NVidia)"
                guarantees="Son portefeuille d'actions existant est mis en gage"
              />
            </div>
          </div>
        </Callout>

        <Quiz
          {...quizDataProfileChoice}
          onCorrectAnswer={() => setIsQuizSolved(true)}
        />

        {isQuizSolved && (
          <>
            <p style={sectionStyle}>
              Le résultat des courses : L'Argent va à l'Argent 💸{" "}
            </p>
            <p style={sectionStyle}>
              Vous venez de comprendre la mécanique implacable de l'
              <i>Effet Cantillon</i>, théorisé par l'économiste{" "}
              <i>Richard Cantillon</i> : l'argent nouvellement créé (M2) fuit
              l'économie réelle (trop risquée) pour aller gonfler la bulle des
              actifs. Les "Picsou" s'enrichissent en dormant 😴 (car la demande
              pour les actifs monte). Les "Géo" restent sur la touche bench 😕.
            </p>
            <Illustration
              src={cantillonEffectImg}
              alt="Cantillon Effect"
              width="40%"
              caption="Le ruissellement de l'argent : Le robinet monétaire remplit d'abord les investisseurs (les 'Picsou') avant de ruisseler... jusque dans notre caddie"
            />
            <p style={sectionStyle}>
              {" "}
              Mais quand les Picsou se sentent riches, ils finissent par
              dépenser leurs gains... et c'est là que les problèmes arrivent
              pour le caddie de courses. Qui vient de prononcer le mot{" "}
              <i>inflation</i> 😅 ?
            </p>
          </>
        )}
      </section>
      <PageNavigation />
    </div>
  );
};
