import { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const StatisticLine = ({ type, stat }) => (
  <tr>
    <td>{type}</td>
    <td>{stat}</td>
  </tr>
);

const Statistics = ({ feedback }) => {
  if (feedback.good === 0 && feedback.neutral === 0 && feedback.bad === 0) {
    return <p>No feedback given</p>;
  }
  let total = 0;
  for (let type in feedback) {
    total += feedback[type];
  }
  const avg = (feedback.good - feedback.bad) / total;
  const positive = (feedback.good / total) * 100;

  return (
    <>
      <StatisticLine type="good" stat={feedback.good} />
      <StatisticLine type="neutral" stat={feedback.neutral} />
      <StatisticLine type="bad" stat={feedback.bad} />
      <StatisticLine type="all" stat={total} />
      <StatisticLine type="average" stat={avg} />
      <StatisticLine type="positive" stat={positive} />
    </>
  );
};

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleGood = () => {
    setFeedback({
      ...feedback,
      good: feedback.good + 1,
    });
  };

  const handleNeutral = () => {
    setFeedback({
      ...feedback,
      neutral: feedback.neutral + 1,
    });
  };

  const handleBad = () => {
    setFeedback({
      ...feedback,
      bad: feedback.bad + 1,
    });
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGood} text="good" />
      <Button handleClick={handleNeutral} text="neutral" />
      <Button handleClick={handleBad} text="bad" />
      <h2>Statistics</h2>
      <Statistics feedback={feedback} />
    </div>
  );
};

export default App;
