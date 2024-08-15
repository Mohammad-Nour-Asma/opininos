"use client";
import Divider from "@/Components/Divider";
import Input from "@/Components/Input";
import { useAddPollMutation } from "@/Redux/API/PollApi";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AddPollForm = () => {
  const router = useRouter();
  const [addPoll, { isLoading, isSuccess }] = useAddPollMutation();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [questions, setQuestions] = useState([
    { text: "", answers: [{ text: "", points: 0 }] },
  ]);

  const handleQuestionChange = (index, event) => {
    const newQuestions = [...questions];
    newQuestions[index][event.target.name] = event.target.value;
    setQuestions(newQuestions);
  };

  const handleAnswerChange = (qIndex, aIndex, event) => {
    if (event.target.name == "points" && isNaN(+event.target.value)) {
      return;
    }
    const newQuestions = [...questions];
    newQuestions[qIndex].answers[aIndex][event.target.name] =
      event.target.name == "points" ? +event.target.value : event.target.value;
    setQuestions(newQuestions);
  };

  const addQuestion = () => {
    setQuestions([
      ...questions,
      { text: "", answers: [{ text: "", points: 0 }] },
    ]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const pollData = { title, description, questions };
    addPoll(pollData);
  };

  const addAnswer = (index) => {
    const newQuestions = [...questions];
    newQuestions[index].answers.push({ text: "", points: 0 });
    setQuestions(newQuestions);
  };

  useEffect(() => {
    if (isSuccess) {
      router.push("/dashboard");
    }
  }, [isSuccess]);

  return (
    <div className="my-4">
      <Divider width={"100%"} />
      <div className="my-4">
        <h2 className="font-semibold">معلومات اساسية</h2>
        <Input
          name="name"
          label={"اسم الاستبيان"}
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <Input
          name="description"
          label={"شرح الاستبيان"}
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </div>
      <Divider width={"90%"} />
      <div className="my-4">
        <h2 className="font-semibold">الاسئلة</h2>
      </div>

      {/* Questions */}
      <div className="" id="questions-container">
        {questions.map((question, qIndex) => (
          <div
            key={qIndex}
            className="mb-6 p-4 border border-gray-200 rounded-md"
          >
            <h2 className="text-lg font-semibold mb-2">السؤال {qIndex + 1}</h2>

            {/* Question Text */}
            <Input
              type="text"
              id={`question-text-${qIndex}`}
              name="text"
              value={question.text}
              onChange={(e) => handleQuestionChange(qIndex, e)}
              label={"نص السؤال"}
            />

            {/* Answers */}
            <div id={`answers-container-${qIndex}`}>
              {question.answers.map((answer, aIndex) => (
                <div
                  key={aIndex}
                  className="mb-4 p-4 border shadow-md border-gray-200 rounded-md"
                >
                  {/* Answer Text */}
                  <div className="mb-2">
                    <Input
                      label={"نص الاجابة"}
                      type="text"
                      id={`answer-text-${qIndex}-${aIndex}`}
                      name="text"
                      value={answer.text}
                      onChange={(e) => handleAnswerChange(qIndex, aIndex, e)}
                    />
                  </div>
                  {/* Points */}
                  <div className="mb-2">
                    <Input
                      label={"النقاط"}
                      type="number"
                      id={`answer-points-${qIndex}-${aIndex}`}
                      name="points"
                      value={answer.points}
                      onChange={(e) => handleAnswerChange(qIndex, aIndex, e)}
                    />
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={() => addAnswer(qIndex)}
                className="text-blue-500 hover:text-blue-700"
              >
                اضافة اجابة اخرى
              </button>
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={addQuestion}
          className="text-blue-500 hover:text-blue-700"
        >
          اضافة سؤال جديد
        </button>
      </div>
      <div className="mt-6">
        <button
          className={` text-white px-4 py-2 rounded-md ${
            isLoading ? "bg-gray-400" : "bg-main"
          } `}
          onClick={handleSubmit}
          disabled={isLoading}
        >
          تاكيد انشاء الاستبيان
        </button>
      </div>
    </div>
  );
};

export default AddPollForm;
