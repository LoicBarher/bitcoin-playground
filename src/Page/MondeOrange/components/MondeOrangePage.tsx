import { type FC, type CSSProperties } from 'react';
import { THEME_COLORS, useThemeContext } from '../../../Design';

/**
 * La page principale pour le "Monde Orange".
 * Elle s'adapte maintenant dynamiquement au thème sélectionné.
 */
export const MondeOrangePage: FC = () => {
  const { theme } = useThemeContext();
  const colors = THEME_COLORS[theme];

  const pageContainerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    color: colors.text.primary,
  };

  const titleStyle: CSSProperties = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: colors.text.primary,
  };

  const subtitleStyle: CSSProperties = {
    fontSize: '1.25rem',
    color: colors.text.secondary,
    maxWidth: '800px',
  };

  const placeholderStyle: CSSProperties = {
    border: `2px dashed ${colors.border.secondary}`,
    borderRadius: '0.75rem',
    padding: '4rem',
    textAlign: 'center',
    color: colors.text.secondary,
    marginTop: '2rem',
  };

  return (
    <div style={pageContainerStyle}>
      <header>
        <h1 style={titleStyle}>La Solution : Bitcoin</h1>
        <p style={subtitleStyle}>
          Après avoir exploré le problème, ce monde vous présente Bitcoin non pas comme un investissement spéculatif, mais comme une réponse technologique et philosophique aux failles du système actuel.
        </p>
      </header>
      <div style={placeholderStyle}>
        <p style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>⚙️</p>
        <p>Les jouets interactifs pour ce monde sont en cours de construction.</p>
      </div>
    </div>
  );
};

