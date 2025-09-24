export const THEME_COLORS = {
  dark: {
    background: {
      primary: "#121212",
      secondary: "#1E1E1E",
      tertiary: "#2A2A2A",
      hover: "rgba(255, 255, 255, 0.08)",
    },
    text: {
      primary: "#E0E0E0",
      secondary: "#A0A0A0",
      disabled: "#616161",
    },
    border: {
      primary: "#424242",
      secondary: "#2A2A2A",
    },
    accent: {
      blue: {
        primary: "#2196F3",
        hover: "#1976D2",
        text: "#FFFFFF",
      },
      orange: {
        primary: "#FF9800",
        hover: "#F57C00",
        text: "#000000",
      },
      green: {
        primary: "#4CAF50",
        hover: "#388E3C",
        text: "#FFFFFF",
      },
    },
    semantic: {
      error: {
        primary: "#CF6679",
        text: "#000000",
      },
      success: {
        primary: "#03DAC6",
        text: "#000000",
      },
    },
    state: {
      focusRing: "#64B5F6",
      disabledBackground: "#333333",
    },
  },
  light: {
    background: {
      primary: "#F5F5F5", // Fond principal (gris très clair)
      secondary: "#FFFFFF", // Pour les cartes, la barre de navigation (blanc)
      tertiary: "#E0E0E0", // Pour les survols ou éléments imbriqués (gris clair)
      hover: "rgba(0, 0, 0, 0.04)", // Survol subtil
    },
    text: {
      primary: "#212121", // Texte principal (presque noir)
      secondary: "#757575", // Texte secondaire (gris moyen)
      disabled: "#BDBDBD", // Texte désactivé (gris clair)
    },
    border: {
      primary: "#E0E0E0", // Bordures principales
      secondary: "#F5F5F5", // Bordures plus subtiles
    },
    accent: {
      blue: {
        primary: "#1976D2", // Couleur plus foncée pour la lisibilité
        hover: "#1565C0",
        text: "#FFFFFF",
      },
      orange: {
        primary: "#F57C00",
        hover: "#EF6C00",
        text: "#FFFFFF", // Texte blanc pour un meilleur contraste
      },
      green: {
        primary: "#388E3C",
        hover: "#2E7D32",
        text: "#FFFFFF",
      },
    },
    semantic: {
      error: {
        primary: "#D32F2F",
        text: "#FFFFFF",
      },
      success: {
        primary: "#00796B",
        text: "#FFFFFF",
      },
    },
    state: {
      focusRing: "#1976D2",
      disabledBackground: "#E0E0E0",
    },
  },
};
