import React from "react";

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercise_num}
    </p>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} exercise_num={props.exercises1_num} />
      <Part part={props.part2} exercise_num={props.exercises2_num} />
      <Part part={props.part3} exercise_num={props.exercises3_num} />
    </div>
  );
};

const Total = (props) => {
  return <p> Number of exercises {props.exercises.reduce((a, b) => a + b)} </p>;
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        part2={part2}
        part3={part3}
        exercises1_num={exercises1}
        exercises2_num={exercises2}
        exercises3_num={exercises3}
      />
      <Total exercises={[exercises1, exercises2, exercises3]} />
    </div>
  );
};

export default App;
