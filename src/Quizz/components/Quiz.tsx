import { type FC, type CSSProperties } from "react";
import {
  useThemeContext,
  THEME_COLORS,
  getWorldThemeColorName,
  HighlightText,
} from "../../Design";
import { type QuizData } from "../types";
import { useQuiz } from "../hooks";
import { useRouterContext } from "../../Routing";

type QuizProps = QuizData & {
  onCorrectAnswer: () => void;
};

export const Quiz: FC<QuizProps> = ({ onCorrectAnswer, ...data }) => {
  const { theme } = useThemeContext();
  const { currentPage } = useRouterContext();
  const colors = THEME_COLORS[theme];
  const worldThemeColorName = getWorldThemeColorName(currentPage);
  const { selectedIndex, isCorrectlySolved, handleSelect } = useQuiz(
    data.answers,
    onCorrectAnswer
  );

  const containerStyle: CSSProperties = {
    padding: "1rem",
    margin: "2rem 0",
    backgroundColor: colors.base.background.secondary,
  };

  const questionStyle: CSSProperties = {
    color: colors.base.text.primary,
    marginBottom: "1.5rem",
    fontStyle: "italic",
    letterSpacing: "0.05rem",
  };

  const optionsContainerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: "0.25rem",
  };

  const optionStyle: CSSProperties = {
    display: "block",
    width: "33%",
    padding: "1rem",
    borderRadius: "0.5rem",
    textAlign: "center",
    cursor: "pointer",
    backgroundColor: colors.base.background.primary,
    fontSize: "0.875rem",
    lineHeight: 1.6,
    border: `1px solid transparent`,
    transition: "border-color 0.2s, background-color 0.2s, opacity 0.2s",
  };

  const rationaleBaseStyle: CSSProperties = {
    fontSize: "1rem",
    letterSpacing: "0.05rem",
    lineHeight: 1.625,
    marginTop: "1.5rem",
  };

  return (
    <div style={containerStyle}>
      <p style={questionStyle}>{data.question}</p>
      <div style={optionsContainerStyle}>
        {data.answers.map((answer, index) => {
          const isSelected = selectedIndex === index;
          const dynamicOptionStyle: CSSProperties = {
            ...optionStyle,
            color: colors.base.text.secondary,
            cursor: isCorrectlySolved ? "not-allowed" : "pointer",
          };

          if (isSelected) {
            dynamicOptionStyle.borderColor =
              colors[worldThemeColorName].border.primary;
            dynamicOptionStyle.color = colors.base.text.primary;
          }

          return (
            <button
              key={index}
              style={dynamicOptionStyle}
              onClick={() => handleSelect(index)}
              disabled={isCorrectlySolved}
            >
              {answer.text}
            </button>
          );
        })}
      </div>

      {selectedIndex !== null && (
        <p style={rationaleBaseStyle}>
          <HighlightText
            highLightColorHex={
              data.answers[selectedIndex].isCorrect
                ? "#10B981"
                : "#F97316"
            }
          >
            {data.answers[selectedIndex].rationale}
          </HighlightText>
        </p>
      )}
    </div>
  );
};
