import type { QuizData } from "../types";

export const quizDataM0: QuizData = {
  question:
    "Mais alors, comment une banque commerciale peut se retrouver à court de M0 ? (cliquez sur la bonne proposition) 👇",
  answers: [
    {
      text: "a) La banque commerciale a commis des infractions et la banque centrale lui a ponctionné du M0 en guise de contravention.",
      isCorrect: false,
      rationale: (
        <>
          ❌ Bien tenté mais non, la Banque Centrale ne peut pas 'ponctionner'
          le M0 comme ça.
        </>
      ),
    },
    {
      text: "b) La banque commerciale a créé trop d'argent M2 (pour Nicolas et d'autres) et n'a plus les moyens d'imprimer suffisamment de M0 en proportion.",
      isCorrect: false,
      rationale: (
        <>
          ❌ Rappelez-vous : les banques commerciales créent le M2, mais elles
          ne peuvent jamais fabriquer de M0.
        </>
      ),
    },
    {
      text: "c) La banque commerciale a accordé trop de prêts M2 (dits 'prêts pourris') qui ne sont jamais remboursés.",
      isCorrect: true,
      rationale: <>✅ Bien vu, c'est la perte de confiance !</>,
    },
  ],
};
