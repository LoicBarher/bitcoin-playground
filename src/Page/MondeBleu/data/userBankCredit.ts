export const userBankCredit = {
  before: {
    bank: {
      assets: [
        {
          amount: "1 000 000 €",
          description: "(toutes les créances auprès des clients)",
        },
      ],
      liabilities: [
        {
          amount: "1 000 000 €",
          description:
            "(tous les dépôts des créances, sur les comptes des clients)",
        },
      ],
    },
  },
  after: {
    bank: {
      assets: [
        {
          amount: "1 000 000 €",
          description: "(toutes les créances auprès des clients)",
        },
        {
          amount: "200 000 €",
          description: "(créance sur M. QuiPaye)",
          hasChanged: true,
        },
      ],
      liabilities: [
        {
          amount: "1 000 000 €",
          description:
            "(tous les dépôts des créances, sur les comptes des clients)",
        },
        {
          amount: "200 000 €",
          description: "(dépôt sur le compte de M. QuiPaye)",
          hasChanged: true,
        },
      ],
    },
  },
};
