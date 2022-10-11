import React from "react";
import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import './Question.css'

const Question = ({ questionData }) => {

  const { question, options, correctAnswer } = questionData;
  return (
    <div className="question-card p-3 m-3">
      <div
      >
        <h5 className="my-3 text-center">{question}</h5>
        <FontAwesomeIcon icon={faEye} className="my-3" size="xl"/>
        {options.map((option) => (
          <p className="p-3">{option}</p>
        ))}
      </div>
    </div>
  );
};

export default Question;
