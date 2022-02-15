import { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const MostVotes = ({ anecdotes, votes }) => {
  if (Math.max(...votes) === 0) {
    return <div>No votes yet</div>;
  }
  const max = Math.max(...votes);
  const index = votes.indexOf(max);
  const mostVotes = anecdotes[index];
  return (
    <>
      <div>{mostVotes}</div>
      <div>{votes[index]}</div>
    </>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const addVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  const randSelected = () => {
    const randIndex = Math.floor(Math.random() * anecdotes.length);
    console.log(randIndex);
    setSelected(randIndex);
  };

  return (
    <>
      <h1>Anecdote of the Day</h1>
      <div>{anecdotes[selected]}</div>
      <div>has {votes[selected]} votes</div>
      <Button handleClick={addVote} text="vote" />
      <Button handleClick={randSelected} text="next anecdote" />
      <h2>Anecdotes with the most votes</h2>
      <MostVotes votes={votes} anecdotes={anecdotes} />
    </>
  );
};

export default App;
