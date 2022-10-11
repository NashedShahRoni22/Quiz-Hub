import React from "react";
import { Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Quiz from "../Quiz/Quiz";

const QuizHub = () => {
  const response = useLoaderData();
  const quizs = response.data;
  return (
    <section>
      <Banner></Banner>
      <hr />
      <h1 className="highlight text-center">Dive In To Quiz</h1>
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
