import { type FC, type CSSProperties } from "react";
import { Callout, KeywordHighlight } from "../../../Design";
import { ChapterPrelude, PageNavigation } from "../../components";
import { CreditCreationSimulator } from "./CreditCreationSimulator";

export const MondeBleu111Page: FC = () => {
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

  return (
    <div style={pageContainerStyle}>
      <header>
        <h1 style={titleStyle}>D'où vient la monnaie ?</h1>
      </header>
      <ChapterPrelude>
        <strong>L'essentiel de cette section </strong>: Plus de 95% de la
        monnaie que nous utilisons est créée par les banques commerciales, au
        moment où elles accordent un prêt.
      </ChapterPrelude>
      <section>
        <p style={sectionStyle}>
          Alors, savez-vous d'où vient l'argent ? 🤔
          <br />
          Si vous répondez{" "}
          <i>« de la planche à billets de la banque centrale »</i>
          , alors vous êtes tombés dans le piège. 😉
          <br />
          Lisez attentivement ce qui suit, vous allez être surpris :
          <Callout title={"D'où vient l'argent ?"}>
            Plus de 95% de notre monnaie n'est ni imprimée par l'État ni
            imprimée par les Banques Centrales, mais créée{" "}
            <i>*comme par magie*</i> par les banques commerciales (du style BNP
            Paribas, Caisse d'Épargne, ...) à chaque fois qu'elles prêtent de
            l'argent. 😲
            <p>
              Dès qu'elles accordent un prêt, par une simple écriture comptable
              elles créent de l'argent à partir de rien.
            </p>
            <p>
              Ces banques disposent donc en quelque sorte d'un pouvoir magique.
              ✨
            </p>
          </Callout>
        </p>
        <p style={sectionStyle}>
          Vous voulez le voir de vos propres yeux ? Parfait. Passons à la
          pratique.
          <br />
          Vous êtes maintenant un banquier, toutes mes félicitations ! (ou pas
          😉)
        </p>
        <Callout
          icon={<span>🏡</span>}
          title="Illustration concrète — M. Nicolas QuiPaye veut acheter une maison"
        >
          <p>
            Nicolas QuiPaye a un super projet : être propriétaire de sa
            résidence principale. Pour cela, il va faire une demande de prêt à
            sa banque pour un montant de 200 000 €.
          </p>
          <p>
            Et c'est là que vous entrez en scène : vous êtes son banquier, vous
            avez le pouvoir d'accomplir son rêve en lui accordant ce prêt.
          </p>
        </Callout>
        <p style={sectionStyle}>
          Mais avant de prendre les commandes, faisons un petit rappel de
          vocabulaire en comptabilité. 🤓
        </p>
        <Callout title="Comptabilité — Quelques définitions essentielles">
          <p>
            <KeywordHighlight>ACTIF</KeywordHighlight>{" "}
            <strong>
              → C'est tout ce que vous possédez et qui a de la valeur.
            </strong>{" "}
            <br />
            <i>Votre épargne, votre maison, votre téléphone...</i>
          </p>
          <p>
            <KeywordHighlight>PASSIF</KeywordHighlight>{" "}
            <strong>
              → C'est la provenance de l'argent qui a payé tout ce que vous
              possédez.
            </strong>
            <br />
            <i>
              L'argent peut venir de deux endroits :<br />- Des autres : c'est
              une <u>dette</u>. <br />- De vous-même : c'est un{" "}
              <u>capital propre</u>.
            </i>
          </p>
          <p>
            <KeywordHighlight>CRÉANCE</KeywordHighlight>{" "}
            <strong>
              → C'est une promesse officielle que quelqu'un va vous rendre
              l'argent qu'il vous doit.
            </strong>
          </p>
        </Callout>
        <p style={sectionStyle}>
          C'est bon ? Parfait ! 😊 <br /> Regardez le bilan de la banque de M.
          QuiPaye : elle a déjà octroyé des prêts à des clients pour une valeur
          de 1 000 000 €. <br />
          Maintenant, il est temps d'accorder le prêt à votre client. 👇
        </p>
        <CreditCreationSimulator />
        <p style={sectionStyle}>
          Si tout ceci est clair pour vous, je vous propose de passer au second
          aspect fondamental de notre économie :{" "}
          <strong>les deux niveaux de monnaies</strong>.
        </p>
      </section>
      <PageNavigation />
    </div>
  );
};
