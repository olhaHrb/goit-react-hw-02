import css from "./Options.module.css";

const Options = ({ updateFeedback, total }) => {
  return (
    <>
      <button className={css.button} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button className={css.button} onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button className={css.button} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {total > 0 && (
        <button className={css.button} onClick={() => updateFeedback("reset")}>
          Reset
        </button>
      )}
    </>
  );
};

export default Options;
