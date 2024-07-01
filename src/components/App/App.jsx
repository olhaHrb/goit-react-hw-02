import { useState } from "react";
//import { useEffect } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
//import Notification from "../Notification/Notification";

const App = () => {
  const state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const [clicks, setClicks] = useState(state);
  const updateFeedback = (feedbackType) => {
    setClicks({
      ...clicks,
      [feedbackType]: clicks[feedbackType] + 1,
    });
  };

  return (
    <div>
      <Description />
      <Options updateFeedback={updateFeedback}> </Options>
      <Feedback value={clicks}></Feedback>
    </div>
  );
};

export default App;
