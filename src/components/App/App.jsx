import { useState } from "react";
import { useEffect } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

const App = () => {
  const state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const [clicks, setClicks] = useState(() => {
    const savedClicks = window.localStorage.getItem("saved-clicks");
    if (savedClicks !== null) {
      return JSON.parse(savedClicks);
    }
    return state;
  });
  useEffect(() => {
    window.localStorage.setItem("saved-clicks", JSON.stringify(clicks));
  }, [clicks]);

  const updateFeedback = (feedbackType) => {
    if (feedbackType === "reset") {
      setClicks({
        good: 0,
        neutral: 0,
        bad: 0,
      });
    } else {
      setClicks({
        ...clicks,
        [feedbackType]: clicks[feedbackType] + 1,
      });
    }
  };

  const totalFeedback = clicks.good + clicks.bad + clicks.neutral;
  const positiveFeedback =
    Math.round((clicks.good / totalFeedback) * 100) + "%";

  return (
    <div>
      <Description />
      <Options text="Good" onUpdate={() => updateFeedback("good")}></Options>
      <Options
        text="Neutral"
        onUpdate={() => updateFeedback("neutral")}
      ></Options>
      <Options
        text="Bad"
        //       value={clicks.bad}
        onUpdate={() => updateFeedback("bad")}
      ></Options>
      {totalFeedback > 0 && (
        <Options
          text="Reset"
          onUpdate={() => updateFeedback("reset")}
        ></Options>
      )}
      <Feedback
        indicator="Good: "
        value={clicks.good}
        total={totalFeedback}
      ></Feedback>
      <Feedback
        indicator="Neutral: "
        value={clicks.neutral}
        total={totalFeedback}
      ></Feedback>
      <Feedback
        indicator="Bad: "
        value={clicks.bad}
        total={totalFeedback}
      ></Feedback>
      <Feedback
        indicator="Total: "
        value={totalFeedback}
        total={totalFeedback}
      ></Feedback>
      <Feedback
        indicator="Positive: "
        value={positiveFeedback}
        total={totalFeedback}
      ></Feedback>
      <Notification total={totalFeedback}></Notification>
    </div>
  );
};

export default App;
