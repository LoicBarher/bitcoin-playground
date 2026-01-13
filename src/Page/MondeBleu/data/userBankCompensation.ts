export const userBankCompensation = {
  before: {
    bank: {
      assets: [
        {
          amount: "1 200 000 €",
          description:
            "(toutes les créances auprès des clients dont celle de Nicolas QuiPaye)",
        },
        { amount: "2 000 000 €", description: "(Réserves M0)" },
      ],
      liabilities: [
        {
          amount: "1 000 000 €",
          description:
            "(tous les dépôts des créances sur les comptes des clients sauf Nicolas QuiPaye, qui a transféré l'argent chez Mme Michu)",
        },
        {
          amount: "200 000 €",
          description: "(dette M0 envers la banque de Mme Michu)",
        },
        { amount: "2 000 000 €", description: "(capital propre)" },
      ],
    },
  },
  after: {
    bank: {
      assets: [
        {
          amount: "1 200 000 €",
          description:
            "(toutes les créances auprès des clients incluant celle de Nicolas QuiPaye)",
        },
        {
          amount: "1 800 000 €",
          description: "(Réserves M0)",
          hasChanged: true,
        },
      ],
      liabilities: [
        {
          amount: "1 000 000 €",
          description:
            "(tous les dépôts des créances sur les comptes des clients sauf Nicolas QuiPaye, qui a transféré l'argent chez Mme Michu)",
        },
        {
          amount: "0 €",
          description: "(dette M0 envers la banque de Mme Michu)",
          hasChanged: true,
        },
        {
          amount: "2 000 000 €",
          description: "(capital propre)",
        },
      ],
    },
  },
};
