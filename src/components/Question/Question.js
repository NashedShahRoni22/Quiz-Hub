import React from "react";
import { Form } from "react-bootstrap";

const Question = ({ questionData }) => {
  
  const {question, options } = questionData;
  return (
    <div className="card p-3 m-3">
      <Form>
        <h5 className="mb-3">{question}</h5>
        {options.map((option) => (
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label={option} />
          </Form.Group>
        ))}
      </Form>
    </div>
  );
};

export default Question;