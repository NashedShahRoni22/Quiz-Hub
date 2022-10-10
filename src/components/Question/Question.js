import React from "react";
import { Col, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import './Question.css'

const Question = ({ questionData }) => {
  const { question, options } = questionData;
  return (
    <Col className="question-card">
      <Form>
        <h5 className="my-3">{question}</h5>
        <FontAwesomeIcon icon={faEye} className="my-3" size="xl"/>
        {options.map((option) => (
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label={option} />
          </Form.Group>
        ))}
      </Form>
    </Col>
  );
};

export default Question;
