import { type FC, type CSSProperties } from "react";
import { Card } from "../../Design";

export const HomePage: FC = () => {
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
    paddingTop: "2rem",
    fontSize: "1rem",
    letterSpacing: "0.05rem",
    lineHeight: 1.625,
  };

  return (
    <div style={pageContainerStyle}>
      <header>
        <h1 style={titleStyle}>
          Vous aussi, vous sentez que quelque chose ne tourne pas rond ?
        </h1>
      </header>
      <section>
        <p style={sectionStyle}>
          Le coût de la vie augmente, votre épargne semble fondre comme neige au
          soleil et les inégalités se creusent. Vous le sentez, vous le vivez au
          quotidien. Et si ce n'était pas une fatalité, mais la conséquence d'un
          problème inscrit au cœur même de notre système monétaire ?
        </p>
        <Card>
          {" "}
          Pour le comprendre, faisons un petit détour par une île du Pacifique :
          l'île de Yap. Pendant des siècles, les habitants de Yap ont utilisé
          comme monnaie d'immenses disques de pierre appelés "Rai". Certains
          étaient plus hauts qu'un homme. Leur valeur ne venait pas de leur
          utilité, mais de leur rareté. Il fallait des expéditions périlleuses
          sur des îles lointaines pour les extraire et les ramener, un travail
          immense qui garantissait qu'on ne pouvait pas en créer facilement.
          Cette monnaie était "dure". Puis, à la fin du 19ème siècle, un marin
          irlandais du nom de David O'Keefe arriva avec des outils modernes et
          de la dynamite. Il se mit à produire des pierres de Rai en abondance
          et à les échanger contre les richesses de l'île. En rendant la monnaie
          "facile" à produire, il a ruiné l'épargne de toute une population et
          détruit leur système monétaire. L'histoire des pierres de Rai est
          l'illustration parfaite d'une loi universelle : toute monnaie facile à
          créer finit par perdre sa valeur. Notre système monétaire actuel, où
          de nouvelles unités peuvent être créées par une simple écriture
          comptable, ne fait pas face à la dynamite, mais à un problème de
          conception similaire.{" "}
        </Card>
        <p style={sectionStyle}>
          Cette académie a été conçue pour être la plus claire et concise
          possible. Nous avons structuré ce voyage en trois grandes parties,
          pour assembler les pièces du puzzle dans le bon ordre.
          <ul>
            <li>
              Partie 1 : Le Problème - Nous allons décortiquer la mécanique de
              notre système financier actuel pour comprendre comment la monnaie
              est créée, pourquoi elle perd de sa valeur et les conséquences que
              cela a sur votre vie de tous les jours.
            </li>
            <li>
              Partie 2 : La Solution - Nous explorerons une invention
              technologique fascinante qui propose des règles du jeu
              radicalement différentes, basées sur des principes mathématiques
              et une rareté absolue.
            </li>
            <li>
              Partie 3 : La Pratique - Une fois la théorie comprise, nous
              passerons à l'action. Comment utiliser cet outil de manière
              intelligente et en toute sécurité ?
            </li>
          </ul>
          Votre exploration commence maintenant. L'accès est libre, la curiosité
          est votre seul guide.
        </p>
        <Card>
          "Je ne crois pas que nous aurons à nouveau une bonne monnaie avant de
          retirer la chose des mains du gouvernement. C'est-à-dire que nous ne
          pouvons pas la leur retirer violemment. Tout ce que nous pouvons
          faire, c'est par une voie détournée et astucieuse, introduire quelque
          chose qu'ils ne peuvent pas arrêter." — Friedrich Hayek
        </Card>
      </section>
    </div>
  );
};
