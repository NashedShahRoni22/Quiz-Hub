import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import "./Question.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Question = ({ questionData }) => {
  const { question, options, correctAnswer } = questionData;

  const notify = () => toast.info(correctAnswer);

  const handelClick = (option) => {
    if (option === correctAnswer) {
      toast.success("Correct Answer!");
    } else {
      toast.warn("Wrong Answer!");
    }
  };
  return (
    <section className="question-card p-3 m-3">
      <div className="question-container">
        <div>
          <h5 className="my-3 text-center">{question}</h5>
        </div>
        <FontAwesomeIcon
          icon={faEye}
          className="my-3"
          size="xl"
          onClick={notify}
        />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

        {options.map((option) => (
          <p className="p-3 option" onClick={() => handelClick(option)}>
            {option}
          </p>
        ))}
      </div>
    </section>
  );
};

export default Question;
