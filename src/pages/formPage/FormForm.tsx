import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Label } from "@radix-ui/react-label";
import React from "react";

const FormForm: React.FC<{ className?: string }> = () => {
  const [inputs, setInputs] = React.useState<string[]>([""]);

  const handleAddInput = () => {
    setInputs([...inputs, ""]);
  };

  const handleInputChange = (index: number, value: string) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  return (
    <CardContent>
      <Label>Ваше настроение сегодня:</Label>
      <Select
        options={[
          { value: "good", label: "Хорошее" },
          { value: "neutral", label: "Нейтральное" },
          { value: "bad", label: "Плохое" },
        ]}
      />
      <CardHeader>
        <CardTitle>С кем вы сегодня общались</CardTitle>
      </CardHeader>
      <CardDescription>
        Постарайтесь вводить имена в том порядке, в котором вспоминаете их.
        Скорее всего запомнившиеся люди внесли больший вклад в ваше настроение
        сегодня.
      </CardDescription>
      <div>
        {inputs.map((value, index) => (
          <Input
            key={index}
            placeholder="Имя"
            name="name"
            value={value}
            className="mt-3"
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
        ))}
      </div>

      <Button className="w-full bg-gray-500 mt-3" onClick={handleAddInput}>
        Добавить
      </Button>

      <Button className="w-full md:w-auto mt-3 bg-green-700">Готово</Button>
    </CardContent>
  );
};

export default FormForm;
