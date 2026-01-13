import { type FC, type CSSProperties } from "react";
import { Callout, KeywordHighlight } from "../../../Design";
import { ChapterPrelude, PageNavigation } from "../../components";
import { CompensationSimulator } from "./CompensationSimulator";

export const MondeBleu112Page: FC = () => {
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
        <h1 style={titleStyle}>Les deux niveaux de monnaies</h1>
      </header>
      <ChapterPrelude>
        <strong>L'essentiel de cette section </strong>: Seule la monnaie des
        Banques Commerciales (appelée M2) circule dans l'économie. Pour
        finaliser les transactions, les banques commerciales compensent leurs
        dettes reciproques en se payant mutuellement avec la monnaie de Banque
        Centrale (appelée M0).
      </ChapterPrelude>
      <section>
        <p style={sectionStyle}>
          <i>Nicolas QuiPaye</i> est content puisqu'il a reçu 200 000 €, prêtés
          par sa banque pour l'achat d'une résidence principale. <br />
          Cet argent ne va pas rester très longtemps sur le compte de Nicolas :
          il va payer la vendeuse de la maison, <i>Mme Michu</i>. Et que se
          passe-t-il si le compte de <i>Mme Michu</i> est dans une autre banque
          ? 🤔
        </p>
        <p style={sectionStyle}>
          C'est là qu'intervient le mécanisme de{" "}
          <strong>compensation interbancaire</strong>. Attendez, ne partez pas !
          Je vais tout vous expliquer, de manière très simple et concrète ! 😉
        </p>
        <Callout
          title={
            "Les Deux Types de monnaie : Celle que l'on utilise et celle réservée aux Banques"
          }
        >
          <p>
            Avant d'aller plus loin, il faut comprendre qu'il existe deux types
            d'argent qui ne se mélangent jamais :
          </p>
          <p>
            <KeywordHighlight>Monnaie M2</KeywordHighlight>{" "}
            <strong>
              → C'est l'argent essentiellement créé par les banques commerciales
              et qui circule dans l'économie.
            </strong>
            <br />
            <i>
              Quand on paie nos courses, notre essence, notre shopping ou encore
              quand on achète quelques cryptos parce qu'on ne sait jamais, ...
            </i>{" "}
            
          </p>
          <p>
            <KeywordHighlight>Monnaie M0</KeywordHighlight>{" "}
            <strong>
              → C'est la monnaie émise par la Banque Centrale et réservée aux
              banques commerciales, afin qu'elles règlent leurs dettes mutuelles
              entre elles.
            </strong>
            <br />
            <i>
              Nous verrons juste après comment elles utilisent cet argent M0
              pour régler leurs dettes nettes issues de toutes les transactions
              M2 de la journée.
            </i>
          </p>
        </Callout>
        <p style={sectionStyle}>
          Imaginez maintenant des millions de virements en monnaie M2 chaque
          jour entre les banques.{" "}
        </p>
        <p style={sectionStyle}>
          A fréquence régulière (par exemple, en fin de journée), les banques
          font le total de ce qu'elles se doivent mutuellement à cause de tous
          ces virements. Elles ne se paient ensuite que la différence nette (le
          solde) en utilisant l'argent M0. <br />
          <strong>C'est ça, la compensation interbancaire</strong>. 😊
        </p>
        <p style={sectionStyle}>
          Cela vous parait abstrait ? Très bien, passons une fois de plus à la
          pratique ! 👇
        </p>
        <Callout
          icon={<span>🏡</span>}
          title="Illustration concrète — Le mécanisme de compensation pour la transaction entre M. QuiPaye et Mme Michu"
        >
          <p>
            Revenons à nos deux protagonistes <i>M. Nicolas QuiPaye</i> et{" "}
            <i>Mme Michu</i>. <br />
            Ca y est, Nicolas fait le virement de 200 000 € sur le compte
            bancaire de Mme Michu. Si vous avez bien suivi, cette transaction
            correspond à la monnaie M2. Parfait. 😊
          </p>
          <p>
            On arrive en fin de journée, c'est l'heure des comptes : la banque
            de Nicolas doit 200 000 € à la banque de Mme Michu. Quelle monnaie
            va être utilisée ? Bravo ! La monnaie M0. 😊
          </p>
        </Callout>
        <p style={sectionStyle}>
          Maintenant, observons le bilan de la banque de <i>M. QuiPaye</i> juste
          après son virement à Mme Michu. Notez la dette de 200 000 € en M0 au
          passif. Cliquez ci-dessous pour voir comment la banque utilise ses
          réserves M0 pour solder cette dette lors de la compensation. 👇
        </p>
        <CompensationSimulator />
      </section>
      <PageNavigation />
    </div>
  );
};
