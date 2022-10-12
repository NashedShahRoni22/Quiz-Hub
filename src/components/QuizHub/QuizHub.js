import React from "react";
import { Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";
import devlogo from "../../images/developers.png";

const QuizHub = () => {
  const response = useLoaderData();
  const quizs = response.data;
  return (
    <section>
      <hr />
      <div className="d-flex justify-content-around align-items-center">
        <img src={devlogo} alt="" height="80"/>
        <h1 className="highlight text-center">Dive In To Quiz</h1>
        <img src={devlogo} alt="" height="80"/>
      </div>
      <hr />
      <Row xs={1} md={2} lg={4} className="g-4 m-5">
        {quizs.map((quiz) => (
          <Quiz key={quiz.id} quiz={quiz}></Quiz>
        ))}
      </Row>
    </section>
  );
};

export default QuizHub;
