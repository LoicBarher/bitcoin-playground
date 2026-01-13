import { type FC, type CSSProperties } from "react";
import { ChapterPrelude, PageNavigation } from "../../components";
import { Illustration } from "../../../Illustration";
import moneyPrinting from "../../../../src/Design/img/money_printing.webp";
import moneyCreationCodeline from "../../../../src/Design/img/money_creation_codeline.jpg";
import moneyConsuming from "../../../../src/Design/img/money_consuming.jpg";

export const MondeBleu117Page: FC = () => {
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
        <h1 style={titleStyle}>En synthèse</h1>
      </header>
      <ChapterPrelude>
        <strong>L'essentiel de cette section </strong>: Le problème n'est pas
        une crise passagère ni de mauvaises décisions isolées, c'est la
        structure même du système monétaire. Une monnaie centralisée, facile à
        émettre et gérée sans véritable contre-pouvoir conduit mécaniquement à
        une érosion durable du pouvoir d'achat et à une mauvaise allocation des
        ressources.
      </ChapterPrelude>
      <section>
        <p style={sectionStyle}>Pour commencer, bravo ! ✨ </p>
        <p style={sectionStyle}>
          Vous avez traversé la partie la plus dense. Prenons maintenant un peu
          de recul. Si l'on assemble les mécanismes que nous venons de voir, une
          image cohérente, et un peu inquiétante, se dessine.
        </p>
        <p style={sectionStyle}>
          Nous avons vu que l'argent utilisé au quotidien (M2) n'est plus une
          ressource rare adossé à un sous-jacent réel, mais{" "}
          <strong>
            une monnaie scripturale créée par les banques commerciales lors de
            l'octroi de crédits
          </strong>
          . Cette création monétaire s'inscrit dans un cadre réglementaire et
          comptable, mais elle demeure structurellement extensible. Autrement
          dit, la monnaie est devenue{" "}
          <strong>intrinsèquement facile à produire</strong>.
          <Illustration
            src={moneyCreationCodeline}
            alt="Création monétaire via une ligne de code"
            width="30%"
            caption="Une simple ligne de code"
          />
        </p>
        <p style={sectionStyle}>
          Lorsque ce système montre des signes de fragilité, un acteur central
          intervient : la Banque Centrale. Sans consultation directe des
          épargnants ou des citoyens, elle dispose du pouvoir d'augmenter la
          monnaie de base (M0) en volumes très importants, notamment via des
          programmes de rachat d'actifs comme le{" "}
          <strong>Quantitative Easing</strong>. Ces interventions permettent de
          maintenir le système financier à court terme,{" "}
          <strong>
            mais au prix d'une dilution progressive de la valeur de la monnaie
            existante, lorsque cette expansion n'est pas compensée par une
            création de richesse réelle équivalente.
          </strong>
          <Illustration
            src={moneyPrinting}
            alt="Brr printing meme"
            width="40%"
            caption="brrr printing machine!"
          />
        </p>
        <p style={sectionStyle}>
          Cette création monétaire n'affecte pas l'ensemble de l'économie de
          manière uniforme. Comme nous l'avons vu avec l'
          <strong>Effet Cantillon</strong>, l'argent nouvellement créé bénéficie
          d'abord aux acteurs les plus proches de sa source, principalement les
          marchés financiers et les détenteurs d'actifs. Il en résulte une
          inflation marquée des prix des actifs, notamment sur la bourse et
          l'immobilier, tandis que l'économie productive et les revenus du
          travail n'évoluent pas au même rythme,{" "}
          <strong>accentuant les écarts de richesse</strong>.
        </p>
        <p style={sectionStyle}>
          A terme, ces déséquilibres se diffusent vers l'économie réelle. Une
          masse monétaire en forte expansion, confrontée à une production de
          biens et de services qui progresse plus lentement, exerce une pression
          inflationniste durable. Il ne s'agit pas simplement d'une hausse
          ponctuelle des prix, mais{" "}
          <strong>
            d'une dégradation progressive de la valeur de la monnaie elle-même
          </strong>
          .
          <Illustration
            src={moneyConsuming}
            alt="Consumation des monnaies fiduciaires"
            width="30%"
            caption="Lentement mais sûrement les monnaies fiduciaires se consumment"
          />
        </p>
        <p style={sectionStyle}>
          <strong>Le constat est donc structurel</strong>. Ces dynamiques ne
          relèvent ni d'un accident de parcours, ni de mauvaises décisions
          isolées. Elles découlent du{" "}
          <strong>
            fonctionnement même d'un système monétaire fondé sur l'expansion du
            crédit et de la dette
          </strong>
          . En cherchant à résoudre des déséquilibres à court terme par une
          création monétaire toujours plus importante, le système tend à
          transférer dans le temps, et vers les épargnants, le coût de ces
          ajustements.
        </p>
        <p style={sectionStyle}>
          Dès lors, un espoir émerge. On pourrait rêver d'un outil différent.
          Une monnaie que personne ne pourrait imprimer à volonté, qui ne
          dépendrait d'aucun émetteur central et qui protégerait "mécaniquement"
          la valeur de notre épargne dans le temps. Une telle solution semble
          être le "Graal" de l'économie. Mais avant de découvrir si cet outil
          existe et comment il fonctionne, nous devons d'abord lever le voile
          sur un mystère que l'on oublie trop souvent : Dès lors, une question
          fondamentale se pose :
        </p>
        <p style={sectionStyle}>
          <strong>Au fond, c'est quoi l'argent ?</strong> Pourquoi un billet
          a-t-il de la valeur alors qu'une feuille d'arbre n'en a pas ? Pourquoi
          l'humanité a-t-elle utilisé de l'or pendant des millénaires avant de
          s'en détourner ? Pour comprendre la solution, il faut d'abord
          redéfinir les bases.
        </p>
        <p style={sectionStyle}>
          Cap vers notre prochaine destination : l'essence même de la monnaie !
          🧐
        </p>
      </section>
      <PageNavigation />
    </div>
  );
};
