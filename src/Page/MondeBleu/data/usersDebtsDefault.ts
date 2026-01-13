export const usersDebtsDefault = {
  before: {
    bank: {
      assets: [
        {
          amount: "20 000 000 €",
          description: "(créances totales auprès des clients)",
        },
        { amount: "30 000 000 €", description: "(autres actifs divers)" },
      ],
      liabilities: [
        { amount: "30 000 000 €", description: "(capital propre)" },
        { amount: "20 000 000 €", description: "(autres passifs divers)" },
      ],
    },
  },
  after: {
    bank: {
      assets: [
        {
          amount: "5 000 000 €",
          description: "(créances totales auprès des clients)",
          hasChanged: true,
        },
        { amount: "30 000 000 €", description: "(autres actifs divers)" },
      ],
      liabilities: [
        {
          amount: "15 000 000 €",
          description: "(Capital propre)",
          hasChanged: true,
        },
        { amount: "20 000 000 €", description: "(autres passifs divers)" },
      ],
    },
  },
};
