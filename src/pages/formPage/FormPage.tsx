import { Button } from "@/components/ui/button";
import Form from "./Form";

const FormPage = () => {
  return (
    <div className="flex relative flex-col w-full h-full justify-center items-center">
      <h2 className="absolute left-20 top-10 text-3xl font-semibold justify-self-end">
        С кем вы сегодня общались?
      </h2>
      <Button className="absolute top-10 right-20 text-xl bg-green-600">
        Завершить анкетирование
      </Button>

      <div className="justify-self-end w-1/3">
        <Form />
      </div>
    </div>
  );
};

export default FormPage;
