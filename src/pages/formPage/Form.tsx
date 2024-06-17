import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { useState } from "react";

interface Question {
  question: string;
}

const ANSWER_VARIANTS = [
  {
    value: "1",
    label: "Да",
  },
  {
    value: "2",
    label: "Скорее да",
  },
  {
    value: "3",
    label: "Нет",
  },
  {
    value: "4",
    label: "Скорее нет",
  },
  {
    value: "5",
    label: "Затрудняюсь ответить",
  },
];

interface FormProps {
  onSave: () => void;
}
const Form = ({ onSave }: FormProps) => {
  const [openQuestions, setOpenQuestions] = useState(1);
  const [isSaved, setIsSaved] = useState(false);
  const [questions] = useState<Question[]>([
    { question: "Делились ли вы своими чувствами с этим человеком сегодня?" },
    { question: "Чувствовали ли вы себя понятым этим человеком сегодня?" },
    { question: "Чувствовали ли вы поддержку от этого человека?" },
    { question: "Этот человек делился своими чувствами с вами сегодня?" },
    { question: "Этот человек был внимателен к вашим потребностям сегодня?" },
  ]);

  const onIncrementQuestion = () => {
    setOpenQuestions(openQuestions + 1);
  };

  return (
    <Card className="flex flex-col w-full justify-items-center cursor-default">
      <CardContent className="w-full">
        <Label>Выберите человека</Label>
        <Select
          options={[
            { value: "1", label: "Никита" },
            { value: "2", label: "Ваня" },
            { value: "3", label: "Саша" },
            { value: "4", label: "Коля" },
          ]}
        />

        {questions.slice(0, openQuestions).map((question, index) => (
          <div className="mt-3" key={index}>
            <Label className="text-1xl">{question.question}</Label>
            <Select options={ANSWER_VARIANTS} />
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Button
          className="bg-blue-600"
          onClick={onIncrementQuestion}
          disabled={openQuestions === questions.length}
        >
          {openQuestions === questions.length
            ? "Вопросы закончились"
            : "Добавить вопрос"}
        </Button>
        <Button
          className="ms-auto bg-green-600"
          disabled={isSaved}
          onClick={() => {
            setIsSaved(true);
            onSave();
          }}
        >
          Сохранить
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Form;
