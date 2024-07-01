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
        ...clicks,
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

  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
  const positiveFeedback = Math.round((clicks.good / totalFeedback) * 100);

  return (
    <div>
      <Description />
      <Options updateFeedback={updateFeedback} total={totalFeedback}></Options>
      {totalFeedback > 0 ? (
        <Feedback
          value={clicks}
          total={totalFeedback}
          positive={positiveFeedback}
        ></Feedback>
      ) : (
        <Notification></Notification>
      )}
    </div>
  );
};

export default App;
