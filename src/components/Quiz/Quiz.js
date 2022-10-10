import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight } from "@fortawesome/free-solid-svg-icons";
import './Quiz.css'

const Quiz = ({ quiz }) => {
  const { id, name, logo, total } = quiz;
  return (
      <Col>
        <Card>
          <Card.Img variant="top" src={logo} className="bg-dark" height="250" />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              Total Question: {total}
              <br />
            </Card.Text>
            <Link to={`/question/${id}`} className="btn btn-primary">
              Attempt Quiz
              <FontAwesomeIcon className="ms-3" icon={faArrowRight} />
            </Link>
          </Card.Body>
        </Card>
      </Col>
  );
};

export default Quiz;
