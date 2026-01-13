import type { QuizData } from "../types";

export const quizDataProfileChoice: QuizData = {
  question: "Alors, à quel profil préférez-vous accorder un prêt ?",
  answers: [
    {
      text: "a) M. Géo Trouve-Tout",
      isCorrect: false,
      rationale: (
        <>
          ❌ Refusé ! Désolé pour Géo... Son projet est génial, mais trop
          risqué. Avec une marge minuscule (souvenez-vous du chapitre précédent
          😉), la banque ne peut pas se permettre le moindre défaut de paiement.
          Sans garantie solide à saisir, c'est non.
        </>
      ),
    },
    {
      text: "b) M. Balthazar Picsou",
      isCorrect: true,
      rationale: (
        <>
          ✅ Bingo ! C'est de l'argent facile. Le prêt est 100% sécurisé par son
          portefeuille d'actions existant (le nantissement). S'il ne paie pas,
          la banque vend ses titres en un clic. Risque = 0. Dossier validé !
        </>
      ),
    },
    {
      text: "c) Mme Michu pour sûr !",
      isCorrect: false,
      rationale: (
        <>
          ❌ Notre <i>Madame Michu</i> n'a rien à voir dans cette histoire pour
          une fois ! 😜
        </>
      ),
    },
  ],
};
