import css from "./Feedback.module.css";

const Feedback = ({ value: { good, neutral, bad }, total, positive }) => {
  return (
    <div className={css.container}>
      <p>Good: {good} </p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad} </p>
      <p>Total: {total} </p>
      <p>Positive: {positive}% </p>
    </div>
  );
};

export default Feedback;
