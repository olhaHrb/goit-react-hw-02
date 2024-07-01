import css from "./Options.module.css";

const Options = ({ text, onUpdate }) => {
  return (
    <button className={css.button} onClick={onUpdate}>
      {text}
    </button>
  );
};

export default Options;
