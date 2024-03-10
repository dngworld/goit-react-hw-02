import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";
import Options from "../Options/Options";
import { useState } from "react";
import { useEffect } from "react";
import css from "./App.module.css";

const App = () => {
  const [values, setValues] = useState(() => {
    const currentReviews = window.localStorage.getItem("value");
    if (currentReviews !== null) {
      return JSON.parse(currentReviews);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });
  useEffect(() => {
    window.localStorage.setItem("value", JSON.stringify(values));
  }, [values]);

  const onLeaveFeedback = (option) => {
    setValues({
      ...values,
      [option]: values[option] + 1,
    });
  };

  const onReset = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = values.good + values.neutral + values.bad;

  const isHidden = totalFeedback === 0;

  const positiveFeedback = Math.round(
    ((values.good + values.neutral) / totalFeedback) * 100
  );
  return (
    <div className={css.wrapper}>
      <Description />
      <Options
        onUpdate={onLeaveFeedback}
        isHidden={isHidden}
        onReset={onReset}
      />
      {isHidden ? (
        <Notification />
      ) : (
        <Feedback
          values={values}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
    </div>
  );
};

export default App;
