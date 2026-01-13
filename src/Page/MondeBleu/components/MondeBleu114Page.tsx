import { type FC, type CSSProperties } from "react";
import { Callout } from "../../../Design";
import { ChapterPrelude, PageNavigation } from "../../components";
import { QESimulator } from "./QESimulator";
import { YieldCurveSimulator } from "./YieldCurveSimulator";

export const MondeBleu114Page: FC = () => {
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
        <h1 style={titleStyle}>Le moteur cassé</h1>
      </header>
      <ChapterPrelude>
        <strong>L'essentiel de cette section </strong>: Le Quantitative Easing
        écrase les taux d'intérêts, ce qui "casse le moteur" des banques en
        détruisant leur rentabilité et les forçant ainsi à changer de stratégie
        en délaissant l'économie réelle.
      </ChapterPrelude>
      <section>
        <p style={sectionStyle}>
          Jusqu'ici, la Banque Centrale a sauvé les banques commerciales en leur
          injectant de la M0. Le problème c'est qu'en faisant ça,
          <strong> elle a enraillé le moteur.</strong>
        </p>
        <p style={sectionStyle}>
          Pour commencer, il faut savoir comment une banque gagne de l'argent.
        </p>
        <Callout title="Comment une banque gagne t-elle de l'argent ?">
          <p>
            C'est très simple : <br />- Elle <i>emprunte</i> de l'argent à court
            terme, à un taux généralement très bas (pratiquement à 0%) <br />-
            Elle <i>prête</i> ensuite à long terme, à un taux généralement bien
            plus élevé.
          </p>
          <p>
            <strong>
              Son profit, c'est l'écart entre le taux long et le taux court
            </strong>
            .
          </p>
          <p>
            <u>Exemple</u> : La banque de <i>M. Nicolas QuiPaye</i> lui a
            accordé un prêt de 200 000€ avec un taux d'intérêt de 3% sur 20 ans,
            une somme que cette même banque a obtenu à un taux extrêmement bas
            voire quasi-nul ! <br /> → C'est cette marge qui la rémunère pour
            prendre des risques et ainsi financer l'économie. 😉
          </p>
        </Callout>
        <p style={sectionStyle}>
          En achetant massivement des obligations, la Banque Centrale fait
          mécaniquement monter leur prix (la loi de{" "}
          <i>l'offre et de la demande</i>). Et cette montée du prix des
          obligations fait simultanément baisser leur taux d'intérêt.
        </p>
        <p style={sectionStyle}>
          Vous voulez une illustration pour mieux comprendre ? OK c'est parti !
        </p>
        <p style={sectionStyle}>
          Vous êtes maintenant une banque centrale et vous allez réaliser une
          opération de QE. Observez les effets que cela provoque sur les
          obligations. 👇
          <QESimulator />
        </p>
        <p style={sectionStyle}>
          Le QE fait donc s'effondrer les taux d'intérêt à long terme. Et comme
          ce taux d'État (le prêt jugé le plus sûr) sert de référence, il met
          une pression à la baisse sur tous les autres types de prêts
          (immobiliers, entreprises, etc.).
        </p>
        <p style={sectionStyle}>
          Alors vous me répondrez sans doute :{" "}
          <i>« OK, super... et alors ? C'est grave, Docteur ? »</i> 🧐, je vous
          réponds tout de suite : « Oui, car ça casse le modèle de rémunération
          des banques commerciales ». 😨
        </p>
        <p style={sectionStyle}>
          Rappelez-vous, une banque commerciale se rémunère sur l'écart entre
          les taux à long terme (ce qu'elle prête) et les taux à court terme (ce
          qu'elle emprunte).{" "}
        </p>
        <p style={{ ...sectionStyle, textAlign: "center" }}>
          Expérimentez ! Faites varier les taux à long terme sur le graphique
          ci-dessous afin de mieux saisir les conséquences de taux trop bas 👇
          <YieldCurveSimulator />
        </p>
        <p style={sectionStyle}>
          Le constat est sans appel : avec des taux si bas, le financement de l'
          <i>Économie Productive</i> (créer de la valeur, lancer des projets en
          finançant les entrepreneurs, embaucher) n'est plus rentable pour les
          banques. Le risque est bien trop grand pour une marge si petite.
        </p>
        <p style={sectionStyle}>
          Mais les banques doivent survivre ! Elles vont donc opérer un virage
          stratégique majeur. Elles vont délaisser la production pour se
          concentrer massivement sur le financement de l'
          <i>Économie Patrimoniale</i>.
        </p>
        <p style={sectionStyle}>
          Au lieu de prêter à ceux qui <i>font</i>, elles vont prêter à ceux qui{" "}
          <i>ont</i>. C'est ce que nous allons voir dans la suite !
        </p>
      </section>
      <PageNavigation />
    </div>
  );
};
