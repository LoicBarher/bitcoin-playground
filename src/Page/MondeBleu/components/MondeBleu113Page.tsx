import { type FC, type CSSProperties } from "react";
import { Callout } from "../../../Design";
import { ChapterPrelude, PageNavigation } from "../../components";
import { Quiz, quizDataM0 } from "../../../Quizz";
import { useMondeBleu113Page } from "../hooks";
import { DefaultSimulator } from "./DefaultSimulator";

export const MondeBleu113Page: FC = () => {
  const { isQuizSolved, setIsQuizSolved } = useMondeBleu113Page();

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
        <h1 style={titleStyle}>Le Quantitative Easing</h1>
      </header>
      <ChapterPrelude>
        <strong>L'essentiel de cette section </strong>: Pour faire face à une
        crise de liquidité majeure et ainsi rétablir la confiance, la Banque
        Centrale renfloue les banques commerciales en monnaie M0 en leur
        rachetant massivement des obligations.
      </ChapterPrelude>
      <section>
        <p style={sectionStyle}>
          Nous avons vu deux grands principes : <br />
          1- L'essentiel de la monnaie en circulation (M2) est une promesse de
          remboursement. <br />
          2- Les banques commerciales doivent absolument avoir assez de monnaie
          de réserve (M0) afin de régler leurs comptes entre elles.
          <br />
        </p>
        <p style={sectionStyle}>
          <strong>
            Et si une banque venait à manquer de M0, que se passerait-il ?
          </strong>{" "}
          🤔
        </p>
        <Callout title="La monnaie de Banque Centrale : le pilier central de l'édifice économique">
          <p>
            Si la Banque de <i>M. QuiPaye</i> n'avait pas pu payer sa dette
            auprès de la Banque de <i>Mme Michu</i>, alors il est possible que
            la banque de <i>Mme Michu</i> n'aurait à son tour pas pu payer
            toutes ses dettes auprès d'autres banques tierces, et ainsi de
            suite. Par effet domino, les banques pourraient être dans
            l'incapacité d'honorer leurs dettes.{" "}
            <strong>Et ça serait catastrophique. 😲</strong>
          </p>
          <p>
            La monnaie M0 est la garantie que les paiements en M2 (qui sont des
            promesses) sont bel et bien basés sur quelque chose de réel.{" "}
            <strong>
              Sans cela, c'est tout le système de paiement qui s'effondre car
              les promesses n'ont tout simplement plus aucune valeur
            </strong>
            .
          </p>
          <p>
            Vous comprenez donc que ne pas payer en M0, c'est la faillite
            immédiate et le blocage de toute l'économie. 😉
          </p>
        </Callout>
        <Quiz {...quizDataM0} onCorrectAnswer={() => setIsQuizSolved(true)} />

        {isQuizSolved && (
          <>
            <p style={sectionStyle}>
              Si plusieurs Nicolas n'arrivent plus à rembourser leurs prêts au
              sein d'une même banque, voici la réaction en chaîne :
              <ol>
                <li>
                  Les créances de la banque diminuent à chaque fois qu'un prêt
                  n'est pas remboursé.
                </li>
                <li>
                  Le capital propre diminue à son tour, afin que le bilan de la
                  banque soit équilibré.
                </li>
                <DefaultSimulator />
                <li>
                  Les autres banques voient le capital propre de la banque
                  fondre et commencent à paniquer. 😱
                </li>
                <li>
                  Paniquées, les banques ne prêtent plus de M0 à la banque en
                  difficulté : <strong>c'est la crise de confiance</strong>.
                </li>
                <li>
                  La banque n'a plus accès au M0 et ne peut plus régler ses
                  dettes avec les autres banques :{" "}
                  <strong>tout le système est paralysé</strong>.
                </li>
              </ol>
            </p>
            <p style={sectionStyle}>
              Face à un risque d'effondrement complet, la Banque Centrale sort
              son arme nucléaire monétaire pour sauver le système : le{" "}
              <i>Quantitative Easing</i>.
            </p>
            <Callout title="Qu'est-ce que le Quantitative Easing ?">
              <p>
                Le Quantitative Easing (ou assouplissement quantitatif) est une
                opération menée par les banques centrales qui consiste à
                racheter massivement des obligations (principalement des
                obligations d'État donc en gros des dettes contractées par
                l'État) et qui sont détenues par des banques commerciales en
                manque de M0.
              </p>
              <p>
                Il s'agit d'un véritable tour de passe-passe ✨ : les banques
                commerciales peuvent ainsi être renflouées en M0, comme par
                magie, grâce aux banques centrales qui peuvent imprimer de la M0
                sans aucune contrepartie.
              </p>
              <p>
                Et ce n'est pas de la science-fiction : cette "arme" a été
                utilisée massivement par toutes les grandes banques centrales
                (Japon, États-Unis, Europe) après la <i>crise des subprimes</i>{" "}
                de 2008 et lors de la <i>crise pandémique</i> de 2020.
              </p>
            </Callout>
            <p style={sectionStyle}>
              Tout cela semble merveilleux n'est-ce pas ? 😉{" "}
            </p>
            <p style={sectionStyle}>
              {" "}
              On a ENFIN résolu tous les soucis monétaires en imprimant de la M0
              à foison (ce que l'on appelle{" "}
              <i>faire tourner la planche à billets</i>). 😜{" "}
            </p>{" "}
            <p style={sectionStyle}>
              Vous vous doutez bien que tout cela est bien trop beau pour être
              vrai. Et vous avez raison : ces manoeuvres ont des conséquences
              considérables sur l'économie et qui sont le coeur du problème
              financier actuel. C'est ce que nous allons voir par la suite, vous
              tenez le bon cap ! 😉
            </p>
          </>
        )}
      </section>
      <PageNavigation />
    </div>
  );
};
