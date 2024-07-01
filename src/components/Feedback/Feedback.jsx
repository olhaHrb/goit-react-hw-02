import css from "./Feedback.module.css";

const Feedback = ({ indicator, value, total }) => {
  if (total > 0) {
    return (
      <div className={css.container}>
        <p>
          {indicator} {value}
        </p>
      </div>
    );
  }
};

export default Feedback;
