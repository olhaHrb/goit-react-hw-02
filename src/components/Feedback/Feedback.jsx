import css from "./Feedback.module.css";

const Feedback = () => {
  return (
    <div className={css.container}>
      <ul>
        <li>Good:</li>
        <li>Neutral:</li>
        <li>Bad:</li>
        <li>Total:</li>
        <li>Positive:</li>
      </ul>
    </div>
  );
};

export default Feedback;
