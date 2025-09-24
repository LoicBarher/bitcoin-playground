import { type FC, type CSSProperties } from 'react';
import { useInflationSimulator } from '../hooks/useInflationSimulator';
import { Card, THEME_COLORS, useThemeContext } from '../../../Design';

/**
 * Le simulateur d'inflation interactif.
 * Il s'adapte maintenant dynamiquement au thème sélectionné.
 */
export const InflationSimulator: FC = () => {
  const { simulatorState, finalCapital, purchasingPowerLoss, updateSimulatorState } = useInflationSimulator();
  const { theme } = useThemeContext();
  const colors = THEME_COLORS[theme];
  const { initialCapital, durationInYears, annualInflationRate } = simulatorState;

  const formatter = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' });
  
  const containerStyle: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '2rem',
    alignItems: 'center',
  };

  const controlsContainerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  };

  const resultContainerStyle: CSSProperties = {
    textAlign: 'center',
  };

  const labelStyle: CSSProperties = {
    color: colors.text.primary,
    fontWeight: 500,
  };

  const inputContainerStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginTop: '0.5rem',
  };

  const inputStyle: CSSProperties = {
    backgroundColor: colors.background.tertiary,
    color: colors.text.primary,
    border: `1px solid ${colors.border.secondary}`,
    borderRadius: '0.375rem',
    padding: '0.5rem',
    width: '7rem',
    textAlign: 'right',
  };

  return (
    <Card>
      <div style={containerStyle} className="md:grid-cols-2">
        <div style={controlsContainerStyle}>
          {/* Capital Control */}
          <div>
            <label htmlFor="capital" style={labelStyle}>Capital de départ</label>
            <div style={inputContainerStyle}>
              <input
                type="range"
                id="capital"
                min="1000"
                max="1000000"
                step="1000"
                value={initialCapital}
                onChange={e => updateSimulatorState({ initialCapital: Number(e.target.value) })}
                className="w-full"
              />
              <input
                type="number"
                value={initialCapital}
                onChange={e => updateSimulatorState({ initialCapital: Number(e.target.value) })}
                style={inputStyle}
              />
            </div>
          </div>
          {/* Duration Control */}
          <div>
            <label htmlFor="duration" style={labelStyle}>Durée (années)</label>
            <div style={inputContainerStyle}>
              <input
                type="range"
                id="duration"
                min="1"
                max="50"
                value={durationInYears}
                onChange={e => updateSimulatorState({ durationInYears: Number(e.target.value) })}
                className="w-full"
              />
              <input
                type="number"
                value={durationInYears}
                onChange={e => updateSimulatorState({ durationInYears: Number(e.target.value) })}
                style={inputStyle}
              />
            </div>
          </div>
          {/* Inflation Control */}
          <div>
            <label htmlFor="inflation" style={labelStyle}>Taux d'inflation annuel (%)</label>
            <div style={inputContainerStyle}>
              <input
                type="range"
                id="inflation"
                min="0"
                max="20"
                step="0.5"
                value={annualInflationRate}
                onChange={e => updateSimulatorState({ annualInflationRate: Number(e.target.value) })}
                className="w-full"
              />
              <input
                type="number"
                value={annualInflationRate}
                onChange={e => updateSimulatorState({ annualInflationRate: Number(e.target.value) })}
                style={inputStyle}
              />
            </div>
          </div>
        </div>
        
        <div style={resultContainerStyle} className="md:text-left">
          <p style={{ fontSize: '1.125rem', color: colors.text.secondary }}>
            Après {durationInYears} ans, avec une inflation de {annualInflationRate}% :
          </p>
          <p style={{ fontSize: '2.25rem', fontWeight: 'bold', margin: '0.5rem 0', color: colors.accent.blue.primary }}>
            Votre pouvoir d'achat sera de {formatter.format(finalCapital)}.
          </p>
          <p style={{ fontSize: '1.125rem', color: colors.semantic.error.primary }}>
            Soit une perte de {formatter.format(purchasingPowerLoss)}.
          </p>
          <div style={{ marginTop: '1.5rem', color: colors.text.secondary, fontStyle: 'italic' }}>
            <p>🛒</p>
            <p>Ici viendra l'animation du caddie qui se vide.</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

