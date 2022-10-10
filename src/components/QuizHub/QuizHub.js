import React from 'react';
import { Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const QuizHub = () => { 
    const response = useLoaderData();
    const quizs = (response.data);
    return (
        <Row xs={1} md={2} lg={4} className="g-4 m-5">
            {
                quizs.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
            }
        </Row>
    );
};

export default QuizHub;