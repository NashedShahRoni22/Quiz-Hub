import React from "react";
import { Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";
const QuizQuestions = () => {
  const data = useLoaderData();
  const questionData = data.data;
  const { logo, name, questions, total } = questionData;
  return (
    <section>
      <div className="text-center">
        <img
          src={logo}
          alt=""
          className="bg-dark rounded-2 my-2"
          height="150"
        />
        <h1>Quiz topic: {name}</h1>
        <h4>Given Question: {total}</h4>
      </div>

      <Row xs={1} md={2} lg={3} className="g-4 m-5">
        {questions.map((questionData) => (
          <Question
            key={questionData.id}
            questionData={questionData}
          ></Question>
        ))}
      </Row>
    </section>
  );
};

export default QuizQuestions;
